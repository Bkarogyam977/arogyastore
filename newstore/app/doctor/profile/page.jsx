'use client'

import { Card, Col, Form, Row } from "antd";
import React, { useEffect, useState } from "react";


import { Layout } from "antd";

import ChangePasswordForm from "@/dataarrange/doctor/doctorpanel/auth/forms/ChangePasswordForm";
import { getAPI ,interpolate} from "@/dataarrange/utils/common";
import { USER_DATA } from "@/dataarrange/constants/api";
import useUserStore from "../justand";


const { Content } = Layout;



const Profile = () => {
const userdata  = useUserStore((state)=> state.currentPatient);
const [userProfile, setUserProfile] = useState();
const [uProfile, setUProfile] = useState();
  // Uncomment the following line if you want to load the profile on component mount
  useEffect(() => {
    setUserProfile(userdata)
    loadProfile();
  }, [userdata]);

  const loadProfile = () => {
    getAPI(USER_DATA, (data) => {
      setUProfile(data);
    }, () => {
      // Handle error if needed
    });
  };

//   const [form] = Form.useForm();
//   const ChangePasswordLayout = Form.create()(ChangePasswordForm);
  
  return (
    <Content className="main-container py-3" style={{
      margin: '24px 16px',
      minHeight: 280,
    }}>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12} >
          <Card title="Change Password">
            <ChangePasswordForm />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Card title="My Profile">
            <Row gutter={16}>
              <Col span={6}>
                <UsersRow label="Name" value={userProfile?.user?.first_name} />
                <UsersRow label="Email Id" value={userProfile?.user.email} />
                <UsersRow label="Contact No." value={userProfile?.user.mobile} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

const UsersRow = ({ label, value }) => (
  <Row gutter={16} style={{ marginBottom: '5px' }}>
    <Col span={12} style={{ textAlign: 'right' }}>{label}:</Col>
    <Col span={12}><strong>{value}</strong></Col>
  </Row>
);

export default Profile;
