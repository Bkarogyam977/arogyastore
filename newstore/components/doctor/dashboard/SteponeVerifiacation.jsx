'use client'
import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Space,Collapse, theme,Upload ,Spin,  DatePicker, Select as SelectAnt} from 'antd';
import { CaretRightOutlined, MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Progress , Input as InputNext,Select, SelectItem} from '@nextui-org/react';
import { CITY, COUNTRY, FILE_UPLOAD_API, PATIENTS_LIST, PATIENT_PROFILE, PATIENT_PROFILE_UPDATE, STATE } from '@/dataarrange/constants/api';
import { displayMessage, getAPI, interpolate, makeURL, postAPI, putAPI } from '@/dataarrange/utils/common';
import FormItem from 'antd/es/form/FormItem';
import dayjs from 'dayjs';
import { SUCCESS_MSG_TYPE } from '@/dataarrange/constants/dataKeys';
import useUserStore from '@/app/doctor/justand';

const getItems = (panelStyle,props) => [
  {
    key: '1',
    label: 'Profile Details',
    children: <ProfileDetailsVerificationForm {...props} /> ,
    style: {...panelStyle, border : props.currentPatient.doctor_step_one ? 'green' : 'lightgray' },
  },
  {
    key: '2',
    label: 'Upload Documents',
    children: <StepUploadDocumentForm {...props}/>,
    style: panelStyle,
  },
    {
      key: '3',
      label: 'Educational Details',
      children: <FormforStepOne {...props} />,
      style: panelStyle,
    },
    {
      key: '4',
      label: 'Award Details',
      children: <FormTwoVerification {...props}/>,
      style: panelStyle,
    },
    
  ];
const SteponeVerifiacation = (props) => {
    const { token } = theme.useToken();
    const onFinish = (values) => {
        console.log('Received values of form:', values);
      };
      const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
        
        
        
      };

      

  return (
    <>
        <Progress
      aria-label="Downloading..."
      size="md"
      value={props.currentPatient ? props.currentPatient.doctor_step_percent : null}
      color="success"
      showValueLabel={true}
      className="max-w-md"
    />
    
    <Collapse
      className='mt-10 '
      bordered={false}
      defaultActiveKey={['1']}
      expandIconPosition='right'
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{
        background: token.colorBgContainer,
      }}
      items={getItems(panelStyle , props)}
    />

   
    </>
  )
}

export default SteponeVerifiacation





