
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MedicineBoxOutlined, HeartOutlined, SmileOutlined, AppleOutlined, StarFilled, CheckOutlined } from "@ant-design/icons";
import { Modal, Form, Input, Select, Button, message } from "antd";


function BusinessOpportunity() {
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
            description: "₹25,000 investment | E-Clinic + 50% discount on products.",
            bgGradient: "bg-gradient-to-br from-purple-600 to-purple-700",
            btnGradient: "bg-gradient-to-r from-teal-400 to-teal-500",
            category: "Prime Partner",
        },
        {
            title: "Elite Partner",
            link: "/business-opportunity/elite-partner",
            image: "/images/imageBox/icons/partner-elite.jpeg",
            description: "₹50,000 investment | Premium benefits + E-Clinic power.",
            bgGradient: "bg-gradient-to-br from-purple-600 to-purple-700",
            btnGradient: "bg-gradient-to-r from-teal-400 to-teal-500",
            category: "Elite Partner",
        },
        {
            title: "Ultimate Partner",
            link: "/business-opportunity/ultimate-partner",
            image: "/images/imageBox/icons/partner-ultimate.jpeg",
            description: "₹1,00,000 investment | Retail rights + E-Clinic + full perks.",
            bgGradient: "bg-gradient-to-br from-yellow-400 to-yellow-500",
            btnGradient: "bg-gradient-to-r from-blue-500 to-blue-600",
            category: "Ultimate Partner",
        }
    ];

    const medicoPlans = [
        {
            title: "Franchise (For Doctors)",
            link: "/business-opportunity/doctors-franchise",
            image: "/images/imageBox/icons/Franchise-doctor.png",
            description: "₹5,00,000 investment | Full Arogya Hub setup with E-Clinic access.",
            bgGradient: "bg-gradient-to-br from-red-500 to-red-700",
            btnGradient: "bg-gradient-to-r from-yellow-400 to-yellow-500",
            category: "Franchise",
        },
        {
            title: "Associates Doctor",
            link: "/business-opportunity/doctors-associate",
            image: "/images/imageBox/icons/Franchise-asssociate-doctor.png",
            description: "₹1,00,000 investment | Small scale Arogya Hub option for clinics.",
            bgGradient: "bg-gradient-to-br from-orange-400 to-orange-600",
            btnGradient: "bg-gradient-to-r from-orange-500 to-yellow-400",
            category: "Micro Franchise",
        }
    ];
    
    const nonMedicoPlans = [
        {
            title: "For MLM Leaders",
            link: "/business-opportunity/for-mlm-leaders",
            image: "/images/imageBox/icons/NonMedicos_MLM.jpeg",
            description: "No fixed investment | Earn through team building and referrals.",
            bgGradient: "bg-gradient-to-br from-green-500 to-green-700",
            btnGradient: "bg-gradient-to-r from-green-400 to-green-600",
            category: "MLM",
        },
        {
            title: "Associate Program",
            link: "/business-opportunity/for-associates",
            image: "/images/imageBox/icons/NonMedicos_Asssociate.jpeg",
            description: "Join as an Associate and earn by promoting Ayurvedic solutions.",
            bgGradient: "bg-gradient-to-br from-cyan-500 to-cyan-700",
            btnGradient: "bg-gradient-to-r from-blue-300 to-cyan-500",
            category: "Associate",
        },
        {
            title: "For Influencers",
            link: "/business-opportunity/for-influencers",
            image: "/images/imageBox/icons/NonMedicos_Influencers.png",
            description: "Promote health and wellness. Earn through your audience reach.",
            bgGradient: "bg-gradient-to-br from-pink-500 to-pink-700",
            btnGradient: "bg-gradient-to-r from-pink-400 to-rose-500",
            category: "Influencer",
        },
        {
            title: "B2B Collaboration",
            link: "/business-opportunity/for-B2B",
            image: "/images/imageBox/icons/NonMedicos_B2B.png",
            description: "Bulk orders, corporate tie-ups, and distributorship options.",
            bgGradient: "bg-gradient-to-br from-gray-500 to-gray-700",
            btnGradient: "bg-gradient-to-r from-gray-400 to-gray-600",
            category: "B2B",
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


    const faqs = [
        {
            question: "What kind of support is provided to partners?",
            answer: "We offer comprehensive training, marketing materials, technical support for our E-Clinic platform, and ongoing operational guidance. Our goal is your success."
        },
        {
            question: "Is prior healthcare experience required for all opportunities?",
            answer: "Medical credentials are required for Doctor Franchise & Associate Doctor programs. For non-medical opportunities (MLM, Associate, Influencer, B2B), a passion for health and willingness to learn is sufficient."
        },
        {
            question: "How does the Arogya Bharat E-Clinic work?",
            answer: "Our E-Clinic is a state-of-the-art telehealth platform facilitating online consultations, digital patient records, e-prescriptions, and appointment management, enabling seamless virtual care."
        },
        {
            question: "What is the typical investment and earning potential?",
            answer: "Investment varies by program, from no fixed investment for some non-medical roles to higher for franchises. Earning potential is competitive and tied to your engagement and market reach. Detailed financial models are available upon inquiry."
        },
        {
            question: "How long does the partnership process take?",
            answer: "The process typically ranges from 2-6 weeks depending on the complexity of the chosen program and your readiness. We aim for efficient onboarding to get you started quickly."
        }
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


    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const response = await fetch('https://main.bkarogyam.com/bkapienquiry/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                message.success('Application submitted successfully!');
                form.resetFields();
                setIsModalOpen(false);
            } else {
                message.error('Submission failed. Please try again.');
            }
        } catch (error) {
            message.error('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };


    // FAQ Accordion Component
    const FAQItem = ({ question, answer }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div className="border-b border-gray-200 last:border-b-0">
                <button
                    className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-800 hover:text-indigo-600 focus:outline-none transition-colors duration-200"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="text-base sm:text-lg">{question}</span>
                    <span className="text-xl transform transition-transform duration-200">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                    <p className="pb-4 text-gray-600 text-sm sm:text-base leading-relaxed">{answer}</p>
                )}
            </div>
        );
    };
    


    return (
        <div className="bg-white">
            {/* Hero Section
            <div className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10 flex items-center">
                    <div className="container mx-auto px-6 lg:px-12 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Transform Lives & Build Wealth <br className="hidden lg:block" /> with ArogyaBharat
                        </h1>
                        <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto lg:mx-0">
                            Join India`&apos;`s fastest growing Ayurvedic healthcare network with proven business models and exceptional ROI
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button 
                                onClick={() => openModal()} 
                                className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Explore Opportunities
                            </button>
                            <Link 
                                href="/contact" 
                                className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Contact Our Team
                            </Link>
                        </div>
                    </div>
                </div>
                <Image
                    src="/images/imageBox/BusinessOportunity_Banner.png"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="Business opportunity banner"
                    priority
                />
            </div> */}

            {/* Section 1: Hero Section - Short Summary & Segmented CTAs */}
            <section className="relative bg-gradient-to-br from-sky-400 to-purple-300 text-white py-16 px-4 text-center overflow-hidden flex items-center justify-center min-h-[60vh] sm:min-h-[50vh]">
                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "url('/images/dots-pattern.png')", backgroundSize: '30px 30px', backgroundRepeat: 'repeat' }}></div>

                <div className="relative z-10 flex flex-col items-center max-w-sm md:max-w-5xl mx-auto md:pt-20"> {/* Smaller max-width for tighter mobile focus */}
                    <h1 className="text-3xl font-extrabold leading-tight mb-4 tracking-tight"> {/* Smaller header, but still bold */}
                        Opportunities with Arogya Bharat
                    </h1>
                    <p className="text-base opacity-90 mb-8"> {/* Concise summary */}
                        Whether you&apos;re a healthcare professional seeking to expand your reach or an ambitious entrepreneur looking to make a significant social impact, we provide the platform, support, and innovation for your success.
                    </p>

                    {/* Two Buttons in a Single Row (Flexbox for mobile/desktop) */}
                    <div className="flex flex-row space-x-4 w-full justify-center"> {/* Use flex-row, space-x for horizontal buttons */}
                        <a
                            href="#medico-opportunities"
                            className="flex-1 inline-block bg-green-500 text-white font-bold py-3 px-2 rounded-xl shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-base" // py, px adjusted for mobile, text-base
                        >
                            For Medicos
                        </a>
                        <a
                            href="#non-medico-opportunities"
                            className="flex-1 inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-2 rounded-xl shadow-lg hover:shadow-xl hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 text-base" // py, px adjusted for mobile, text-base
                        >
                            For Non-Medicos
                        </a>
                    </div>
                </div>
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

            {/* Premium Business Opportunity Section */}
            <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                    Why Partner With ArogyaBharat?
                </h2>
                <div className="w-24 h-0.5 bg-blue-600 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                    Join India`&apos;`s most trusted Ayurvedic healthcare network with proven systems, 
                    comprehensive support, and exceptional profitability potential.
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                    title: "Proven System",
                    description: "44+ years of established success",
                    stat: "300+ Formulations"
                    },
                    {
                    title: "Low Investment",
                    description: "Most affordable setup across India",
                    stat: "₹50k-5L Range"
                    },
                    {
                    title: "High Profitability",
                    description: "Consistent returns on investment",
                    stat: "20-40% Gross Profit"
                    },
                    {
                    title: "Minimized Risk",
                    description: "Comprehensive training & support",
                    stat: "150+ Patents"
                    }
                ].map((feature, index) => (
                    <div key={index} className="group relative bg-white p-8 border border-gray-100 rounded-lg hover:border-blue-100 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-lg"></div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-500 mb-4">{feature.description}</p>
                    <div className="text-blue-600 font-medium text-lg">
                        {feature.stat}
                    </div>
                    <div className="absolute bottom-4 right-4 text-blue-100 group-hover:text-blue-200 text-4xl transition-colors duration-300">
                        {index === 0 ? <StarFilled /> : 
                        index === 1 ? <MedicineBoxOutlined /> : 
                        index === 2 ? <HeartOutlined /> : <CheckOutlined />}
                    </div>
                    </div>
                ))}
                </div>

                <div className="mt-16 text-center">
                <button 
                    onClick={() => openModal()}
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 inline-flex items-center"
                >
                    <span>Request Partnership Details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
                </div>
            </div>
            </section>

            {/* Section for Medicos */}
            <section id="medico-opportunities" className="md:px-20 md:py-16 p-3 bg-gradient-to-r from-red-50 via-yellow-50 to-pink-50">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-extrabold text-center md:mb-12 mb-5 text-gray-800">
                        Business Opportunities for Medicos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {medicoPlans.map((plan, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-2xl hover:shadow-xl transition-shadow flex flex-col md:flex-row">
                                {/* Image on left for desktop, full width for mobile */}
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
                                
                                {/* Content on right for desktop, below image for mobile */}
                                <div className="md:w-1/2 md:pl-6 flex flex-col justify-center">
                                    <h3 className="text-xl font-semibold mb-2 text-center md:text-left">{plan.title}</h3>
                                    <p className="text-gray-600 mb-4 text-center md:text-left">{plan.description}</p>
                                    <div className="flex flex-row gap-4 justify-center md:justify-start">
                                        <button
                                            onClick={() => openModal(plan.category)}
                                            className={`bg-gradient-to-r ${plan.btnGradient} text-white py-2 px-6 rounded-md`}
                                        >
                                            Apply Now
                                        </button>
                                        <Link href={plan.link}>
                                            <button className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition-colors">
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

            {/* Section for Non-Medicos */}
            <section id="non-medico-opportunities" className="md:px-20 md:py-16 p-3 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-extrabold text-center md:mb-12 mb-5 text-gray-800">
                        Business Opportunities for Non-Medicos
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {nonMedicoPlans.map((plan, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-2xl hover:shadow-xl transition-shadow">
                                <Link href={plan.link}>
                                    <Image
                                        className="rounded-lg w-full h-48 object-cover"
                                        src={plan.image}
                                        alt={plan.title}
                                        width={250}
                                        height={200}
                                    />
                                </Link>
                                <div className="mt-6 text-center">
                                    <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                                    <p className="text-gray-600 mb-4">{plan.description}</p>
                                    <div className="flex justify-center gap-4">
                                        <button
                                            onClick={() => openModal(plan.category)}
                                            className={`bg-gradient-to-r ${plan.btnGradient} text-white py-2 px-6 rounded-md`}
                                        >
                                            Apply Now
                                        </button>
                                        <Link href={plan.link}>
                                            <button className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition-colors">
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

            {/* Section 2: The "Why" - Why Partner With Us? - Side-by-Side (Mobile: Stacked) */}
            <section className="py-16 px-6 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-12">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                            The Arogya Bharat Advantage: <br className="hidden sm:inline" /> Your Blueprint for Success
                        </h2>
                        <ul className="text-lg text-gray-700 space-y-4 list-disc list-inside">
                            <li>
                                <span className="font-semibold text-indigo-700">Proven Business Models:</span> Benefit from established and optimized frameworks for growth.
                            </li>
                            <li>
                                <span className="font-semibold text-indigo-700">High-Growth Market:</span> Tap into India&apos;s booming healthcare and wellness demand.
                            </li>
                            <li>
                                <span className="font-semibold text-indigo-700">Comprehensive Support:</span> Receive unparalleled training, marketing, and technical assistance.
                            </li>
                            <li>
                                <span className="font-semibold text-indigo-700">Innovative Technology:</span> Leverage our cutting-edge E-Clinic platform and digital tools.
                            </li>
                            <li>
                                <span className="font-semibold text-indigo-700">Impactful Contribution:</span> Be part of a mission to build a healthier nation.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* Products & Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Comprehensive Offerings
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Products and services that deliver real value to your customers
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                                    {product.icon}
                                </div>
                                <h3 className="text-xl font-bold text-center mb-3">{product.title}</h3>
                                <p className="text-gray-600 text-center">{product.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Franchise Benefits */}
            <section className="py-20 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Choose ArogyaBharat Franchise?
                        </h2>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">
                            We provide everything you need to succeed in the growing wellness industry
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {[
                            ['Provenbusinessmodel.png', 'Proven Business Model'],
                            ['Marketingandmediasupport.png', 'Marketing Support'],
                            ['homeicon5.png', 'Training & Support'],
                            ['Knowledgetransfer.png', 'Knowledge Transfer'],
                            ['Brandexclusivity.png', 'Brand Exclusivity'],
                            ['ExcellentROI.png', 'Excellent ROI']
                        ].map(([img, title], index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-colors">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                                    <Image
                                        src={`/images/imageBox/${img}`}
                                        alt={title}
                                        width={48}
                                        height={48}
                                        className="filter brightness-0 invert"
                                    />
                                </div>
                                <h4 className="font-semibold">{title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Franchise Requirements */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Simple Requirements to Get Started
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We`&apos;`ve made it easy to join our network with minimal barriers to entry
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            ['600sqftretail.png', '600 sq.ft. retail space', 'Prime location with good foot traffic'],
                            ['consulting.png', '₹50k-5L investment', 'Flexible investment options available'],
                            ['calendar.png', 'Time commitment', 'Passion for health and wellness']
                        ].map(([img, title, desc], index) => (
                            <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-md transition-shadow">
                                <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Image
                                        src={`/images/imageBox/${img}`}
                                        alt={title}
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{title}</h3>
                                <p className="text-gray-600">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button 
                            onClick={() => openModal()}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Apply for Franchise
                        </button>
                    </div>
                </div>
            </section>


            {/* Certifications and Awards Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Certifications & Awards
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Recognized for excellence in quality and service
                    </p>
                    </div>

                    <div className="relative">
                        {/* Horizontal Scrolling Container */}
                        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
                            <div className="flex space-x-8">
                            {[
                                {
                                image: "/images/imageBox/business/Certificate-ISO.png",
                                name: "ISO CERTIFICATE"
                                },
                                {
                                image: "/images/imageBox/business/Certificate-GMP.png",
                                name: "GMP CERTIFICATE"
                                },
                                {
                                image: "/images/imageBox/business/Certificate-ROHINI.png",
                                name: "ROHINI CERTIFICATION"
                                },
                                {
                                image: "/images/imageBox/business/Certificate-MSME.png",
                                name: "MSME CERTIFICATE"
                                },
                                {
                                image: "/images/imageBox/business/Certificate-PrideOfBharat.png",
                                name: "Pride Of Bharat CERTIFICATION"
                                }
                            ].map((cert, index) => (
                                <div key={index} className="flex-shrink-0 w-64">
                                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
                                    <div className="aspect-w-3 aspect-h-2 mb-4">
                                    <Image
                                        src={cert.image}
                                        alt={cert.name}
                                        width={300}
                                        height={200}
                                        className="object-contain rounded-lg"
                                    />
                                    </div>
                                    <h3 className="text-lg font-semibold text-center">{cert.name}</h3>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section 6: FAQs */}
            <section className="py-16 px-6 bg-white">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                    Common Questions
                </h2>
                <div className="max-w-3xl mx-auto bg-gray-50 p-6 rounded-xl shadow-md">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </section>


            {/* Minimal Elegant CTA */}
            <section className="py-20 bg-gradient-to-r from-sky-500 to-white border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-light text-gray-900 mb-4">
                        Ready to partner with us?
                    </h2>
                    <p className="text-gray-500 mb-8 text-lg">
                        Join our network of healthcare professionals and entrepreneurs
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button 
                        onClick={() => openModal()}
                        className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200"
                        >
                        Request Information
                        </button>
                        <div className="hidden sm:block self-center text-gray-400">|</div>
                        <a 
                        href="tel:+918081222333" 
                        className="text-gray-700 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +91 8081222333
                        </a>
                    </div>
                    </div>
                </div>
            </section>


            {/* Application Modal */}
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


export default BusinessOpportunity;



