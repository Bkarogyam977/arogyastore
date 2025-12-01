'use client'
import React from "react";
import { Form, Input, Button, Checkbox, Select, Modal } from "antd";
import { UserOutlined, MobileOutlined, HomeOutlined, EnvironmentOutlined, FlagOutlined, BankOutlined, GlobalOutlined, TagOutlined, CaretDownOutlined, CheckOutlined, PlusCircleFilled } from "@ant-design/icons";

const NewAddressForm = ({ isOpen, onClose, onSubmit, country }) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      destroyOnClose={true}
      width={600}
      centered
    >
      <div className="flex items-center mb-6">
        <PlusCircleFilled className="text-primary text-2xl mr-3" />
        <h2 className="text-2xl font-semibold text-gray-800 m-0">Add New Address</h2>
      </div>
      
      <Form onFinish={onSubmit} layout="vertical">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Form.Item name="fullname" label="Full Name" rules={[{ required: true }]}>
              <Input placeholder="John Doe" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item name="mobile" label="Mobile Number" rules={[{ required: true, pattern: /^[0-9]{10}$/ }]}>
              <Input placeholder="9876543210" prefix={<MobileOutlined />} maxLength={10} />
            </Form.Item>
            <Form.Item name="building" label="Building/Apartment" rules={[{ required: true }]}>
              <Input placeholder="Building details" prefix={<HomeOutlined />} />
            </Form.Item>
            <Form.Item name="street" label="Street/Area" rules={[{ required: true }]}>
              <Input placeholder="Street name or area" prefix={<EnvironmentOutlined />} />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="landmark" label="Landmark (Optional)">
              <Input placeholder="Near famous location" prefix={<FlagOutlined />} />
            </Form.Item>
            <Form.Item name="city" label="City" rules={[{ required: true }]}>
              <Input placeholder="Your city" prefix={<BankOutlined />} />
            </Form.Item>
            <Form.Item name="state" label="State" rules={[{ required: true }]}>
              <Input placeholder="Your state" prefix={<GlobalOutlined />} />
            </Form.Item>
            <Form.Item name="pincode" label="Pincode" rules={[{ required: true, pattern: /^[0-9]{6}$/ }]}>
              <Input placeholder="6-digit pincode" prefix={<TagOutlined />} maxLength={6} />
            </Form.Item>
            <Form.Item name="country" label="Country" rules={[{ required: true }]}>
              <Select options={country} suffixIcon={<CaretDownOutlined />} />
            </Form.Item>
          </div>
        </div>

        <Form.Item name="is_default" valuePropName="checked" className="mb-6">
          <Checkbox>Set as default shipping address</Checkbox>
        </Form.Item>

        <div className="flex justify-end gap-4">
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" htmlType="submit" icon={<CheckOutlined />}>
            Save Address
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default NewAddressForm;



