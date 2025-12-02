'use client'
import { Menu, Dropdown } from 'antd';
import React from 'react';
import Link from 'next/link';

function ShopByCatagory() {
  const menuItems = [
    {
      type: 'group',
    //   label: 'Treatment',
      children: [
        {
          key: 'Hair-Care',
          label: <Link href="/e-store/categoryproduct/328" className="text-lg font-semibold">Hair Care</Link>
        },
        {
          key: 'Immunity-Boosters',
          label: <Link href="/e-store/categoryproduct/235" className="text-lg font-semibold">Immunity Boosters</Link>
        },
        {
          key: 'Sexual-Wellness',
          label: <Link href="/e-store/categoryproduct/244" className="text-lg font-semibold">Sexual Wellness</Link>
        },
        {
          key: 'womwen-care',
          label: <Link href="/e-store/categoryproduct/328" className="text-lg font-semibold">Women Care</Link>
        },
        {
          key: 'Stomach-care',
          label: <Link href="/e-store/categoryproduct/239" className="text-lg font-semibold">Stomach Care</Link>
        }
      ]
    },
    {
      type: 'group',
      label: 'Services',
      children: [
        {
          key: 'arogyadham',
          label: <Link href="/services/arogyadham" className="text-lg font-semibold">Arogyadham</Link>
        },
        {
          key: 'panchkarma',
          label: <Link href="/services/panchkarma" className="text-lg font-semibold">Panchakarma</Link>
        },
        {
          key: 'yogya-bharat',
          label: <Link href="https://www.yogyabharat.com/" className="text-lg font-semibold">Our Academy Yogya Bharat</Link>
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
        Shop By Catagory
      </p>
    </Dropdown>
  );
}

export default ShopByCatagory;