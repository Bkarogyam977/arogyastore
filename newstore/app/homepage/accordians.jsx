'use client'
import {Collapse, Divider} from 'antd';
import React from 'react';



const items = [
    {
      key: '1',
      label: 'What is the Arogya Bharat ?',
      children: <p>Arogya Bharat is a non-profit organization dedicated to providing quality healthcare to the poor and underprivileged in India. It was founded in 2005 by Dr. BK Chaurasia, a renowned Indian physician, author, and medical educationist.</p>,
    },
    {
      key: '2',
      label: 'Will this be live or pre-recorded ?',
      children: <p>It is a completely offline Program</p>,
    },
    {
      key: '3',
      label: 'Is it a certified Frachise Program ?',
      children: <p>Absolutely. You will be certified by three types of certificates through Arogya Bharat founder – Dr.Bk Chaurasia who have jointly built multiple 8 figure companies .</p>,
    },
    {
      key: '4',
      label: 'What should I be prepared with before the MicroFranchise starts ?',
      children: <p>Make sure you have space 200 Square feet place and Computer Knowledge Basic and minimum age 18 year old</p>,
    },
    {
      key: '5',
      label: 'I made the Submit information but did not receive any email',
      children: <p>Please write to us at Whatsappchatbot & our awesome support team will get back to you as soon as possible.</p>,
    },
  ];
  
  
  const Accordian = () => 
  
    <div className='container mx-auto p-6'>
      <Divider orientation="center">
        <p className='text-black md:text-4xl text-xl'>Frequently Asked Questions(FAQs)</p>
      </Divider>
      <div className='md:px-4'><Collapse  expandIconPosition="end" accordion items={items} /></div>
    </div>;
  
  export  {Accordian}