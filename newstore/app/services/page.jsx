// import Head from 'next/head';
// import { Card, Button } from 'antd';
// import { 
//   FaHeartbeat, FaBalanceScale, FaRecycle, FaCapsules, FaLeaf, 
//   FaLaptopMedical, FaBox, FaGraduationCap 
// } from 'react-icons/fa';

// const services = [
//   {
//     icon: <FaHeartbeat size={26} className="text-green-600" />,
//     title: 'Personalized Ayurvedic Consultations',
//     desc: [
//       '🔍 Comprehensive Health Assessment',
//       'Prakriti (Body Constitution) analysis',
//       '1-on-1 session with Ayurvedic experts',
//       'Customized healing plans'
//     ]
//   },
//   {
//     icon: <FaBalanceScale size={26} className="text-yellow-500" />,
//     title: 'Precision Dosha Balancing',
//     desc: [
//       '⚖️ Vata-Pitta-Kapha identification',
//       'Personalized diet & herbs',
//       'Lifestyle recommendations',
//       'Preventive balance & harmony'
//     ]
//   },
//   {
//     icon: <FaRecycle size={26} className="text-blue-500" />,
//     title: 'Deep Cellular Detoxification',
//     desc: [
//       '🧼 Panchakarma Therapies',
//       'Medically guided detox',
//       'Therapies: Abhyanga, Basti, Nasya',
//       'Boost immunity & vitality'
//     ]
//   },
//   {
//     icon: <FaCapsules size={26} className="text-pink-600" />,
//     title: 'Pure Herbal Formulations',
//     desc: [
//       '🌱 100% Natural & Classical',
//       'Free from chemicals & side effects',
//       'Lab-tested purity',
//       'Effective for chronic conditions'
//     ]
//   },
//   {
//     icon: <FaLeaf size={26} className="text-lime-600" />,
//     title: 'Targeted Disease Management',
//     desc: [
//       '🩺 Diabetes – Herbs + Yoga',
//       'Joint Pain – Panchakarma + Mods',
//       'Skin – Internal & Topical',
//       'Digestive – Gut healing protocols'
//     ]
//   },
//   {
//     icon: <FaLaptopMedical size={26} className="text-indigo-600" />,
//     title: 'Digital Ayurveda',
//     desc: [
//       '💻 Teleconsultations via video/chat',
//       'E-prescriptions & medicine delivery',
//       'WhatsApp-based follow-ups',
//     ]
//   },
//   {
//     icon: <FaBox size={26} className="text-orange-600" />,
//     title: 'Curated Wellness Packages',
//     desc: [
//       '📦 Kidney, Skin, Diabetes Kits',
//       'Meds, plans, progress support',
//       '3–6 month duration',
//     ]
//   },
//   {
//     icon: <FaGraduationCap size={26} className="text-purple-600" />,
//     title: 'Ayurveda Education',
//     desc: [
//       '🎓 Workshops & Webinars',
//       'Courses on diet & therapy',
//       'Seasonal wellness tips'
//     ]
//   }
// ];


// export default function ServicesPage() {
//   return (
//     <>
//       <Head>
//         <title>Our Services | ArogyaBharat</title>
//       </Head>

//       <main className="bg-[#f9fafb] py-10 px-4 sm:px-10">
//         {/* Hero Section */}
//         <section className="text-center max-w-5xl mx-auto mb-12">
//           <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-3">
//             🌿 Holistic Healing Rooted in Ayurveda, Tailored for Modern Lives
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-600">
//             We combine 5,000 years of Ayurvedic wisdom with modern science to heal from the root — not just the symptoms.
//           </p>
//         </section>

//         {/* Services Cards */}
//         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {services.map((service, idx) => (
//             <Card
//               key={idx}
//               className="h-full hover:shadow-lg transition-all duration-200 border border-gray-100 rounded-xl"
//               bodyStyle={{ padding: '20px' }}
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 {service.icon}
//                 <h3 className="text-lg font-semibold">{service.title}</h3>
//               </div>
//               <ul className="list-disc text-sm text-gray-600 ml-6 space-y-1">
//                 {service.desc.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//             </Card>
//           ))}
//         </section>

