'use client'
import React, { useState } from 'react';
import {Modal, Form, Input, Select, Button} from 'antd';
import { HiOutlineChatAlt2,  } from "react-icons/hi";
import { MdPriceChange } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import { FaFilePrescription } from "react-icons/fa";



const { TextArea } = Input;
const onChange = (e) => {
    console.log(e);
  };

const Request_Appointment = () => {

const [componentSize, setComponentSize] = useState('default');
const onFormLayoutChange = ({ size }) => {
  setComponentSize(size);
};


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
      <>
          <p className='text-black font-bold p-1 md:p-0 rounded-xl whitespace-nowrap hover:text-blue-700' onClick={showModal}>Register Now</p>
        
        <Modal 
            title={<div className="bg-amber-800 text-white text-center rounded-t-lg p-2 mt-5 text-xl">Request Appointment</div>} 
            open={isModalOpen} 
            onOk={handleOk} 
            onCancel={handleCancel}
            okButtonProps={{hidden: true}}>

            <div class='p-5 bg-slate-100 rounded-xl'>
            <div class='flex gap-2'>
                <p><MdPriceChange size={'2em'} /> Book at Rs 200/ only</p>
                <p><HiOutlineChatAlt2 size={'2em'}/> Get Appointment Within 10 mins</p>
                <p><BsStopwatch size={'2em'}/> Free follow up for 7 days</p>
                <p><FaFilePrescription size={'2em'}/>  Get a valid prescription</p>
            </div>

                <div className='mt-5'>
                    <Form
                        onValuesChange={onFormLayoutChange}
                        size={componentSize}
                        style={{
                            maxWidth: 600,
                        }}
                        >

                        <Form.Item>
                            <Input placeholder="Full Name" />
                        </Form.Item>

                        <Form.Item>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Input placeholder="Mobile Number" style={{ marginRight: '8px' }} />
                                <Input placeholder="Pin Code" />
                            </div>
                        </Form.Item>


                        <Form.Item>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Input placeholder="City" style={{ marginRight: '8px' }} />
                                <Input placeholder="State" />
                            </div>
                        </Form.Item>

                        <Form.Item>
                            <Select
                                placeholder="Select Doctor's Speciallization">
                                <Select.Option value="All_CKD">All Chronic Disease</Select.Option>
                                <Select.Option value="All_Type_Pain">All Type of Pain</Select.Option>
                            </Select>
                        </Form.Item>


                        <TextArea placeholder="Please provide details about your health concerns" allowClear onChange={onChange} />

                          <p className='p-4'>I agree to the Terms & Conditions of Requesting Appointment</p>

                        <div className="flex justify-center items-center p-2 mt-3 rounded-xl">
                          <button className="text-xs px-32 py-3 bg-orange-800 text-white rounded-md hover:bg-orange-600" type="link" htmlType="button">Submit</button>
                        </div>


                    </Form>
                </div>
            </div>
        </Modal>
      </>
    );
  };
  export default Request_Appointment;