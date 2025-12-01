'use client';
import { Layout, Button } from 'antd';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Collapse } from 'antd';
import TestimonialSection from '@/app/homepage/testomonials';
import ApointmentBooking from '@/app/homepage/apointmentbooking';

const { Panel } = Collapse;

function Services() {
    const router = useRouter();

    return (
        <Layout className=''>

            <div className='md:mt-28 mt-6' style={{ position: 'relative', width: '100%', height: 'auto' }}>
                <Image
                    src="/images/hops/AKRT_cover.webp"
                    layout="responsive"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    style={{ width: '100%', height: 'auto' }}
                />


                <div style={{
                    position: 'absolute',
                    top: '95%',
                    left: '10%',
                }}>
                    <h2
                        className="w-full md:w-auto md:text-xl md:px-10 px-2 py-1 rounded-xl text-white font-bold bg-orange-500 to-blue-300 cursor-pointer"
                        onClick={() => {
                            const element = document.getElementById("id_book_apointment");
                            if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        Book an Appointment to Consult Our Doctor
                    </h2>
                </div>

            </div>



            {/* Form Section */}
            <div className="mx-1 md:mx-14 mt-10 flex flex-col md:flex-row gap-5" id="id_book_apointment">
                {/* Right: Content */}
                <div className="p-5  flex-grow max-w-[70em]">
                    <h2 className="text-4xl font-bold mb-2 text-orange-700">What Is Kidney Disease?</h2>
                    <p className='text-sm mt-3 text-black'>Kidney disease is a condition where the kidneys, two vital bean-shaped organs located near the spine, become damaged and lose their ability to filter waste, excess fluids, and toxins from the blood. The kidneys also regulate blood pressure, maintain electrolyte balance, and produce hormones that help in red blood cell production and bone health. When the kidneys no longer function properly, harmful substances build up in the bloodstream, disrupting normal body functions.</p>
                    <p className='text-sm mt-3 text-black'>The early stages of kidney disease are often silent and do not present clear symptoms. Many individuals may feel unusually tired, experience swelling, or notice changes in their urination, such as increased frequency or difficulty passing urine. Some may see blood in their urine, while others may suffer from foamy urine or changes in urine color. At this stage, kidney disease is often overlooked as its symptoms are nonspecific and can be attributed to other conditions.</p>
                    <p className='text-sm mt-3 text-black'>As kidney disease progresses, more severe symptoms develop. High blood pressure (hypertension) is common, as the kidneys play a crucial role in regulating blood pressure. Fragile bones can occur due to the kidneys’ reduced ability to activate vitamin D, leading to calcium imbalances. Nerve damage and swelling in the legs, feet, or face may also be noticeable, indicating the worsening of kidney function. In the final stages of kidney disease, kidney failure can occur, requiring dialysis or a kidney transplant for survival.</p>
                    <p className='text-sm mt-3 text-black'>There are different forms of kidney disease, including acute kidney injury, which occurs suddenly and may be reversible if treated promptly, and chronic kidney disease (CKD), which is a long-term condition that can progressively worsen over time. Causes of kidney disease include diabetes, hypertension, urinary tract infections, polycystic kidney disease (a genetic disorder), and other genetic factors. Chronic conditions like obesity, smoking, and a poor diet may also contribute to the development and progression of kidney disease.</p>
                    <p className='text-sm mt-3 text-black'>Early diagnosis is essential in slowing the progression of kidney disease. Routine blood tests, such as measuring the glomerular filtration rate (GFR), and urine tests that check for protein or blood can detect kidney problems early. Imaging tests, such as ultrasounds, can help identify structural abnormalities. If kidney disease is diagnosed early, lifestyle changes, medications, and proper management can help prevent further damage. Managing blood sugar levels in diabetes and controlling high blood pressure are essential steps in preventing kidney disease. A diet low in sodium, protein, and processed foods, along with regular exercise, can also help protect kidney health.</p>
                    <p className='text-sm mt-3 text-black'>Preventing kidney disease involves lifestyle modifications that support overall kidney function. Staying hydrated, limiting alcohol intake, quitting smoking, and maintaining a healthy weight can all reduce the risk. In addition, individuals with high-risk factors, such as a family history of kidney disease or diabetes, should undergo regular check-ups to monitor kidney health. With early detection, effective management, and lifestyle changes, individuals with kidney disease can slow its progression and manage complications, helping them maintain a good quality of life.</p>
                </div>
                {/* Left: Form */}
                <div className="enquire-form bg-white shadow-md rounded-lg max-w-sm">
                    <div className="top-part mb-4 bg-blue-200 p-5">
                        <h2 className="text-4xl font-bold text-black">24,324</h2>
                        <p className="text-clack font-bold mt-3 text-black">Achieved Cardio Goals: Consultation Success</p>
                    </div>
                    <div className="form-prt mb-4 p-5">
                        <h4 className="text-lg font-semibold text-black">Understand the root-cause of your Cardio problems</h4>
                        <p className="text-gray-600 mt-2">Fill in your details, a doctor&apos;s assistant will contact you within a hours to book your consultation</p>
                        <div className="form mt-3">
                            <ApointmentBooking />
                        </div>
                    </div>
                </div>
            </div>
            {/* Form Section End */}



            {/* AKRT Section */}
            <div className="mx-5 md:mx-10 mb-10">
                {/* Title and Introduction */}
                <div className='bg-orange-700 px-5 md:px-20 p-10 mt-10 text-center rounded-lg'>
                    <h1 className='md:text-4xl  text-2xl text-white font-bold'>Our Innovative Approach to Treatment and Regeneration</h1>
                    <h1 className='text-2xl text-white font-bold mt-3'>AKRT (Alternative Kidney Regeneration Treatment)</h1>
                    <p className='text-white mt-3 text-sm'>
                        After 23 years of intensive research, BK Arogya & Research Pvt. Ltd. has come up with a wonderful solution for kidney patients in India and around the world – Alternative Kidney Regeneration Treatment (AKRT)!
                    </p>
                </div>

                {/* What is AKRT Section */}
                <div className="md:p-5 mt-7 md:text-center">
                    <h2 className="text-3xl font-semibold mb-4 text-black">What is AKRT?</h2>
                    <p className="text-gray-600 md:px-32">
                        Alternative Kidney Regeneration Treatment (AKRT) is a groundbreaking 10-day Ayurvedic protocol designed to rejuvenate kidney function and improve overall health. Developed by BK Arogya & Research Pvt. Ltd. after 23 years of extensive research, AKRT aims to liberate patients from the need for dialysis and significantly reduce elevated creatinine levels. This holistic treatment utilizes natural ingredients and therapies to restore kidney health, helping patients regain vitality and enhance their quality of life. AKRT focuses on addressing the root causes of kidney disease, making it a safe and effective alternative for individuals seeking kidney regeneration.
                    </p>
                </div>
            </div>
            {/* AKRT Section End */}


            {/* Grid Section */}
            <h2 className="text-4xl font-bold mb-2 text-center p-7 text-orange-600">What does AKRT include?</h2>
            <div className="mx-1 md:mx-10 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10">
                {/* Grid Items */}
                {[
                    { src: "/images/hops/kidney-medicines.webp", title: "Exclusive Ayurvedic Medicines", description: "A combination of natural herbs and blends formulated to specifically target your kidney health." },
                    { src: "/images/hops/Yogaji.webp", title: "Yoga & Pranayama", description: "Breathing and yoga techniques to reduce stress, improve blood flow, and promote overall health." },
                    { src: "/images/hops/panch.webp", title: "Panchakarma Therapy", description: "Ancient Ayurvedic cleansing procedures to remove toxins from the body and purify internal organs." },
                    { src: "/images/hops/nuturo-tretment.webp", title: "Naturopathy Treatments", description: "Strengthening the immune system and promoting overall health using natural remedies." },
                    { src: "/images/hops/cell-regenration.webp", title: "Innovative Cell Regeneration Machine", description: "Innovative technology to help regenerate and repair damaged kidney cells." },
                    { src: "/images/hops/rbk.webp", title: "Research-Based Kidney Diet", description: "Specially formulated diet plan to support your kidney health and improve function." },
                    { src: "/images/hops/Kidney-Regeneration.webp", title: "Kidney Regeneration Lifestyle Protocol", description: "Daily routine and lifestyle changes to help you adopt healthy habits." },
                    { src: "/images/hops/Yagyachi.webp", title: "Yagya Chikitsa", description: "Ancient Vedic fire rituals to cure diseases and promote overall health." },
                    { src: "/images/hops/mantachikitsa.webp", title: "Mantra Chikitsa", description: "Healing and rejuvenation using sound vibrations and powerful mantras." },
                    { src: "/images/hops/pranic-healing.webp", title: "Pranic Healing", description: "An ancient art of healing diseases and promoting health through touch and energy transfer." },
                    { src: "/images/hops/acupressure.webp", title: "Acupressure", description: "A Chinese medical practice of balancing energy flow and relieving pain and illness by applying pressure to specific points on the body." },
                    { src: "/images/hops/Body-Scanning.webp", title: "Exclusive Complete Body Scanning", description: "Advanced diagnostic techniques to thoroughly evaluate damage in the body." }
                ].map((item, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-5">
                        <Image
                            src={item.src}
                            alt={item.title}
                            width={500}
                            height={300}
                            className="w-full h-auto rounded-lg mb-3"
                        />
                        <h3 className="text-xl font-semibold mb-2 text-black text-center">{item.title}</h3>
                        <p className="text-gray-600 text-center">{item.description}</p>
                    </div>
                ))}
            </div>
            {/* Grid Section End */}


            <div className="mx-1 md:mx-10 mb-10 grid md:grid-cols-2 gap-5 px-2 md:px-10">
                {[
                    {
                        src: "/images/hops/10days-kidneyp.webp",
                        title: "10 Day Kidney Care with Ayurveda Training Program",
                        description: "Practical training to manage your kidney health and continue AKRT protocol at home."
                    },
                    {
                        src: "/images/hops/lab.webp",
                        title: "Kidney Failure Regular Pathological and Other Tests",
                        description: "To monitor improvements in your kidney function and assess progress."
                    }
                ].map((item, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-5">
                        <Image
                            src={item.src}
                            alt={item.title}
                            width={500}
                            height={300}
                            className="w-full h-auto rounded-lg mb-3"
                        />
                        <h3 className="text-xl font-semibold mb-2 text-black text-center">{item.title}</h3>
                        <p className="text-gray-600 text-center">{item.description}</p>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center">
                <Button
                    className="w-60 bg-gradient-to-r py-5 px-20 from-purple-400 via-blue-500 to-red-500 text-white hover:from-green-400 hover:to-blue-500 transition-all duration-500 ease-in-out"
                    type="primary"
                    onClick={() => {
                        const element = document.getElementById("id_book_apointment");
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                >
                    Book Consultation
                </Button>
            </div>




            {/* Grid Section for Images and Titles */}
            <div className="mx-5 md:mx-40 mb-10 mt-10">
                <h2 className="text-3xl font-semibold mb-4 text-center bg-orange-700 text-white p-2">
                    Benefits of AKRT:
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {[
                        {
                            src: "/images/hops/freedome-from-dialasis.webp",
                            title: "Freedom from dialysis"
                        },
                        {
                            src: "/images/hops/y.webp",
                            title: "Decreased creatinine levels"
                        },
                        {
                            src: "/images/hops/z.webp",
                            title: "Improved kidney function"
                        },
                        {
                            src: "/images/hops/kidneyY.webp",
                            title: "Increased quality of life"
                        },
                        {
                            src: "/images/hops/kidney2.webp",
                            title: "Lowered risk of kidney-related complications."
                        },
                        {
                            src: "/images/hops/bodypose.webp",
                            title: "Increased overall health and wellbeing"
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src={item.src}
                                alt={item.title}
                                width={500}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <h3 className="text-lg font-semibold p-4 text-center text-black">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            {/* Grid Section End */}




            {/* Benefits of AKRT Section */}
            <h1 className='text-4xl font-bold mb-2 text-center mt-10 p-7 text-orange-600'>Who Should Take Treatment For Kidney Disease</h1>
            <div className="mx-5 md:mx-20 mb-10 grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Card 1: CKD (Chronic Kidney Disease) */}
                <div className="bg-white shadow-md rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-2 text-orange-700 text-center">Individuals with Chronic Kidney Disease (CKD): </h3>
                    <p className='text-gray-500 text-center'>Anyone diagnosed to suffer from CKD where the kidney function declines gradually should begin treatment with the help of a doctor in order to hinder the development of kidney failure. </p>
                </div>

                {/* Card 2: Kidney Failure */}
                <div className="bg-white shadow-md rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-2 text-orange-700 text-center">Diabetic Patients:</h3>
                    <p className='text-gray-500 text-center'>Diabetes places anyone who is suffering at the risk of developing kidney disease. Patients with diabetes should, therefore, monitor their check-ups and control their blood sugar levels so as not to get diabetic nephropathy.</p>
                </div>

                {/* Card 3: Kidney Stones */}
                <div className="bg-white shadow-md rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-2 text-orange-700 text-center">Hypertensive Patients:</h3>
                    <p className='text-gray-500 text-center'>Kidney damage often results due to high blood pressure. Treatment is involving lifestyle changes and medication to regulate high blood pressure in order to hinder the progression of disease.</p>
                </div>


                {/* Card 3: Kidney Stones */}
                <div className="bg-white shadow-md rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-2 text-orange-700 text-center">Elderly Individuals:</h3>
                    <p className='text-gray-500 text-center'>Elderly patients must be placed on continuous renal follow-up and treated for age-related degradation to prevent complications.</p>
                </div>

                {/* Card 3: Kidney Stones */}
                <div className="bg-white shadow-md rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-2 text-orange-700 text-center">Individuals with Autoimmune Diseases:</h3>
                    <p className='text-gray-500 text-center'>Autoimmune diseases, including lupus nephritis and vasculitis, which induce inflammation in the kidneys, are treated by management of the disorder to preserve kidney function.</p>
                </div>

                {/* Card 3: Kidney Stones */}
                <div className="bg-white shadow-md rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-2 text-orange-700 text-center">Patients with a History of Kidney Stones or Infections:</h3>
                    <p className='text-gray-500 text-center'>Patients prone to either kidney stones or infections must undergo treatment in a timely manner to avoid complications and utilize lifestyle changes, medication, and preventive measures at their best.</p>
                </div>
            </div>
            {/* Benefits of AKRT Section End */}



            {/* About BK Arogyam Section */}
            <div className="mx-5 md:mx-20 mb-10 grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                {/* Left: Content */}
                <div className="p-5">
                    <h2 className="text-5xl py-3 font-bold mb-4 text-orange-700">About BK Arogyam And Research Pvt. Ltd.</h2>
                    <p className="mb-4 text-black">
                        BK Arogyam & Research Pvt. Ltd. is dedicated to transforming kidney health through innovative solutions. With over 23 years of intensive research, the company has developed the revolutionary Alternative Kidney Regeneration Treatment (AKRT), offering hope to kidney patients in India and globally. AKRT focuses on restoring kidney health naturally, reducing the need for invasive procedures, and improving patients&apos; quality of life. BK Arogyam combines expertise in alternative therapies with a commitment to holistic well-being, making it a trusted name in kidney care. Their groundbreaking approach continues to bring renewed health and vitality to those battling kidney diseases worldwide.
                    </p>

                    <h3 className="text-xl font-semibold mb-2 text-black mt-5">Why choose BK Arogya & Research Pvt. Ltd.?</h3>
                    <ul className="list-disc list-inside mb-4 text-gray-600">
                        <li>23 years of experience and expertise</li>
                        <li>Thousands of successful treatments</li>
                        <li>Team of qualified and experienced doctors and therapists</li>
                        <li>Patient-centric approach</li>
                        <li>Safe and natural treatments</li>
                        <li>World-class facilities</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2 text-black mt-5">Benefits of AKRT:</h3>
                    <ul className="list-disc list-inside mb-4 text-gray-600">
                        <li>Freedom from dialysis</li>
                        <li>Reduction in creatinine levels</li>
                        <li>Improvement in kidney functions</li>
                        <li>Increased quality of life</li>
                        <li>Increased overall health</li>
                    </ul>

                    <p className="mb-4 text-black">
                        If you are battling kidney disease and seeking freedom from dialysis, BK Arogyam & Research Pvt. Ltd. offers you a revolutionary solution. The Alternative Kidney Regeneration Treatment (AKRT) is exclusively available here, as the copyright and protocol for this cutting-edge treatment are solely held by BK Arogyam.
                    </p>

                    <p className="mb-4 text-black">
                        What sets BK Arogyam apart is their unwavering dedication to affordability and accessibility. Despite the comprehensive protocol costing over 2 lakhs, BK Arogyam offers this life-changing treatment at cost price, ensuring every patient has the opportunity to regain their kidney health.
                    </p>

                    <p className='text-black'>
                        Take control of your health today and schedule an appointment with BK Arogyam. Join the countless patients who have transformed their lives and made their kidneys healthy again. Don’t wait—book your consultation now!
                    </p>
                </div>

                {/* Right: Image */}
                <div className="flex items-center justify-center">
                    <Image
                        src="/images/hops/varanasicenter.jpg"
                        alt="Kidney Treatment"
                        width={800}
                        height={500}
                        className="rounded-lg shadow-md w-full"
                    />
                </div>
            </div>
            {/* About BK Arogyam Section End */}

            <h2 className="text-3xl font-semibold mb-4 text-center bg-orange-700 text-white p-2 mt-20">Our Mentor</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5 md:mx-10 rounded-2xl mb-10">
                <div className="hidden md:block p-0 md:p-6">
                    <Image
                        src="/images/hops/bksir.webp"
                        alt="Chronic Kidney Disease"
                        layout="responsive"
                        width={500}
                        height={500}
                        className="rounded-lg"
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Dr. B.K. Chaurasia</h2>
                    <p className="text-lg mb-4 text-gray-700">
                        🌟 <strong>India&apos;s Leading Ayurved Guru</strong> and Multiple Award-Winning Health Coach, transforming lives of over <strong>30,000+ kidney patients</strong>.
                    </p>
                    <p className="text-lg mb-4 text-gray-700">
                        ✓ <strong>Dr. Brijesh Chaurasia</strong>, also known as Dr. B.K. Chaurasia, is an accomplished <strong>Ayurvedic Doctor, Urologist, and Nephrologist</strong>.
                    </p>
                    <p className="text-lg mb-4 text-gray-700">
                        ✓ With <strong>23 years of experience</strong>, he specializes in Ayurvedic treatments for kidney diseases, bringing hope to patients worldwide.
                    </p>
                    <p className="text-lg mb-4 text-gray-700">
                        ✓ A renowned <strong>Businessman</strong> and an inspiring <strong>Motivational Coach</strong>, he continues to guide and motivate individuals to lead healthier lives.
                    </p>
                    <p className="text-lg mb-4 text-gray-700">
                        ✓ Dr. B.K. Chaurasia is a trusted name in kidney care, known for his dedication to innovative and natural healing methods.
                    </p>
                    <p className="text-lg mb-4 text-gray-700">
                        ✓ He has been a pioneer in alternative kidney treatments, combining ancient Ayurvedic wisdom with modern techniques to achieve outstanding results.
                    </p>
                </div>

            </div>



            {/* Achievements and Awards Section Start */}
            <div className='mt-10'>
                <h1 className='text-3xl text-center font-bold mt-7 text-orange-700'>Our Achievements and Awards</h1>
                <div className="px-0 md:px-20 mt-5">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            768: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="p-6">
                            <Image
                                src="/images/hops/SUPER HERO AWARD.webp"
                                alt="Award 1"
                                width={400}
                                height={300}
                                className="w-full h-auto rounded-lg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="p-6">
                            <Image
                                src="/images/hops/Indiaawds.webp"
                                alt="Award 2"
                                width={400}
                                height={300}
                                className="w-full h-auto rounded-lg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="p-6">
                            <Image
                                src="/images/hops/MSME_Award_BK_Chaurasia.webp"
                                alt="Award 3"
                                width={400}
                                height={300}
                                className="w-full h-auto rounded-lg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="p-6">
                            <Image
                                src="/images/hops/awdhhh.webp"
                                alt="Award 4"
                                width={400}
                                height={300}
                                className="w-full h-auto rounded-lg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="p-6">
                            <Image
                                src="/images/hops/webinar.webp"
                                alt="Award 5"
                                width={400}
                                height={300}
                                className="w-full h-auto rounded-lg"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="p-6">
                            <Image
                                src="/images/hops/settyawd.webp"
                                alt="Award 6"
                                width={400}
                                height={300}
                                className="w-full h-auto rounded-lg"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* Achievements and Awards Section End */}

            {/* Testimonials Section */}
            <TestimonialSection />

            <div className='md:py-10 py-5 px-10'>
                <h2 className="md:text-5xl text-2xl font-bold mb-4 text-center text-orange-700">Frequently Asked Questions</h2>
                <Collapse defaultActiveKey={['1']}>
                    {/* FAQ Data Related to Kidney Disease */}
                    <Panel
                        header={
                            <div className="bg-green-900 text-white p-2 rounded cursor-pointer hover:bg-green-600">
                                What are the common symptoms of kidney disease?
                            </div>
                        }
                        key="1"
                    >
                        <p>
                            Common symptoms include fatigue, swelling in legs or feet, difficulty urinating, high blood pressure, and persistent itching.
                        </p>
                    </Panel>
                    <Panel
                        header={
                            <div className="bg-green-900 text-white p-2 rounded cursor-pointer hover:bg-green-600">
                                What causes kidney disease?
                            </div>
                        }
                        key="2"
                    >
                        <p>
                            Kidney disease can be caused by diabetes, high blood pressure, infections, prolonged use of certain medications, or genetic conditions.
                        </p>
                    </Panel>
                    <Panel
                        header={
                            <div className="bg-green-900 text-white p-2 rounded cursor-pointer hover:bg-green-600">
                                How can I prevent kidney disease?
                            </div>
                        }
                        key="3"
                    >
                        <p>
                            Preventive measures include staying hydrated, eating a balanced diet, controlling blood sugar and blood pressure levels, avoiding smoking, and limiting salt intake.
                        </p>
                    </Panel>
                    <Panel
                        header={
                            <div className="bg-green-900 text-white p-2 rounded cursor-pointer hover:bg-green-600">
                                What treatment options are available for kidney disease?
                            </div>
                        }
                        key="4"
                    >
                        <p>
                            Treatments may include medication, dialysis, lifestyle changes, or a kidney transplant, depending on the severity of the disease.
                        </p>
                    </Panel>
                    <Panel
                        header={
                            <div className="bg-green-900 text-white p-2 rounded cursor-pointer hover:bg-green-600">
                                When should I see a doctor for kidney-related concerns?
                            </div>
                        }
                        key="5"
                    >
                        <p>
                            You should consult a doctor if you experience symptoms such as persistent fatigue, swelling, blood in the urine, or changes in urination patterns.
                        </p>
                    </Panel>
                </Collapse>
            </div>

        </Layout>
    );
}

export default Services;
