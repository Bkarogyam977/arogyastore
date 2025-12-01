
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MedicineBoxOutlined, HeartOutlined, SmileOutlined, AppleOutlined, StarFilled, CheckOutlined } from "@ant-design/icons";
import { Modal, Form, Input, Select, Button, message } from "antd";


function ForAssociates() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [form] = Form.useForm();
    const router = useRouter();

    const categories = ["Active Partner Plan", "Prime Partner Plan", "Elite Partner Plan", "Ultimate Partner Plan"];
    
    const businessPlans = [
        {
            title: "Active Partner",
            link: "/business-opportunity/active-partner",
            image: "/images/imageBox/icons/partner-active.jpeg",
            description: "₹7,999 investment | 10% commission + team earnings.",
            bgGradient: "bg-gradient-to-br from-blue-500 to-blue-700",
            btnGradient: "bg-gradient-to-r from-green-400 to-green-500",
            category: "Active Partner",
        },
        {
            title: "Prime Partner",
            link: "/business-opportunity/prime-partner",
            image: "/images/imageBox/icons/partner-prime.png",
            description: "₹25,000 investment | Arogya Point + 50% discount on products.",
            bgGradient: "bg-gradient-to-br from-purple-600 to-purple-700",
            btnGradient: "bg-gradient-to-r from-teal-400 to-teal-500",
            category: "Prime Partner",
        },
        {
            title: "Elite Partner",
            link: "/business-opportunity/elite-partner",
            image: "/images/imageBox/icons/partner-elite.jpeg",
            description: "₹50,000 investment | Premium benefits + Arogya Point power.",
            bgGradient: "bg-gradient-to-br from-purple-600 to-purple-700",
            btnGradient: "bg-gradient-to-r from-teal-400 to-teal-500",
            category: "Elite Partner",
        },
        {
            title: "Ultimate Partner",
            link: "/business-opportunity/ultimate-partner",
            image: "/images/imageBox/icons/partner-ultimate.jpeg",
            description: "₹1,00,000 investment | Retail rights + Arogya Point + full perks.",
            bgGradient: "bg-gradient-to-br from-yellow-400 to-yellow-500",
            btnGradient: "bg-gradient-to-r from-blue-500 to-blue-600",
            category: "Ultimate Partner",
        }
    ];


    const products = [
        {
            icon: <MedicineBoxOutlined className="text-blue-500 text-5xl mx-auto" />,
            title: "Healthcare Products",
            description: "High-quality medicines, supplements, and wellness products.",
        },
        {
            icon: <HeartOutlined className="text-red-500 text-5xl mx-auto" />,
            title: "Diagnostic Services",
            description: "Accurate and affordable diagnostic tests and screenings.",
        },
        {
            icon: <SmileOutlined className="text-purple-500 text-5xl mx-auto" />,
            title: "Therapy Services",
            description: "Advanced therapy options for holistic wellness.",
        },
        {
            icon: <AppleOutlined className="text-green-500 text-5xl mx-auto" />,
            title: "Food Products",
            description: "Nutritious and organic food products for a healthy lifestyle.",
        },
    ];


    useEffect(() => {
        if (isModalOpen) {
            form.setFieldsValue({ category: selectedCategory });
        }
    }, [isModalOpen, selectedCategory, form]);


    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
        if (!isModalOpen) {
            form.resetFields();
            setSelectedCategory(null);
        }
    };



    const openModal = (category = null) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
    };

    // const handleSubmit = async (values) => {
    //     setLoading(true);
    //     try {
    //         const response = await fetch('https://main.bkarogyam.com/bkapienquiry/', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(values),
    //         });

    //         if (response.ok) {
    //             message.success('Application submitted successfully!');
    //             form.resetFields();
    //             setIsModalOpen(false);
    //         } else {
    //             message.error('Submission failed. Please try again.');
    //         }
    //     } catch (error) {
    //         message.error('An error occurred. Please try again.');
    //     } finally {
    //         setLoading(false);
    //     }
    // };


    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            // Prepare data for lead-funnel API
            const leadData = {
                name: values.name,
                mobile: values.mobile,
                source: "ArogyaBharat",
                lead_name: values.category, // Using the selected category as lead_name
                hot: false,
                worm: false,
                cold: false,
            };

            // Send to lead-funnel API 
            const response = await fetch('https://healdiway.bkarogyam.com/erp-api/funnel-lead/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(leadData),
            });

            if (response.ok) {
                message.success('Application submitted successfully!');
                form.resetFields();
                setIsModalOpen(false);
            } else {
                message.error('Submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            message.error('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
                <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl mb-4 leading-tight">
                        Arogya Bharat: <span className="text-orange-300">Healthy India, Prosperous India</span>
                        </h1>
                        <p className="text-xl text-white max-w-2xl mx-auto">
                        Join India&apos;s first economical healthcare startup. Empower yourself with Ayurveda, deliver health to every home, and achieve financial freedom by promoting trusted products backed by 45 years of expertise.
                        </p>
                    </div>
                </div>
                {/* Decorative wave element, adjusted to match blue theme */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-blue-50 transform skew-y-1 -mb-8 z-10"></div>
            </section>

            {/* Trust Indicators */}
            <div className="bg-white py-12 shadow-sm">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "44+", label: "Years Experience" },
                            { value: "100K+", label: "Patients Served" },
                            { value: "100+", label: "Expert Doctors" },
                            { value: "5+", label: "Clinics Nationwide" }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">{item.value}</div>
                                <div className="text-lg text-gray-600">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Premium Business Opportunity Section - Mobile Optimized */}
            <section className="py-8 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-green-600 mb-3 md:mb-4">
                        Why Partner With ArogyaBharat?
                    </h2>
                    <div className="w-16 md:w-24 h-0.5 bg-blue-600 mx-auto mb-4 md:mb-6"></div>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-2 sm:px-0">
                        Join India&apos;s most trusted Ayurvedic healthcare network with proven systems, 
                        comprehensive support, and exceptional profitability potential.
                    </p>
                    </div>
    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {[
                        {
                        title: "Proven System",
                        description: "44+ years of established success",
                        stat: "300+ Formulations",
                        icon: <StarFilled className="text-blue-100 group-hover:text-blue-400 text-3xl sm:text-4xl" />
                        },
                        {
                        title: "Low Investment",
                        description: "Most affordable setup across India",
                        stat: "₹50k-5L Range",
                        icon: <MedicineBoxOutlined className="text-blue-100 group-hover:text-blue-400 text-3xl sm:text-4xl" />
                        },
                        {
                        title: "High Profitability",
                        description: "Consistent returns on investment",
                        stat: "20-40% Gross Profit",
                        icon: <HeartOutlined className="text-blue-100 group-hover:text-blue-400 text-3xl sm:text-4xl" />
                        },
                        {
                        title: "Minimized Risk",
                        description: "Comprehensive training & support",
                        stat: "150+ Patents",
                        icon: <CheckOutlined className="text-blue-100 group-hover:text-blue-400 text-3xl sm:text-4xl" />
                        }
                    ].map((feature, index) => (
                        <div 
                        key={index} 
                        className="group relative bg-white p-4 sm:p-6 border border-gray-100 rounded-lg hover:border-blue-100 transition-all duration-300 shadow-xs hover:shadow-sm"
                        >
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-lg"></div>
                        
                        <div className="flex flex-col h-full">
                            <div className="flex-grow">
                            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-1 sm:mb-2">{feature.title}</h3>
                            <p className="text-sm sm:text-base text-gray-500 mb-3 sm:mb-4 hidden md:block">{feature.description}</p>
                            <div className="text-blue-600 font-medium text-base sm:text-lg">
                                {feature.stat}
                            </div>
                            </div>
                            
                            <div className="mt-3 sm:mt-0 text-right">
                            {feature.icon}
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
    
                    <div className="mt-12 md:mt-16 text-center">
                    <button 
                        onClick={() => openModal()}
                        className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md font-medium transition-colors duration-200 inline-flex items-center text-sm sm:text-base"
                    >
                        <span>Request Partnership Details</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                    </div>
                </div>
            </section>


            {/* Business Plans Grid - Mobile Optimized */}
            <section className="py-8 sm:py-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-4 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                        Explore Business <span className="text-blue-600">Opportunities</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                        Tailored solutions for healthcare entrepreneurs at every level
                    </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {businessPlans.map((plan, index) => (
                        <div 
                        key={index}
                        className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                        >
                        {/* Image */}
                        <div className="p-3">
                            <Link href={plan.link}>
                            <Image
                                className="w-full h-40 sm:h-48 object-cover hover:scale-[1.02] transition-transform duration-300"
                                src={plan.image}
                                alt={plan.title}
                                width={300}
                                height={200}
                            />
                            </Link>
                        </div>
                        
                        {/* Content */}
                        <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                            <h3 className="text-md font-bold mb-2 text-gray-800 text-center">{plan.title}</h3>
                            <p className="text-xs sm:text-sm text-gray-600 mb-3 text-center line-clamp-2">
                            {plan.description}
                            </p>
                            
                            {/* Buttons - Stacked on mobile, inline on larger screens */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                            <button
                                onClick={() => openModal(plan.category)}
                                className={`bg-gradient-to-r ${plan.btnGradient} text-white py-2 px-3 rounded-md sm:rounded-lg font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity`}
                            >
                                Apply Now
                            </button>
                            <Link href={plan.link} className="w-full sm:w-auto">
                                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 rounded-md sm:rounded-lg font-medium text-xs sm:text-sm transition-colors">
                                Know More
                                </button>
                            </Link>
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>


            {/* Product Showcase */}
            <section className="py-12 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Our Best-Selling Ayurvedic Solutions</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                    Doctor-approved formulations with proven results
                    </p>
                </div>
    
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                    { name: "Gluco Veda", category: "Diabetes", margin: "25%", img:"/images/imageBox/brands/GlucoVeda.png" },
                    { name: "Cardio Veda", category: "Heart Care", margin: "30%", img:"/images/imageBox/brands/CardioVeda.png" },
                    { name: "Kidney Veda", category: "Renal Care", margin: "25%",img:"/images/imageBox/brands/KidneyVeda.png" },
                    { name: "Slim Veda", category: "Weight Loss", margin: "20%",img:"/images/imageBox/brands/SlimVeda.png" },
                    { name: "OrthoVeda", category: "Pain Relief", margin: "25%",img:"/images/imageBox/brands/ArthoVeda.png" },
                    { name: "Rupam", category: "Skin Care", margin: "25%", img:"/images/imageBox/brands/rupam_logo.png" }
                    ].map((product, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                        {/* <div className="h-32 bg-gray-200"> */}
                            <div className="h-40 sm:h-48 relative overflow-hidden bg-gray-100">
                                <Image
                                src={product.img}
                                alt={`${product.name} - ${product.category}`}
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                />
                            </div>
                        {/* </div> */}
                        <div className="p-3">
                        <h3 className="font-bold">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            {product.margin} margin
                        </span>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>


            {/* Products & Services Section */}
            <section className="py-10 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Comprehensive Offerings
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Products and services that deliver real value to your customers
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {products.map((product, index) => (
                            <div key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                                <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center">
                                    {product.icon}
                                </div>
                                <h3 className="text-md font-bold text-center mb-3">{product.title}</h3>
                                <p className="text-sm text-gray-600 text-center">{product.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Application Modal */}
            {/* <Modal
                title={<span className="text-2xl font-bold text-gray-800">Business Opportunity Application</span>}
                open={isModalOpen}
                onCancel={handleModalToggle}
                footer={null}
                centered
                className="rounded-lg max-w-md"
            >
                <div className="p-2">
                    <Form form={form} onFinish={handleSubmit} layout="vertical">
                        <Form.Item
                            name="name"
                            label={<span className="font-medium">Full Name</span>}
                            rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                            <Input 
                                placeholder="John Doe" 
                                size="large" 
                                className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
                            />
                        </Form.Item>

                        <Form.Item
                            name="mobile"
                            label={<span className="font-medium">Mobile Number</span>}
                            rules={[
                                { required: true, message: 'Please enter your mobile number' },
                                { pattern: /^[0-9]{10}$/, message: 'Invalid mobile number' }
                            ]}
                        >
                            <Input 
                                placeholder="9876543210" 
                                maxLength={10} 
                                size="large" 
                                className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
                            />
                        </Form.Item>

                        <Form.Item
                            name="category"
                            label={<span className="font-medium">Business Category</span>}
                            rules={[{ required: true, message: 'Please select a category' }]}
                        >
                            <Select 
                                size="large" 
                                placeholder="Select category"
                                className="rounded-lg border-gray-300 hover:border-blue-400"
                            >
                                {categories.map(cat => (
                                    <Select.Option key={cat} value={cat}>{cat}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item className="mt-8">
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                size="large"
                                block
                                className="bg-blue-600 hover:bg-blue-700 h-12 rounded-lg font-bold text-lg"
                            >
                                Submit Application
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal> */}

            <Modal
                title={<span className="text-2xl font-bold text-gray-800">Business Opportunity Application</span>}
                open={isModalOpen}
                onCancel={handleModalToggle}
                footer={null}
                centered
                className="rounded-lg max-w-md"
            >
                <div className="p-2">
                    <Form form={form} onFinish={handleSubmit} layout="vertical">
                        <Form.Item
                            name="name"
                            label={<span className="font-medium">Full Name</span>}
                            rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                            <Input 
                                placeholder="John Doe" 
                                size="large" 
                                className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
                            />
                        </Form.Item>

                        <Form.Item
                            name="mobile"
                            label={<span className="font-medium">Mobile Number</span>}
                            rules={[
                                { required: true, message: 'Please enter your mobile number' },
                                { pattern: /^[0-9]{10}$/, message: 'Invalid mobile number' }
                            ]}
                        >
                            <Input 
                                placeholder="9876543210" 
                                maxLength={10} 
                                size="large" 
                                className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
                            />
                        </Form.Item>

                        <Form.Item
                            name="category"
                            label={<span className="font-medium">Business Category</span>}
                            rules={[{ required: true, message: 'Please select a category' }]}
                        >
                            <Select 
                                size="large" 
                                placeholder="Select category"
                                className="rounded-lg border-gray-300 hover:border-blue-400"
                            >
                                {categories.map(cat => (
                                    <Select.Option key={cat} value={cat}>{cat}</Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item className="mt-8">
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                size="large"
                                block
                                className="bg-blue-600 hover:bg-blue-700 h-12 rounded-lg font-bold text-lg"
                            >
                                Submit Application
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>

        </div>
    );
}


export default ForAssociates;



