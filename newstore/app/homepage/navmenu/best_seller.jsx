'use client'
import { Menu, Dropdown } from 'antd';
import React from 'react';
import Link from 'next/link';

function BestSellers() {
  const menuItems = [
    {
      type: 'group',
    //   label: <span className="text-lg font-semibold">Treatment</span>,
      children: [
        {
          key: 'Slim-Tea',
          label: <Link href="/e-store/productdetails/2512" className="text-lg font-semibold">Slim Tea</Link>
        },
        {
          key: 'Green-Tea',
          label: <Link href="/e-store/productdetails/2651" className="text-lg font-semibold">Green Tea Tablet</Link>
        },
        {
          key: 'Shilajit',
          label: <Link href="/e-store/productdetails/3136" className="text-lg font-semibold">Arogya Bharat Shilajit</Link>
        },
        {
          key: 'Multivitamin',
          label: <Link href="/e-store/productdetails/1003" className="text-lg font-semibold">Multivitamin</Link>
        },
        {
          key: 'Nasha-Mukti',
          label: <Link href="/e-store/productdetails/1217" className="text-lg font-semibold">Nasha Mukti</Link>
        }
      ]
    },
    {
      type: 'group',
      label: <span className="text-lg font-semibold">Services</span>,
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
      overlayClassName="custom-dropdown" // Custom class for dropdown
    >
      <p className="ant-dropdown-link text-black text-lg font-bold" onClick={(e) => e.preventDefault()}>
        Best Sellers
      </p>
    </Dropdown>
  );
}

export default BestSellers;