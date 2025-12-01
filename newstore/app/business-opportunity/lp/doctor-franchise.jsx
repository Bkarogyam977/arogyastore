

// app/franchise-plan/page.tsx
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
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/images/ayurvedic-pattern.svg')] bg-repeat"></div>
            </div>
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center bg-green-800 bg-opacity-30 px-4 py-1 rounded-full mb-4">
                <span className="text-sm font-semibold">LIMITED TERRITORIES AVAILABLE</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                BK Arogyam <span className="text-green-200">Franchise</span> Opportunity
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                Own an exclusive Ayurvedic healthcare center backed by 23+ years of trusted brand authority
                </p>
                {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-50 transition shadow-lg transform hover:scale-105">
                    Book Territory Consultation
                </button>
                <button className="border-2 border-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition shadow-lg transform hover:scale-105">
                    Download Franchise Kit
                </button>
                </div> */}
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
                    <div className="text-gray-600">Franchise Partners</div>
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

        {/* Overview Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose BK Arogyam Franchise?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join India&apos;s fastest growing Ayurvedic healthcare network with proven systems and brand recognition
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 transform hover:scale-105 transition duration-300">
            <div className="text-green-500 mb-4">
                <FaClinicMedical size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Flexible Integration</h3>
            <p className="text-gray-700">
                Work alongside your existing practice - no need to relocate or rebuild patient trusts
            </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 transform hover:scale-105 transition duration-300">
            <div className="text-green-500 mb-4">
                <GiMedicinePills size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Proven Product Portfolio</h3>
            <p className="text-gray-700">
                50+ clinically validated Ayurvedic formulations across specialties
            </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 transform hover:scale-105 transition duration-300">
            <div className="text-green-500 mb-4">
                <FaChartLine size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Multiple Revenue Streams</h3>
            <p className="text-gray-700">
                Earn from consultations, product sales, therapies, and network growth
            </p>
            </div>
        </div>
        </section>

        {/* Our Brands Section */}
        <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Trusted Brands</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Franchisees get exclusive rights to market these established product lines
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
                {/* <div className="mb-3">{brand.icon}</div> */}
                <div className="relative w-full h-32 mb-4"> {/* Fixed height container */}
                    <Image
                    src={brand.img}
                    alt={brand.name}
                    fill
                    className="object-contain p-2" /* Added padding within image */
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

        {/* HOPES Platform Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
            <h2 className="text-3xl font-bold mb-6">Integrated <span className="text-green-600">HOPES</span> Platform</h2>
            <p className="text-lg mb-6 text-gray-700">
                Your Arogya Hub includes complete access to our digital healthcare ecosystem:
            </p>
            <ul className="space-y-4">
                {[
                "AI-powered patient management system",
                "E-prescription generator with 50+ Ayurvedic formulations",
                "Telemedicine integration for remote consultations",
                "Inventory management dashboard",
                "Marketing automation tools",
                "Real-time performance analytics"
                ].map((item, index) => (
                <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    </div>
                    </div>
                    <span className="ml-3 text-gray-700">{item}</span>
                </li>
                ))}
            </ul>
            </div>
            <div className="bg-gray-100 rounded-xl p-4 shadow-inner border border-gray-200">
                <div className="relative w-auto h-96"> {/* Adjust height as needed */}
                    <Image
                    src="/images/imageBox/hopes/ArogyaDoc-HOPES-APP2.png"
                    alt="HOPES Platform Dashboard"
                    fill
                    className="rounded-lg object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    />
                </div>
            </div>
        </div>
        </section>

        {/* What You Get Section */}
        <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Franchise Package</h2>
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
                <li>• Clinic design blueprint</li>
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
                <li>• Annual franchisee conferences</li>
                </ul>
            </div>
            </div>
        </div>
        </section>

        {/* Revenue Calculator Section - Updated with more details */}
        {/* <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Projected Financials</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Based on average performance of existing franchisees (Year 2 projections)
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
            <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-green-600 text-white p-4 font-bold text-center">
                Revenue Streams Breakdown
                </div>
                <div className="divide-y divide-gray-200">
                {[
                    { name: "Consultations", percent: "25%", amount: "₹3,75,000" },
                    { name: "Medicine Sales", percent: "45%", amount: "₹6,75,000" },
                    { name: "Therapies", percent: "15%", amount: "₹2,25,000" },
                    { name: "Doctor Network", percent: "10%", amount: "₹1,50,000" },
                    { name: "Other Services", percent: "5%", amount: "₹75,000" }
                ].map((item, index) => (
                    <div key={index} className="grid grid-cols-3 p-4 hover:bg-green-50">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-center">{item.percent}</div>
                    <div className="text-right font-bold text-green-600">{item.amount}</div>
                    </div>
                ))}
                </div>
                <div className="bg-gray-50 p-4 font-bold grid grid-cols-3">
                <div>Total Revenue</div>
                <div></div>
                <div className="text-right text-green-600">₹15,00,000</div>
                </div>
            </div>
            </div>
            
            <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-green-600 text-white p-4 font-bold text-center">
                Profit & ROI Calculation
                </div>
                <div className="divide-y divide-gray-200">
                {[
                    { name: "Gross Revenue", amount: "₹15,00,000" },
                    { name: "Operating Costs", amount: "₹6,00,000" },
                    { name: "Franchise Fees", amount: "₹1,50,000" },
                    { name: "Net Profit Before Tax", amount: "₹7,50,000" },
                    { name: "Initial Investment", amount: "₹5,00,000" },
                    { name: "ROI Period", amount: "8-14 months" }
                ].map((item, index) => (
                    <div key={index} className="grid grid-cols-2 p-4 hover:bg-green-50">
                    <div className="font-medium">{item.name}</div>
                    <div className={`text-right font-bold ${
                        index === 3 ? 'text-green-600' : 
                        index === 1 || index === 2 ? 'text-red-500' : 
                        'text-gray-700'
                    }`}>
                        {item.amount}
                    </div>
                    </div>
                ))}
                </div>
            </div>

            </div>
        </div>
        </section> */}


        {/* Doctor Franchise Earnings Projection - 4 Month View */}
        <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-6">Franchise Income Projection (First 4 Months)</h2>
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


        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hear From Our Franchise Partners</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real stories from doctors who transformed their practice with BK Arogyam
            </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
            {[
                {
                quote: "Within 18 months, my center became the go-to Ayurvedic clinic in our district with ₹12L annual profit.",
                name: "Dr. Rajesh Verma",
                location: "Lucknow Franchise",
                before: "Single practitioner clinic",
                after: "Now employs 6 staff"
                },
                {
                quote: "The HOPES platform helped me scale to 50+ online consultations per week without added overhead.",
                name: "Dr. Priya Singh",
                location: "Hyderabad Franchise",
                before: "Struggling private practice",
                after: "Now ₹8L/month revenue"
                },
                {
                quote: "The brand recognition brought instant credibility - we had 100+ patients in our first month itself.",
                name: "Dr. Amit Patel",
                location: "Ahmedabad Franchise",
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