export const FormforStepOne = ({currentPatient,setCurrentPatientFn}) => {
  const getuserData = ()=>{
    setLoading(true)
    getAPI(interpolate(PATIENT_PROFILE, [currentPatient.id]), (data) => {
      setLoading(false);
      displayMessage(SUCCESS_MSG_TYPE, "Successfully Updated User");
      setCurrentPatientFn(data)
      // history.push("/doctor");
    }, () => {
      setLoading(false);
    });
  }
  const onfinish = (values)=>{
    console.log(values)
   values.education.map((value)=>{

    let reqdata = { 
      ...value,
      doctor_id : currentPatient.id
    }
    
    let key = 'cetificates'
    if(reqdata[key] && reqdata[key].file && reqdata[key].file.response){
      reqdata[key] = reqdata[key].file.response.image_path
    }

    postAPI(
      `patients/doctoreducation/`,
      reqdata,
      (data) => {
        displayMessage(SUCCESS_MSG_TYPE, 'Successfully Updated');
        StepComplitionUpdate('doctor_step_forth',currentPatient.id)
        // if (props.setCurrentPatient) props.setCurrentPatient(data);
        getuserData();
        // props.history.push('/');
      },
      (data) => {
        displayMessage('error', `Error ${data.detail}`);
      }
    );

   })

  }
    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      };
    
  return (
    <Form 
    className='mt-5'
    name="dynamic_form_nest_item"
    onFinish={onfinish}
    style={{
      maxWidth: 600,
    }}
    autoComplete="off"
  >
    <Form.List name="education">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <div key={key}>
            <Space
              
              style={{
                display: 'flex',
                marginBottom: 8,
              }}
              align="baseline"
            >
              <Form.Item
               
                {...restField}
                name={[name, 'qualification']}
                rules={[
                  {
                    required: true,
                    message: 'Missing Qualification',
                  },
                ]}
              >
                <Input placeholder="Qualifiaction" />
              </Form.Item>
              <Form.Item 
                {...restField}
                name={[name, 'university']}
                rules={[
                  {
                    required: true,
                    message: 'Missing University',
                  },
                ]}
              >
                <Input placeholder="University" />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
            <Space
              
              style={{
                display: 'flex',
                marginBottom: 8,
              }}
              align="baseline"
            >
              <Form.Item 
                {...restField}
                name={[name, 'year']}
                rules={[
                  {
                    required: true,
                    message: 'Missing Year',
                  },
                ]}
              >
                <Input placeholder="Year" />
              </Form.Item>
            
              {/* <MinusCircleOutlined onClick={() => remove(name)} /> */}
            </Space>
            <Space>
            <Form.Item  name={[name , 'cetificates']} label="Upload Document"  >
                <Upload  name = { 'image'} data={{name : 'certificate'}}
                action = {makeURL(FILE_UPLOAD_API)}
                headers = {{
                  authorization: 'authorization-text',}
                 }
                 listType="picture"
                 
                >
                    <Button
                    className='flex items-center  justify-center'
                    
                    >
                    <PlusOutlined />
                    <div>
                        Upload
                    </div>
                    </Button>
                </Upload>
            </Form.Item>
            </Space>
            </div>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add field
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    <Form.Item>
      <Button className='border border-blue-400  shadow-lg shadow-blue-300 text-black' type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}



export const FormTwoVerification = ({currentPatient,setCurrentPatientFn}) => {
  const getuserData = ()=>{
    setLoading(true)
    getAPI(interpolate(PATIENT_PROFILE, [currentPatient.id]), (data) => {
      setLoading(false);
      displayMessage(SUCCESS_MSG_TYPE, "Successfully Updated User");
      setCurrentPatientFn(data)
      // history.push("/doctor");
    }, () => {
      setLoading(false);
    });
  }
  
    const normFile = (e) => {
        if (Array.isArray(e)) {
          return e;
        }
        return e?.fileList;
      };
    const onFinish = (values)=>{
      values.award.map((value)=>{

        let reqdata = { 
          ...value,
          doctor_id : currentPatient.id
        }
        
        // let key = 'certificate'
        // if(reqdata[key] && reqdata[key].file && reqdata[key].file.response){
        //   reqdata[key] = reqdata[key].file.response.image_path
        // }
    
        postAPI(
          `patients/dcoctoraward/`,
          reqdata,
          (data) => {
            displayMessage(SUCCESS_MSG_TYPE, 'Successfully Updated');
            StepComplitionUpdate('doctor_step_three', currentPatient.id)
            // if (props.setCurrentPatient) props.setCurrentPatient(data);
            getuserData();
            // props.history.push('/');
          },
          (data) => {
            displayMessage('error', `Error ${data.detail}`);
            
          }
        );
    
       })
    }
  return (
    <Form
    className='mt-5'
    name="Form two"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    autoComplete="off"
  >
    <Form.List name="award">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <div key={key}>
            <Space
              key={key}
              style={{
                display: 'flex',
                marginBottom: 8,
              }}
              align="baseline"
            >
              <Form.Item
                {...restField}
                name={[name, 'awardname']}
                rules={[
                  {
                    required: true,
                    message: 'Missing Award Name',
                  },
                ]}
              >
                <Input placeholder="Award Name" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'year']}
                rules={[
                  {
                    required: true,
                    message: 'Missing Year',
                  },
                ]}
              >
                <Input placeholder="Year" />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
            
            </div>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add Award
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    <Form.Item>
      <Button className='border border-blue-400 shadow-lg shadow-blue-300 text-black' type="primary" htmlType="submit">
        Submit Award
      </Button>
    </Form.Item>
  </Form>
  )
}


