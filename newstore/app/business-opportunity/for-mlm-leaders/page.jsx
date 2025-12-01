import Head from 'next/head';
import Image from 'next/image';
// import { FaPlay, FaStar, FaAward, FaChartLine, FaUsers, FaBoxOpen, FaShieldAlt, FaRupeeSign, FaMedal } from 'react-icons/fa';
import { FaPlay, FaStar, FaAward, FaChartLine, FaUsers, FaBoxOpen, FaShieldAlt, FaRupeeSign, FaMedal, FaCheck, FaTimes } from 'react-icons/fa';



export default function MLMLeaders() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>B.K. Arogyam MLM - Ayurvedic Business Opportunity</title>
        <meta name="description" content="Join B.K. Arogyam's proven Ayurvedic MLM network. Earn ₹25,000-₹1,00,000+ monthly with our lucrative compensation plan." />
      </Head>



        {/* Hero Section */}
        <section className="bg-gradient-to-b from-green-500 to-green-700 text-white pt-12 pb-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 px-4 py-1 rounded-full mb-4 text-sm font-medium backdrop-blur-sm">
                LIMITED TERRITORIES AVAILABLE
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                The <span className="text-green-200">MLM Revolution</span> in Ayurveda
            </h1>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
                Where broken MLM dreams find new life with ethical practices
            </p>
            
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-md mx-auto mb-8">
                {[
                { value: "25K+", label: "Doctors Empowered" },
                { value: "0%", label: "False Promises" },
                { value: "100%", label: "Transparency" },
                { value: "50+", label: "Genuine Products" }
                ].map((stat, i) => (
                <div key={i} className="bg-white/10 p-2 rounded-lg">
                    <p className="font-bold text-xl">{stat.value}</p>
                    <p className="text-xs opacity-90">{stat.label}</p>
                </div>
                ))}
            </div> */}

            <div className="flex flex-col sm:flex-row justify-center gap-3">
                {/* <button className="bg-white text-green-800 font-bold py-3 px-6 rounded-full hover:bg-green-100 transition flex-1 sm:flex-none">
                Redeem Your Dream - ₹8,000
                </button> */}
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
                    <div className="text-3xl font-bold text-green-600">200K+</div>
                    <div className="text-gray-600">Patients Treated</div>
                </div>
                <div className="p-4">
                    <div className="text-3xl font-bold text-green-600">20+</div>
                    <div className="text-gray-600">Awards Won</div>
                </div>
                </div>
            </div>
        </section>


        {/* Value  */}
        <section className="py-12 px-4 bg-white">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                {
                icon: <FaRupeeSign className="text-green-600" size={20} />,
                title: "High Margins",
                desc: "25-40% direct commission on product sales"
                },
                {
                icon: <FaUsers className="text-green-600" size={20} />,
                title: "Team Royalty",
                desc: "Earn 5-1% on 4 levels of team sales"
                },
                {
                icon: <FaMedal className="text-green-600" size={20} />,
                title: "Leadership Pool",
                desc: "2% share of company turnover"
                }
            ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-full mt-1">
                    {item.icon}
                </div>
                <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
                </div>
            ))}
            </div>
        </section>


        {/* MLM Problem Section */}
        <section className="py-12 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Why Traditional MLM Failed You</h2>
                    <p className="text-gray-600">The unfulfilled promises that left your dreams incomplete</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                <h3 className="font-bold text-lg text-red-700 mb-4 flex items-center">
                    <FaTimes className="mr-2" /> The MLM Trap
                </h3>
                <ul className="space-y-3">
                    {[
                    "False dreams and exaggerated claims",
                    "No income for lower-level distributors",
                    "Overpriced products that don't sell",
                    "Customers never return for repeat purchases",
                    "Market saturation - everyone selling to everyone",
                    "No security - neither income nor team stability",
                    "More effort, less profit - disproportionate returns"
                    ].map((item, i) => (
                    <li key={i} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>{item}</span>
                    </li>
                    ))}
                </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                <h3 className="font-bold text-lg text-green-700 mb-4 flex items-center">
                    <FaCheck className="mr-2" /> The Arogya Bharat Solution
                </h3>
                <ul className="space-y-3">
                    {[
                    "Transparent, realistic earning potential",
                    "Equitable income for all levels",
                    "Fairly priced, effective Ayurvedic products",
                    "Repeat customers through genuine results",
                    "Protected territories - no market saturation",
                    "Income and team security guarantees",
                    "Rewards proportional to effort"
                    ].map((item, i) => (
                    <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>{item}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            </div>
        </section>


        {/* Value Proposition */}
        <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">How We Fix MLM&apos;s Flaws</h2>
                <p className="text-gray-600">Arogya Bharat&apos;s revolutionary approach to network marketing</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                {
                    icon: <FaShieldAlt className="text-green-600" size={24} />,
                    title: "No False Promises",
                    desc: "Realistic income projections with transparent calculations"
                },
                {
                    icon: <FaRupeeSign className="text-green-600" size={24} />,
                    title: "Fair Pricing",
                    desc: "Products priced for market acceptance and repeat purchases"
                },
                {
                    icon: <FaUsers className="text-green-600" size={24} />,
                    title: "Team Protection",
                    desc: "Territory rights prevent cross-selling and market flooding"
                },
                {
                    icon: <FaMedal className="text-green-600" size={24} />,
                    title: "Sustainable Growth",
                    desc: "Focus on health outcomes creates loyal customer base"
                },
                {
                    icon: <FaChartLine className="text-green-600" size={24} />,
                    title: "Balanced Earnings",
                    desc: "Rewards both personal sales and team building fairly"
                },
                {
                    icon: <FaAward className="text-green-600" size={24} />,
                    title: "Credible Backing",
                    desc: "23+ years of Ayurvedic expertise and Dr. BK Chaurasia's reputation"
                }
                ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                    {item.icon}
                    </div>
                    <h3 className="font-bold text-center mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 text-center">{item.desc}</p>
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
                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
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


        {/* Income Plan */}
        <section className="py-12 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Your Earning Blueprint</h2>
                <p className="text-gray-600">Multiple income streams for maximum growth</p>
            </div>

            <div className="space-y-4">
                {[
                {
                    title: "Direct Sales Commission",
                    desc: "Earn 15-20% on every product you sell",
                    amount: "₹5,000-₹20,000/month"
                },
                {
                    title: "Team Building Bonus",
                    desc: "5% on Level 1, 3% on Level 2, 2% on Level 3, 1% on Level 4",
                    amount: "₹10,000-₹50,000/month"
                },
                {
                    title: "Leadership Pool",
                    desc: "2% of company turnover shared among top performers",
                    amount: "Up to ₹1,00,000+/month"
                }
                ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition">
                    <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold flex items-center gap-2">
                        <FaChartLine className="text-green-600" /> {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                        {item.amount}
                    </span>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>


        {/* Plan Comparison */}
        <section className="py-12 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Choose Your Business Plan</h2>
                <p className="text-gray-600">Start small or go all-in with our flexible options</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                {[
                {
                    name: "Starter",
                    price: "₹8,000",
                    features: ["Basic ID", "10% discount", "Personal sales"],
                    cta: "Begin Now"
                },
                {
                    name: "Prime",
                    price: "₹25,000",
                    features: ["Team building", "15% discount", "Arogya Point access"],
                    cta: "Upgrade",
                    popular: true
                },
                {
                    name: "Elite",
                    price: "₹1,00,000",
                    features: ["Full rights", "20% discount", "Retail authority"],
                    cta: "Go Premium"
                }
                ].map((plan, i) => (
                <div key={i} className={`border rounded-lg overflow-hidden ${plan.popular ? "border-green-500 shadow-lg" : "border-gray-200"}`}>
                    {plan.popular && (
                    <div className="bg-green-500 text-white text-center py-1 text-sm font-medium">
                        MOST POPULAR
                    </div>
                    )}
                    <div className="p-5">
                    <h3 className="font-bold text-xl mb-1">{plan.name}</h3>
                    <p className="text-2xl font-bold mb-3">{plan.price}</p>
                    <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>{feature}</span>
                        </li>
                        ))}
                    </ul>
                    <button className={`w-full py-2 rounded-md font-medium ${plan.popular ? "bg-green-600 hover:bg-green-700 text-white" : "bg-gray-100 hover:bg-gray-200"}`}>
                        {plan.cta}
                    </button>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>


        {/* Final CTA */}
        <section className="py-16 px-4 bg-green-800 text-white">
            <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Practice?</h2>
            <p className="mb-6">Join 25,000+ doctors who&apos;ve multiplied their income with Ayurveda</p>
            </div>
        </section>
    </div>
  );
}


