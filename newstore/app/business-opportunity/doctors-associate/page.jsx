// app/associate-plan/page.tsx
import Image from 'next/image';
import { FaUserMd, FaClinicMedical, FaChartLine, FaHandsHelping, 
    FaMoneyBillWave, FaBoxOpen, FaHeadset, FaAward, FaTools } from 'react-icons/fa';
import { GiMedicinePills, GiHealthNormal } from 'react-icons/gi';

export default function AssociatePlan() {
    return (
        <div className="bg-gradient-to-b from-green-50 to-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-green-500 to-green-600 text-white py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Limited Slots Badge */}
                    <div className="inline-flex items-center bg-white bg-opacity-20 px-4 py-1 rounded-full mb-6 backdrop-blur-sm">
                    <span className="text-sm font-medium">LIMITED SLOTS AVAILABLE</span>
                    </div>
                    
                    {/* Main Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    BK Arogyam <span className="text-green-200">Associate Plan</span>
                    </h1>
                    
                    {/* Subheading */}
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 opacity-90">
                    Digitize • Specialize • Prosper
                    </p>
                    
                    {/* Investment Tag */}
                    <div className="inline-flex items-center space-x-2 bg-green-700 bg-opacity-80 px-5 py-2 rounded-full">
                    <span className="text-sm md:text-base font-medium">Investment: ₹1,00,000</span>
                    </div>
                    
                    {/* Additional Tagline */}
                    <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto opacity-85">
                    Boost your practice income by 3X with Ayurvedic integration and digital reach
                    </p>
                </div>
            </div>


            {/* Trust Badges */}
            <section className="py-8 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4">
                        <div className="text-3xl font-bold text-green-600">25%</div>
                        <div className="text-gray-600">Higher Commission</div>
                    </div>
                    <div className="p-4">
                        <div className="text-3xl font-bold text-green-600">0</div>
                        <div className="text-gray-600">Monthly Fees</div>
                    </div>
                    <div className="p-4">
                        <div className="text-3xl font-bold text-green-600">5</div>
                        <div className="text-gray-600">Days Setup</div>
                    </div>
                    <div className="p-4">
                        <div className="text-3xl font-bold text-green-600">500+</div>
                        <div className="text-gray-600">Associate Doctors</div>
                    </div>
                    </div>
                </div>
            </section>


            {/* Benefits Grid */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h2 className="text-xl font-semibold text-center mb-8 text-green-700">Key Benefits</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Benefit Cards */}
                {[
                    {
                    title: "Specialization",
                    items: [
                        "High-demand specialties",
                        "Research-based formulas",
                        "Specialist recognition"
                    ]
                    },
                    {
                    title: "HOPES Technology",
                    items: [
                        "AI-integrated platform",
                        "Online OPD & prescriptions",
                        "Pan-India visibility"
                    ]
                    },
                    {
                    title: "Product Margins",
                    items: [
                        "50-55% retail margin",
                        "15-20% special discount",
                        "₹40K-60K earnings potential"
                    ]
                    },
                    {
                    title: "Training & Support",
                    items: [
                        "5 free HOPES products",
                        "Digital marketing training",
                        "100% consultation earnings"
                    ]
                    }
                ].map((benefit, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <h3 className="font-medium text-green-700 mb-2">{benefit.title}</h3>
                    <ul className="text-sm space-y-1 text-gray-600">
                        {benefit.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {item}
                        </li>
                        ))}
                    </ul>
                    </div>
                ))}
                </div>
            </div>


            {/* Compact What You Get Section */}
            <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Your Associate Package (₹100,000 Value)</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                    Everything you need to start earning immediately
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                    {
                        icon: <FaBoxOpen size={24} />,
                        title: "Product Starter Kit",
                        items: [
                        "₹50k medicines (2 specialties)",
                        "Diagnostic tools",
                        "Patient materials",
                        "Branded pads"
                        ]
                    },
                    {
                        icon: <FaUserMd size={24} />,
                        title: "Training",
                        items: [
                        "3-day intensive training",
                        "Monthly webinars",
                        "Certification",
                        "Product modules"
                        ]
                    },
                    {
                        icon: <FaTools size={24} />,
                        title: "Marketing",
                        items: [
                        "Social templates",
                        "Referral materials",
                        "Arogya Point branding",
                        "Email campaigns"
                        ]
                    },
                    {
                        icon: <FaHeadset size={24} />,
                        title: "Digital Tools",
                        items: [
                        "HOPES platform",
                        "E-prescriptions",
                        "Patient dashboard",
                        "Telemedicine"
                        ]
                    },
                    {
                        icon: <FaMoneyBillWave size={24} />,
                        title: "Earnings",
                        items: [
                        "25% commission",
                        "5% royalty",
                        "Milestone bonuses",
                        "Upgrade path"
                        ]
                    },
                    {
                        icon: <FaAward size={24} />,
                        title: "Recognition",
                        items: [
                        "Website listing",
                        "Display certificate",
                        "Performance awards",
                        "Newsletter feature"
                        ]
                    }
                    ].map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="text-green-500 mb-2 text-center">
                        {item.icon}
                        </div>
                        <h3 className="font-bold mb-2 text-md">{item.title}</h3>
                        <ul className="text-sm space-y-1 text-gray-600">
                        {item.items.map((point, i) => (
                            <li key={i} className="flex items-start">
                            <span className="text-green-400 mr-1">•</span>
                            {point}
                            </li>
                        ))}
                        </ul>
                    </div>
                    ))}
                </div>
            </section>


            {/* Associate Doctors Earnings Projection */}
            <section className="py-16 bg-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Associate Doctors 12-Month Projection</h2>
                    <p className="text-lg text-center text-gray-600 mb-8">
                    Growth trajectory for associate doctors with 1 HOPES center
                    </p>

                    {/* Desktop Table */}
                    <div className="hidden md:block overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full">
                        <thead>
                            <tr className="bg-green-600 text-white">
                            <th className="px-6 py-4 text-left w-64">Metric</th>
                            <th className="px-4 py-3 text-center">Month 1</th>
                            <th className="px-4 py-3 text-center">Month 2</th>
                            <th className="px-4 py-3 text-center">Month 3</th>
                            <th className="px-4 py-3 text-center">Month 4</th>
                            <th className="px-4 py-3 text-center">12-Month Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {/* HOPES Centers */}
                            <tr className="hover:bg-green-50 bg-gray-50">
                            <td className="px-6 py-4 font-medium">Number of HOPES Centers</td>
                            {[1,1,1,1].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center">{val}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold">12</td>
                            </tr>
                            
                            {/* Health Programs */}
                            <tr className="hover:bg-green-50">
                            <td className="px-6 py-4 font-medium">Health Programs Conducted</td>
                            {[150,150,150,150].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center">{val}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold">1,800</td>
                            </tr>
                            
                            {/* Patients */}
                            <tr className="hover:bg-green-50 bg-gray-50">
                            <td className="px-6 py-4 font-medium">New Patients</td>
                            {[30,45,60,80].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center">{val}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold">1,575</td>
                            </tr>
                            
                            <tr className="hover:bg-green-50">
                            <td className="px-6 py-4 font-medium">Repeat Patients</td>
                            {[0,21,31.5,42].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center">{val || '-'}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold">935</td>
                            </tr>
                            
                            <tr className="hover:bg-green-50 border-t-2 border-green-200">
                            <td className="px-6 py-4 font-bold">Total Patients</td>
                            {[30,66,106.5,156.5].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center font-bold">{val}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold text-green-700">3,768</td>
                            </tr>
                            
                            {/* Medicine Value */}
                            <tr className="hover:bg-green-50 bg-gray-50">
                            <td className="px-6 py-4 font-medium">Medicine Value (₹)</td>
                            {['1.2L','2.6L','4.3L','6.3L'].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center">{val}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold">1.51 Cr</td>
                            </tr>
                            
                            {/* Income */}
                            <tr className="hover:bg-green-50 border-t-2 border-green-200">
                            <td className="px-6 py-4 font-bold">Associate Income (₹)</td>
                            {['12K','26K','43K','63K'].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center font-bold text-green-600">{val}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold text-green-700">15.07 L</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>

                    {/* Mobile Table */}
                    <div className="md:hidden overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full">
                        <thead>
                            <tr className="bg-green-600 text-white">
                            <th className="px-4 py-3 text-left">Month</th>
                            <th className="px-2 py-3 text-right">Programs</th>
                            <th className="px-2 py-3 text-right">Patients</th>
                            <th className="px-2 py-3 text-right">Repeat</th>
                            <th className="px-2 py-3 text-right">Income</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {[
                            { month: "M1", programs: 150, patients: 30, repeat: 0, income: "12K" },
                            { month: "M2", programs: 150, patients: 66, repeat: 21, income: "26K" },
                            { month: "M3", programs: 150, patients: 106.5, repeat: 31.5, income: "43K" },
                            { month: "M4", programs: 150, patients: 156.5, repeat: 42, income: "63K" }
                            ].map((row, i) => (
                            <tr key={i} className="hover:bg-green-50">
                                <td className="px-4 py-3 font-medium">{row.month}</td>
                                <td className="px-2 py-3 text-right">{row.programs}</td>
                                <td className="px-2 py-3 text-right">{row.patients}</td>
                                <td className="px-2 py-3 text-right">{row.repeat || '-'}</td>
                                <td className="px-2 py-3 text-right font-bold text-green-600">{row.income}</td>
                            </tr>
                            ))}
                        </tbody>
                        <tfoot className="bg-green-100 font-bold">
                            <tr>
                            <td className="px-4 py-3">Total</td>
                            <td className="px-2 py-3 text-right">1,800</td>
                            <td className="px-2 py-3 text-right">3,768</td>
                            <td className="px-2 py-3 text-right">935</td>
                            <td className="px-2 py-3 text-right text-green-700">15.07 L</td>
                            </tr>
                        </tfoot>
                        </table>
                    </div>
                    </div>

                    <div className="mt-8 text-center">
                    <a 
                        href="/downloads/associate-full-projection.pdf" 
                        download="BK_Arogyam_Associate_Projection.pdf"
                        className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition transform hover:scale-105"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Full 12-Month Projection (₹15.07 Lakhs)
                    </a>
                    <p className="mt-3 text-sm text-gray-600">
                        Detailed breakdown of patient growth and income streams
                    </p>
                    </div>

                    <div className="mt-8 p-4 bg-green-100 rounded-lg text-sm text-gray-700">
                    <p className="font-semibold mb-2">Projection Assumptions:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>150 health programs conducted monthly</li>
                        <li>Average 30-40% conversion from programs to patients</li>
                        <li>Repeat rates: 70% (1st), 50% (2nd), 40% (3rd), 30% (4th), 20% (5th)</li>
                        <li>₹4,000 average medicine value per patient</li>
                        <li>10% wallet money commission on medicine value</li>
                    </ul>
                    </div>
                </div>
            </section>


            {/* Plan Comparison Section */}
            <section className="py-16 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Associate vs. Arogya Hub</h2>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {/* Associate Plan */}
                    <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-green-600 mb-4">Associate</h3>
                    <div className="text-4xl font-bold mb-4">₹100,000</div>
                    <ul className="space-y-4 text-left">
                        <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>20-25% product commission</span>
                        </li>
                        <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>5% team royalties</span>
                        </li>
                        <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Work from existing clinic</span>
                        </li>
                        <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>₹50K product starter kit</span>
                        </li>
                    </ul>
                    <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700 transition">
                        Choose Associate
                    </button>
                    </div>
                    
                    {/* VS Divider */}
                    <div className="flex items-center justify-center p-8 bg-gray-50">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-green-600 text-green-600 font-bold mb-4">
                        VS
                        </div>
                        <p className="text-sm text-gray-600 max-w-xs mx-auto">
                        Associate plan is ideal for individual doctors, while Arogya Hub suits those wanting full-scale centers
                        </p>
                    </div>
                    </div>
                    
                    {/* Franchise Plan */}
                    <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-amber-600 mb-4">Arogya Hub</h3>
                    <div className="text-4xl font-bold mb-4">₹500,000</div>
                    <ul className="space-y-4 text-left">
                        <li className="flex items-start">
                        <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>40-45% product commission</span>
                        </li>
                        <li className="flex items-start">
                        <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>10% team royalties</span>
                        </li>
                        <li className="flex items-start">
                        <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Exclusive territory rights</span>
                        </li>
                        <li className="flex items-start">
                        <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>₹300K product starter kit</span>
                        </li>
                    </ul>
                    <button className="mt-6 w-full border border-amber-600 text-amber-600 py-2 rounded-lg font-bold hover:bg-amber-50 transition">
                        Explore Arogya Hub
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </section>


            {/* hopes */}
            <section className="bg-white py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Top Section: Ailments Highlight */}
                    <div className="text-center mb-2">
                        <h2 className="text-xl md:text-4xl font-extrabold text-gray-900 mb-2">
                            Comprehensive Solutions for Common Health Concerns
                        </h2>

                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-4 relative w-full h-48 md:h-80 lg:h-96 overflow-hidden">
                                <Image
                                    src="/images/imageBox/icons/hopes-logo.png" 
                                    alt="HOPES: Natural Treatment, Expert Care & Complete Solution – All in One Place!"
                                    fill
                                    className="transition-transform duration-500 hover:scale-105" 
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 100vw"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <p className="text-xl md:text-4xl font-bold text-blue-700 leading-tight">
                            Natural Treatment, Expert Care & Complete Solution – All in One Place!
                        </p>
                    </div>

                    {/* Bottom Section: Service Pillars */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">

                    {/* Combined Ailments & Services (Example Structure) */}

                    {/* 1. Heart + Medicine */}
                    <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-gray-50 rounded-lg shadow-sm">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mb-2 flex items-center justify-center">
                        <Image src="/images/imageBox/icons/heart.png" alt="Heart & Medicine" width={48} height={48} />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 leading-tight">Heart & Medicine</h3>
                        <p className="text-gray-700 text-xs sm:text-sm">
                        Solutions for heart health with pure Ayurvedic medicines.
                        </p>
                    </div>

                    {/* 2. Obesity + Day-Care */}
                    <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-gray-50 rounded-lg shadow-sm">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mb-2 flex items-center justify-center">
                        <Image src="/images/imageBox/icons/obesity.png" alt="Obesity & Day-Care" width={48} height={48} />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 leading-tight">Obesity & Day-Care</h3>
                        <p className="text-gray-700 text-xs sm:text-sm">
                        Weight management with expert day-care supervision.
                        </p>
                    </div>

                    {/* 3. Pain + Package */}
                    <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-gray-50 rounded-lg shadow-sm">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mb-2 flex items-center justify-center">
                        <Image src="/images/imageBox/icons/pain-in-joints.png" alt="Pain & Package" width={48} height={48} />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 leading-tight">Pain Relief & Package</h3>
                        <p className="text-gray-700 text-xs sm:text-sm">
                        Integrated, affordable solutions for chronic pain management.
                        </p>
                    </div>

                    {/* 4. Kidney + Diet */}
                    <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-gray-50 rounded-lg shadow-sm">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mb-2 flex items-center justify-center">
                        <Image src="/images/imageBox/icons/Kidney stone.png" alt="Kidney & Diet" width={48} height={48} />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 leading-tight">Kidney Health & Diet</h3>
                        <p className="text-gray-700 text-xs sm:text-sm">
                        Personalized diet plans for optimal kidney function.
                        </p>
                    </div>

                    {/* 5. Sugar + Admit */}
                    <div className="flex flex-col items-center text-center p-3 sm:p-4 bg-gray-50 rounded-lg shadow-sm">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mb-2 flex items-center justify-center">
                        <Image src="/images/imageBox/icons/Sugar blood level.png" alt="Sugar & Admit" width={48} height={48} />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 leading-tight">Sugar Management & Admit</h3>
                        <p className="text-gray-700 text-xs sm:text-sm">
                        Root-cause treatment for diabetes through natural methods.
                        </p>
                    </div>
                    </div>
                </div>
            </section>


            {/* Testimonials Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Hear From Our Associate Doctors</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Real stories from practitioners who transformed their income
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                    {
                        quote: "I added ₹35,000/month to my income without extra clinic hours using BK Arogyam products.",
                        name: "Dr. Anjali Mehta",
                        location: "Pune",
                        specialty: "General Physician"
                    },
                    {
                        quote: "The training helped me confidently recommend Ayurveda alongside allopathy - patient trust increased dramatically.",
                        name: "Dr. Rohan Desai",
                        location: "Bangalore",
                        specialty: "Diabetologist"
                    },
                    {
                        quote: "Within 6 months, my 5 recruited associates generate passive income through the royalty system.",
                        name: "Dr. Neha Sharma",
                        location: "Delhi",
                        specialty: "Cardiologist"
                    }
                    ].map((testimonial, index) => (
                    <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                        <div className="text-green-400 mb-4 text-2xl">&quot;</div>
                        <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.specialty}, {testimonial.location}</div>
                    </div>
                    ))}
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-green-700 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Practice?</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                    Join 500+ doctors already boosting their income with BK Arogyam
                    </p>
                
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-white bg-opacity-10 p-6 rounded-xl border border-white border-opacity-20">
                        <div className="text-2xl font-bold mb-2">₹100,000</div>
                        <div className="mb-3">One-Time Payment</div>
                        <button className="w-full bg-white text-green-600 py-2 rounded-lg font-bold hover:bg-green-50 transition">
                        Apply Now
                        </button>
                    </div>
                
                    <div className="bg-white bg-opacity-10 p-6 rounded-xl border border-white border-opacity-20">
                        <div className="text-2xl font-bold mb-2">EMI Options</div>
                        <div className="mb-3">Starting at ₹8,333/month</div>
                        <button className="w-full border border-white py-2 rounded-lg font-bold hover:bg-white hover:text-green-600 transition">
                        See Payment Plans
                        </button>
                    </div>
                
                    <div className="bg-white bg-opacity-10 p-6 rounded-xl border border-white border-opacity-20">
                        <div className="text-2xl font-bold mb-2">Questions?</div>
                        <div className="mb-3">Schedule a callback</div>
                        <button className="w-full border border-white py-2 rounded-lg font-bold hover:bg-white hover:text-green-600 transition">
                            Contact Us
                        </button>
                    </div>
                    </div>
                </div>
            </section>

        </div>
    );
}