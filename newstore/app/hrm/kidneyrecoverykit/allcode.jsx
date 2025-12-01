"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper के लिए CSS और Modules
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const buttonVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#f3f4f6",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
  },
};
const stepVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const numberBounce = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
const arrowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const countdownVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const progressBarVariants = {
  hidden: { width: 0 },
  visible: {
    width: "78%",
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const pulseVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const badgeVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const floatingVariants = {
  hidden: { y: 0, opacity: 0.2 },
  visible: {
    y: [0, -10, 0],
    opacity: 0.3,
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
const answerVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function Allcode() {
  const iframeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    },
    { threshold: 0.5 }
  );

  if (iframeRef.current) {
    observer.observe(iframeRef.current);
  }

  return () => {
    if (iframeRef.current) {
      observer.unobserve(iframeRef.current);
    }
  };
}, []);

  

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // Your existing variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Testimonial data array
  const testimonials = [
    {
      name: "राकेश , दिल्ली",
      text: "मेरा क्रिएटिनिन 2.4 से 1.8 तक आ गया और अब मैं पूरी तरह से स्वस्थ हूं।",
    },
    {
      name: "सीमा , लखनऊ",
      text: "सिर्फ 3 हफ्ते में फर्क दिखा और अब मैं नॉर्मल जिंदगी जी रही हूं।",
    },
    {
      name: "रमेश , जयपुर",
      text: "पहले डरता था, अब भरोसा है। डॉ. चौरसिया का तरीका सच में काम करता है।",
    },
  ];

  const cards = [
    {
      title: "Creatinine 1.5–8.0",
      desc: "जिन मरीजों का क्रिएटिनिन 1.5 से 8.0 के बीच है",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "डायलिसिस और नॉन-डायलिसिस दोनों मरीजों के लिए",
      desc: "जिन्हें डायलिसिस की आशंका है लेकिन अभी शुरुआती स्टेज में हैं",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      title: " Doctor-supervised Safe Plan",
      desc: "डॉक्टर की निगरानी में सुरक्षित उपचार योजना",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  ];

  const items = [
    {
      title: "1 महीने की हर्बल दवाइयाँ",
      desc: "शुद्ध आयुर्वेदिक जड़ी-बूटियों से तैयार विशेष किडनी केयर medicines",
      bg: "bg-green-100",
      text: "text-green-800",
      iconColor: "text-green-600",
      svgPath:
        "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    },
    {
      title: "Online Consultation",
      desc: "1 Online Consultation + 1 Follow-up डॉ. B.K. चौरसिया के साथ",
      bg: "bg-blue-100",
      text: "text-blue-800",
      iconColor: "text-blue-600",
      svgPath:
        "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    },
    {
      title: "व्यक्तिगत डाइट प्लान",
      desc: "Personalized Diet & Lifestyle Plan PDF आपकी स्थिति के अनुसार",
      bg: "bg-amber-100",
      text: "text-amber-800",
      iconColor: "text-amber-600",
      svgPath: "M12 6v6m0 0v6m0-6h6m-6 0H6",
    },
    {
      title: "रिपोर्ट रिव्यू",
      desc: "आपकी रिपोर्ट्स का डॉक्टर द्वारा विस्तृत Review और विश्लेषण",
      bg: "bg-purple-100",
      text: "text-purple-800",
      iconColor: "text-purple-600",
      svgPath:
        "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    },
    {
      title: "WhatsApp Support",
      desc: "WhatsApp Health Support (10am–7pm) किसी भी प्रश्न के साथ",
      bg: "bg-cyan-100",
      text: "text-cyan-800",
      iconColor: "text-cyan-600",
      svgPath:
        "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    },
    {
      title: "विशेष बोनस",
      desc: "72 घंटों में बुकिंग पर — फ्री शिपिंग या ₹300 प्रीपेड डिस्काउंट",
      bg: "bg-green-100",
      text: "text-green-800",
      iconColor: "text-green-600",
      svgPath:
        "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
      badge: "सीमित समय",
    },
  ];

  const faqs = [
    {
      question: "क्या ये डायलिसिस रोक देगा?",
      answer: "व्यक्ति-विशेष पर निर्भर करता है, डॉक्टर मार्गदर्शन अनिवार्य है।",
    },
    {
      question: "क्या ₹4,999 वाला पैकेज भी वही है जो ₹15,000 वाला था?",
      answer: (
        <>
          जी हाँ ✅ दवा, असर और क्वालिटी बिल्कुल वही है। फर्क सिर्फ इतना है कि:
          <br />
          <br />
          पहले Cost ज़्यादा थी (Production छोटे स्तर पर था, Individual Handling
          थी)।
          <br />
          <br />
          अब बड़े पैमाने पर Production होने और कंपनी के Special Program की वजह
          से लागत कम हुई है।
          <br />
          <br />
          यह ऑफर सिर्फ पुराने मरीजों के लिए है ताकि कोई इलाज बीच में न छोड़े。
          <br />
          <br />
          👉 इसलिए वही ₹15,000 वाला पैकेज, अब आपके लिए ₹4,999 में उपलब्ध है。
        </>
      ),
    },
    {
      question: "COD है?",
      answer: "हाँ, 5–9% एडवांस के साथ।",
    },
    {
      question: "रिफंड मिलेगा?",
      answer: "गलत/डैमेज शिपमेंट पर Replacement मिलेगा।",
    },
  ];

  const [countdown, setCountdown] = useState(72 * 60 * 60); // 72 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="antialiased">
      {/* Hero Section L1*/}
      <section className="relative bg-white py-8 md:py-16 overflow-hidden">
        {/* All Content */}
        <div className="container relative mx-auto px-4 flex flex-col lg:flex-row items-center">
          {/* Mobile Layout: Content first, then image */}
          <div className="lg:hidden flex flex-col w-full">
            {/* Trust Badge */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#2F855A] text-white inline-flex items-center px-4 py-2 rounded-full text-sm mb-6 shadow-md mx-auto"
            >
              <span className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></span>
              <span>Trusted by 10,000+ Patients</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4 text-center"
            >
              “किडनी फेलियर से पहले — रिकवरी का एक नया मौका”
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 mb-6 text-center"
            >
              अब इलाज महंगा नहीं — आपकी पहली रिकवरी किट मात्र ₹4,999 में
            </motion.p>

            {/* Doctor Image for Mobile - BORDER/PADDING REMOVED */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full relative flex flex-col items-center mb-6"
            >
              <motion.div whileHover={{ y: -5 }} className="relative">
                <div className="relative inline-block rounded-2xl">
                  <motion.img
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    src="/images/newmedikit.png"
                    alt=" hero images "
                    className="relative rounded-2xl object-cover w-full max-w-[280px] mx-auto"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Offer Badge + Pricing */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-row items-center justify-center mb-6"
            >
              {/* Correctly placed ₹15,000 Price Box for mobile */}
              <div
                className="relative inline-block  rounded shadow-md flex-grow-0 flex-shrink-0 px-2 py-1 mr-4"
                style={{ padding: "1rem" }}
              >
                <span className="relative text-green-900 text-3xl font-semibold">
                  ₹15,000
                  {/* Bolder Cross-bar divs */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4/5 h-[4px] bg-red-600 transform rotate-45"></div>
                    <div className="w-4/5 h-[4px] bg-red-600 transform -rotate-45 absolute"></div>
                  </div>
                </span>
              </div>
              {/* Correctly placed ₹4,999 Price Box for mobile */}
              <div className="bg-[#2F855A] p-2 rounded-lg shadow-xl relative flex-grow-0 flex-shrink-0">
                <span className="text-2xl font-bold text-white">₹4,999</span>
                <span className="block text-sm text-gray-200">
                  शुरुआती पैकेज
                </span>
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5,
                  }}
                  className="absolute -top-3 -right-3 bg-[#C08457] text-white text-xs font-bold px-2 py-1 rounded-full"
                >
                  Limited Offer
                </motion.span>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-2 mb-8 text-gray-700"
            >
              {[
                "30 वर्षों का अनुभव (B.K. Chaurasia)",
                "हज़ारों मरीजों को राहत",
                "अब शुरुआती मरीजों के लिए विशेष रिकवरी योजना",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center transition-transform hover:translate-x-1"
                >
                  <div className="w-5 h-5 bg-[#2F855A] rounded-full flex items-center justify-center mr-2">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.a
              href="https://arogyamission.com/e-store/productdetails/3141"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2F855A] hover:bg-[#276749] text-white text-lg px-6 py-3 rounded-full shadow-lg flex items-center justify-center w-full max-w-xs mx-auto transition duration-300"
            >
              ₹4,999 में ऑर्डर करें
            </motion.a>
          </div>

          {/* Desktop Layout */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="hidden lg:block w-full lg:w-1/2 mb-10 lg:mb-0"
          >
            {/* Trust Badge */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#2F855A] text-white inline-flex items-center px-4 py-2 rounded-full text-sm mb-6 shadow-md"
            >
              <span className="w-3 h-3 bg-white rounded-full mr-2 animate-pulse"></span>
              <span>Trusted by 10,000+ Patients</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-4xl font-bold text-gray-800 leading-tight mb-4"
            >
              डायलिसिस से पहले उम्मीद का एक नया मौका
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-6"
            >
              अब इलाज महंगा नहीं — सिर्फ हमारे पुराने मरीजों के लिए Kidney Care
              Starter Plan मात्र ₹4,999
            </motion.p>

            {/* Offer Badge + Pricing */}
            <motion.div variants={fadeInUp} className="flex items-center mb-6">
              {/* Correctly placed ₹15,000 Price Box for desktop */}
              <div
                className="relative inline-block bg-green-500 rounded shadow-md flex-grow-0 flex-shrink-0 px-2 py-1 mr-4"
                style={{ padding: "1rem" }}
              >
                <span className="relative text-white text-4xl font-semibold">
                  ₹15,000
                  {/* Bolder Cross-bar divs */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4/5 h-[4px] bg-red-600 transform rotate-45"></div>
                    <div className="w-4/5 h-[4px] bg-red-600 transform -rotate-45 absolute"></div>
                  </div>
                </span>
              </div>
              {/* Correctly placed ₹4,999 Price Box for desktop */}
              <div className="bg-[#2F855A] p-4 rounded-lg mr-4 shadow-xl relative flex-grow-0 flex-shrink-0">
                <span className="text-2xl font-bold text-white">₹4,999</span>
                <span className="block text-sm text-gray-200">
                  शुरुआती पैकेज
                </span>
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5,
                  }}
                  className="absolute -top-3 -right-3 bg-[#C08457] text-white text-xs font-bold px-2 py-1 rounded-full"
                >
                  Limited Offer
                </motion.span>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-2 mb-8 text-gray-700"
            >
              {[
                "30 वर्षों का अनुभव (B.K. Chaurasia)",
                "हज़ारों मरीजों को राहत",
                "अब आपके लिए विशेष रियायती योजना",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center transition-transform hover:translate-x-1"
                >
                  <div className="w-5 h-5 bg-[#2F855A] rounded-full flex items-center justify-center mr-2">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.a
              href="https://arogyamission.com/e-store/productdetails/3141"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2F855A] hover:bg-[#276749] text-white text-lg px-6 py-3 rounded-full shadow-lg flex items-center justify-center w-auto max-w-fit transition duration-300"
            >
              ₹4,999 में ऑर्डर करें
            </motion.a>
          </motion.div>

          {/* Right Side Doctor Card for Desktop - BORDER/PADDING REMOVED */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex w-full lg:w-1/2 relative  flex-col items-center lg:ml-32"
          >
            <motion.div whileHover={{ y: -5 }} className="relative">
              <div className="relative inline-block rounded-2xl">
                <motion.img
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  src="/images/newmedikit.png"
                  alt="hero images"
                  className="relative rounded-2xl object-cover w-full max-w-[280px] md:max-w-[350px] lg:max-w-[400px]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* video section added here  L2-9*/}
      <div className="w-full py-16 px-4 bg-gradient-to-br from-blue-100 to-indigo-100">
        {/* Full width responsive video */}
        <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px]">
          <iframe
            ref={iframeRef}
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/HYO6ZT5Y5HE?autoplay=1&mute=1&loop=1&playlist=HYO6ZT5Y5HE&controls=0"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Why This Plan Section L3 किडनी मरीजों के लिए — कम कीमत, पूरा सहयोग  */}
      <section className="py-16 relative bg-gradient-to-b from-white to-green-50 overflow-hidden">
        {/* Decorative floating shapes */}
        <motion.div
          className="absolute top-0 left-0 w-40 h-40 bg-green-100 rounded-full opacity-30"
          variants={floatingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-60 h-60 bg-green-200 rounded-full opacity-20"
          variants={floatingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        ></motion.div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.h2
            className="text-2xl md:text-4xl font-extrabold text-center mb-4 max-w-2xl mx-auto text-green-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            “ किडनी मरीजों के लिए — कम कीमत, पूरा सहयोग ”
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-md md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            हमने इस योजना को विशेष रूप से उन मरीजों के लिए तैयार किया है जो इलाज
            के खर्च के कारण अपना उपचार जारी नहीं रख पा रहे हैं
          </motion.p>

          {/* Top Problem Cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Card 1 */}
            <motion.div
              className="bg-white/70 backdrop-blur-md border border-red-200 rounded-xl p-4 sm:p-6 shadow-md text-center transition transform hover:scale-105 hover:shadow-xl hover:bg-red-50"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 text-red-600">
                समस्या
              </h3>
              <h4 className="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">
                खर्चा ज़्यादा
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                15–20 हज़ार/महीना
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white/70 backdrop-blur-md border border-yellow-200 rounded-xl p-4 sm:p-6 shadow-md text-center transition transform hover:scale-105 hover:shadow-xl hover:bg-yellow-50"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 text-yellow-600">
                पुराना हाल
              </h3>
              <h4 className="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">
                Doctor Support नहीं
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                खुद दवाइयाँ खोजनी
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white/70 backdrop-blur-md border border-blue-200 rounded-xl p-4 sm:p-6 shadow-md text-center transition transform hover:scale-105 hover:shadow-xl hover:bg-blue-50"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 text-blue-600">
                डर + कन्फ्यूजन
              </h3>
              <h4 className="text-base sm:text-lg text-gray-700 mb-1 sm:mb-2">
                क्या सही इलाज है?
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                अनिश्चितता और चिंता
              </p>
            </motion.div>
          </motion.div>

          {/* Decorative Arrow */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.svg
              className="w-10 h-10 text-green-500 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </motion.svg>
          </motion.div>

          {/* Bottom Solution Cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Solution Card 1 */}
            <motion.div
              className="bg-white/70 backdrop-blur-md border border-green-200 rounded-xl p-4 sm:p-6 shadow-md text-center transition transform hover:scale-105 hover:shadow-xl hover:bg-green-50"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 text-green-700">
                अब समाधान
              </h3>
              <h4 className="text-base sm:text-lg text-green-700 mb-1 sm:mb-2">
                किफायती दरें
              </h4>
              <p className="text-sm sm:text-base text-green-600 font-medium">
                अब सिर्फ ₹4,999
              </p>
            </motion.div>

            {/* Solution Card 2 */}
            <motion.div
              className="bg-white/70 backdrop-blur-md border border-green-200 rounded-xl p-4 sm:p-6 shadow-md text-center transition transform hover:scale-105 hover:shadow-xl hover:bg-green-50"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 text-green-700">
                पूरा सहयोग
              </h3>
              <h4 className="text-base sm:text-lg text-green-700 mb-1 sm:mb-2">
                डॉक्टर कंसल्टेशन
              </h4>
              <p className="text-sm sm:text-base text-green-600 font-medium">
                रिपोर्ट रिव्यू + मार्गदर्शन
              </p>
            </motion.div>

            {/* Solution Card 3 */}
            <motion.div
              className="bg-white/70 backdrop-blur-md border border-green-200 rounded-xl p-4 sm:p-6 shadow-md text-center transition transform hover:scale-105 hover:shadow-xl hover:bg-green-50"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 text-green-700">
                स्पष्टता
              </h3>
              <h4 className="text-base sm:text-lg text-green-700 mb-1 sm:mb-2">
                पूरा मार्गदर्शन
              </h4>
              <p className="text-sm sm:text-base text-green-600 font-medium">
                डाइट गाइड, हेल्पलाइन
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Package Details Section L4 “Kidney Recovery Medi Kit में आपको मिलेगा”*/}
      <div>
        {/* Package Details Section */}
        <motion.section
          className="py-16 bg-green-50 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-green-100 rounded-full opacity-30 animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-green-200 rounded-full opacity-20 animate-pulse-slow"></div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4 max-w-2xl mx-auto text-green-700">
                “Kidney Recovery Medi Kit में आपको मिलेगा”
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto text-md md:text-xl leading-relaxed">
                1 महीने की हर्बल Kidney Care दवाइयाँ
              </p>
            </motion.div>

            {/* Cards Grid */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-green-200 rounded-2xl p-4 md:p-5 lg:p-4 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  {/* Icon Box */}
                  <div
                    className={`w-8 h-8 md:w-12 md:h-12 lg:w-10 lg:h-10 ${item.bg} rounded-lg flex items-center justify-center mb-3 shadow-inner`}
                  >
                    <svg
                      className={`w-5 h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 ${item.iconColor}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={item.svgPath}
                      ></path>
                    </svg>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-base md:text-lg lg:text-base font-bold mb-1 ${item.text}`}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs md:text-sm lg:text-sm leading-relaxed ${item.text}`}
                  >
                    {item.desc}
                  </p>

                  {/* Badge */}
                  {item.badge && (
                    <span className="inline-block mt-2 px-2 py-1 bg-green-200 text-green-800 rounded-full text-xs">
                      {item.badge}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Eligibility + Safety Assurance Section L5 क्या यह आपके लिए सही है*/}
      <div>
        {/* Package Details Section */}
        <motion.div
          className="py-12 sm:py-20 bg-gradient-to-r from-green-50 to-green-100 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Decorative shapes */}
          <motion.div
            className="absolute top-0 left-0 w-24 h-24 sm:w-40 sm:h-40 bg-green-100 rounded-full opacity-20"
            animate={{ opacity: [0.7, 0.3, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 right-0 w-40 h-40 sm:w-60 sm:h-60 bg-green-200 rounded-full opacity-20"
            animate={{ opacity: [0.7, 0.3, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          ></motion.div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-4 max-w-2xl mx-auto text-green-800 drop-shadow-md">
                क्या यह आपके लिए सही है?
              </h2>
              <p className="text-center text-green-700 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
                जानिए क्या यह पैकेज आपकी स्वास्थ्य स्थिति के अनुकूल है
              </p>
            </motion.div>

            {/* Desktop Cards Grid - Hidden on mobile */}
            <motion.div
              className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12"
              variants={containerVariants}
            >
              {cards.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between text-center"
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className={`w-12 h-12 sm:w-16 sm:h-16 ${item.iconBg} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-md`}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.svg
                      className={`w-6 h-6 sm:w-8 sm:h-8 ${item.iconColor}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ scale: 1.1 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </motion.svg>
                  </motion.div>
                  <h3 className="text-md sm:text-lg font-bold mb-1 sm:mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile Slider - Hidden on desktop */}
            <div className="md:hidden mb-8">
              {" "}
              {/* <-- Here is the change */}
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                {cards.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg h-full flex flex-col justify-between text-center min-h-[300px]">
                      <motion.div
                        className={`w-16 h-16 ${item.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <motion.svg
                          className={`w-8 h-8 ${item.iconColor}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </motion.svg>
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-base">{item.desc}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Alert Box */}
            <motion.div
              className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 shadow-md flex items-start gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.svg
                className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </motion.svg>
              <div>
                <h3 className="text-sm sm:text-md md:text-lg font-medium text-yellow-800">
                  महत्वपूर्ण सूचना
                </h3>
                <p className="text-sm sm:text-md md:text-lg mt-1 sm:mt-2 text-yellow-700">
                  ⚠️ गंभीर स्टेज/डायलिसिस पर निर्भर पेशेंट कृपया डॉक्टर से
                  व्यक्तिगत सलाह लें।
                </p>
              </div>
            </motion.div>

            {/* Footer Note */}
            <motion.div
              className="bg-blue-50 p-4 sm:p-6 rounded-xl text-center shadow-inner"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-blue-700 italic font-medium text-sm sm:text-md md:text-lg">
                यह योजना डॉक्टर मार्गदर्शन में दी जाती है। परिणाम व्यक्ति-विशेष
                पर निर्भर करते हैं।
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Testimonials Section L6 हमारे मरीज क्या कहते हैं*/}
      <div>
        <motion.section
          className="py-16 bg-gradient-to-r from-green-50 to-green-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto text-green-900">
                हमारे मरीज क्या कहते हैं
              </h2>
              <p className="text-center text-gray-600 max-w-2xl mx-auto text-md md:text-xl">
                30+ वर्षों के अनुभव और हजारों संतुष्ट मरीजों की विश्वसनीयता
              </p>
            </motion.div>

            {/* --- Mobile Slider (Hidden on large screens) --- */}
            <div className="lg:hidden">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3000, // 3 सेकंड का ऑटो-स्लाइड
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                      variants={cardVariants}
                      whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                          <svg
                            className="w-6 h-6 text-green-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-md md:text-xl">
                            {testimonial.name}
                          </h4>
                          <div className="flex text-yellow-400 space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <motion.svg
                                key={i}
                                className="w-4 h-4 md:w-5 md:h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                }}
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </motion.svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-base md:text-lg">
                        `&rdquo;`{testimonial.text}`&rdquo;`
                      </p>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* --- Desktop Grid (Hidden on small screens) --- */}
            <motion.div
              className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6 text-green-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-md md:text-xl">
                        {testimonial.name}
                      </h4>
                      <div className="flex text-yellow-400 space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.svg
                            key={i}
                            className="w-4 h-4 md:w-5 md:h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </motion.svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg">
                    `&rdquo;`{testimonial.text}`&rdquo;`
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Review Score */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.div
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-300 px-5 py-3 rounded-full shadow-lg text-white font-bold text-lg md:text-xl"
                whileHover={{ scale: 1.05 }}
              >
                <motion.svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ rotate: [0, 15, 0, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </motion.svg>
                4.8/5 - 1,200+ Reviews
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* How It Works Section L7 इसे ऑर्डर करना बहुत आसान है*/}
      <div>
        <motion.section
          className="py-16 bg-gradient-to-r from-green-100 via-green-200 to-green-300" // Background color changed to light green gradient
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="w-full px-6 lg:px-12">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4 max-w-2xl mx-auto text-green-800">
                {" "}
                {/* Text color adjusted for light background */}
                इसे ऑर्डर करना बहुत आसान है
              </h2>
              <p className="text-center text-green-700 max-w-2xl mx-auto">
                {" "}
                {/* Text color adjusted for light background */}
                सिर्फ 3 आसान steps में पाएं अपना Kidney Care Starter Package
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              variants={containerVariants}
            >
              {/* Step 1 */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center w-full md:w-72"
                variants={stepVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl text-white font-bold" // Number background adjusted for better contrast
                  variants={numberBounce}
                  animate="animate"
                >
                  1
                </motion.div>
                <h3 className="text-md md:text-lg font-bold mb-2 text-green-800">
                  WhatsApp पर ऑर्डर करें
                </h3>{" "}
                {/* Text color adjusted */}
                <p className="text-green-700">मैसेज करें या फॉर्म भरें</p>{" "}
                {/* Text color adjusted */}
              </motion.div>

              {/* Arrow */}
              <motion.div
                className="flex items-center justify-center flex-shrink-0"
                variants={arrowVariants}
              >
                {/* Desktop → Right Arrow */}
                <motion.svg
                  className="hidden md:block w-10 h-10 text-green-600" // Arrow color adjusted
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </motion.svg>
                {/* Mobile → Down Arrow */}
                <motion.svg
                  className="block md:hidden w-10 h-10 text-green-600" // Arrow color adjusted
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14m-7-7l7 7 7-7"
                  />
                </motion.svg>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center w-full md:w-72"
                variants={stepVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl text-white font-bold" // Number background adjusted
                  variants={numberBounce}
                  animate="animate"
                  transition={{ delay: 0.2 }}
                >
                  2
                </motion.div>
                <h3 className="text-md md:text-xl font-bold mb-2 text-green-800">
                  डॉक्टर कंसल्टेशन
                </h3>{" "}
                {/* Text color adjusted */}
                <p className="text-green-700">
                  डॉक्टर से बात करके सही सलाह लें
                </p>{" "}
                {/* Text color adjusted */}
              </motion.div>

              {/* Arrow */}
              <motion.div
                className="flex items-center justify-center flex-shrink-0"
                variants={arrowVariants}
              >
                {/* Desktop → Right Arrow */}
                <motion.svg
                  className="hidden md:block w-10 h-10 text-green-600" // Arrow color adjusted
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </motion.svg>
                {/* Mobile → Down Arrow */}
                <motion.svg
                  className="block md:hidden w-10 h-10 text-green-600" // Arrow color adjusted
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14m-7-7l7 7 7-7"
                  />
                </motion.svg>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center w-full md:w-72"
                variants={stepVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl text-white font-bold" // Number background adjusted
                  variants={numberBounce}
                  animate="animate"
                  transition={{ delay: 0.4 }}
                >
                  3
                </motion.div>
                <h3 className="text-md md:text-xl font-bold mb-2 text-green-800">
                  दवाइयाँ प्राप्त करें
                </h3>{" "}
                {/* Text color adjusted */}
                <p className="text-green-700">
                  3-5 दिनों में घर पर प्राप्त करें दवाइयाँ
                </p>{" "}
                {/* Text color adjusted */}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Countdown Section L8 सीमित स्लॉट — जल्दी बुक करें  */}
      <div>
        <motion.section
          className="py-16 bg-gradient-to-r from-green-100 via-green-200 to-green-100 text-green-900 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-2xl font-extrabold mb-4">
                “ सीमित स्लॉट — जल्दी बुक करें ”
              </h2>
              <p className="text-md md:text-lg mb-8 max-w-2xl mx-auto opacity-90">
                ⚡ Wave-1 में सिर्फ 10,000 स्लॉट
              </p>
            </motion.div>

            {/* Countdown Box */}
            <motion.div
              className="bg-green-700 text-white inline-flex items-center px-8 py-5 rounded-2xl mb-10 shadow-[0_0_20px_rgba(34,197,94,0.6)]"
              variants={countdownVariants}
            >
              <motion.svg
                className="w-7 h-7 text-yellow-400 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </motion.svg>
              <span className="text-xl mr-2">समय सीमा:</span>
              <motion.span
                className="text-xl md:text-3xl font-bold"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {formatTime(countdown)}
              </motion.span>
            </motion.div>

            {/* Booked Slots */}
            <motion.div
              className="bg-white text-green-700 inline-block px-6 py-3 rounded-full mb-10 shadow-md relative"
              variants={itemVariants}
            >
              <span className="flex items-center ">
                <svg
                  className="w-5 h-5 inline mr-2 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-medium ">
                  अब तक 7,842 स्लॉट बुक हो चुके हैं
                </span>
              </span>
              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 h-1 bg-green-200 w-full rounded-b-full ">
                <motion.div
                  className="h-1 bg-green-600 rounded-b-full"
                  variants={progressBarVariants}
                  initial="hidden"
                  animate="visible"
                ></motion.div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div className="max-w-md mx-auto" variants={itemVariants}>
              <motion.button
                className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 font-bold text-md md:text-lg px-4 md:px-10 py-5 rounded-full shadow-xl w-full"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6 inline mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 002 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                आज ऑर्डर करें ताकि आपका स्लॉट न छूटे
              </motion.button>
              <motion.p
                className="text-sm mt-3 opacity-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.8 }}
              >
                ✅ 100% Ayurvedic • 🚚 Free Home Delivery
              </motion.p>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* CTA Section L9  सीमित स्लॉट — जल्दी बुक करें */}
      <div>
        <motion.section
          className="py-20 bg-gradient-to-r from-green-400 via-green-300 to-green-200 text-green-900 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            {/* Heading */}
            <motion.h2
              className="text-2xl md:text-4xl font-bold mb-4"
              variants={itemVariants}
            >
              अपना Kidney Starter Package अभी बुक करें
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="md:text-lg text-md mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              सिर्फ ₹4,999 में शुरू करें अपना इलाज और पाएं बेहतर स्वास्थ्य की ओर
              पहला कदम
            </motion.p>

            {/* Original CTA Button */}
            <motion.a
              href="https://bkarogyam.com/landingpages/form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-700 font-bold py-4 px-8 rounded-lg shadow-lg text-lg transition duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              🟢 Book Consultation Now
            </motion.a>
          </div>
        </motion.section>

        {/* Floating CTA Button */}
        <motion.a
          href="https://bkarogyam.com/landingpages/form"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-1 inset-x-2 z-50 flex flex-col items-center bg-green-700 text-white font-bold py-3 px-4 rounded-xl shadow-2xl space-y-1 transition-transform md:py-4 md:px-6 md:space-y-2 md:left-2 md:right-auto md:w-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center space-x-2">
            <motion.svg
              className="w-5 h-5 text-yellow-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </motion.svg>
            <p className="text-xs md:text-sm ">
              ⏳ ऑफ़र समाप्त:{" "}
              <span className="font-bold">{formatTime(countdown)}</span>
            </p>
          </div>
          <span className="text-lg md:text-lg font-bold">Book Consultation Now</span>
        </motion.a>
      </div>

      {/* FAQ Section L10 */}
      <div className="py-16 px-4 bg-gradient-to-br from-green-200 to-green-300">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="md:text-3xl text-2xl  font-bold text-center mb-12 text-indigo-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-indigo-100"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <motion.button
                  className="w-full p-5 text-left flex justify-between items-center bg-white hover:bg-indigo-50 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-semibold text-indigo-900 text-lg">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <svg
                      className="w-6 h-6 text-indigo-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden"
                    >
                      <div className="p-5 bg-indigo-50 text-gray-800 border-t border-indigo-200">
                        <div className="leading-relaxed">{faq.answer}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* chatbot integretion part  */}
    </div>
  );
}

// export default allcode;
