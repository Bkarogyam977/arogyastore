"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Modal, Form, Input, Select, Button, message } from "antd";

function Medicos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [form] = Form.useForm();
  const router = useRouter();

  const medicoPlans1 = [
    {
      title: "Arogya Hub (For Doctors)",
      link: "/business-opportunity/doctors-franchise",
      image: "/images/imageBox/icons/Franchise-doctor.png",
      description:
        "₹5,00,000 investment | Full Arogya Hub setup with Arogya Point access.",
      bgGradient: "bg-gradient-to-br from-red-500 to-red-700",
      btnGradient: "bg-gradient-to-r from-yellow-400 to-yellow-500",
      category: "Franchise (Doctors)",
    },
    {
      title: "Associates Doctor",
      link: "/business-opportunity/doctors-associate",
      image: "/images/imageBox/icons/Franchise-asssociate-doctor.png",
      description:
        "₹1,00,000 investment | Small scale Arogya Hub option for Arogya Point.",
      bgGradient: "bg-gradient-to-br from-orange-400 to-orange-600",
      btnGradient: "bg-gradient-to-r from-orange-500 to-yellow-400",
      category: "Associates Doctor",
    },
  ];

  const medicoPlans = [
    {
      title: "Referals",
      link: "/business-opportunity/doctors-franchise",
      image: "/images/imageBox/icons/NonMedicos_MLM.jpeg",
      description:
        "₹5,00,000 investment | Full Arogya Hub setup with Arogya Point access.",
      bgGradient: "bg-gradient-to-br from-red-500 to-red-700",
      btnGradient: "bg-gradient-to-r from-yellow-400 to-yellow-500",
      category: "Franchise (Doctors)",
    },
    {
      title: "Treat Our Patients",
      link: "/business-opportunity/doctors-associate",
      image: "/images/imageBox/icons/happy-doctor.png",
      description:
        "₹1,00,000 investment | Small scale Arogya Hub option for Arogya Point.",
      bgGradient: "bg-gradient-to-br from-orange-400 to-orange-600",
      btnGradient: "bg-gradient-to-r from-orange-500 to-yellow-400",
      category: "Associates Doctor",
    },
    {
      title: "Our Healing Packages",
      link: "/business-opportunity/doctors-associate",
      image: "/images/imageBox/icons/Franchise-asssociate-doctor.png",
      description:
        "₹1,00,000 investment | Small scale Arogya Hub option for Arogya Point.",
      bgGradient: "bg-gradient-to-br from-orange-400 to-orange-600",
      btnGradient: "bg-gradient-to-r from-orange-500 to-yellow-400",
      category: "Associates Doctor",
    },
  ];

  useEffect(() => {
    if (isModalOpen && selectedCategory) {
      form.setFieldsValue({ category: selectedCategory });
    }
  }, [isModalOpen, selectedCategory, form]);

  const handleModalToggle = () => {
    setIsModalOpen(false);
    form.resetFields();
    setSelectedCategory(null);
  };

  const openModal = (category = null) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Application submitted successfully!");
      form.resetFields();
      setIsModalOpen(false);
    }, 1500);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center">
          <div className="text-center px-4 md:pt-10">
            <h1 className="text-3xl font-bold text-white sm:text-3xl md:text-5xl mb-4 leading-tight">
              Join the Ayurvedic Revolution:{" "}
              <span className="text-orange-300">Heal, Refer & Grow</span>
            </h1>
            <p className="text-xl font-bold text-white max-w-2xl mx-auto md:pt-2">
              Become a part of our visionary Ayurvedic hospital network. Whether
              you want to treat patients at our center, refer them for healing,
              or own your own Ayurvedic Arogya Hub — we provide the platform,
              support, and trusted legacy built over 45 years. Let’s make
              holistic healthcare accessible and profitable together.
            </p>
          </div>
        </div>
      </section>

      <section
        id="medico-opportunities"
        className="md:px-20 md:py-16 p-3 bg-gradient-to-r from-red-50 via-yellow-50 to-pink-50"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold text-center md:mb-12 mb-5 text-gray-800">
            Business Opportunities for Medicos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {medicoPlans1.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-2xl hover:shadow-xl transition-shadow"
              >
                {/* Main content layout */}
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
                    <Link href={plan.link}>
                      <Image
                        className="rounded-lg w-full h-48 md:h-64 object-cover"
                        src={plan.image}
                        alt={plan.title}
                        width={300}
                        height={300}
                      />
                    </Link>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 md:pl-6 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-2 text-center md:text-left">
                      {plan.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-center md:text-left">
                      {plan.description}
                    </p>

                    {/* Buttons for mobile & desktop only */}
                    <div className="flex flex-wrap gap-4 justify-center md:hidden">
                      <button
                        onClick={() => openModal(plan.category)}
                        className={`bg-gradient-to-r ${plan.btnGradient} text-white py-2 font-bold px-3 rounded-xl`}
                      >
                        Apply Now
                      </button>
                      <Link href={plan.link}>
                        <button className="bg-gray-800 text-white font-bold py-2 px-3 rounded-xl hover:bg-gray-700 transition-colors">
                          Know More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Buttons for tablet only */}

                <div className="hidden md:flex lg:xl justify-center mt-6 gap-4">
                  <button
                    onClick={() => openModal(plan.category)}
                    className={`bg-gradient-to-r ${plan.btnGradient} text-white py-2 font-bold px-4 rounded-xl`}
                  >
                    Apply Now
                  </button>
                  <Link href={plan.link}>
                    <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded-xl hover:bg-gray-700 transition-colors">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section
        id="medico-opportunities"
        className="md:px-20 md:py-16 p-3 bg-gradient-to-r from-red-50 via-yellow-50 to-pink-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {medicoPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-2xl hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="w-full flex justify-center items-center mb-6">
                <Link href={plan.link}>
                  <Image
                    className="rounded-lg w-full h-48 md:h-64 object-cover"
                    src={plan.image}
                    alt={plan.title}
                    width={300}
                    height={300}
                  />
                </Link>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {plan.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {plan.description}
                </p>
                <div className="flex flex-row gap-4 justify-center">
                  <button
                    onClick={() => openModal(plan.category)}
                    className={`bg-gradient-to-r ${plan.btnGradient} text-white py-2 font-bold px-3 rounded-xl`}
                  >
                    Apply Now
                  </button>
                  <Link href={plan.link}>
                    <button className="bg-gray-800 text-white font-bold py-2 px-3  rounded-xl hover:bg-gray-700 transition-colors">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <Modal
        title="Apply Now"
        open={isModalOpen}
        onCancel={handleModalToggle}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ category: selectedCategory }}
        >
          <Form.Item
            name="name"
            label="Full Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "Please select category" }]}
          >
            <Select placeholder="Select category">
              <Select.Option value="Franchise (Doctors)">
                Franchise (Doctors)
              </Select.Option>
              <Select.Option value="Associates Doctor">
                Associates Doctor
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Medicos;
