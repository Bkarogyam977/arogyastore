'use client'
import {Collapse, Divider} from 'antd';
import React from 'react';



const items = [
    {
      key: '1',
      label: 'How do I the manage the orders',
      children: <p> We have a completely ready platform where you can manage your orders smoothly. You will get to know about this platform in detail once your registration process is completed and your account is activated after verification. Our dedicated team will help you to learn in detail about managing orders.</p>,
    },
    {
      key: '2',
      label: 'Who takes care of the delivery of my order',
      children: <p> We take complete responsibility for shipping your products to the buyer. Only you have to print the invoice that you will receive through mail when someone makes an order, Pack the order and attach the invoice above the package. Our logistic partner will pick up the package from you and deliver it to the buyer.
      </p>,
    },
  ];

  
  
  const Frequently_Asked_Questions = () => 
  
    <div className='w-full h-full mt-5 bg-gradient-to-t from-white to-slate-50 border-2 border-white my-5'>
      <Divider orientation="center">
        <p className='text-black md:text-3xl text-xl font-bold'>Frequently Asked Questions(FAQs)</p>
      </Divider>
      <div className='md:px-4'><Collapse  expandIconPosition="end" accordion items={items} /></div>
    </div>;
  
  export  default Frequently_Asked_Questions;