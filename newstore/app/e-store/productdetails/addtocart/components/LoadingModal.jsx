// components/LoadingModal.jsx
'use client'
import React from 'react';
import { Modal, Spin, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingModal = ({ isOpen, status }) => {
  const getContent = () => {
    switch(status) {
      case 'generating-order':
        return (
          <Space direction="vertical" align="center">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
            <p className="mt-4">Generating your order...</p>
          </Space>
        );
      case 'initializing-payment':
        return (
          <Space direction="vertical" align="center">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
            <p className="mt-4">Initializing payment system...</p>
          </Space>
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      open={isOpen}
      footer={null}
      closable={false}
      centered
      width={350}
    >
      <div className="p-6 text-center">
        {getContent()}
      </div>
    </Modal>
  );
};

export default LoadingModal;