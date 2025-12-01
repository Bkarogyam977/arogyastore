'use client'
import React,{ useEffect, useState } from 'react';
import { Button, Menu, Modal , Form, Input, Space} from 'antd';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    PieChartOutlined,
    LogoutOutlined,
  } from '@ant-design/icons';

import { FaUserTie } from "react-icons/fa";

import Link from 'next/link';
import useUserStore from './justand';
import { logOutUser } from '@/dataarrange/utils/auth';
import { useRouter } from 'next/navigation';
import SteponeVerifiacation from '@/components/doctor/dashboard/SteponeVerifiacation';
import { displayMessage, getAPI, interpolate } from '@/dataarrange/utils/common';
import { PATIENT_PROFILE } from '@/dataarrange/constants/api';
import { SUCCESS_MSG_TYPE } from '@/dataarrange/constants/dataKeys';
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaUserInjured } from "react-icons/fa";
import { PiUserCircleGearFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { BsSendCheckFill } from "react-icons/bs";

const LayoutDoctor =  ({children}) =>  {
  const { setCurrentPatient,setActive_practiceId,setToken, setRole , currentPatient}  = useUserStore()
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentuser, setCurrentuser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    setCurrentuser(currentPatient);
    setLoading(false);

  },[]);
  useEffect(()=>{
    
    if (currentPatient !== null && loading === false) {
      if (currentuser) {
        showModal();
        getuserData();
      }
      setCurrentuser(currentPatient);
    } else if (loading === false) {
      router.push('/register');
    }
  }, [ loading, currentuser]);

  const getuserData = ()=>{
    // setLoading(true)
   
    
    getAPI(interpolate(PATIENT_PROFILE, [currentPatient.id]), (data) => {
      // setLoading(false);
      // displayMessage(SUCCESS_MSG_TYPE, "Successfully Updated User");
      setCurrentPatient(data)
      // history.push("/doctor");
    }, () => {
      // setLoading(false);
    });
  }
  
    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
      setIsModalOpen(false);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };


    const [collapsed, setCollapsed] = useState(false);
    
    const toggleCollapsed = () => {
      setCollapsed(true);
    };
     const toggleClosed = () => {
      setCollapsed(false);
     }

     const sendRefferal = (referal)=>{
      const shareUrl = `https://api.whatsapp.com/send?text=Check%20out%20this%20link:%20${encodeURIComponent(`https://arogyabharat.co/register/${referal}`)}`;
      window.open(shareUrl, '_blank');
     }

    function getItem(label, key, icon, children, type) {
        return {
          key,
          icon,
          children,
          label,
          type,
        };
      }
      const items = [
       currentuser && getItem(<Link href={'/'} >Home</Link>, '7', <FaHome />), 
       currentuser && getItem(<Link href={'/adviser'} >Adviser</Link>, '9', <FaUserTie />), 
       currentuser && getItem(<Link href={'/doctor'} >Dashboard</Link>, '1', <PieChartOutlined />),
       currentuser && getItem(<Link href={'/doctor/agents'} >Agents</Link>, '2', <HiMiniUserGroup />),
       currentuser && getItem(<Link href={'/doctor/pateint'} >Patients</Link>, '3', <FaUserInjured />),
       currentuser && getItem(<Link href={'/doctor/profile'} >Profile</Link>, '4', <UserOutlined />),
       currentuser && getItem(<Link href={'/doctor/me'} >Profile Details</Link>, '5', <PiUserCircleGearFill size={20} />),
       currentuser && getItem( <span onClick={()=>sendRefferal(currentuser ? currentuser.user.referer_code : null)} > Send Referral
       </span>, '8', <BsSendCheckFill />),
        getItem( <span onClick={()=> {logOutUser(()=>{},setCurrentPatient,setActive_practiceId,setToken, setRole);
       router.push('/') 
    }
    
    } >LogOut</span> , '6', <LogoutOutlined/>),
        // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        //   getItem('Option 9', '9'),
        //   getItem('Option 10', '10'),
        //   getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
        // ]),
      ];

  return (
    <div className='flex w-full box-border'>

        
        <div className='bg-[#001529] h-screen sticky'>
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu onMouseEnter={toggleCollapsed}
        onMouseLeave={toggleClosed}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={!collapsed}
        items={items}
      />
    </div>
    
        <div className='w-full block flex-grow transition-all'>
          <div className='flex justify-between shadow-orange-500 shadow-lg bg-gradient-to-l  from-orange-700 via-orange-100 to-orange-700 p-3'>
            <div className='font-bold text-1xl'>{currentuser ? currentuser.role_data?.name : ''} Dashboard</div>
            <div>Welcome {currentuser ? currentuser.user.first_name : ''}</div>
          </div>
        {children}

        </div>

        <Modal title="Profile Verification" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >

          <SteponeVerifiacation currentPatient={currentPatient} setCurrentPatientFn = {setCurrentPatient} />

        </Modal>  

    </div>
     )
    }
    
    export default LayoutDoctor;