//         {/* Why Choose Us */}
//         <section className="max-w-5xl mx-auto mt-20 text-center">
//           <h2 className="text-2xl font-bold text-green-700 mb-6">✅ Why 50,000+ Patients Trust ArogyaBharat</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
//             {[
//               ['Genuine Ayurveda', 'No modern drugs mixed – 100% authentic'],
//               ['Doctor-Personalized', 'Tailored healing plans, never generic'],
//               ['360° Follow-up', 'End-to-end care with regular tracking'],
//               ['Transparent Pricing', 'No hidden costs – full clarity']
//             ].map(([title, desc], i) => (
//               <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
//                 <strong className="block text-green-700 mb-1">🔹 {title}</strong>
//                 <p className="text-sm text-gray-600">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="text-center mt-20 max-w-3xl mx-auto">
//           <h2 className="text-2xl font-bold text-green-700 mb-4">🚀 Begin Your Healing Journey Today</h2>
//           <p className="mb-6 text-gray-600">✨ First Consultation is absolutely FREE!</p>
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
//             <Button type="primary" size="large" className="bg-green-600 hover:bg-green-700 border-none">
//               📞 Call Us
//             </Button>
//             <Button size="large" className="border-green-600 text-green-600 hover:text-white hover:bg-green-600">
//               💬 WhatsApp
//             </Button>
//             <Button size="large" className="hover:border-green-700 hover:text-green-700">
//               🌐 Book Online
//             </Button>
//           </div>

//           <div className="space-y-2 text-blue-700 text-sm">
//             <a href="#" className="block hover:underline">📥 Patient Success Stories</a>
//             <a href="#" className="block hover:underline">📥 Treatment Brochure</a>
//             <a href="#" className="block hover:underline">📥 Seasonal Wellness Guide</a>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }



