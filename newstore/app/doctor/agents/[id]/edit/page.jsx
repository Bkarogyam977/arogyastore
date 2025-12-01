'use client'
import React, { useState, useEffect } from "react";
import {
  AutoComplete,
  Avatar,
  Button,
  Card,
  Form,
  Input,
  Upload,
  List,
  Select,
  Spin,
  message,
} from "antd";

import { REQUIRED_FIELD_MESSAGE   } from "@/dataarrange/constants/messages";
import { PATIENTS_LIST,SEARCH_PATIENT ,PATIENT_PROFILE,AGENT_ROLES,FILE_UPLOAD_API} from "@/dataarrange/constants/api";
import { getAPI,displayMessage,interpolate,makeFileURL ,makeURL,postAPI, putAPI} from "@/dataarrange/utils/common";
import { SUCCESS_MSG_TYPE } from "@/dataarrange/constants/dataKeys";
import { UploadOutlined } from "@ant-design/icons";

const FormItem = Form.Item;
const { Meta } = Card;

const AddOrEditAgent = (props) => {
  const [state, setState] = useState({
    redirect: false,
    saving: false,
    userListData: [],
    agentRoles: [],
    userDetails: null,
  });

  useEffect(() => {
    getPatient();
    loadAgentRoles();
  }, []);

  const getPatient = () => {
    let successFn = function (data) {
      setState((prev) => ({
        ...prev,
        userListData: data.results,
      }));
    };
    let errorFn = function () {};

    getAPI(PATIENTS_LIST, successFn, errorFn);
  };

  const loadAgentRoles = () => {
    let successFn = function (data) {
      setState((prev) => ({
        ...prev,
        agentRoles: data,
        loading: false,
      }));
    };
    let errorFn = function () {
      setState((prev) => ({
        ...prev,
        loading: false,
      }));
    };

    getAPI(AGENT_ROLES, successFn, errorFn);
  };

  const changeRedirect = () => {
    setState((prev) => ({
      ...prev,
      redirect: !prev.redirect,
    }));
  };

  const searchPatient = (value) => {
    let successFn = function (data) {
      if (data) {
        setState((prev) => ({
          ...prev,
          userListData: data,
        }));
      }
    };
    let errorFn = function () {};
    getAPI(interpolate(SEARCH_PATIENT, [value]), successFn, errorFn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        setState((prev) => ({
          ...prev,
          saving: true,
        }));

        let reqData = {
          user: {},
          is_agent: true,
          referal: props.currentPatient.user.referer_code,
          aadhar_upload:
            values.aadhar_upload &&
            values.aadhar_upload.file &&
            values.aadhar_upload.file.response
              ? values.aadhar_upload.file.response.image_path
              : null,
          practice: props.currentPatient.practice,
        };

        if (!state.userDetails) {
          reqData.user.first_name = values.first_name;
          reqData.user.email = values.email;
          reqData.user.mobile = values.mobile;
        }

        let successFn = function (data) {
          setState((prev) => ({
            ...prev,
            saving: false,
          }));
          if (props.loadData) props.loadData();
          if (props.history) props.history.goBack();

          if (data) {
            displayMessage(SUCCESS_MSG_TYPE, "Agent Created Successfully");
          }
        };
        let errorFn = function () {
          setState((prev) => ({
            ...prev,
            saving: false,
          }));
        };

        if (state.userDetails) {
          putAPI(
            interpolate(PATIENT_PROFILE, [state.userDetails.id]),
            reqData,
            successFn,
            errorFn
          );
        } else if (props.editAgentData) {
          putAPI(
            interpolate(PATIENT_PROFILE, [props.editAgentData.id]),
            reqData,
            successFn,
            errorFn
          );
        } else {
          postAPI(PATIENTS_LIST, reqData, successFn, errorFn);
        }
      }
    });
  };

  const handlePatientSelect = (event) => {
    if (event) {
      let successFn = function (data) {
        setState((prev) => ({
          ...prev,
          userDetails: data,
        }));
      };
      let errorFn = function () {};
      getAPI(interpolate(PATIENT_PROFILE, [event]), successFn, errorFn);
    }
  };

  const handleClick = (e) => {
    setState((prev) => ({
      ...prev,
      userDetails: null,
    }));
  };

  const formItemLayout = props.formLayout
    ? props.formLayout
    : {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      };

  const formPatients = props.formLayout
    ? props.formLayout
    : {
        wrapperCol: { offset: 6, span: 14 },
      };

  const { getFieldDecorator } = props.form;
  const singleUploadprops = {
    name: "image",
    data: {
      name: "hello",
    },
    action: makeURL(FILE_UPLOAD_API),
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Card>
      <Spin spinning={state.saving}>
        <Form onSubmit={handleSubmit}>
          {props.title ? <h2>{props.title}</h2> : null}

          {state.userDetails ? (
            <FormItem key="id" value={state.userDetails.id} {...formPatients}>
              <Card bordered={false} style={{ background: "#ECECEC" }}>
                <Meta
                  avatar={
                    <Avatar
                      style={{ backgroundColor: "#ffff" }}
                      size={150}
                      src={
                        state.userDetails.image
                          ? makeFileURL(state.userDetails.image)
                          : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      }
                    />
                  }
                  title={state.userDetails.user.first_name}
                />
              </Card>
            </FormItem>
          ) : (
            <div>
              <FormItem
                key="patient_name"
                label="Advisor Name"
                {...formItemLayout}
              >
                {getFieldDecorator("first_name", {
                  initialValue: props.editAgentData
                    ? props.editAgentData.user.first_name
                    : "",
                })(
                  <AutoComplete
                    placeholder="Advisor Name"
                    showSearch
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    filterOption={false}
                  />
                )}
              </FormItem>
              <FormItem
                key="patient_mobile"
                label="Mobile Number"
                {...formItemLayout}
              >
                {getFieldDecorator("mobile", {
                  initialValue: props.editAgentData
                    ? props.editAgentData.user.mobile
                    : null,
                  rules: [{ required: true, message: REQUIRED_FIELD_MESSAGE }],
                })(<Input placeholder="Mobile Number" />)}
              </FormItem>
              <FormItem
                key="patient_email"
                label="Email Address"
                {...formItemLayout}
              >
                {getFieldDecorator("email", {
                  initialValue: props.editAgentData
                    ? props.editAgentData.user.email
                    : null,
                  rules: [
                    { type: "email", message: "The input is not valid E-mail!" },
                    { required: true, message: REQUIRED_FIELD_MESSAGE },
                  ],
                })(<Input placeholder="Email Address" />)}
              </FormItem>
            </div>
          )}

          <FormItem key="aadhar_id" label="Aadhar No." {...formItemLayout}>
            {getFieldDecorator("aadhar_id", {
              initialValue: props.editAgentData
                ? props.editAgentData.aadhar_id
                : null,
              rules: [
                { required: true, message: REQUIRED_FIELD_MESSAGE },
              ],
            })(<Input placeholder="Aadhar No" />)}
          </FormItem>

          <FormItem label={"Aadhar Upload"} {...formItemLayout}>
            {getFieldDecorator("aadhar_upload", {
              initialValue: props.editAgentData
                ? props.editAgentData.aadhar_upload
                : null,
              rules: [
                { required: true, message: REQUIRED_FIELD_MESSAGE },
              ],
            })(
              <Upload {...singleUploadprops}>
                <Button>
                  <UploadOutlined /> Click to Upload
                </Button>
              </Upload>
            )}
          </FormItem>

          <FormItem {...formItemLayout}>
            <Button type="primary" htmlType="submit" style={{ margin: 5 }}>
              Submit
            </Button>
            {props.history ? (
              <Button
                style={{ margin: 5 }}
                onClick={() => props.history.goBack()}
              >
                Cancel
              </Button>
            ) : null}
          </FormItem>
        </Form>
      </Spin>
    </Card>
  );
};

export default AddOrEditAgent;
