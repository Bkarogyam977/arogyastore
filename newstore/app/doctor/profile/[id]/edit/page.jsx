'use client'

import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Form,
  Input,
  DatePicker,
  Select,
  Upload,
  
  message,
  Modal,
  Radio,
  InputNumber,
  Checkbox
} from 'antd';

import moment from 'moment';
import { PATIENTS_LIST, PATIENT_PROFILE,
     FILE_UPLOAD_BASE64,
      FILE_UPLOAD_API,
      COUNTRY,
      STATE,
      CITY } from '@/dataarrange/constants/api';
import { getAPI, postAPI,
    interpolate,
    displayMessage,
    putAPI,
    makeFileURL,
    makeURL} from '@/dataarrange/utils/common';
import {  SELECT_FIELD,
    INPUT_FIELD,
    RELATION, 
    SUCCESS_MSG_TYPE} from '@/dataarrange/constants/dataKeys';
import { FAMILY_GROUPS , PATIENT_AGE} from '@/dataarrange/constants/hardData';
import useUserStore from '@/app/doctor/justand';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { UploadOutlined } from '@ant-design/icons';
import WebCamField from '@/components/doctor/WebCamComponent';

const { Option } = Select;

const EditPatientDetails = ({params}) => {
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);
  const [webCamState, setWebCamState] = useState({});
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [relationText, setRelationText] = useState(true);
  const [selectedFormType, setSelectedFormType] = useState('DOB');
  const [patientProfile, setPatientProfile] = useState({});
  const [history,setHistory] = useState([]);
  const [patientGroup,setPatientGroup] = useState([]);
  const [membership,setMembership] = useState([]);
  const  [on_dialysis, seton_dialysis] = useState(false);
  const  [relation_text, setRelation_text] = useState(true);
  const  [country, setCountry] = useState('select');
  const  [state, setState] = useState('select');
  const  [city, setCity] = useState('select');
  const userdata = useUserStore((st)=> st.currentPatient);

  useEffect(() => {
    
    
    
    loadProfile();
    getCountry();
  }, []);

  const getCountry = () => {
    getAPI(
      COUNTRY,
      (data) => {
        setCountryList(data);
      },
      () => {}
    );
  };

  const getState = (countryId) => {
    getAPI(
      STATE,
      (data) => {
        setStateList(data);
      },
      () => {},
      { country: countryId }
    );
  };

  const getCity = (stateId) => {
    getAPI(
      CITY,
      (data) => {
        setCityList(data);
      },
      () => {},
      { state: stateId }
    );
  };

  const loadProfile = async () => {
    getAPI(
      interpolate(PATIENT_PROFILE, [params.id]),
      (data) => {
        setPatientProfile(data)
        getState(data.country);
        getCity(data.state);
      },
      () => {}
    );
  };

  const changeRedirect = () => {
    setRedirect(!redirect);
  };

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    
    // console.log(form.validateFields());
    
        console.log(values);
       
        let reqData = {
          ...values,
          medical_history: [values.medical_history],
          patient_group: [values.patient_group],
          user: userdata.user,
          on_dialysis: on_dialysis ? true : false
        };

        if (values.anniversary) {
          reqData.anniversary = dayjs(values.anniversary).format('YYYY-MM-DD');
        }

        if (values.dob) {
          reqData.dob = dayjs(values.dob).format('YYYY-MM-DD');
        }
        if (values.age) {
          reqData.is_age = true;
          reqData.dob = dayjs().subtract(values.age, 'years').format('YYYY-MM-DD');
        }

        let key = 'image';
        if (reqData[key] && reqData[key].file && reqData[key].file.response)
          reqData[key] = reqData[key].file.response.image_path;

        delete reqData.first_name;
        delete reqData.email;
        delete reqData.referer_code;
        delete reqData.mobile;
        delete reqData.medical_history;
        delete reqData.patient_group;
        delete reqData.age;

        putAPI(
          interpolate(PATIENT_PROFILE, [userdata.id]),
          reqData,
          (data) => {
            displayMessage(SUCCESS_MSG_TYPE, 'Successfully Updated');
            // if (props.setCurrentPatient) props.setCurrentPatient(data);
            // props.history.push('/');
          },
          () => {}
        );
      
    
  };

  const toggleWebCam = (type, value) => {
    setWebCamState((prevState) => ({ ...prevState, [type]: value }));
  };

  const getImageandUpload = (fieldKey, image) => {
    let reqData = new FormData();

    reqData.append('image', image);
    reqData.append('name', 'file');

    postAPI(
      FILE_UPLOAD_BASE64,
      reqData,
      (data) => {
        form.setFieldsValue({ [fieldKey]: { file: { response: data } } });
        displayMessage(SUCCESS_MSG_TYPE, 'Image Captured and processed.');
        setWebCamState((prevState) => ({ ...prevState, [fieldKey]: false }));
      },
      () => {},
      { 'content-type': 'multipart/form-data' }
    );
  };

  const onChangeValue = (type, value) => {
    setRelationText(value);
    if (type === 'country') {
      getState(value);
    }
    if (type === 'state') {
      getCity(value);
    }
  };

  // const setFormParams = (type, value) => {
  //   setState({ [type]: value });
  // };

  const onChangeCheckbox = (e) => {
    seton_dialysis(!on_dialysis);
  };

  const changeFormType = (e) => {
    setSelectedFormType(e.target.value);
  };

  const handleRelation = (e) => {
    setRelationText(e);
  };

  const { getFieldDecorator } = form;
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 }
  };

  const historyOption = [];
  if (history) {
    history.forEach((historyItem) => {
      historyOption.push({ label: historyItem.name, value: historyItem.id });
    });
  }

  const patientGroupOption = [];
  if (patientGroup) {
    patientGroup.forEach((patientGroupItem) => {
      patientGroupOption.push({ label: patientGroupItem.name, value: patientGroupItem.id });
    });
  }

  const membershipOption = [];
  if (membership) {
    membership.forEach((membershipItem) => {
      membershipOption.push({ label: membershipItem.name, value: membershipItem.id });
    });
  }

  const singleUploadprops = {
    name: 'image',
    data: {
      name: 'hello'
    },
    action: makeURL(FILE_UPLOAD_API),
    headers: {
      authorization: 'authorization-text'
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };

 const fordatainitial = {
    first_name : patientProfile.user ? patientProfile.user?.first_name : '',
    aadhar_id : patientProfile ? patientProfile.aadhar_id : '',
    gender : patientProfile ? patientProfile.gender : '',
    dob : patientProfile ? dayjs(patientProfile.dob) : '',
    age : patientProfile ? patientProfile.age : '',
    anniversary : patientProfile ? patientProfile.anniversary : '' ,
    blood_group : patientProfile ? patientProfile.blood_group : '',
    family_relation1 : patientProfile ? patientProfile.family_relation1 : '',
    attendee1 : patientProfile ? patientProfile.attendee1 : '',
    mobile : patientProfile.user ? patientProfile.user?.mobile : '',
    secondary_mobile_no : patientProfile ? patientProfile.secondary_mobile_no : '',
    landline_no : patientProfile ? patientProfile.landline_no : '',
    address : patientProfile ? patientProfile.address : '',
    locality : patientProfile ? patientProfile.locality : '',
    country : patientProfile ? patientProfile.country : '',
    state : patientProfile ? patientProfile.state : '',
    city : patientProfile ? patientProfile.city : '',
    pincode : patientProfile ? patientProfile.pincode : '',
  }


  return ( 
    patientProfile?.user &&
    <Form   initialValues={fordatainitial}  onFinish={handleSubmit}>
      <Card
        title="Edit Profile"
        extra={
          <>
            {' '}
            <Button className='border-blue-400 shodow-md text-black shadow-blue-400' type="primary" htmlType="submit">
              Save
            </Button>
            {history ? (
              <Button style={{ margin: 5 }} onClick={() => router.back()}>
                Cancel
              </Button>
            ) : null}
          </>
        }
      >
        <Form.Item  {...formItemLayout} label={'Image'} name={'image'} >
         
        <Upload {...singleUploadprops}
              // action="https://healdiway.bkarogyam.com/erp-api/blogImage/"
              listType="picture"
              // data={{
              //   name: 'hello'
              // }}
              // name='image'
              // headers = {{
              //   authorization: 'authorization-text'
              // }}
            >
              <Button>
                <UploadOutlined /> Select File
              </Button>
              {/* {patientProfile && patientProfile.image ? (
                <img src={makeFileURL(patientProfile.image)} style={{ maxWidth: '100%' }} />
              ) : null} */}
            </Upload>
        
        </Form.Item>
          <span className="ant-form-text">
            <a onClick={() => toggleWebCam('image', Math.random())}>Open Webcam</a>
          </span>
          <Modal
            footer={null}
            onCancel={() => toggleWebCam('image', false)}
            open={!!webCamState['image']}
            width={680}
            key={webCamState['image']}
          >
            <WebCamField getScreenShot={(value) => getImageandUpload('image', value)} />
          </Modal>
        <Form.Item name={'first_name'}  label="Name" {...formItemLayout}>
                        
                        <Input placeholder='Name'  disabled={true} />
                        
        </Form.Item>
        {/* ... rest of the form items */}
        <Form.Item name={'aadhar_id'} label="Aadhar ID" {...formItemLayout}>
                       
                        <Input placeholder="Aadhar Number"/>
                        
         </Form.Item>
         <Form.Item name={'gender'} label="Gender" {...formItemLayout}>
                       
                        <Select>
                            <Option key={'1'} value="male">Male</Option>
                            <Option key={'2'} value="female">Female</Option>
                            <Option key={'3'} value="other">Other</Option>
                        </Select>
                        
        </Form.Item>

            <Form.Item label=' ' {...formItemLayout} colon={false}>
                        <Radio.Group buttonStyle="solid" size="small" onChange={changeFormType}
                                     defaultValue={selectedFormType}>
                            {PATIENT_AGE.map((item, i) => <Radio key={i} value={item.value}>{item.label}</Radio>)}
                        </Radio.Group>
           </Form.Item>
           {selectedFormType == 'DOB' ?
                        <Form.Item name={'dob'} label="DOB" {...formItemLayout}>
                            {/* {getFieldDecorator('dob', {initialValue: this.state.patientProfile && this.state.patientProfile.dob ? moment(this.state.patientProfile.dob) : ''}) */}
                            <DatePicker/>
                            
                        </Form.Item>
                        : <Form.Item name={'age'} label="Age" {...formItemLayout}>
                            {/* {getFieldDecorator('age', {initialValue: this.state.patientProfile && this.state.patientProfile.dob ? moment().diff(this.state.patientProfile.dob, 'years') : null}) */}
                            <InputNumber min={0} max={120} placeholder="Age"/>
                            
                        </Form.Item>}

                    <Form.Item name={'anniversary'} label="Anniversary" {...formItemLayout}>
                        {/* {getFieldDecorator('anniversary', {initialValue: this.state.patientProfile && this.state.patientProfile.anniversary ? moment(this.state.patientProfile.anniversary) : null}) */}
                        <DatePicker/>
                        
                    </Form.Item>
                    <Form.Item name={'blood_group'} label="Blood Group" {...formItemLayout}>
                        {/* {getFieldDecorator('blood_group', {initialValue: this.state.patientProfile ? this.state.patientProfile.blood_group : null}) */}
                        <Input placeholder="Blood Group"/>
                        
                    </Form.Item>
                    <Form.Item label='Family' {...formItemLayout}>
                        <Form.Item name={'family_relation1'} style={{display: 'inline-block', width: 'calc(30% - 12px)'}}>
                            {/* {getFieldDecorator("family_relation1", {initialValue: this.state.patientProfile && this.state.patientProfile.family_relation1 != null ? this.state.patientProfile.family_relation1 : RELATION}) */}
                            <Select onChange={(value) => handleRelation(value)}>
                                <Select.Option value={''}>{RELATION}</Select.Option>
                                {FAMILY_GROUPS.map((option,i) => <Select.Option key={i}
                                    value={option.value}>{option.name}</Select.Option>)}
                            </Select>
                            
                        </Form.Item>
                        <span style={{display: 'inline-block', width: '14px', textAlign: 'center'}}/>
                        <Form.Item name={'attendee1'} style={{display: 'inline-block', width: 'calc(50% - 12px)'}}>
                            {/* {getFieldDecorator("attendee1", {initialValue: this.state.patientProfile ? this.state.patientProfile.attendee1 : ''}) */}
                            <Input disabled={ patientProfile && patientProfile.attendee1 ? false:relation_text}/>
                            
                        </Form.Item>
                    </Form.Item>

                    <Form.Item    rules={[{required: true, message: 'Input Mobile Number'}]} name={'mobile'} label="Mobile (Primary)" {...formItemLayout}>
                        {/* {getFieldDecorator('mobile', {
                            initialValue: this.state.patientProfile ? this.state.patientProfile.user.mobile : null,
                            rules: [{required: true, message: 'Input Mobile Number'}]
                        }) */}
                        <Input placeholder="Mobile Number (Primary)" disabled={true}/>
                        
                    </Form.Item>
                    <Form.Item name={'secondary_mobile_no'} label="Mobile (Secondary)" {...formItemLayout}>
                        {/* {getFieldDecorator('secondary_mobile_no', {initialValue: this.state.patientProfile ? this.state.patientProfile.secondary_mobile_no : null}) */}
                        <Input placeholder="Mobile Number (Secondary)"/>
                        
                    </Form.Item>

                    <Form.Item name={'landline_no'} label="Landline" {...formItemLayout}>
                        {/* {getFieldDecorator('landline_no', {initialValue: this.state.patientProfile ? this.state.patientProfile.landline_no : null}) */}
                        <Input placeholder="Landline Number"/>
                        
                    </Form.Item>

                    <Form.Item name={'address'} label="Address" {...formItemLayout}>
                        {/* {getFieldDecorator('address', {initialValue: this.state.patientProfile ? this.state.patientProfile.address : null}) */}
                        <Input placeholder="Address"/>
                        
                    </Form.Item>

                    <Form.Item name={'locality'} label="Locality" {...formItemLayout}>
                        {/* {getFieldDecorator('locality', {initialValue: this.state.patientProfile ? this.state.patientProfile.locality : null}) */}
                        <Input placeholder="Locality"/>
                        
                    </Form.Item>

                    {country && country == INPUT_FIELD ?
                        <Form.Item name={'country_extra'} key={'country_extra'} label={"Country"}  {...formItemLayout}>
                            {/* {getFieldDecorator("country_extra", {initialValue: '' */}
                                
                          
                                <Input/>
                          
                            <a onClick={() => setFormParams('country', SELECT_FIELD)}>Choose
                                Country</a>
                        </Form.Item>
                        : <Form.Item name={'country'} key={"country"} {...formItemLayout} label={"Country"}>
                            {/* {getFieldDecorator("country", {initialValue: this.state.patientProfile && this.state.patientProfile.country_data ? this.state.patientProfile.country_data.id : '', */}
                            
                                <Select onChange={(value) => onChangeValue("country", value)}>
                                    
                                    {countryList.map((option,i) => <Select.Option key={i}
                                        value={option.id}>{option.name}</Select.Option>)}
                                </Select>
                            
                            <a onClick={() => setFormParams('country', INPUT_FIELD)}>Add New
                                Country</a>
                        </Form.Item>
                    }

                      {country==INPUT_FIELD || state && state == INPUT_FIELD ?
                        <Form.Item name={'state_extra'} key={'state_extra'} label={"State"}  {...formItemLayout}>
                            {/* {getFieldDecorator("state_extra",{initialValue:'' */}
                                
                          
                                <Input/>
                          
                            <a onClick={() => setFormParams('state', SELECT_FIELD)}>Choose
                                State</a>
                        </Form.Item>
                        : <Form.Item name={'state'} key={"state"} {...formItemLayout} label={"State"}>
                            {/* {getFieldDecorator("state", {initialValue:this.state.patientProfile && this.state.patientProfile.state_data ? this.state.patientProfile.state_data.id : '', */}
                            
                                <Select onChange={(value) => onChangeValue("state", value)}>
                                    {stateList.map((option,i) => <Select.Option key={i}
                                        value={option.id}>{option.name}</Select.Option>)}
                                </Select>
                          
                            <a onClick={() => setFormParams('state', INPUT_FIELD)}>Add New
                                state</a>
                        </Form.Item>
                    }

                  {country == INPUT_FIELD || state == INPUT_FIELD || city && city == INPUT_FIELD ?
                        <Form.Item name={'city_extra'} key={'city_extra'} label={"City"}  {...formItemLayout}>
                          
                                
                            
                                <Input/>
                            
                            <a onClick={() => setFormParams('city', SELECT_FIELD)}>Choose
                                City</a>
                        </Form.Item>
                        : <Form.Item name={'city'} key={"City"} {...formItemLayout} label={"City"}>
                          
                          
                                <Select>
                                    {cityList.map((option,i) => <Select.Option key={i}
                                        value={option.id}>{option.name}</Select.Option>)}
                                </Select>
                          
                            <a onClick={() => setFormParams('city', INPUT_FIELD)}>Add New
                                City</a>
                        </Form.Item>
                    } 

                    <Form.Item name={'pincode'} label="Pincode" {...formItemLayout}>
                        <Input placeholder="PINCODE"/>
                        
                    </Form.Item>

                    
                    <Form.Item>
                        {history ?
                            <Button style={{margin: 5}} onClick={() => router.back()}>
                                Cancel
                            </Button> : null}
                        <Button className='border-blue-400 shadow-md text-black shadow-blue-500' type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>



      </Card>
    </Form> 
  );
};

export default EditPatientDetails;
