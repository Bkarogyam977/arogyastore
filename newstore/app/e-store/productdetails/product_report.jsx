"use client";
import React, { useState } from "react";
import { Button, Form, Input, Modal, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function ProductReport() {
  const [productName, setProductName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    if (!file) {
      message.error("Please upload a product image!");
      return;
    }

    console.log({
      customerName,
      mobile,
      email,
      productName,
      brand,
      description,
      price,
      file,
    });
    setIsModalOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Report
      </Button>

      <Modal
        title="Product Report"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={handleSubmit} layout="vertical">
          <Form.Item
            label="Your Name"
            name="customerName"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Mobile Number"
            name="mobile"
            rules={[{ required: true, message: "Please enter your mobile number!" }]}
          >
            <Input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Product Name"
            name="productName"
            rules={[{ required: true, message: "Please enter the product name!" }]}
          >
            <Input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Brand"
            name="brand"
            rules={[{ required: true, message: "Please enter the brand name!" }]}
          >
            <Input
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter the description!" }]}
          >
            <Input.TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please enter the price!" }]}
          >
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Product Image"
            name="file"
            valuePropName="file"
            rules={[{ required: true, message: "Please upload a product image!" }]}
          >
            <Upload
              beforeUpload={(file) => {
                setFile(file);
                return false;
              }}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item className="text-center bg-blue-600 rounded-lg">
            <Button type="primary" className="w-full" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default ProductReport;
