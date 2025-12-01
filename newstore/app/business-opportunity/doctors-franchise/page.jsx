

// app/franchise-plan/page.tsx
import { AimOutlined, GlobalOutlined, ReadOutlined, RocketOutlined, SolutionOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { FaShieldAlt, FaChartLine, FaHandsHelping, FaMapMarkerAlt, 
    FaMoneyBillWave, FaBoxOpen, FaHeadset, FaClinicMedical, 
    FaUserMd, FaAward, FaTools, 
    FaHeart,
    FaWeight,
    FaSyringe,
    FaLeaf,
    FaDumbbell,
    FaSpa,
    FaBone} from 'react-icons/fa';
import { GiMedicinePills, GiHealthNormal } from 'react-icons/gi';



export default function FranchisePlan() {
    return (
        <div className="bg-gradient-to-b from-green-50 to-white">

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-green-500 to-green-700 text-white py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                {/* Limited Territories Badge */}
                <div className="inline-flex items-center bg-white bg-opacity-20 px-4 py-1 rounded-full mb-6 backdrop-blur-sm">
                <span className="text-sm font-medium">LIMITED TERRITORIES AVAILABLE</span>
                </div>
                
                {/* Main Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                From Doctor to <span className="text-green-200">Doctorpreneur</span>
                </h1>
                
                {/* Plan Subheading */}
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Doctor Arogya Hub Plan
                </h2>
                
                {/* Tagline */}
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-4 opacity-90">
                A revolutionary opportunity for Ayush doctors to transform their practice
                </p>
                
                {/* Investment & Features */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-6">
                <div className="inline-flex items-center bg-green-700 bg-opacity-80 px-5 py-2 rounded-full">
                    <span className="text-sm md:text-base font-medium">Investment: ₹5,00,000</span>
                </div>
                <div className="text-sm md:text-base opacity-90">
                    Exclusive • Scalable • Leadership
                </div>
                </div>
            </div>
            </div>


            {/* Investment Section - Mobile Optimized */}
            <section className="py-8 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="text-center">
                {/* Main Heading */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    <span className="block">Low Investment</span>
                    <span className="block">No Investment</span>
                </h2>
                
                {/* Divider */}
                <div className="flex justify-center my-3">
                    <div className="w-16 h-0.5 bg-blue-400"></div>
                </div>
                
                {/* Benefits */}
                <div className="flex justify-center gap-4">
                    {[
                    { text: "Zero Risk", icon: "🛡️" },
                    { text: "Zero Pressure", icon: "😌" },
                    { text: "Zero Target", icon: "🎯" }
                    ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <span className="text-2xl mb-1">{item.icon}</span>
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </section>


            {/* Trust Badges */}
            <section className="py-8 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4">
                        <div className="text-3xl font-bold text-green-600">23+</div>
                        <div className="text-gray-600">Years Experience</div>
                    </div>
                    <div className="p-4">
                        <div className="text-3xl font-bold text-green-600">10+</div>
                        <div className="text-gray-600">Arogya Hub Partners</div>
                    </div>
                    <div className="p-4">
                        <div className="text-3xl font-bold text-green-600">500K+</div>
                        <div className="text-gray-600">Patients Treated</div>
                    </div>
                    <div className="p-4">
                        <div className="text-3xl font-bold text-green-600">20+</div>
                        <div className="text-gray-600">Awards Won</div>
                    </div>
                    </div>
                </div>
            </section>


            {/* Challenges & Solutions Section */}
            <section className="py-16 hidden md:block">
                <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-8">

                    <div className="md:w-1/2 bg-red-50 p-8 rounded-xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Are You Facing These Challenges?
                    </h2>
                    <ul className="space-y-4">
                        {[
                        "Low Margin Products: No profit, only hard work",
                        "Patient Retention Challenge: Patients visit once, then are not seen again",
                        "No Tech Support: No software, no system",
                        "Arogya Point Bound Growth: Future confined within four walls",
                        "Lack of Specialization: No distinct identity in the market",
                        "Lack of Visibility: Difficulty reaching wider patient base"
                        ].map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                        </li>
                        ))}
                    </ul>
                    </div>

                    <div className="md:w-1/2 bg-green-50 p-8 rounded-xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Arogya Bharat&apos;s Solution
                    </h2>
                    <h3 className="text-2xl font-semibold text-green-600 mb-4">
                        The Doctor Entrepreneur Program
                    </h3>
                    <p className="text-gray-700 mb-6">
                        Our <span className="font-bold">&quot;Associate Doctor Program&quot;</span> offers an integrated solution with <span className="font-bold">&quot;Integrated Digital Platform + Monopoly Products + Multiple Income Streams.&quot;</span>
                    </p>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="text-xl font-bold text-gray-800 mb-3">
                        Three Core Pillars:
                        </h4>
                        <ol className="space-y-4">
                        {[
                            "Specialization: Build your unique identity",
                            "Technology: Digitize your practice",
                            "Business Mindset: Become a successful Doctorpreneur"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                            <span className="bg-green-100 text-green-600 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">{index + 1}</span>
                            <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Challenges & Solutions - Redesigned */}
            <section className="py-12 bg-white md:hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Transform Your <span className="text-green-600">Medical Practice</span>
                </h2>
                <div className="w-20 h-1 bg-green-400 mx-auto mt-4"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                {/* Challenges Card */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
                    <div className="flex items-center mb-5">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Common Challenges</h3>
                    </div>
                    
                    <ul className="space-y-3">
                    {[
                        {text: "Low profit margins on products", icon: "💰"},
                        {text: "Patients don't return after first visit", icon: "🔄"},
                        {text: "No digital tools for practice", icon: "💻"},
                        {text: "Growth limited by physical space", icon: "🏥"},
                        {text: "No specialization in the market", icon: "🏷️"},
                        {text: "Hard to attract new patients", icon: "📢"}
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">{item.icon}</span>
                        <span className="text-gray-700 text-sm sm:text-base">{item.text}</span>
                        </li>
                    ))}
                    </ul>
                    
                    <div className="mt-6 flex justify-center">
                    <Image 
                        src="/images/imageBox/icons/stressed-doctor.png" 
                        alt="Doctor facing challenges"
                        width={300}
                        height={200}
                        className="rounded-lg"
                    />
                    </div>
                </div>

                {/* Solutions Card */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                    <div className="flex items-center mb-5">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Our Solution</h3>
                    </div>
                    
                    <div className="mb-5">
                    <h4 className="text-lg font-semibold text-green-700 mb-2">Doctor Entrepreneur Program</h4>
                    <p className="text-gray-700 text-sm sm:text-base">
                        Integrated platform combining digital tools, exclusive products, and multiple revenue streams.
                    </p>
                    </div>
                    
                    <div className="bg-white bg-opacity-70 p-4 rounded-lg mb-6">
                    <h5 className="font-medium text-gray-800 mb-3 flex items-center">
                        <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 text-sm">✓</span>
                        Three Core Pillars
                    </h5>
                    
                    <div className="space-y-4">
                        {[
                        {title: "Specialization", desc: "Build your unique medical identity", icon: "🎯"},
                        {title: "Technology", desc: "AI-powered practice management", icon: "🤖"},
                        {title: "Business Growth", desc: "Become a Doctorpreneur", icon: "📈"}
                        ].map((item, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-green-500 mr-3 text-xl">{item.icon}</span>
                            <div>
                            <h6 className="font-medium text-gray-800">{item.title}</h6>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                    
                    <div className="flex justify-center">
                    <Image 
                        src="/images/imageBox/icons/happy-doctor.png" 
                        alt="Doctor using our solution"
                        width={300}
                        height={200}
                        className="rounded-lg"
                    />
                    </div>
                </div>
                </div>
            </div>
            </section>


            {/* Highlights Section */}
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h2 className="text-xl font-semibold text-center mb-6 text-green-800">Premium Benefits</h2>
                
                {/* Main Features */}
                <div className="space-y-4 mb-8">
                {[
                    "✓ Exclusive territory rights (5 lakh population)",
                    "✓ 100+ patient leads monthly",
                    "✓ ₹4 lakh worth of free products",
                    "✓ Supply rights + 5% commission",
                    "✓ Team royalties & leadership pool"
                ].map((feature, index) => (
                    <div key={index} className="flex items-start bg-white p-3 rounded-lg border border-gray-100">
                    <span className="text-green-600 mr-2">{feature.split('✓')[0]}</span>
                    <span>{feature.split('✓')[1]}</span>
                    </div>
                ))}
                </div>

                {/* Includes Associate Benefits */}
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <h3 className="font-medium text-green-700 mb-2 text-center">Includes all Associate Plan benefits plus:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    {[
                    "Advanced marketing support",
                    "Doctor network building",
                    "Multi-level royalties",
                    "Brand authority"
                    ].map((item, i) => (
                    <div key={i} className="flex items-center text-sm">
                        <span className="text-green-500 mr-2">+</span>
                        {item}
                    </div>
                    ))}
                </div>
                </div>
            </div>


            <section className="bg-white py-8 md:py-12 md:hidden">
                <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-2">
                    Recognition Through Specialization
                    </h2>
                    <p className="text-lg text-gray-600">
                    Establish your reputation by becoming a disease specialist.
                    </p>
                </div>

                {/* Core Achievements/Pillars */}
                <div className="space-y-6"> {/* Increased vertical spacing for clarity on mobile */}

                    {/* 1. Kidney Disease Expertise */}
                    <div className="flex items-start bg-blue-50 p-4 rounded-lg shadow-sm">
                    <AimOutlined className="text-blue-600 text-3xl mr-4 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Kidney Disease Expert</h3>
                        <p className="text-gray-700 mt-1">Effective solutions for kidney-related issues through deep knowledge and experience.</p>
                    </div>
                    </div>

                    {/* 2. Innovative Treatment Pioneer */}
                    <div className="flex items-start bg-green-50 p-4 rounded-lg shadow-sm">
                    <RocketOutlined className="text-green-600 text-3xl mr-4 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Pioneer of &quot;AKRT Ayurvedic Method&quot;</h3>
                        <p className="text-gray-700 mt-1">Benefiting patients through the development of a specialized treatment methodology.</p>
                    </div>
                    </div>

                    {/* 3. Widespread Patient Impact */}
                    <div className="flex items-start bg-purple-50 p-4 rounded-lg shadow-sm">
                    <GlobalOutlined className="text-purple-600 text-3xl mr-4 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Successful Treatment of Thousands of Patients</h3>
                        <p className="text-gray-700 mt-1">Proven track record of successfully treating patients both nationally and globally.</p>
                    </div>
                    </div>

                    {/* 4. Accelerated Recognition */}
                    <div className="flex items-start bg-yellow-50 p-4 rounded-lg shadow-sm">
                    <SolutionOutlined className="text-yellow-600 text-3xl mr-4 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Focus Drives Name & Respect</h3>
                        <p className="text-gray-700 mt-1">Gain rapid recognition and respect by focusing on a single disease.</p>
                    </div>
                    </div>

                    {/* 5. Strategy for New Doctors */}
                    <div className="flex items-start bg-red-50 p-4 rounded-lg shadow-sm">
                    <ReadOutlined className="text-red-600 text-3xl mr-4 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Strategy for the Next Generation</h3>
                        <p className="text-gray-700 mt-1">This successful strategy will now be taught to new doctors.</p>
                    </div>
                    </div>

                </div>
                </div>
            </section>


            {/* Compact Brands Section */}
            <section className="py-12 bg-white md:hidden">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                            Our Trusted <span className="text-green-600">Brands</span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                            Arogya Hub get exclusive rights to market these established product lines
                        </p>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                    {[
                        { name: "BK Kidney Care", img:"/images/imageBox/brands/KidneyVeda.png" },
                        { name: "Cardio Veda", img:"/images/imageBox/brands/CardioVeda.png" },
                        { name: "SlimVeda", img:"/images/imageBox/brands/slimveda.png" },
                        { name: "Gluco Veda", img:"/images/imageBox/brands/GlucoVeda.png" },
                        { name: "Arogyaveda", img:"/images/imageBox/brands/arogyaveda_logo_1.jpg" },
                        { name: "MuscleVeda", img:"/images/imageBox/brands/MuscleVeda.png" },
                        { name: "Rupam", img:"/images/imageBox/brands/rupam_logo.png" },
                        { name: "Osteo Veda", img:"/images/imageBox/brands/ArthoVeda.png" }
                    ].map((brand, index) => (
                        <div 
                        key={index} 
                        className="bg-white p-3 sm:p-4 rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all flex flex-col items-center"
                        >
                        <div className="relative w-full h-16 sm:h-20 mb-2 sm:mb-3">
                            <Image
                            src={brand.img}
                            alt={brand.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                            quality={80}
                            />
                        </div>
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-700 text-center line-clamp-2">
                            {brand.name}
                        </h3>
                        </div>
                    ))}
                    </div>
                </div>
            </section>


            {/* Doctor Franchise Earnings Projection - 4 Month View */}
            <section className="py-16 bg-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Arogya Hub Income Projection (First 4 Months)</h2>
                    <p className="text-lg text-center text-gray-600 mb-8">
                    Initial growth phase showing revenue streams development
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
                            <th className="px-4 py-3 text-center">4-Month Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {/* HOPES Centers */}
                            <tr className="hover:bg-green-50 bg-gray-50">
                            <td className="px-6 py-4 font-medium">Number of HOPES Centers</td>
                            {[1,1,1,1].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center">{val}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold">4</td>
                            </tr>
                            
                            {/* Leads */}
                            <tr className="hover:bg-green-50">
                            <td className="px-6 py-4 font-medium">Total Leads Provided</td>
                            {[100,100,100,100].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center">{val}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold">400</td>
                            </tr>
                            
                            {/* Patients */}
                            <tr className="hover:bg-green-50 bg-gray-50">
                            <td className="px-6 py-4 font-medium">New Patients</td>
                            {[30,45,60,80].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center">{val}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold">215</td>
                            </tr>
                            
                            <tr className="hover:bg-green-50">
                            <td className="px-6 py-4 font-medium">Repeat Patients</td>
                            {[0,21,31.5,42].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center">{val || '-'}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold">94.5</td>
                            </tr>
                            
                            <tr className="hover:bg-green-50 border-t-2 border-green-200">
                            <td className="px-6 py-4 font-bold">Total Patients</td>
                            {[30,66,106.5,156.5].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center font-bold">{val}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold text-green-700">359</td>
                            </tr>
                            
                            {/* Income Streams */}
                            <tr className="hover:bg-green-50 bg-gray-50">
                            <td className="px-6 py-4 font-medium">Retail Margin @20% (₹)</td>
                            {[24000,52800,85200,125200].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center">{val.toLocaleString('en-IN')}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold">2,87,200</td>
                            </tr>
                            
                            <tr className="hover:bg-green-50">
                            <td className="px-6 py-4 font-medium">Wallet Money @10% (₹)</td>
                            {[12000,26400,42600,62600].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center">{val.toLocaleString('en-IN')}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold">1,43,600</td>
                            </tr>
                            
                            <tr className="hover:bg-green-50 bg-gray-50">
                            <td className="px-6 py-4 font-medium">Fast Start @30% (₹)</td>
                            {[36000,79200,127800,187800].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center">{val.toLocaleString('en-IN')}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold">4,30,800</td>
                            </tr>
                            
                            <tr className="hover:bg-green-50">
                            <td className="px-6 py-4 font-medium">Patient Fees @₹300 (₹)</td>
                            {[9000,19800,27450,36600].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center">{val.toLocaleString('en-IN')}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold">92,850</td>
                            </tr>
                            
                            {/* Total Income */}
                            <tr className="hover:bg-green-50 border-t-2 border-green-200">
                            <td className="px-6 py-4 font-bold">Total Income (₹)</td>
                            {[81000,178200,283050,412200].map((val, i) => (
                                <td key={i} className="px-4 py-3 text-center font-bold text-green-600">{val.toLocaleString('en-IN')}</td>
                            ))}
                            <td className="px-4 py-3 text-center font-bold text-green-700">9,54,450</td>
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
                            <th className="px-4 py-3 text-left w-32">Month</th>
                            <th className="px-2 py-3 text-right">Patients</th>
                            <th className="px-2 py-3 text-right">Retail</th>
                            <th className="px-2 py-3 text-right">Wallet</th>
                            <th className="px-2 py-3 text-right">Fast Start</th>
                            <th className="px-2 py-3 text-right">Fees</th>
                            <th className="px-2 py-3 text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {[
                            { month: "Month 1", patients: 30, retail: "24K", wallet: "12K", fastStart: "36K", fees: "9K", total: "81K" },
                            { month: "Month 2", patients: 66, retail: "52.8K", wallet: "26.4K", fastStart: "79.2K", fees: "19.8K", total: "178.2K" },
                            { month: "Month 3", patients: 106.5, retail: "85.2K", wallet: "42.6K", fastStart: "127.8K", fees: "27.5K", total: "283K" },
                            { month: "Month 4", patients: 156.5, retail: "125.2K", wallet: "62.6K", fastStart: "187.8K", fees: "36.6K", total: "412.2K" }
                            ].map((row, i) => (
                            <tr key={i} className="hover:bg-green-50">
                                <td className="px-4 py-3 font-medium">{row.month}</td>
                                <td className="px-2 py-3 text-right">{row.patients}</td>
                                <td className="px-2 py-3 text-right">{row.retail}</td>
                                <td className="px-2 py-3 text-right">{row.wallet}</td>
                                <td className="px-2 py-3 text-right">{row.fastStart}</td>
                                <td className="px-2 py-3 text-right">{row.fees}</td>
                                <td className="px-2 py-3 text-right font-bold text-green-600">{row.total}</td>
                            </tr>
                            ))}
                        </tbody>
                        <tfoot className="bg-green-100 font-bold">
                            <tr>
                            <td className="px-4 py-3">Total</td>
                            <td className="px-2 py-3 text-right">359</td>
                            <td className="px-2 py-3 text-right">2.87L</td>
                            <td className="px-2 py-3 text-right">1.44L</td>
                            <td className="px-2 py-3 text-right">4.31L</td>
                            <td className="px-2 py-3 text-right">92.9K</td>
                            <td className="px-2 py-3 text-right text-green-700">9.54L</td>
                            </tr>
                        </tfoot>
                        </table>
                    </div>
                    </div>

                    <div className="mt-8 text-center">
                    <a 
                        href="/downloads/full-year-projection.pdf" 
                        download="BK_Arogyam_Full_Year_Projection.pdf"
                        className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition transform hover:scale-105"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Full 12-Month Projection (₹97.97 Lakhs)
                    </a>
                    <p className="mt-3 text-sm text-gray-600">
                        Detailed breakdown of all revenue streams and growth metrics
                    </p>
                    </div>

                    <div className="mt-8 p-4 bg-green-100 rounded-lg text-sm text-gray-700">
                    <p className="font-semibold mb-2">Projection Notes:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Based on 100 leads/month with conversion rates of 30-40%</li>
                        <li>Repeat patient percentages: 70% (1st), 50% (2nd), 40% (3rd), 30% (4th), 20% (5th)</li>
                        <li>Average medicine value: ₹4,000 per patient</li>
                    </ul>
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


            {/* What You Get Section */}
            <section className="py-16 bg-green-50 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Your Arogya Hub Package</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Everything you need to launch and grow your Ayurvedic center
                    </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-md border border-green-100">
                        <div className="text-green-500 mb-4">
                        <FaTools size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Operational Support</h3>
                        <ul className="space-y-2 text-gray-600">
                        <li>• Arogya Point design blueprint</li>
                        <li>• Standard operating procedures</li>
                        <li>• Staff training manuals</li>
                        <li>• Quality control systems</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md border border-green-100">
                        <div className="text-green-500 mb-4">
                        <FaBoxOpen size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Product Starter Kit</h3>
                        <ul className="space-y-2 text-gray-600">
                        <li>• ₹200,000 worth of medicines</li>
                        <li>• Diagnostic equipment</li>
                        <li>• Panchakarma therapy kits</li>
                        <li>• Patient education materials</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md border border-green-100">
                        <div className="text-green-500 mb-4">
                        <FaUserMd size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Training & Certification</h3>
                        <ul className="space-y-2 text-gray-600">
                        <li>• 1-week intensive training</li>
                        <li>• Monthly webinars</li>
                        <li>• &quot;Certified Ayurvedic Practitioner&quot; designation</li>
                        <li>• Business mentorship program</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md border border-green-100">
                        <div className="text-green-500 mb-4">
                        <FaHeadset size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Marketing Support</h3>
                        <ul className="space-y-2 text-gray-600">
                        <li>• Local launch campaign</li>
                        <li>• Digital marketing templates</li>
                        <li>• Social media content library</li>
                        <li>• PR support</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md border border-green-100">
                        <div className="text-green-500 mb-4">
                        <FaAward size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Brand Assets</h3>
                        <ul className="space-y-2 text-gray-600">
                        <li>• Licensed use of BK Arogyam trademarks</li>
                        <li>• Complete clinic branding package</li>
                        <li>• Professional photography library</li>
                        <li>• Patient testimonials</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md border border-green-100">
                        <div className="text-green-500 mb-4">
                        <FaHandsHelping size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
                        <ul className="space-y-2 text-gray-600">
                        <li>• Dedicated account manager</li>
                        <li>• 24/7 operations support</li>
                        <li>• Quarterly business reviews</li>
                        <li>• Annual Arogya Hub conferences</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-green-50 md:hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Your Arogya Hub Package</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        Everything to launch your Ayurvedic center
                    </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {/* Operational Support */}
                    <div className="bg-white p-4 rounded-lg shadow-xs border border-green-100 flex">
                        <div className="text-green-500 mr-3 mt-0.5">
                        <FaTools size={20} />
                        </div>
                        <div>
                        <h3 className="font-semibold text-gray-800">Operational Support</h3>
                        <ul className="text-xs text-gray-600 space-y-1 mt-1">
                            <li className="flex items-start">
                            <span className="mr-1">•</span> Arogya Point design blueprint
                            </li>
                            <li className="flex items-start">
                            <span className="mr-1">•</span> SOPs & training manuals
                            </li>
                        </ul>
                        </div>
                    </div>

                    {/* Product Starter Kit */}
                    <div className="bg-white p-4 rounded-lg shadow-xs border border-green-100 flex">
                        <div className="text-green-500 mr-3 mt-0.5">
                        <FaBoxOpen size={20} />
                        </div>
                        <div>
                        <h3 className="font-semibold text-gray-800">Product Kit</h3>
                        <ul className="text-xs text-gray-600 space-y-1 mt-1">
                            <li className="flex items-start">
                            <span className="mr-1">•</span> ₹200k medicines
                            </li>
                            <li className="flex items-start">
                            <span className="mr-1">•</span> Diagnostic equipment
                            </li>
                        </ul>
                        </div>
                    </div>

                    {/* Training */}
                    <div className="bg-white p-4 rounded-lg shadow-xs border border-green-100 flex">
                        <div className="text-green-500 mr-3 mt-0.5">
                        <FaUserMd size={20} />
                        </div>
                        <div>
                        <h3 className="font-semibold text-gray-800">Training</h3>
                        <ul className="text-xs text-gray-600 space-y-1 mt-1">
                            <li className="flex items-start">
                            <span className="mr-1">•</span> Intensive 1-week program
                            </li>
                            <li className="flex items-start">
                            <span className="mr-1">•</span> Certified practitioner
                            </li>
                        </ul>
                        </div>
                    </div>

                    {/* Marketing */}
                    <div className="bg-white p-4 rounded-lg shadow-xs border border-green-100 flex">
                        <div className="text-green-500 mr-3 mt-0.5">
                        <FaHeadset size={20} />
                        </div>
                        <div>
                        <h3 className="font-semibold text-gray-800">Marketing</h3>
                        <ul className="text-xs text-gray-600 space-y-1 mt-1">
                            <li className="flex items-start">
                            <span className="mr-1">•</span> Launch campaign
                            </li>
                            <li className="flex items-start">
                            <span className="mr-1">•</span> Social media content
                            </li>
                        </ul>
                        </div>
                    </div>

                    {/* Brand Assets */}
                    <div className="bg-white p-4 rounded-lg shadow-xs border border-green-100 flex">
                        <div className="text-green-500 mr-3 mt-0.5">
                        <FaAward size={20} />
                        </div>
                        <div>
                        <h3 className="font-semibold text-gray-800">Brand Assets</h3>
                        <ul className="text-xs text-gray-600 space-y-1 mt-1">
                            <li className="flex items-start">
                            <span className="mr-1">•</span> Trademark license
                            </li>
                            <li className="flex items-start">
                            <span className="mr-1">•</span> Branding package
                            </li>
                        </ul>
                        </div>
                    </div>

                    {/* Ongoing Support */}
                    <div className="bg-white p-4 rounded-lg shadow-xs border border-green-100 flex">
                        <div className="text-green-500 mr-3 mt-0.5">
                        <FaHandsHelping size={20} />
                        </div>
                        <div>
                        <h3 className="font-semibold text-gray-800">Ongoing Support</h3>
                        <ul className="text-xs text-gray-600 space-y-1 mt-1">
                            <li className="flex items-start">
                            <span className="mr-1">•</span> Dedicated manager
                            </li>
                            <li className="flex items-start">
                            <span className="mr-1">•</span> 24/7 operations help
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


            {/* Mobile-Friendly Business Section (English) */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">
                    The Power of Specialization
                    </h1>
                    <p className="text-gray-600 mt-2">
                    Why I chose to leave general practice and focus on Kidney and Diabetes care.
                    </p>
                </div>

                {/* Key Features */}
                <div className="space-y-4">
                    {/* Feature 1: Gap in Market */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                    <h2 className="text-lg font-semibold text-gray-800 mb-1">
                        1. Untapped Market Opportunity
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Over 90% of Ayurvedic doctors are currently practicing general medicine, leaving a vast market for specialized care.
                    </p>
                    </div>

                    {/* Feature 2: Research & Patented Formulas */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                    <h2 className="text-lg font-semibold text-gray-800 mb-1">
                        2. Decades of Research & Patented Formulas
                    </h2>
                    <p className="text-gray-600 text-sm">
                        After 23 years of dedicated study and research, I developed 3 patented formulations.
                    </p>
                    </div>

                    {/* Feature 3: Global Patient Reach */}
                    <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                    <h2 className="text-lg font-semibold text-gray-800 mb-1">
                        3. Global Patient Reach & Proven Results
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Today, patients from all over the world seek my expertise and specialized treatments.
                    </p>
                    </div>
                </div>

                {/* Service Details (Re-purposed for Specialization Advice) */}
                <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-md font-semibold text-gray-800 mb-2">
                    Unlock Your Potential in Specialized Practice
                    </h3>

                    <ul className="space-y-2 pl-4 list-disc"> {/* Added list-disc for bullet points */}
                    <li className="text-gray-600 text-sm">
                        You too can specialize in a single disease or specific area.
                    </li>
                    <li className="text-gray-600 text-sm">
                        Consider focusing on conditions like PCOS, Liver diseases, Arthritis, or similar niches.
                    </li>
                    <li className="text-gray-600 text-sm">
                        This approach allows you to build unique expertise and a strong reputation.
                    </li>
                    </ul>
                </div>

                {/* Additional Information (Re-purposed for Benefits of Specialization) */}
                <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                    <h4 className="text-sm font-medium text-blue-700 mb-1">
                    Why Specialization Works
                    </h4>
                    <div className="text-gray-600 text-xs space-y-1">
                    <p>Focusing on a specific disease area allows for deeper expertise and more effective treatment outcomes.</p>
                    <p>It helps you stand out in the market and attract patients specifically seeking your specialized solutions.</p>
                    <p className="mt-2">This strategy leads to higher patient satisfaction and professional recognition.</p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6 flex justify-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full text-sm font-medium transition-colors">
                    Learn More About Specialization
                    </button>
                </div>
                </div>
            </section>


            {/* Our Brands Section */}
            <section className="py-16 bg-green-50 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Trusted Brands</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Arogya Hub get exclusive rights to market these established product lines
                    </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { name: "BK Kidney Care", img:"/images/imageBox/brands/KidneyVeda.png", icon: <GiHealthNormal className="text-green-600" size={32} /> },
                        { name: "Cardio Veda",img:"/images/imageBox/brands/CardioVeda.png", icon: <FaHeart className="text-green-600" size={32} /> },
                        { name: "SlimVeda", img:"/images/imageBox/brands/slimveda.png",icon: <FaWeight className="text-green-600" size={32} /> },
                        { name: "Gluco Veda",img:"/images/imageBox/brands/GlucoVeda.png", icon: <FaSyringe className="text-green-600" size={32} /> },
                        { name: "Arogyaveda", img:"/images/imageBox/brands/arogyaveda_logo_1.jpg",icon: <FaLeaf className="text-green-600" size={32} /> },
                        { name: "MuscleVeda",img:"/images/imageBox/brands/MuscleVeda.png", icon: <FaDumbbell className="text-green-600" size={32} /> },
                        { name: "Rupam", img:"/images/imageBox/brands/rupam_logo.png", icon: <FaSpa className="text-green-600" size={32} /> },
                        { name: "Osteo Veda",img:"/images/imageBox/brands/ArthoVeda.png", icon: <FaBone className="text-green-600" size={32} /> }
                    ].map((brand, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition">

                        <div className="relative w-full h-32 mb-4"> 
                            <Image
                            src={brand.img}
                            alt={brand.name}
                            fill
                            className="object-contain p-2" 
                            sizes="(max-width: 768px) 50vw, 25vw"
                            quality={80}
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{brand.name}</h3>
                        </div>
                    ))}     
                    </div>  
                </div>
            </section>


            {/* Testimonials Section */}
            <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Hear From Our Arogya Hub Partners</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Real stories from doctors who transformed their practice with BK Arogyam
                </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                    quote: "Within 18 months, my center became the go-to Ayurvedic clinic in our district with ₹12L annual profit.",
                    name: "Dr. Rajesh Verma",
                    location: "Lucknow Arogya Hub",
                    before: "Single practitioner clinic",
                    after: "Now employs 6 staff"
                    },
                    {
                    quote: "The HOPES platform helped me scale to 50+ online consultations per week without added overhead.",
                    name: "Dr. Priya Singh",
                    location: "Hyderabad Arogya Hub",
                    before: "Struggling private practice",
                    after: "Now ₹8L/month revenue"
                    },
                    {
                    quote: "The brand recognition brought instant credibility - we had 100+ patients in our first month itself.",
                    name: "Dr. Amit Patel",
                    location: "Ahmedabad Arogya Hub",
                    before: "New to Ayurveda",
                    after: "Now running 2 centers"
                    }
                ].map((testimonial, index) => (
                    <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                    <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 mb-2">{testimonial.location}</div>
                    </div>
                ))}
                </div>
            </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-600 to-green-700 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Own Your Piece of India&apos;s Ayurvedic Revolution?</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Limited territories available. Apply now before your area is taken.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div className="bg-white bg-opacity-10 p-6 rounded-xl border border-white border-opacity-20">
                        <div className="text-2xl font-bold mb-2">₹500,000</div>
                        <div className="mb-3">One-Time Investment</div>
                        <button className="w-full bg-white text-green-600 py-2 rounded-lg font-bold hover:bg-green-50 transition">
                            Apply Now
                        </button>
                    </div>
                    
                    <div className="bg-white bg-opacity-10 p-6 rounded-xl border border-white border-opacity-20">
                        <div className="text-2xl font-bold mb-2">EMI Options</div>
                        <div className="mb-3">Starting at ₹41,667/month</div>
                        <button className="w-full border border-white py-2 rounded-lg font-bold hover:bg-white hover:text-green-600 transition">
                            See Payment Plans
                        </button>
                    </div>
                    
                    <div className="bg-white bg-opacity-10 p-6 rounded-xl border border-white border-opacity-20">
                        <div className="text-2xl font-bold mb-2">Have Questions?</div>
                        <div className="mb-3">We&apos;re happy to help</div>
                        <button className="w-full border border-white py-2 rounded-lg font-bold hover:bg-white hover:text-green-600 transition">
                            Chat with Us
                        </button>
                    </div>
                    </div>
                </div>
            </section>


        </div>
    );
}