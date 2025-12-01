'use client';

import { Button } from '@nextui-org/react';
import React, { Component, useEffect } from 'react'
import { CloseOutlined } from '@ant-design/icons';
import { Select, Row, Col, Card, Form, Input, Space, Typography, InputNumber, Checkbox } from 'antd';
import { useRouter } from 'next/navigation';
import { displayMessage, getAPI, handleErrorResponse, makeURL, postAPI } from '@/dataarrange/utils/common';
import { ROLE_COMMISION } from '@/dataarrange/constants/api';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAuthToken } from '@/dataarrange/utils/auth';
import axios from 'axios';
import { ERROR_MSG_TYPE, SUCCESS_MSG_TYPE } from '@/dataarrange/constants/dataKeys';



const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },

};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};


const fetchData = async (URL, params = {}, headerConfig = {}) => {
  try {
    const toke = getAuthToken();
    const response = await axios({
      method: 'get',
      url: makeURL(URL),
      headers: {

        ...headerConfig,

      },
      params,
    });

    const { data } = response;
    if (data.detail) {
      displayMessage(SUCCESS_MSG_TYPE, data.detail);
    }

    return data;
  } catch (error) {
    handleErrorResponse(error);
    throw error;
  }
};


// how use this as the testing purpose


const Register = ({ referal }) => {
  const validateMobileNumber = (_, value) => {
    const isValid = /^[0-9]{10}$/.test(value);
    if (!isValid) {
      return Promise.reject('Please enter a valid 10-digit mobile number');
    }
    return Promise.resolve();
  };
  const [form] = Form.useForm();
  const routers = useRouter();
  const onFinish = (values) => {
    console.log(values);
    // console.log(form.getFieldValue(true))

    let data = {
      ...values,
      "is_doctor": true,
      "is_agent": true

    }

    if (referal) {
      data.user['referer'] = referal
    }
    onuploaduserdata(data)

  };
  // const queryClient = useQueryClient()
  // useEffect(() => {
  //   loadAdvisorRole();
  // }, [])

  const onuploaduserdata = (data) => {
    const sucessFn = (data) => {
      displayMessage(SUCCESS_MSG_TYPE, 'Account Created Successfull.')

      routers.push('/login?from=register');
    }

    const errorFn = (error) => {
      console.log(` hellow ${error.detail}`)
      displayMessage(ERROR_MSG_TYPE, error.detail)
    }

    postAPI('patients/', data, sucessFn, errorFn)

  }

  const loadAdvisorRole = async () => {
    try {
      const successFn = (response) => {
        ; // Assuming that the data is present in the 'data' property
      };

      const errorFn = (error) => {
        console.log(error);
        throw error; // Throw the error to be caught by React Query
      };

      const response = getAPI(ROLE_COMMISION, successFn, errorFn);
      console.log(`hellow ${response}`)
      return response;
    } catch (error) {
      throw error; // Throw any error that occurs during the asynchronous operation
    }
  };

  const { data, error, isLoading } = useQuery({ queryKey: ['role'], queryFn: () => fetchData(`${ROLE_COMMISION}agent_roles/`, null, { 'Content-Type': 'application/json', }) })
  let datafilter = data ? data.filter((e) => e.name === 'Doctor' || e.name === 'Associate' || e.name === 'Advisor') : null;
  let selectdata = datafilter ? datafilter.map((e) => (

    { value: e.id, label: e.name }
  )
  ) : [];
  return (
    <>

      <div className='w-full ' >

        {/* {`${data} , ${error} , ${isLoading}`} */}
        <Form className='flex flex-col   '
          form={form}


          name="nest-messages"
          onFinish={onFinish}
          style={{
            // maxWidth: '100vw'
          }}
          validateMessages={validateMessages}
          initialValues={{
            user: {
              profession: 'lucy', // Set your initial values here
            },
          }}
        >

          <Form.Item name={['role']}>
            <Select
              defaultValue="Please Select Occupation"
              style={{

              }}
              loading={isLoading ? isLoading : false}
              options={[...selectdata]}
            />
          </Form.Item>

          <Row>
            <Col span={24}>

              <Form.Item className=''
                name={['user', 'first_name']}
                // label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder='Name' className='p-2' />
              </Form.Item>

            </Col>
          </Row>

          <Form.Item
            name={['user', 'email']}
            // label="Email"
            rules={[
              {
                type: 'email',
              },
            ]}
          >
            <Input placeholder='Email' className='p-2' />
          </Form.Item>
          <Form.Item
            name={['user', 'mobile']}
            // label="Mobile"
            rules={[
              {
                type: 'number',
                transform: value => Number(value),
                message: 'Please enter a valid number',
              },
              {
                validator: validateMobileNumber,
              },
            ]}
          >
            <Input placeholder='Mobile' className='p-2' />
          </Form.Item>


          <Form.Item name={['pincode']}
            rules={[
              {
                type: 'number',
                transform: value => Number(value),
                message: 'Please enter a valid number',
              },
            ]}
          >
            <Input className='p-2' placeholder='Pincode' />
          </Form.Item>

          <Form.Item name={['user', 'referer']} >
            <Input placeholder='Referer Code' className='p-2' />
          </Form.Item>


          <Form.Item name="Whatsapp-messages" valuePropName="checked" noStyle>
            <Checkbox className='p-2 text-gray-500 font-semibold'>I provide my consent to receive promotional messages from Arogya Bharat via Whatsapp messages</Checkbox>
          </Form.Item>
          <Form.Item name="Otpaccept" valuePropName="checked" noStyle>
            <Checkbox className='p-2 text-gray-500 font-semibold'>I provide my consent to receive OTP, Transactional messages and Order updates via Whatsapp messages</Checkbox>
          </Form.Item>

          <div className='p-2 mx-auto'>
            By clicking on “Register with Arogya Bharat”, I accept the Terms and Conditions and Privacy Policy of Arogya Bharat
          </div>

          <Form.Item

          >
            <div className='flex md:flex-row flex-col mx-auto w-full justify-center gap-2 px-4 items-center'>
              <Button className={' w-full'} color='primary' type="primary" htmlType="submit">
                Register
              </Button>

              <Button className={' w-full'} color='primary' onClick={() => routers.push('/login?from=register')} >
                Login
              </Button>

            </div>
          </Form.Item>
        </Form>
      </div>

    </>
  )
}

export default Register;