// for use update in persistance
// const getuserData = ()=>{
//   // setLoading(true)
 
  
//   getAPI(interpolate(PATIENT_PROFILE, [currentPatient.id]), (data) => {
//     // setLoading(false);
//     displayMessage(SUCCESS_MSG_TYPE, "Successfully Updated User");
//     setCurrentPatientFn(data)
//     // history.push("/doctor");
//   }, () => {
//     // setLoading(false);
//   });
// }
// export {getuserData};



// set updata complition
const StepComplitionUpdate = (key, id) =>{
  let reqData = {
      
  };

  reqData[key] = true;

  putAPI(interpolate(PATIENT_PROFILE, [id]), reqData, (data) => {
    // setLoading(false);
    displayMessage(SUCCESS_MSG_TYPE, "Successfully Updated");
    // getuserData();
    // history.push("/doctor");
  }, () => {
    // setLoading(false);
  });

}







export const ProfileDetailsVerificationForm = ({currentPatient,setCurrentPatientFn}) => {
  const [isloading, setLoading] = useState(false);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [doctorcategory, setDoctorcategory] = useState([])
  useEffect(()=>{
      getCountry();
      getDoctorCategory();
  },[])
  const getCountry = () => {
    getAPI(COUNTRY, (data) => {
      setCountryList(data);
    }, () => {});
  };
  const getDoctorCategory = () => {
    getAPI('patients/doctorcategory/', (data) => {
      setDoctorcategory(data);
    }, () => {});
  };
  const getState = (countryId) => {
    getAPI(STATE, (data) => {
      setStateList(data);
    }, () => {}, { country: countryId });
  };
  const getCity = (stateId) => {
    getAPI(CITY, (data) => {
      setCityList(data);
    }, () => {}, { state: stateId });
  };

  const getuserData = ()=>{
    setLoading(true)
    getAPI(interpolate(PATIENT_PROFILE, [currentPatient.id]), (data) => {
      setLoading(false);
      displayMessage(SUCCESS_MSG_TYPE, "Successfully Updated User");
      setCurrentPatientFn(data)
      // history.push("/doctor");
    }, () => {
      setLoading(false);
    });
  }


  const onfinish = (values) =>{
    setLoading(true)
    
    const reqData = {
      ...values,
     
      user: {
        first_name: values.first_name ? values.first_name : '',
        last_name: values.last_name ? values.last_name : '',
        mobile: values.mobile,
        email: values.email,
      },
    };
    if (values.dob) {
      reqData.dob = dayjs(values.dob).format("YYYY-MM-DD");
    }

    if(values.doctor_category && (values.about || values.website) ){
      let reqDetailDoc = {
        doctor_category : values.doctor_category,
        about : values.about,
        website : values.website
      };

      postAPI('patients/doctordetails/', reqDetailDoc, (data) => {
        
     
        getuserData();
        // history.push("/doctor");
      }, () => {
        
      });
      
    }

    delete reqData.first_name;
    delete reqData.last_name;

    delete reqData.email;
    delete reqData.referer_code;
    delete reqData.mobile;
    delete reqData.medical_history;
    delete reqData.patient_group;
    delete reqData.age;
    console.log(values);

    putAPI(interpolate(PATIENT_PROFILE, [currentPatient.id]), reqData, (data) => {
      setLoading(false);
      displayMessage(SUCCESS_MSG_TYPE, "Successfully Updated");
      // getuserData();
      StepComplitionUpdate('doctor_step_one',currentPatient.id)
      // history.push("/doctor");
    }, () => {
      setLoading(false);
    });
  

  }

  const gender_data = [
     {
      label : 'Female',
      value : 'female'
    },
    {
      label: 'Male',
      value : 'male'
    },
    {
      label : 'Other',
      value : 'other'
    }
  ]
  const antSelectOptions = countryList.map(country => ({
    value: country.id.toString(), // Assuming id is a string, adjust as needed
    label: country.name,
  }));
  const antSelectOptionsState = stateList.map(country => ({
    value: country.id.toString(), // Assuming id is a string, adjust as needed
    label: country.name,
  }));
  const antSelectOptionsCity = cityList.map(country => ({
    value: country.id.toString(), // Assuming id is a string, adjust as needed
    label: country.name,
  }));

  return (
    <Spin  spinning={isloading} delay={500}>
    <Form onFinish={onfinish}   >
       <Form.Item name={'first_name'} initialValue={currentPatient ? currentPatient.user.first_name : null} >
       <InputNext
              key={'first_name'}
              type="text"
              label="First_Name"
              labelPlacement={'outside'}
              
            />
       </Form.Item>
       <Form.Item name={'last_name'} initialValue={currentPatient ? currentPatient.user.last_name : null} >
       <InputNext className='m-0'
              key={'last_name'}
              type="text"
              label="Last_Name"
              labelPlacement={'outside'}
              
            />
       </Form.Item>
       <Form.Item name={'gender'}  >
       <Select
          key={'doctor_gender'}
          radius={'md'}
          label="Gender"
          placeholder="Select Gender"
          labelPlacement='outside'
          defaultSelectedKeys={[currentPatient.gender ? currentPatient.gender : null]}
        >
          {
            gender_data.map((animal) =>(
              <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
            )
            
            ) 
          }
            
       
        </Select>
       </Form.Item>

       <Form.Item name={'doctor_category'} >
       <Select
          key={'doctor_category'}
          radius={'md'}
          label="Category"
          placeholder="Select Category"
          labelPlacement='outside'
          
        >
          {doctorcategory.map((animal) => (
            <SelectItem key={animal.id} value={animal.id}>
              {animal.name}
            </SelectItem>
          ))}
        </Select>
       </Form.Item>

       <Form.Item name={'pincode'} initialValue={currentPatient ? currentPatient.pincode : null} >
       <InputNext className='m-0'
              key={'pincode'}
              type="number"
              label="Pincode"
              labelPlacement={'outside'}
              
            />
       </Form.Item>
       <Form.Item name={'country'} label={'Country'}   >
       <SelectAnt
          key={'country'}
          defaultValue={{ label: currentPatient.country_data ? currentPatient.country_data.name : null, value : currentPatient.country_data ? currentPatient.country_data.id : null}}
          options={antSelectOptions}
          placeholder={'Select Country'}
          
          onChange={(e)=> {getState(e);}}
          
         />
          
       </Form.Item>
       {stateList.length > 0 && <Form.Item name={'state'} label={'State'} >
       <SelectAnt
          key={'state'}
          defaultValue={{ label: currentPatient.state_data ? currentPatient.state_data.name : null, value : currentPatient.state_data ? currentPatient.state_data.id : null}}

          placeholder='Select State'
          onChange={(e)=> getCity(e)}
          options={antSelectOptionsState}
        />
          
       </Form.Item>}
        { cityList.length > 0 && <Form.Item name={'city'} label={'City'} >
       <SelectAnt
      defaultValue={{ label: currentPatient.city_data ? currentPatient.city_data.name : null, value : currentPatient.city_data ? currentPatient.city_data.id : null}}


       placeholder='Select City'
       options={antSelectOptionsCity}
         
          // onChange={(e)=> getCity(e.target.value)}
         
          
        />
          
       </Form.Item>}
       <Form.Item name={'dob'} initialValue={currentPatient.dob ? dayjs(currentPatient.dob) : null} label={'DateOfBirth'}>
       <DatePicker  />
       </Form.Item>
       <Form.Item name={'website'} >
       <InputNext className='m-0'
              key={'website'}
              type="text"
              label="Website/Blog"
              labelPlacement={'outside'}
              
            />
       </Form.Item>
       <Form.Item name={'about'} >
       <InputNext className='m-0'
              key={'about'}
              type="text"
              label="About"
              labelPlacement={'outside'}
              
            />
       </Form.Item>
       <Form.Item name={'mobile'} initialValue={currentPatient ? currentPatient.user.mobile : null}  >
       <InputNext className='m-0'
              key={'mobile'}
              type="number"
              label="Mobile"
              labelPlacement={'outside'}
              disabled ={ true}
            />
       </Form.Item>
       <Form.Item name={'secondory_mobile'} >
       <InputNext className='m-0'
              key={'secondory_mobile'}
              type="number"
              label="Add Alternate Mobile"
              labelPlacement={'outside'}
              
            />
       </Form.Item>

      <Form.Item>
      <Button className='border border-blue-400 shadow-lg shadow-blue-300 text-black' type="primary" htmlType="submit">
        Save Profile
      </Button>
      </Form.Item>
      

    </Form>
    </Spin>
  )
}



