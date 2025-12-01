'use client'
import { Menu, Dropdown } from 'antd';
import React from 'react';
import Link from 'next/link';

function ForIndividuals() {
  const menuItems = [
    {
      type: 'group',
      label: 'Treatment',
      children: [
        {
          key: 'heart-disease',
          label: <Link href="/homepage/HOPES/Heart">Heart Disease</Link>
        },
        {
          key: 'obesity',
          label: <Link href="/homepage/HOPES/Obesity">Obesity</Link>
        },
        {
          key: 'pain-management',
          label: <Link href="/homepage/HOPES/Pain">Pain Management</Link>
        },
        {
          key: 'everything-kidney',
          label: <Link href="/homepage/HOPES/EveryKidney">Everything-Kidney</Link>
        },
        {
          key: 'sugar-bp',
          label: <Link href="/homepage/HOPES/Sugar">Sugar/BP</Link>
        }
      ]
    },
    {
      type: 'group',
      label: 'Services',
      children: [
        {
          key: 'arogyadham',
          label: <Link href="/services/arogyadham">Arogyadham</Link>
        },
        {
          key: 'panchkarma',
          label: <Link href="/services/panchkarma">Panchakarma</Link>
        },
        {
          key: 'yogya-bharat',
          label: <Link href="https://www.yogyabharat.com/">Our Academy Yogya Bharat</Link>
        }
      ]
    }
  ];

  return (
    <Dropdown 
      menu={{ items: menuItems }} 
      placement="bottomLeft"
    >
      <p className="ant-dropdown-link text-black" onClick={(e) => e.preventDefault()}>
        For Patients
      </p>
    </Dropdown>
  );
}

export default ForIndividuals;