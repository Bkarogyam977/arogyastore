"use client";
import React,{useEffect,useState} from "react";
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
    Spin, message,
} from 'antd';


import { REQUIRED_FIELD_MESSAGE } from "@/dataarrange/constants/messages";
import { SUCCESS_MSG_TYPE } from "@/dataarrange/constants/dataKeys";
import { PATIENTS_LIST, SEARCH_PATIENT,PATIENT_PROFILE, AGENT_ROLES, FILE_UPLOAD_API,} from "@/dataarrange/constants/api";
import { displayMessage , getAPI, interpolate, makeFileURL, makeURL, postAPI, putAPI} from "@/dataarrange/utils/common";
import { UploadOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import useUserStore from "@/app/doctor/justand";


const FormItem = Form.Item;
const {Meta} = Card;

const AddOrEditAgent = (props) => {
    
    const [redirect, setRedirect] = useState(false);
    const [saving, setSaving] = useState(false);
    const [userListData, setUserListData] = useState([]);
    const [agentRoles, setAgentRoles] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    const userdata  =  useUserStore((st)=>st.currentPatient)

    useEffect(() => {
        getPatient();
        loadAgentRoles();
    }, []);

    const getPatient = () => {
        getAPI(PATIENTS_LIST, (data) => {
            setUserListData(data.results);
        }, () => {});
    };

    const loadAgentRoles = () => {
        getAPI(AGENT_ROLES, (data) => {
            setAgentRoles(data);
            setSaving(false);
        }, () => {
            setSaving(false);
        });
    };

    const changeRedirect = () => {
        setRedirect(!redirect);
    };

    const searchPatient = (value) => {
        getAPI(interpolate(SEARCH_PATIENT, [value]), (data) => {
            if (data) {
                setUserListData(data);
            }
        }, () => {});
    };

    const handleSubmit = (values) => {
       
           
            
                setSaving(true);

                const reqData = {
                    user: {},
                    is_agent: true,
                    referal: userdata.user.referer_code,
                    aadhar_upload: values.aadhar_upload && values.aadhar_upload.file && values.aadhar_upload.file.response
                        ? values.aadhar_upload.file.response.image_path
                        : null,
                    practice: userdata.practice,
                };

                if (!userDetails) {
                    reqData.user.first_name = values.first_name;
                    reqData.user.email = values.email;
                    reqData.user.mobile = values.mobile;
                }

                const successFn = (data) => {
                    setSaving(false);
                    // if (props.loadData) props.loadData();
                    if (props.history) props.history.goBack();
                    if (data) {
                        displayMessage(SUCCESS_MSG_TYPE, "Agent Created Successfully");
                    }
                };

                const errorFn = () => {
                    setSaving(false);
                };

                if (userDetails) {
                    putAPI(interpolate(PATIENT_PROFILE, [userDetails.id]), reqData, successFn, errorFn);
                } else if (props.editAgentData) {
                    putAPI(interpolate(PATIENT_PROFILE, [props.editAgentData.id]), reqData, successFn, errorFn);
                } else {
                    postAPI(PATIENTS_LIST, reqData, successFn, errorFn);
                    console.log(reqData)
                }
            
        
    };

    const handlePatientSelect = (event) => {
        if (event) {
            getAPI(interpolate(PATIENT_PROFILE, [event]), (data) => {
                setUserDetails(data);
            }, () => {});
        }
    };

    const handleClick = () => {
        setUserDetails(null);
    };

    const { form } = props;
    const formItemLayout = props.formLayout ? props.formLayout : { labelCol: { span: 6 }, wrapperCol: { span: 14 } };
    const formPatients = props.formLayout ? props.formLayout : { wrapperCol: { offset: 6, span: 14 } };
    // const { getFieldDecorator } = form;

    const singleUploadprops = {
        name: 'image',
        data: {
            name: 'hello',
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

    return (
        <Card>
            <Spin spinning={saving}>
                <Form onFinish={handleSubmit}>
                    {props.title ? <h2>{props.title}</h2> : null}

                    {userDetails ? (
                        <FormItem key="id" value={userDetails.id} {...formPatients}>
                            <Card bordered={false} style={{ background: '#ECECEC' }}>
                                <Meta
                                    avatar={
                                        <Avatar
                                            style={{ backgroundColor: '#ffff' }}
                                            size={150}
                                            src={
                                                userDetails.image
                                                    ? makeFileURL(userDetails.image)
                                                    : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                            }
                                        />
                                    }
                                    title={userDetails.user.first_name}
                                />
                            </Card>
                        </FormItem>
                    ) : (
                        <div>
                            <FormItem name={'first_name'} initialValue={props.editAgentData ? props.editAgentData.user.first_name : ''} key="patient_name" label="Advisor Name" {...formItemLayout}>
                                
                                    <AutoComplete
                                        placeholder="Advisor Name"
                                        showSearch
                                        defaultActiveFirstOption={false}
                                        suffixIcon={false}
                                        filterOption={false}
                                    />
                            
                            </FormItem>
                            <FormItem name={'mobile'} rules={[{ required: true, message: REQUIRED_FIELD_MESSAGE }]} initialValue={props.editAgentData ? props.editAgentData.user.mobile : null} key="patient_mobile" label="Mobile Number" {...formItemLayout}>
                                <Input placeholder="Mobile Number" />
                            </FormItem>
                            <FormItem name={'email'} rules={[
                                        { type: 'email', message: 'The input is not valid E-mail!' },
                                        { required: true, message: REQUIRED_FIELD_MESSAGE },
                                    ]} initialValue={props.editAgentData ? props.editAgentData.user.email : null} key="patient_email" label="Email Address" {...formItemLayout}>
                               <Input placeholder="Email Address" />
                            </FormItem>
                        </div>
                    )}

                    <FormItem name={'aadhar_upload'} rules={[{ required: true, message: REQUIRED_FIELD_MESSAGE }]} initialValue={props.editAgentData ? props.editAgentData.aadhar_upload : null} label={"Aadhar Upload"} {...formItemLayout}>
                        
                            <Upload {...singleUploadprops}>
                                <Button>
                                    <UploadOutlined /> Click to Upload
                                </Button>
                            </Upload>
                    
                    </FormItem>

                    <FormItem {...formItemLayout}>
                        <Button className="border border-blue-500 shadow-md text-black" type="primary" htmlType="submit" style={{ margin: 5 }}>
                            Submit
                        </Button>
                        {props.history ? (
                            <Button className="border border-blue-500 shadow-md text-black" style={{ margin: 5 }} onClick={() => props.history.goBack()}>
                                Cancel
                            </Button>
                        ) : null}
                    </FormItem>
                </Form>
            </Spin>
        </Card>
    );
};
export default AddOrEditAgent
