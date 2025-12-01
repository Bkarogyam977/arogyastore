'use client';
import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, Col, Divider, List, Row, Statistic } from "antd";
import { getAPI } from "@/dataarrange/utils/common";
import Link from "next/link";
import useUserStore from "../justand";


import moment from "moment";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
import Image from "next/image";

const PatientProfileme = () => {
  const userdata = useUserStore((state) => state.currentPatient);

  const [patientProfile, setPatientProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPatient, setCurrentPatient] = useState();

  useEffect(() => {
    console.log(userdata)
    setCurrentPatient(() => userdata)
  }, [userdata])

  useEffect(() => {



    loadProfile();
  }, [userdata]);

  const loadProfile = () => {
    setLoading(true);
    const sucessFn = (data) => {
      setPatientProfile(data);
      setLoading(false);
      setLoading(false);
    }
    const errorFn = () => {

    }
    getAPI(`patients/${userdata.id}/`, sucessFn, errorFn)

  };

  const PatientRow = (props) => (
    <Row gutter={16} style={{ marginBottom: '5px' }}>
      <Col xs={8} sm={8} md={12} lg={12} style={{ textAlign: 'right' }}>{props.label}:</Col>
      <Col xs={8} sm={8} md={12} lg={12}><strong>{props.value}</strong></Col>
    </Row>
  );

  if (currentPatient) {
    let patient = patientProfile;
    if (!patient)
      return <Card loading={loading} />;

    return (
      <Card
        loading={loading}
        title="Doctor Profile"
        extra={
          <Link href={`/doctor/profile/${currentPatient.id}/edit`}>
            <Button className="border-blue-400 text-black" type="primary">
              <EditOutlined />  Edit
            </Button>
          </Link>
        }
      >
        <Row gutter={16}>
          <Col xs={24} sm={24} md={6} lg={6} style={{ textAlign: 'center' }}>
            {(patient.image ? <Image
              src={`https://healdiway.bkarogyam.com/media/${patient.image}`}
              alt="Patient Image"
              style={{ width: '100%' }}
              width={800}
              height={600}
              layout="responsive"
            /> :
              <Avatar size={200} shape="square" style={{ backgroundColor: '#87d068' }}>
                {patient.user.first_name ? patient.user.first_name : <UserOutlined />}
              </Avatar>)}
            <Divider />
            {patient.is_agent && patient.is_approved ? <Statistic title="Referral Code" value={patient.user.referer_code} /> : null}
          </Col>
          <Col xs={24} sm={24} md={18} lg={18}>
            <PatientRow label="Advisor Name" value={patient.user.first_name} />
            <PatientRow label="Gender" value={patient.gender} />
            {patient.is_age ?
              <PatientRow label="Age" value={patient.dob ? moment().diff(currentPatient.dob, 'years') : null} />
              :
              <PatientRow label="Date of Birth" value={patient.dob} />
            }
            <Divider>Contact Details</Divider>
            <PatientRow label="Email" value={patient.user.email} />
            <PatientRow label="Primary Mobile" value={patient.user.mobile} />
            <PatientRow label="Secondary Mobile" value={patient.secondary_mobile_no} />
            <PatientRow label="Landline No" value={patient.landline_no} />
            <PatientRow label="Address" value={patient.address} />
            <PatientRow label="Locality" value={patient.locality} />
            <PatientRow label="City" value={patient.city_data ? patient.city_data.name : null} />
            <PatientRow label="State" value={patient.state_data ? patient.state_data.name : null} />
            <PatientRow label="Country" value={patient.country_data ? patient.country_data.name : null} />
            <PatientRow label="Pincode" value={patient.pincode} />
          </Col>
        </Row>
      </Card>
    );
  }

};

export default PatientProfileme;

