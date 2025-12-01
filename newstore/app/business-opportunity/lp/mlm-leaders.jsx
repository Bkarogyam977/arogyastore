
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MedicineBoxOutlined, HeartOutlined, SmileOutlined, StarFilled, CheckOutlined, DollarOutlined, TeamOutlined, TrophyOutlined } from "@ant-design/icons";
import { Modal, Form, Input, Select, Button, message, Carousel } from "antd";

function MLMLeaders() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [form] = Form.useForm();
    const router = useRouter();

    const activationPlans = [
        { name: "Starter Plan", price: "₹8,000", bonus: "50% discount" },
        { name: "Prime Plan", price: "₹25,000", bonus: "₹5,000 product bonus" },
        { name: "Pro Plan", price: "₹50,000", bonus: "30% extra products" },
        { name: "Elite Plan", price: "₹1,00,000", bonus: "40% extra + retail rights" }
    ];

    const products = [
        {
            icon: <MedicineBoxOutlined className="text-green-500 text-5xl" />,
            title: "Gluco Veda",
            description: "Ayurvedic diabetes management",
            tag: "Bestseller"
        },
        {
            icon: <HeartOutlined className="text-red-500 text-5xl" />,
            title: "Cardio Veda",
            description: "Heart health formulations",
            tag: "Award-winning"
        },
        {
            icon: <SmileOutlined className="text-purple-500 text-5xl" />,
            title: "Rupam",
            description: "Chemical-free beauty care",
            tag: "New"
        },
        {
            icon: <DollarOutlined className="text-blue-500 text-5xl" />,
            title: "Business Kit",
            description: "Starter package for distributors",
            tag: "Essential"
        }
    ];

    const earnings = [
        { level: "Personal Sales", income: "10-20% commission" },
        { level: "Team (10 members)", income: "₹25,000+/month" },
        { level: "Leadership Pool", income: "Up to ₹1,00,000+" }
    ];

    const handleSubmit=()=>{
        console.log("gd");
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-green-700 to-green-900 text-white py-24 px-6 md:pt-28">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-12 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Earn with Ayurveda
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-light mb-6">
                            Join India&apos;s Fastest-Growing Health & Wealth Network
                        </h2>
                        <p className="text-lg mb-8 max-w-lg">
                            Transform lives with B.K. Arogyam&apos;s proven Ayurvedic products and lucrative MLM plan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-6 rounded-lg text-lg"
                            >
                                Join Now - From ₹8,000
                            </button>
                            <button className="bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-6 rounded-lg text-lg border border-white">
                                Explore Products
                            </button>
                        </div>
                    </div>
                    {/* <div className="md:w-1/2">
                        <Image
                            src="/images/dr-chaurasia.png"
                            width={500}
                            height={500}
                            alt="Dr. BK Chaurasia"
                            className="rounded-lg shadow-2xl"
                        />
                    </div> */}
                </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {[
                            { value: "23+", label: "Years Experience" },
                            { value: "1Cr+", label: "YouTube Views" },
                            { value: "1Lakh+", label: "Subscribers" },
                            { value: "1000+", label: "Videos" }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold text-green-800 mb-1">{item.value}</div>
                                <div className="text-gray-600">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Testimonial */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden shadow-lg">
                        {/* Replace with actual video embed */}
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            <div className="text-center p-8">
                                <div className="text-5xl mb-4">▶️</div>
                                <h3 className="text-xl font-bold">Success Story: From ₹8,000 to ₹50,000/month</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Award-Winning Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="p-6 text-center">
                                    <div className="mb-4">{product.icon}</div>
                                    {product.tag && (
                                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                                            {product.tag}
                                        </span>
                                    )}
                                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                                    <p className="text-gray-600">{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">How Our MLM Plan Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: "1", title: "Sign Up", desc: "Choose an activation plan" },
                            { icon: "2", title: "Earn Directly", desc: "10-20% on personal sales" },
                            { icon: "3", title: "Build Team", desc: "4-level royalty income" },
                            { icon: "4", title: "Achieve Ranks", desc: "Unlock bonuses up to 20%" }
                        ].map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center text-green-800 text-2xl font-bold">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Income Potential */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">Your Earning Potential</h2>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-green-800 text-white">
                                <tr>
                                    <th className="py-3 px-4 text-left">Activity Level</th>
                                    <th className="py-3 px-4 text-right">Monthly Potential</th>
                                </tr>
                            </thead>
                            <tbody>
                                {earnings.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="py-3 px-4">{item.level}</td>
                                        <td className="py-3 px-4 text-right font-medium">{item.income}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center mt-4 text-gray-600">*Results vary based on effort and team building</p>
                </div>
            </section>


            {/* Awards Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Recognized Excellence</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { img: "/images/imageBox/business/Certificate-PrideOfBharat.png", alt: "Pride of India Award" },
                            { img: "/images/imageBox/business/Certificate-ROHINI.png", alt: "Indian Icon Award" },
                            { img: "/images/imageBox/business/India 5000 Award.jpg", alt: "National Business Leadership Award" },
                            { img: "/images/imageBox/business/AWARD-SUPER HERO.jpg", alt: "National Medical Award" }
                        ].map((award, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <Image
                                    src={award.img}
                                    width={220}
                                    height={220}
                                    alt={award.alt}
                                    className="mx-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Final CTA */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join now and get exclusive pre-launch benefits!
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-8 rounded-lg text-lg"
                        >
                            Join Our Team
                        </button>
                        <button className="bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-8 rounded-lg text-lg border border-white">
                            Attend Webinar
                        </button>
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            <Modal
                title={`Apply for ${selectedPlan || 'MLM Program'}`}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                centered
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                >
                    <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
                        <Input placeholder="Enter your full name" />
                    </Form.Item>
                    <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
                        <Input placeholder="Enter your phone number" />
                    </Form.Item>
                    <Form.Item name="plan" label="Select Plan">
                        <Select placeholder="Choose activation plan">
                            {activationPlans.map((plan, index) => (
                                <Select.Option key={index} value={plan.name}>
                                    {plan.name} - {plan.price}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            loading={loading}
                            className="w-full bg-green-600 hover:bg-green-700 h-10"
                        >
                            Submit Application
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default MLMLeaders;