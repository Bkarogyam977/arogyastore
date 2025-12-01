
'use client'
import React, { useEffect, useState } from 'react';
import Register from './Register';
import Login from './Login';
import LoginWithPhonedoctor from './LoginwithPhone';
import Image from 'next/image';
import {
  
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import LastPayout from '@/components/doctor/dashboard/LastPayout';
import useUserStore from './justand';
import { Col, Row } from 'antd';
import MonthlyTurnoverDashboardWidget from '@/components/doctor/dashboard/MonthlyTurnoverDashboardWidget';
import TopAdvisors from '@/components/doctor/dashboard/TopAdvisors';
import { useRouter } from 'next/navigation';

const Page = () => {
  
  const userdata = useUserStore((state)=> state.currentPatient)

  const [button, setButton] = useState(true);
  const router = useRouter();
  const [userd, setUser] = useState();

  const onButtonClick = () => {
    setButton(false);
    console.log('click');
  };
  useEffect(()=>{
  //  if( !userdata){
  //   router.push('/register')
  //  }
   setUser(userdata);

  },[userdata])

  return (

   userd && userd.id  && <div>
   
         <Row className='mt-5 mx-10 box-border' gutter={16} style={{marginBottom:20}}>
        <Col className='' xs={23} sm={23} md={16} lg={16}>
            <MonthlyTurnoverDashboardWidget currentPatient={ userdata}/>
        </Col>
        <Col className='' xs={23} sm={23} md={8} lg={8}>
            <LastPayout currentPatient={ userdata}/>
        </Col>
         </Row>
            <Row>
        <Col  xs={23} sm={23} md={16} lg={16}>
            <TopAdvisors currentPatient={ userdata}/>
         </Col>
      </Row>
</div>
  );
};

export default Page;
