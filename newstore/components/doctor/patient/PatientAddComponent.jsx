'use client'
import React, { useState, useEffect } from "react";
import { Button, Card, Form, Input, DatePicker, Select, Upload, message, Modal, Radio, InputNumber, Checkbox, Col, Row } from "antd";
import dayjs from 'dayjs';
import { FAMILY_GROUPS, PATIENT_AGE } from "@/dataarrange/constants/hardData";
import WebCamField from "../WebCamComponent";
import { SUCCESS_MSG_TYPE, SELECT_FIELD, INPUT_FIELD, RELATION } from "@/dataarrange/constants/dataKeys";
import { getAPI, postAPI, interpolate, displayMessage, makeFileURL, makeURL } from "@/dataarrange/utils/common";
import { CITY, COUNTRY, FILE_UPLOAD_API, FILE_UPLOAD_BASE64, PATIENTS_LIST, STATE } from "@/dataarrange/constants/api";
import { UploadOutlined } from "@ant-design/icons";
import useUserStore from "@/app/doctor/justand";
import Image from "next/image";


const { Option } = Select;

const PatientAddComponent = () => {
  const [webCamState, setWebCamState] = useState({});
  const [countryList, setCountryList] = useState([]);
  const [patientProfile, setPatientProfile] = useState(null);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [relationText, setRelationText] = useState(true);
  const [selectedFormType, setSelectedFormType] = useState('DOB');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [patientGroup, setPatientGroup] = useState([]);
  const [membership, setMembership] = useState([]);
  const [on_dialysis, seton_dialysis] = useState(false);
  const [country, setCountry] = useState('select');
  const [state, setState] = useState('select');
  const [city, setCity] = useState('select');
  const currentPatient = useUserStore((st) => st.currentPatient);
  useEffect(() => {
    getCountry();
  }, []);
  const getCountry = () => {
    getAPI(COUNTRY, (data) => {
      setCountryList(data);
    }, () => { });
  };

  const getState = (countryId) => {
    getAPI(STATE, (data) => {
      setStateList(data);
    }, () => { }, { country: countryId });
  };

  const getCity = (stateId) => {
    getAPI(CITY, (data) => {
      setCityList(data);
    }, () => { }, { state: stateId });
  };

  const loadProfile = () => {
    getState(data.country);
    getCity(data.state);
    setPatientProfile(data);
    setLoading(false);
  };

  const changeRedirect = () => {
    setRedirect(!redirect);
  };

  const handleSubmit = (values) => {



    const reqData = {
      ...values,
      referal: currentPatient.user.referer_code,
      user: {
        first_name: values.first_name ? values.first_name : '',
        mobile: values.mobile,
        email: values.email,
      },
    };

    if (values.anniversary) {
      reqData.anniversary = dayjs(values.anniversary).format("YYYY-MM-DD");
    }

    if (values.dob) {
      reqData.dob = dayjs(values.dob).format("YYYY-MM-DD");
    }

    if (values.age) {
      reqData.is_age = true;
      reqData.dob = dayjs().subtract(values.age, 'years').format("YYYY-MM-DD");
    }

    const key = 'image';
    if (reqData[key] && reqData[key].file && reqData[key].file.response) {
      reqData[key] = reqData[key].file.response.image_path;
    }

    // delete reqData.first_name;
    // delete reqData.last_name;

    // delete reqData.email;
    // delete reqData.referer_code;
    // delete reqData.mobile;
    // delete reqData.medical_history;
    // delete reqData.patient_group;
    // delete reqData.age;

    setLoading(true);

    postAPI(PATIENTS_LIST, reqData, (data) => {
      setLoading(false);
      displayMessage(SUCCESS_MSG_TYPE, "Successfully Added");
      history.push("/doctor");
    }, () => {
      setLoading(false);
    });
  }

  const toggleWebCam = (type, value) => {
    setWebCamState((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  const [form] = Form.useForm();

  const getImageandUpload = (fieldKey, image) => {
    let reqData = new FormData();

    reqData.append('image', image);
    reqData.append('name', 'file');

    postAPI(FILE_UPLOAD_BASE64, reqData, (data) => {
      form.setFieldsValue({ [fieldKey]: { file: { response: data } } });
      displayMessage(SUCCESS_MSG_TYPE, "Image Captured and processed.");
      setWebCamState((prevState) => ({
        ...prevState,
        [fieldKey]: false,
      }));
    }, () => { });
  };

  const onChangeValue = (type, value) => {
    setFormParams(type, value);
    if (type === 'country') {
      getState(value);
    }
    if (type === 'state') {
      getCity(value);
    }
  };

  const setFormParams = (type, value) => {
    setWebCamState({
      ...webCamState,
      [type]: value,
    });
  };

  const onChangeCheckbox = (e) => {
    setWebCamState({
      ...webCamState,
      on_dialysis: !webCamState.on_dialysis,
    });
  };

  const changeFormType = (e) => {
    setSelectedFormType(e.target.value);
  };

  const handleRelation = (e) => {
    setRelationText(!e);
  };


  const singleUploadprops = {
    name: 'image',
    data: {
      name: 'hello'
    },
    action: makeURL(FILE_UPLOAD_API),
    headers: {
      authorization: 'authorization-text',
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
    },
  };

  const formItemLayout = ({
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  });

  return (
    <Form onFinish={handleSubmit}>
      <Card title="Add Patient" extra={<> <Button className="border border-blue-500 shadow-md text-black" type="primary" htmlType="submit">Save</Button>
        {history ?
          <Button style={{ margin: 5 }} onClick={() => that.props.history.goBack()}>
            Cancel
          </Button> : null}</>
      }>

        <Form.Item name={'image'} key={'image'} {...formItemLayout} label={'Image'}>

          <Upload  {...singleUploadprops}>
            <Button>
              <UploadOutlined /> Select File
            </Button>
            {patientProfile && patientProfile.image ?
              <Image
                src={makeFileURL(patientProfile ? patientProfile.image : null)}
                alt="Patient Profile"
                width={100}
                height={100}
                style={{
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              /> : null}
          </Upload>

        </Form.Item>
        <span className="ant-form-text">
          <Row>
            <Col xs={0} sm={0} md={24} lg={24}>
              <a onClick={() => toggleWebCam('image', Math.random())}>
                Open Webcam
              </a>
            </Col>
          </Row>
        </span>
        <Modal
          footer={null}
          onCancel={() => toggleWebCam('image', false)}
          open={!!webCamState['image']}
          width={680}
          key={webCamState['image']}>
          <WebCamField getScreenShot={(value) => getImageandUpload('image', value)} />
        </Modal>
        <Form.Item name={'first_name'} initialValue={patientProfile ? patientProfile.user.first_name : null} label="Name" {...formItemLayout}>

          <Input placeholder="Name" />

        </Form.Item>

        <Form.Item name={'aadhar_id'} initialValue={patientProfile ? patientProfile.aadhar_id : null} label="Aadhar ID" {...formItemLayout}>
          <Input placeholder="Aadhar Number" />

        </Form.Item>

        <Form.Item name={'gender'} initialValue={patientProfile ? patientProfile.gender : null} label="Gender" {...formItemLayout}>

          <Select key={'gender'}>
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
          <Form.Item name={'dob'} initialValue={patientProfile && patientProfile.dob ? dayjs(patientProfile.dob) : ''} label="DOB" {...formItemLayout}>
            <DatePicker />

          </Form.Item>
          : <Form.Item name={'age'} initialValue={patientProfile && patientProfile.dob ? dayjs().diff(patientProfile.dob, 'years') : null} label="Age" {...formItemLayout}>
            <InputNumber min={0} max={120} placeholder="Age" />

          </Form.Item>}

        {/*<Form.Item label="Anniversary" {...formItemLayout}>*/}
        {/*    {getFieldDecorator('anniversary', {initialValue: this.state.patientProfile && this.state.patientProfile.anniversary ? moment(this.state.patientProfile.anniversary) : null})*/}
        {/*    (<DatePicker/>)*/}
        {/*    }*/}
        {/*</Form.Item>*/}

        {/*<Form.Item label="Blood Group" {...formItemLayout}>*/}
        {/*    {getFieldDecorator('blood_group', {initialValue: this.state.patientProfile ? this.state.patientProfile.blood_group : null})*/}
        {/*    (<Input placeholder="Blood Group"/>)*/}
        {/*    }*/}
        {/*</Form.Item>*/}

        {/*<Form.Item label="Family" {...formItemLayout}>*/}
        {/*    <Form.Item style={{display: 'inline-block', width: 'calc(30% - 12px)'}}>*/}
        {/*        {getFieldDecorator("family_relation", {initialValue: this.state.patientProfile && this.state.patientProfile.family_relation != null ? this.state.patientProfile.family_relation : RELATION})*/}
        {/*        (<Select onChange={(value) => this.handleRelation(value)}>*/}
        {/*            <Select.Option value={''}>{RELATION}</Select.Option>*/}
        {/*            {FAMILY_GROUPS.map((option) => <Select.Option*/}
        {/*                value={option.value}>{option.name}</Select.Option>)}*/}
        {/*        </Select>)*/}
        {/*        }*/}
        {/*    </Form.Item>*/}
        {/*    <span style={{display: 'inline-block', width: '14px', textAlign: 'center'}}/>*/}
        {/*    <Form.Item style={{display: 'inline-block', width: 'calc(50% - 12px)'}}>*/}
        {/*        {getFieldDecorator("attendee", {initialValue: this.state.patientProfile ? this.state.patientProfile.attendee : ''})*/}
        {/*        (<Input disabled={ this.state.patientProfile && this.state.patientProfile.attendee ?false:this.state.relation_text}/>)*/}
        {/*        }*/}
        {/*    </Form.Item>*/}
        {/*</Form.Item>*/}

        <Form.Item name={'mobile'} rules={[{ required: true, message: 'Input Mobile Number' }]} initialValue={patientProfile ? patientProfile.user.mobile : null} label="Mobile (Primary)" {...formItemLayout}>

          <Input placeholder="Mobile Number (Primary)" />

        </Form.Item>

        <Form.Item name={'secondary_mobile_no'} initialValue={patientProfile ? patientProfile.secondary_mobile_no : null} label="Mobile (Secondary)" {...formItemLayout}>
          <Input placeholder="Mobile Number (Secondary)" />

        </Form.Item>

        <Form.Item name={'landline_no'} initialValue={patientProfile ? patientProfile.landline_no : null} label="Landline" {...formItemLayout}>
          <Input placeholder="Landline Number" />

        </Form.Item>

        <Form.Item name={'address'} initialValue={patientProfile ? patientProfile.address : null} label="Address" {...formItemLayout}>
          <Input placeholder="Address" />

        </Form.Item>

        <Form.Item name={'locality'} initialValue={patientProfile ? patientProfile.locality : null} label="Locality" {...formItemLayout}>
          <Input placeholder="Locality" />

        </Form.Item>

        {country && country == INPUT_FIELD ?
          <Form.Item name={'country_extra'} initialValue={''} key={'country_extra'} label={"Country"}  {...formItemLayout}>

            <Input />

            <a onClick={() => setFormParams('country', SELECT_FIELD)}>Choose
              Country</a>
          </Form.Item>
          : <Form.Item name={country} initialValue={patientProfile && patientProfile.country_data ? patientProfile.country_data.id : ''} key={"country"} {...formItemLayout} label={"Country"}>

            <Select onChange={(value) => onChangeValue("country", value)}>

              {countryList.map((option, i) => <Select.Option key={i}
                value={option.id}>{option.name}</Select.Option>)}
            </Select>

            <a onClick={() => setFormParams('country', INPUT_FIELD)}>Add New
              Country</a>
          </Form.Item>
        }

        {country == INPUT_FIELD || state && state == INPUT_FIELD ?
          <Form.Item name={'state_extra'} key={'state_extra'} label={"State"}  {...formItemLayout}>

            <Input />

            <a onClick={() => setFormParams('state', SELECT_FIELD)}>Choose
              State</a>
          </Form.Item>
          : <Form.Item name={'state'} initialValue={patientProfile && patientProfile.state_data ? patientProfile.state_data.id : ''} key={"state"} {...formItemLayout} label={"State"}>

            <Select onChange={(value) => onChangeValue("state", value)}>
              {stateList.map((option, i) => <Select.Option key={i}
                value={option.id}>{option.name}</Select.Option>)}
            </Select>

            <a onClick={() => setFormParams('state', INPUT_FIELD)}>Add New
              state</a>
          </Form.Item>
        }
        {country == INPUT_FIELD || state == INPUT_FIELD || city && city == INPUT_FIELD ?
          <Form.Item name={'city_extra'} key={'city_extra'} label={"City"}  {...formItemLayout}>

            <Input />

            <a onClick={() => setFormParams('city', SELECT_FIELD)}>Choose
              City</a>
          </Form.Item>
          : <Form.Item name={'city'} initialValue={patientProfile && patientProfile.city_data ? patientProfile.city_data.id : ''} key={"City"} {...formItemLayout} label={"City"}>

            <Select>
              {cityList.map((option, i) => <Select.Option key={i}
                value={option.id}>{option.name}</Select.Option>)}
            </Select>

            <a onClick={() => setFormParams('city', INPUT_FIELD)}>Add New
              City</a>
          </Form.Item>
        }

        {/* <Form.Item label="City" {...formItemLayout}>
            {getFieldDecorator('city', {initialValue: this.state.patientProfile ? this.state.patientProfile.city : null})
            (<Input placeholder="Patient City"/>)
            }
        </Form.Item> */}

        <Form.Item name={'pincode'} initialValue={patientProfile ? patientProfile.pincode : null} label="Pincode" {...formItemLayout}>

          <Input placeholder="PINCODE" />

        </Form.Item>

        <Form.Item name={'email'} initialValue={patientProfile ? patientProfile.user.email : null} rules={[{ required: true, message: 'Input Email ID!' }]} label="Email" {...formItemLayout}>
          <Input placeholder="Email" />

        </Form.Item>

        {/*<Form.Item label="On Dialysis" {...formItemLayout}>*/}
        {/*    {getFieldDecorator('on_dialysis', {initialValue: this.state.patientProfile ? this.state.patientProfile.on_dialysis : false})*/}
        {/*    (<Checkbox onChange={(e) => this.onChangeCheckbox(e)} style={{paddingTop: '4px'}} />)*/}
        {/*    }*/}
        {/*</Form.Item>*/}

        <Form.Item>
          {history ?
            <Button className="text-black border-blue-500 border shadow-md" style={{ margin: 5 }} onClick={() => that.props.history.goBack()}>
              Cancel
            </Button> : null}
          <Button className="text-black border-blue-500 border shadow-md" type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>

      </Card>
    </Form>
  )
}

export default PatientAddComponent