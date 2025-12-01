'use client'
import React, { useState, useEffect } from "react";
import { Button, Card, Popconfirm, Tag } from "antd";
// import { Link, Route, Switch } from "react-router-dom";
// import { MY_AGENTS } from "../../../constants/api";
// import { getAPI, interpolate, putAPI } from "../../../utils/common";
// import AddOrEditAgent from "./AddOrEditAgent";
// import CustomizedTable from "../common/CustomizedTable";
import InfiniteFeedLoaderButton from "@/dataarrange/doctor/doctorpanel/common/InfiniteFeedLoaderButton";

// import AddOrEditAgent from "@/dataarrange/doctor/doctorpanel/agents/AddOrEditAgent";
import { getAPI,interpolate, putAPI } from "@/dataarrange/utils/common";
import { MY_AGENTS } from "@/dataarrange/constants/api";
import { PlusOutlined } from "@ant-design/icons";
import Link from "next/link";
import CustomizedTable from "@/components/doctor/CustomizedTable";
import useUserStore from "../justand";

// import InfiniteFeedLoaderButton from "../common/InfiniteFeedLoaderButton";


const AgentRoles = (props) => {
    const {currentPatient,active_practiceId} = useUserStore();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);
  const [currentPateints, setCurrentPatient] = useState();

  useEffect(() => {
    setCurrentPatient(currentPatient)
    
    
  }, [currentPatient]);

  useEffect(()=>{
    loadData();
  },[]
  );

  const loadData = (page = 1) => {
    setLoading(true);
    const apiParams = { agent: true, page };

    const successFn = (result) => {
      setData(result.results);
      setNextPage(result.next);
      setLoading(false);
    };

    const errorFn = () => {
      setLoading(false);
    };

    getAPI(interpolate(MY_AGENTS, [currentPatient.user.id]), successFn, errorFn, apiParams);
  };

  const renderApprovalStatus = (value) => {
    console.log(value);
    return value ? <Tag color="#87d068">Approved</Tag> : <Tag color="#f50">Pending</Tag>
  };

  // const deleteObject = (record) => {
  //   const reqData = { id: record.id, is_agent: false };
  //   const successFn = (data) => {
  //     setLoading(false);
  //     loadData();
  //   };
  //   const errorFn = () => {};
  //   putAPI(interpolate(PATIENT_PROFILE, [record.id]), reqData, successFn, errorFn);
  // };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'user.first_name',
      key: 'name',
      render: (text,val) => {
      console.log(text);
     return <a>{val.user.first_name}</a>},
    },
    {
      title: 'Email',
      dataIndex: 'user.email',
      key: 'user.email',
      render: (_,val)=> (
        val.user.email
      )
    },
    {
      title: 'Mobile',
      dataIndex: 'user.mobile',
      key: 'mobile',
      render: (_,val)=> (
        val.user.mobile
      )
    },
    {
      title: 'Approval Status',
      dataIndex: 'is_approved',
      key: 'is_approved',
      render: renderApprovalStatus,
    },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (text, record) => (
    //     <span>
    //       <a onClick={() => editObject(record)}>Edit</a>
    //       <Popconfirm title="Are you sure delete this item?" onConfirm={() => deleteObject(record)} okText="Yes" cancelText="No">
    //         <a>Delete</a>
    //       </Popconfirm>
    //     </span>
    //   ),
    // },
  ];

  return (
    
      
        // exact
        // path="/agents/add"
        // render={(route) => (
        //   <AddOrEditAgent {...props} title="Create Advisor" loadData={loadData} />

    
      
        //  exact
        // path="/agents/:id/edit"
        // render={(route) => (
        //   <AddOrEditAgent {...props} {...state} title="Edit Advisor" loadData={loadData} />
        
      
        <Card title={<h4>My Advisor <Link  href={{pathname:"/doctor/agents/add", }}><Button  className="flex border border-blue-500 shodow-md text-black items-center justify-center  "  style={{ float: 'right' }} type="primary"><PlusOutlined /> Add</Button></Link></h4>}>
          <CustomizedTable loading={loading} columns={columns} dataSource={data} pagination={false} />
          <InfiniteFeedLoaderButton loading={loading} loaderFunction={() => loadData(nextPage)} hidden={!nextPage} />
        </Card>
    
    
  );
};

export default AgentRoles;
