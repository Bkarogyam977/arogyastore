'use client'


// Import necessary components from Ant Design
import { Form, Input, Button, Row, Col,  Divider ,Space } from 'antd';
import { StarOutlined, StarFilled, KeyOutlined, PhoneOutlined,  } from '@ant-design/icons';
import React, { useState } from 'react';
import {displayMessage, makeURL} from "@/dataarrange/utils/common";
import { sendLoginOTP,  logInUserWithOtp } from '@/dataarrange/utils/auth';
import { SUCCESS_MSG_TYPE, WARNING_MSG_TYPE } from '@/dataarrange/constants/dataKeys';
import { LOGIN_RESEND_OTP,LOGIN_SEND_OTP } from '@/dataarrange/constants/api';
import { useRouter, useSearchParams } from 'next/navigation';
import useUserStore from './justand';

const LoginWithPhonedoctor = () => {
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [form] = Form.useForm();
  const routers = useRouter();
  const query = useSearchParams()
  const { from } = query;
  const {setActive_practiceId,setCurrentPatient,setToken ,setRole} = useUserStore();

  const handleSubmit = (values) => {
    const successFn = function (data) {
      displayMessage(SUCCESS_MSG_TYPE, 'Logged in successfully!!');

      
      // if (from === 'register') {
      //   routers.push('/');
      // } else {
      //   if (from) {
      //     routers.back();
      //   }
      // }

      routers.push('/');
      
      // Handle success logic
    };
    const errorFn = function () {
      // Handle error logic
    };
    logInUserWithOtp({ ...values }, successFn, errorFn,setCurrentPatient, setActive_practiceId,setToken, setRole);
  };

  const sendOTP = () => {
    if (phone) {
      const successFn = function (data) {
        console.log(data);
        setOtpSent(true);
        displayMessage(SUCCESS_MSG_TYPE, data.data.detail);
      };
      const errorFn = function () {
        // Handle error logic
      };

      const otpFunction = otpSent
        ? sendLoginOTP(makeURL('staff_login/send_otp_web/'), phone, successFn, errorFn)
        : sendLoginOTP(makeURL('staff_login/send_otp_web/'), phone, successFn, errorFn);
    } else {
      displayMessage(WARNING_MSG_TYPE, 'Phone No can not be empty!!');
    }
};


  return (
    <Form form={form} onFinish={handleSubmit} className="login-form">
      <Space.Compact size="large">
        <Row>
          <Col span={otpSent ? 24 : 16}>
            <Form.Item
              name="phone_no"
              rules={[{ required: true, message: 'Please input your phone!' }]}
            >
              <Input
                prefix={<PhoneOutlined rotate={90}/>}
                type="text"
                placeholder="Mobile Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Item>
          </Col>
          <Col span={otpSent ? 0 : 8}>
            <Button
                className=' text-black border-blue-300'
              type="primary"
              size="large"
              block
              onClick={sendOTP}
              style={{ paddingLeft: 4, paddingRight: 4 }}
            >
              GET OTP
            </Button>
          </Col>
        </Row>
      </Space.Compact>
    <Row>
    <Col span={24} >
      <Form.Item
        name="otp"
        rules={[{ required: true, message: 'Please input otp!' }]}
      >
            
        <Input
          size="large"
          prefix={<KeyOutlined />}
          type="text"
          placeholder="OTP"
          disabled={!otpSent}
        />
            
      </Form.Item>
             </Col>

    </Row>

      <Form.Item>
        {otpSent ? (
          <a style={{ float: 'right' }} type="primary" onClick={sendOTP}>
            Resend OTP ?
          </a>
        ) : null}
        <Button
        
          size="large"
          type="primary"
          htmlType="submit"
          className="login-form-button text-black border-blue-300 w-full"
        >
          Log in
        </Button>
      </Form.Item>

      <Divider />
    </Form>
  );
};

export default LoginWithPhonedoctor;






