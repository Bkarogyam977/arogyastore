'use client'
import React ,{useState, useEffect} from 'react'
import CustomizedTable from '../CustomizedTable';
import InfiniteFeedLoaderButton from "@/dataarrange/doctor/doctorpanel/common/InfiniteFeedLoaderButton";
import {Button, Card} from "antd";
import { MY_AGENTS } from '@/dataarrange/constants/api';
import { getAPI,interpolate } from '@/dataarrange/utils/common';
import { PlusOutlined } from '@ant-design/icons';
import Link from 'next/link';
import useUserStore from '@/app/doctor/justand';

MY_AGENTS
const PatientComponent = () => {
   const userdata = useUserStore((st)=>st.currentPatient)
    const [loading, setLoading] = useState(false);
    const [patientList, setPatientList] = useState([]);
    const [nextPage, setNextPage] = useState(null);

    useEffect(() => {
        loadPatients();
    }, []);

    const loadPatients = (page = 1) => {
        setLoading(true);

        const successFn = (data) => {
            setPatientList((prevPatientList) => {
                if (data.current === 1) {
                    return data.results;
                } else {
                    return [...prevPatientList, ...data.results];
                }
            });

            setNextPage(data.next);
            setLoading(false);
        };

        const errorFn = () => {
            setLoading(false);
        };

        const apiParams = {
            page,
        };

        getAPI(interpolate(`patients/?referred_by=%s&page=1`, [userdata.user.id]), successFn, errorFn, apiParams);
    };

    const columns = [
        {
            title: "Id",
            dataIndex: "custom_id",
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "user.first_name",
            key: "name",
            render : (value,obj) => (obj.user.first_name)
        },
        {
            title: "City",
            dataIndex: "city_data",
            key: "city",
            render: (_,value) => (value.city_data ? value.city_data.name : "--"),
        },
        {
            title: "State",
            dataIndex: "state_data",
            key: "state",
            render: (_,value) => (value.state_data ? value.state_data.name : "--"),
        },
        {
            title: "PinCode",
            dataIndex: "pincode",
            key: "pincode",
        },
    ];

    

    return (
        <Card title={"My Patients"} extra={<Link href={"/doctor/pateint/add-patient"}><Button className='text-black border-blue-500 border shadow-lg flex justify-center items-center' type={"primary"}><PlusOutlined/> Add Patient</Button></Link>}>
            <CustomizedTable pagination={false} dataSource={patientList} columns={columns} hideReport={true} />
            <InfiniteFeedLoaderButton loading={loading} loaderFunction={() => loadPatients(nextPage)} hidden={!nextPage} />
        </Card>
    );
};

export default PatientComponent