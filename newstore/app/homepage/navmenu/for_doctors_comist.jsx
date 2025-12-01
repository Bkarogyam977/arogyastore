'use client'
import { Dropdown } from 'antd';
import React from 'react';
import Link from 'next/link';

function For_Doctors_Comist() {
    const menuItems = [
        {
            type: 'group',
            label: 'Partnership',
            children: [
                {
                    key: 'bk-partner',
                    label: <Link href="/login">Bk Partner</Link>
                },
                {
                    key: 'arogyam-doctor',
                    label: <Link href="/doctor">Arogyam Doctor</Link>
                },
                {
                    key: 'allopath-to-ayurveda',
                    label: <Link href="/AllopathToAyurveda">Allopath To Ayurveda</Link>
                },
                {
                    key: 'arogyam-tool',
                    label: <a href="https://healdiway.bkarogyam.com/" rel="noopener noreferrer">Arogyam Tool</a>
                }
            ]
        },
        {
            type: 'group',
            label: 'Learning',
            children: [
                {
                    key: 'learning',
                    label: <Link href="/learning">Learning</Link>
                },
                {
                    key: 'feed',
                    label: <Link href="/feed">Feed</Link>,
                    className: 'bg-gradient-to-t from-slate-100 to-blue-100'
                },
                {
                    key: 'webinar',
                    label: <Link href="/webinar">Webinar</Link>
                },
                {
                    key: 'quizzes',
                    label: <Link href="/quizzes">Quiz</Link>
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
                For Partners
            </p>
        </Dropdown>
    );
}

export default For_Doctors_Comist;