import { Card, Button } from 'antd';
import { FaLeaf, FaBalanceScale, FaRecycle, FaCapsules, FaLaptopMedical, FaBox, FaGraduationCap, FaHeartbeat } from 'react-icons/fa';
import Head from 'next/head';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | ArogyaBharat</title>
        <meta name="description" content="Discover authentic Ayurvedic services blending ancient wisdom with modern science for complete wellness" />
      </Head>

      <div className="bg-gradient-to-b from-green-50 to-white min-h-screen px-4 sm:px-10 py-12 text-gray-800">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-800 mb-6 leading-tight">
            Ancient Wisdom, Modern Wellness
          </h1>
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-3 bg-green-100 rounded-full blur opacity-75"></div>
            <p className="relative text-xl sm:text-2xl text-gray-700 bg-white px-6 py-3 rounded-full border border-green-200">
              Where 5,000 years of Ayurveda meets contemporary healthcare
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12 relative">
            <span className="relative inline-block">
              Our Holistic Services
              <span className="absolute bottom-0 left-0 w-full h-1 bg-green-200 transform translate-y-2"></span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaHeartbeat className="text-3xl text-green-600" />}
              title="Personalized Ayurvedic Consultations"
              desc={[
                'Comprehensive dosha analysis (Vata, Pitta, Kapha)',
                'In-depth health assessment using pulse diagnosis',
                'Customized treatment plans for chronic conditions',
                'Follow-up consultations to track progress'
              ]}
              bgColor="bg-green-50"
            />

            <ServiceCard
              icon={<FaBalanceScale className="text-3xl text-yellow-600" />}
              title="Dosha Balancing Therapies"
              desc={[
                'Personalized herbal formulations',
                'Seasonal detoxification programs',
                'Stress and anxiety management',
                'Sleep disorder treatments'
              ]}
              bgColor="bg-amber-50"
            />

            <ServiceCard
              icon={<FaRecycle className="text-3xl text-blue-600" />}
              title="Panchakarma Detox"
              desc={[
                'Medically supervised 5-stage purification',
                'Abhyanga (therapeutic oil massage)',
                'Basti (medicated enema therapy)',
                'Shirodhara (mind-calming treatment)'
              ]}
              bgColor="bg-blue-50"
            />

            <ServiceCard
              icon={<FaCapsules className="text-3xl text-rose-500" />}
              title="Authentic Herbal Medicines"
              desc={[
                '100% natural, chemical-free formulations',
                'Prepared following classical texts',
                'GMP-certified manufacturing',
                'Quality tested for purity and potency'
              ]}
              bgColor="bg-rose-50"
            />

            <ServiceCard
              icon={<FaLeaf className="text-3xl text-emerald-600" />}
              title="Chronic Disease Management"
              desc={[
                'Diabetes reversal programs',
                'Arthritis and joint pain relief',
                'Digestive disorders treatment',
                'Skin disease management'
              ]}
              bgColor="bg-emerald-50"
            />

            <ServiceCard
              icon={<FaLaptopMedical className="text-3xl text-indigo-600" />}
              title="Digital Wellness Platform"
              desc={[
                'Virtual consultations with experts',
                'AI-powered dosha assessment',
                'Mobile app for treatment tracking',
                '24/7 practitioner support'
              ]}
              bgColor="bg-indigo-50"
            />

            <ServiceCard
              icon={<FaBox className="text-3xl text-orange-600" />}
              title="Wellness Retreats"
              desc={[
                '7/14/21-day residential programs',
                'Yoga and meditation sessions',
                'Ayurvedic cooking classes',
                'Nature therapy in serene locations'
              ]}
              bgColor="bg-orange-50"
            />

            <ServiceCard
              icon={<FaGraduationCap className="text-3xl text-purple-600" />}
              title="Ayurveda Education"
              desc={[
                'Certification courses for practitioners',
                'Self-care workshops',
                'Corporate wellness programs',
                'Seasonal health webinars'
              ]}
              bgColor="bg-purple-50"
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-20 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-green-700 p-6 text-white">
              <h2 className="text-3xl font-bold text-center">Why Choose ArogyaBharat?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Authenticity</h3>
                <p className="text-gray-600">Pure Ayurveda without modern medicine shortcuts</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Expertise</h3>
                <p className="text-gray-600">Doctors with 15+ years clinical experience</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Science-Backed</h3>
                <p className="text-gray-600">Evidence-based traditional therapies</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💚</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Holistic Care</h3>
                <p className="text-gray-600">Treating root causes, not just symptoms</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mt-20 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <blockquote className="text-center">
              <p className="text-xl italic text-gray-700 mb-6">
                &quot;After years of unsuccessful treatments for my arthritis, ArogyaBharat&lsquo;s personalized approach finally brought relief.
                 Their Panchakarma therapy changed my life - I&lsquo;m now pain-free without any medications.&quot;
              </p>
              <footer className="text-green-700 font-medium">
                — Rajesh Mehta, 58, Mumbai
              </footer>
            </blockquote>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-20">
          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12 px-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Begin Your Healing Journey</h2>
            <p className="text-xl mb-8 opacity-90">Experience the transformative power of authentic Ayurveda</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button type="primary" size="large" className="bg-white text-green-800 hover:bg-gray-100 font-medium h-12 px-8">
                Book Free Consultation
              </Button>
              <Button size="large" className="border-white text-green hover:text-white hover:border-white font-medium h-12 px-8">
                Call +91 98765 43210
              </Button>
            </div>
            <p className="mt-6 text-green-200">🌿 100% natural • No side effects • Proven results</p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <a href="#" className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center justify-center gap-2">
              <span className="text-green-600">📥</span> Download Brochure
            </a>
            <a href="#" className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center justify-center gap-2">
              <span className="text-green-600">🎥</span> Watch Patient Stories
            </a>
            <a href="#" className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center justify-center gap-2">
              <span className="text-green-600">📚</span> Ayurveda Resources
            </a>
          </div>
        </section>
      </div>
    </>
  );
}


const ServiceCard = ({ icon, title, desc, bgColor = 'bg-white' }) => (
  <div className={`${bgColor} rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 h-full flex flex-col`}>
    <div className="p-6 flex-1">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-white p-3 rounded-full shadow-sm">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-3 pl-2">
        {desc.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="px-6 pb-4">
      <Button type="text" className="text-green-600 font-medium p-0 hover:bg-transparent">
        Learn more →
      </Button>
    </div>
  </div>
);