export const StepUploadDocumentForm = ({currentPatient ,setCurrentPatientFn}) => {

const getuserData = ()=>{
  setLoading(true)
  getAPI(interpolate(PATIENT_PROFILE, [currentPatient.id]), (data) => {
    setLoading(false);
    displayMessage(SUCCESS_MSG_TYPE, "Successfully Updated User");
    setCurrentPatientFn(data)
    // history.push("/doctor");
  }, () => {
    setLoading(false);
  });
}

  const [isloading, setLoading] = useState(false) 
  const submitfinal = (values)=>{
    setLoading(true);
   let reqData = {
        ...values
    }

    let key1 = 'aadhar_upload'
    let key2 = 'pan_upload'

    if(reqData[key1] && reqData[key1].file && reqData[key1].file.response){
      reqData[key1] = reqData[key1].file.response.image_path
    }
    
    if(reqData[key2] && reqData[key2].file && reqData[key2].file.response){
      reqData[key2] = reqData[key2].file.response.image_path
    }
   
    putAPI(interpolate(PATIENT_PROFILE, [currentPatient.id]), reqData, (data) => {
      setLoading(false);
      displayMessage(SUCCESS_MSG_TYPE, "Successfully Updated");
      StepComplitionUpdate('doctor_step_two',currentPatient.id);
      getuserData();
      
      // history.push("/doctor");
    }, () => {
      setLoading(false);
    });
  }
  return (
   <Spin  spinning={isloading} > 

   <Form onFinish={submitfinal} >

    <Form.Item name={'aadhar_id'} rules={[{required:true}]} >
    <InputNext className='m-0'
              key={'aadhar_id'}
              type="number"
              label="Aadhar Number"
              labelPlacement={'outside'}
              
            />
    </Form.Item>

    <Form.Item name={'aadhar_upload'}  rules={[{required : true}]} >

   <Upload
      action="https://healdiway.bkarogyam.com/erp-api/blogImage/"
      listType="picture"
      data={{
        name: 'hello'
      }}
      name='image'
      headers = {{
        authorization: 'authorization-text'
      }}
    >
      <Button icon={<UploadOutlined />}>Upload Aadhar Card</Button>
    </Upload>
    </Form.Item>
    <Form.Item name={'pan_card_id'} >
    <InputNext className='m-0'
              key={'pan_card_id'}
              type="number"
              label="PAN Card Number"
              labelPlacement={'outside'}
              
            />
    </Form.Item>
   

    <Form.Item name={'pan_upload'} >

      <Upload
        action="https://healdiway.bkarogyam.com/erp-api/blogImage/"
        listType="picture"
        data={{
          name: 'hello'
        }}
        name='image'
        headers = {{
          authorization: 'authorization-text'
        }}
      >
        <Button icon={<UploadOutlined />}>Upload PAN Card</Button>
      </Upload>
 </Form.Item>


    
    <Form.Item>
      <Button className='border border-blue-400 shadow-lg shadow-blue-300 text-black' type="primary" htmlType="submit">
      Save Upload  
      </Button>
    </Form.Item>
   </Form>

   </Spin>
  )
}
