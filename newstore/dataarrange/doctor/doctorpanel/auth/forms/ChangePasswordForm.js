'use client'

import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';

import { NEW_PASSWORD,OLD_PASSWORD } from '@/dataarrange/constants/formLabels';
import { CHANGE_PASSWORD } from '@/dataarrange/constants/api';
import { postAPI, validatePassword } from '@/dataarrange/utils/common';
import { LockOutlined } from '@ant-design/icons';


// const FormItem = Form.Item;

const ChangePasswordForm = () => {
  const [form] = Form.useForm();
  const [confirmDirty, setConfirmDirty] = useState(false);
  const [changePassLoading, setChangePassLoading] = useState(false);

  const handleSubmit =  (values) => {
    console.log(values)
    console.log(form.getFieldValue(true))
    try {
      setChangePassLoading(true);

      const data = {
        [OLD_PASSWORD]: values.oldPass,
        [NEW_PASSWORD]: values.newPass,
      };

      const response =  postAPI(CHANGE_PASSWORD, data);
      message.success(response.message);
      form.resetFields();
    } catch (error) {
      // Handle error if needed
    } finally {
      setChangePassLoading(false);
    }
  };

  const handleConfirmBlur = (e) => {
    const value = e.target.value;
    setConfirmDirty(confirmDirty || !!value);
  };

  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('newPass')) {
      callback('Two passwords that you enter are inconsistent!');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    callback(validatePassword(rule, value, callback));
  };

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  return (
    <Form  form={form} onFinish={handleSubmit}>
      <Form.Item  name={'oldPass'} label="Old Password" {...formItemLayout}>
        <Input
          prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Old Password"
          name="oldPass"
          rules={[{ required: true, message: 'Please enter your old Password!' }]}
        />
      </Form.Item>
      <Form.Item name={'newPass'} label="New Password" {...formItemLayout}>
        <Input
          prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="New Password"
          name="newPass"
          rules={[
            { required: true, message: 'Please enter your new Password!' },
            { validator: validateToNextPassword },
          ]}
        />
      </Form.Item>
      <Form.Item name={'confirmPass'} label="Confirm Password" {...formItemLayout}>
        <Input
          prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Confirm Password"
          onBlur={handleConfirmBlur}
          name="confirmPass"
          rules={[
            { required: true, message: 'Please confirm your new Password!' },
            { validator: compareToFirstPassword },
          ]}
        />
      </Form.Item>
      <Form.Item>
        <Button
          loading={changePassLoading}
          type="primary"
          htmlType="submit"
          className="login-form-button border-blue-400 text-black shadow-md shadow-blue-400"
        >
          Change Password
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ChangePasswordForm;















// import React from "react";
// import {Button, Form, Icon, message, Input} from "antd";
// import {postAPI, putAPI, validatePassword} from "../../../../utils/common";
// import {CHANGE_PASSWORD} from "../../../../constants/api";
// import {NEW_PASSWORD, OLD_PASSWORD} from "../../../../constants/formLabels";

// const FormItem = Form.Item;
// export default class ChangePasswordForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             confirmDirty: false,
//             changePassLoading: false

//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         let that = this;
//         this.props.form.validateFieldsAndScroll((err, values) => {
//             if (!err) {
//                 that.setState({
//                     changePassLoading: true
//                 });
//                 let data = {
//                     [OLD_PASSWORD]: values.oldPass,
//                     [NEW_PASSWORD]: values.newPass,
//                 };
//                 let successFn = function (data) {
//                     message.success(data.message);
//                     that.setState({
//                         changePassLoading: false
//                     });
//                 };
//                 let errorFn = function () {
//                     that.setState({
//                         changePassLoading: false
//                     });
//                 };
//                 postAPI(CHANGE_PASSWORD, data, successFn, errorFn);
//             }
//         });
//     };
//     handleConfirmBlur = (e) => {
//         const value = e.target.value;
//         this.setState({confirmDirty: this.state.confirmDirty || !!value});
//     };
//     compareToFirstPassword = (rule, value, callback) => {
//         const form = this.props.form;
//         if (value && value != form.getFieldValue('newPass')) {
//             callback('Two passwords that you enter is inconsistent!');
//         } else {
//             callback();
//         }
//     };
//     validateToNextPassword = (rule, value, callback) => {
//         callback(validatePassword(rule, value, callback));
//     };

//     render() {
//         const formItemLayout = {
//             labelCol: {span: 6},
//             wrapperCol: {span: 14},
//         };
//         const {getFieldDecorator} = this.props.form;
//         return (
//             <Form onSubmit={this.handleSubmit}>
//                 <FormItem label="Old Password"  {...formItemLayout}>
//                     {getFieldDecorator('oldPass', {
//                         rules: [{required: true, message: 'Please enter your old Password!'}],
//                     })(
//                         <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
//                                placeholder="Old Password"/>
//                     )}
//                 </FormItem>
//                 <FormItem label="New Password"  {...formItemLayout}>
//                     {getFieldDecorator('newPass', {
//                         rules: [{
//                             required: true, message: 'Please enter your new Password!'
//                         }, {
//                             validator: this.validateToNextPassword
//                         }]
//                     })(
//                         <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
//                                placeholder="New Password"/>
//                     )}
//                 </FormItem>
//                 <FormItem label="Confirm Password"  {...formItemLayout}>
//                     {getFieldDecorator('confirmPass', {
//                         rules: [{required: true, message: 'Please confirm your new Password!'}, {
//                             validator: this.compareToFirstPassword
//                         }],
//                     })(
//                         <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
//                                placeholder="Confirm Password" onBlur={this.handleConfirmBlur}/>
//                     )}
//                 </FormItem>
//                 <FormItem>
//                     <Button loading={this.state.changePassLoading} type="primary" htmlType="submit"
//                             className="login-form-button">
//                         Change Password
//                     </Button>
//                 </FormItem>
//             </Form>
//         );
//     }
// }
