// app/associate-plan/page.tsx
import { FaUserMd, FaClinicMedical, FaChartLine, FaHandsHelping, 
    FaMoneyBillWave, FaBoxOpen, FaHeadset, FaAward, FaTools } from 'react-icons/fa';
import { GiMedicinePills, GiHealthNormal } from 'react-icons/gi';

export default function AssociatePlan() {
    return (
        <div className="bg-gradient-to-b from-green-50 to-white">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/images/ayurvedic-pattern.svg')] bg-repeat"></div>
            </div>

            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center bg-green-800 bg-opacity-30 px-4 py-1 rounded-full mb-4">
                <span className="text-sm font-semibold">LIMITED SLOTS AVAILABLE</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                BK Arogyam <span className="text-green-200">Associate Plan</span>
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                Boost your practice income by 3X with Ayurvedic integration and digital reach
                </p>
            </div>
            </section>

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

        {/* Overview Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Become a BK Arogyam Associate?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Perfect for doctors who want to supplement income without quitting their current practice
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 transform hover:scale-105 transition duration-300">
            <div className="text-green-500 mb-4">
                <FaUserMd size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Flexible Integration</h3>
            <p className="text-gray-700">
                Work alongside your existing practice - no need to relocate or rebuild patient trust
            </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 transform hover:scale-105 transition duration-300">
            <div className="text-green-500 mb-4">
                <GiMedicinePills size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Premium Products</h3>
            <p className="text-gray-700">
                Access to 20+ clinically-proven Ayurvedic formulations (worth ₹50,000)
            </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100 transform hover:scale-105 transition duration-300">
            <div className="text-green-500 mb-4">
                <FaChartLine size={40} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Dual Earnings</h3>
            <p className="text-gray-700">
                Earn from consultations + product sales + team royalties
            </p>
            </div>
        </div>
        </section>

        {/* Plan Comparison Section */}
        <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Associate vs. Franchise</h2>
            
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
                    Associate plan is ideal for individual doctors, while Franchise suits those wanting full-scale centers
                    </p>
                </div>
                </div>
                
                {/* Franchise Plan */}
                <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-amber-600 mb-4">Franchise</h3>
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
                    Explore Franchise
                </button>
                </div>
            </div>
            </div>
        </div>
        </section>

        {/* What You Get Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Your Associate Package (₹100,000 Value)</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to start earning with BK Arogyam immediately
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md border border-green-100">
                <div className="text-green-500 mb-4">
                    <FaBoxOpen size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Product Starter Kit</h3>
                <ul className="space-y-2 text-gray-600">
                    <li>• ₹50,000 worth of medicines (choose 2 specialties)</li>
                    <li>• Diagnostic tools (BP monitor, glucometer, etc.)</li>
                    <li>• Patient education materials</li>
                    <li>• Branded prescription pads</li>
                </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-green-100">
                <div className="text-green-500 mb-4">
                    <FaUserMd size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Training & Certification</h3>
                <ul className="space-y-2 text-gray-600">
                    <li>• 3-day intensive Ayurvedic training</li>
                    <li>• Monthly skill-up webinars</li>
                    <li>• &quot;Certified Ayurvedic Practitioner&quot; designation</li>
                    <li>• Product knowledge modules</li>
                </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-green-100">
                <div className="text-green-500 mb-4">
                    <FaTools size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Marketing Support</h3>
                <ul className="space-y-2 text-gray-600">
                    <li>• Ready-to-use social media templates</li>
                    <li>• Patient referral program materials</li>
                    <li>• Clinic branding kit (posters, standee designs)</li>
                    <li>• Email campaign templates</li>
                </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-green-100">
                <div className="text-green-500 mb-4">
                    <FaHeadset size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Digital Tools</h3>
                <ul className="space-y-2 text-gray-600">
                    <li>• HOPES platform access (basic plan)</li>
                    <li>• E-prescription generator</li>
                    <li>• Patient management dashboard</li>
                    <li>• Telemedicine integration</li>
                </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-green-100">
                <div className="text-green-500 mb-4">
                    <FaMoneyBillWave size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Earnings Potential</h3>
                <ul className="space-y-2 text-gray-600">
                    <li>• 25% commission on product sales</li>
                    <li>• 5% royalty from recruited associates</li>
                    <li>• Bonus for hitting milestones</li>
                    <li>• Upgrade path to Franchise</li>
                </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-green-100">
                <div className="text-green-500 mb-4">
                    <FaAward size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Recognition</h3>
                <ul className="space-y-2 text-gray-600">
                    <li>• Listing on BK Arogyam website</li>
                    <li>• Certificate for clinic display</li>
                    <li>• Quarterly performance awards</li>
                    <li>• Feature in newsletter</li>
                </ul>
                </div>
            </div>
        </section>


        {/* Earnings Calculator Section */}
        {/* <section className="py-16 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12">Your Earning Potential</h2>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 text-center border-b">
                    <div className="p-4 bg-green-600 text-white font-bold">Activity</div>
                    <div className="p-4 bg-green-600 text-white font-bold">Commission</div>
                    <div className="p-4 bg-green-600 text-white font-bold">Monthly Goal</div>
                    <div className="p-4 bg-green-600 text-white font-bold">Your Earnings</div>
                </div>
                
                {[
                    { activity: "Product Sales", commission: "25%", goal: "₹1,00,000", earnings: "₹25,000" },
                    { activity: "Consultations", commission: "₹200/session", goal: "50 sessions", earnings: "₹10,000" },
                    { activity: "Team Royalties", commission: "5%", goal: "2 recruits @ ₹50K", earnings: "₹5,000" },
                    { activity: "Bonus", commission: "Milestone", goal: "₹1.5L+ sales", earnings: "₹5,000" },
                ].map((item, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-4 text-center border-b hover:bg-green-50">
                    <div className="p-4 font-medium">{item.activity}</div>
                    <div className="p-4">{item.commission}</div>
                    <div className="p-4">{item.goal}</div>
                    <div className="p-4 font-bold text-green-600">{item.earnings}</div>
                    </div>
                ))}
                
                <div className="grid grid-cols-1 md:grid-cols-4 text-center bg-green-100">
                    <div className="p-4 font-bold">Total</div>
                    <div className="p-4"></div>
                    <div className="p-4"></div>
                    <div className="p-4 font-bold text-green-700">₹45,000/month</div>
                </div>
                </div>
                
                <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                    Average associate earnings in Year 1 (top performers earn 2-3x more)
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold">
                    Calculate Your Custom Projection
                </button>
                </div>
            </div>
        </section> */}
        {/* Earnings Calculator Section - Mobile Friendly */}


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


        {/* How It Works Section */}
        <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Simple 4-Step Onboarding</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
            {[
                {
                step: "1",
                title: "Application",
                content: "Submit basic details (15 mins)"
                },
                {
                step: "2",
                title: "Orientation",
                content: "1-hour online session"
                },
                {
                step: "3",
                title: "Kit Delivery",
                content: "Receive products & materials"
                },
                {
                step: "4",
                title: "Start Earning",
                content: "Begin consultations & sales"
                }
            ].map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                    {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.content}</p>
                </div>
            ))}
            </div>
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