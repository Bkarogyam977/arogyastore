"use client";
import { Layout } from "antd";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Carousel } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UnderstandingArogyadham = () => {
  // const packages = [
  //     {
  //         id: 1,
  //         title: 'Day Care Package',
  //         duration: '3 Days',
  //         description: 'Experience a combination of Shirodhara and Abhyangam therapies to relax and detoxify your body.',
  //         price: '₹6,750',
  //         image: '/images/Nasya.jpg',
  //     },
  //     {
  //         id: 2,
  //         title: 'Relaxing Package',
  //         duration: '5 Days',
  //         description: 'Relax with therapies including Shirodhara, Abhyangam, Sweden, Nasya, and more. Includes food and stay.',
  //         price: '₹27,500',
  //         image: '/images/e-store/category_29_10_2018_23_43_55.jpg',
  //     },
  //     {
  //         id: 3,
  //         title: 'Kaya Shuddhi Package',
  //         duration: '7 Days',
  //         description: 'A complete detox package with herbal therapies, Anima therapy, detoxification, food, stay, and local tours.',
  //         price: '₹49,000',
  //         image: '/images/Abhyanga.jpg',
  //     },
  // ];

  const router = useRouter();

  const packages = [
    {
      id: 1,
      title: "HEAD Package",
      duration: "1 Day",
      description:
        "Complete head-focused therapies including Shirodhara, Nasya, and Abhyangam for mental clarity and relaxation.",
      price: "₹5,000",
      image: "/images/arogyadham/therepy-Abhyangam.jpg",
      link: "/services/HEAD",
      featured: true,
    },
    {
      id: 2,
      title: "Day Care Package",
      duration: "3 Days",
      description:
        "Experience a combination of Shirodhara and Abhyangam therapies to relax and detoxify your body.",
      price: "₹6,750",
      image: "/images/Nasya.jpg",
      link: "/medical-tourism",
    },
    {
      id: 3,
      title: "Relaxing Package",
      duration: "5 Days",
      description:
        "Relax with therapies including Shirodhara, Abhyangam, Swedana, Nasya, and more. Includes food and stay.",
      price: "₹27,500",
      image: "/images/e-store/category_29_10_2018_23_43_55.jpg",
      link: "/medical-tourism",
    },
    {
      id: 4,
      title: "Kaya Shuddhi Package",
      duration: "7 Days",
      description:
        "A complete detox package with herbal therapies, Anima therapy, detoxification, food, stay, and local tours.",
      price: "₹49,000",
      image: "/images/Abhyanga.jpg",
      link: "/medical-tourism",
    },
  ];

  const Rooms = [
    {
      imgSrc: "/images/arogyadham/normal_room.jpeg",
      label: "Normal Room",
      title: "Stay + Treatment",
      description:
        "Enjoy a comfortable stay with essential treatments to rejuvenate your health.",
    },
    {
      imgSrc: "/images/arogyadham/basic_room.jpeg",
      label: "Basic Room",
      title: "Stay + Treatments + Disease-wise Kayoupchar",
      description:
        "Ideal for those seeking personalized treatments for specific ailments.",
    },
    {
      imgSrc: "/images/arogyadham/semi_room.jpeg",
      label: "Semi Room",
      title: "Stay + Treatments + Food + Yoga",
      description:
        "Combine comfort, nutrition, and wellness with this holistic package.",
    },
    {
      imgSrc: "/images/arogyadham/private_room.jpeg",
      label: "Private Room",
      title: "Stay + Treatments + Food + Local Tour + Premium Package + Yoga",
      description:
        "Experience the ultimate luxury and wellness with our premium package.",
    },
  ];

  const faqs = [
    {
      question: "What services does Arogyadham offer?",
      answer:
        "Arogyadham offers a wide range of services focused on holistic healing and wellness, including Ayurvedic treatments, yoga sessions, meditation workshops, detoxification programs, and personalized diet plans. Our treatments are designed to promote overall health, balance, and well-being.",
    },
    {
      question: "How can I book a consultation or treatment at Arogyadham?",
      answer:
        "You can book a consultation or treatment by contacting us directly through our website, phone, or by visiting our center. We recommend booking in advance to ensure availability.",
    },
    {
      question: "Are the treatments at Arogyadham medically supervised?",
      answer:
        "Yes, all treatments and therapies at Arogyadham are supervised by qualified and experienced Ayurvedic doctors and health professionals. We ensure a high standard of care and personalized attention for each of our clients.",
    },
    {
      question: "Can Arogyadham accommodate specific dietary requirements?",
      answer:
        "Absolutely. Our dietary plans are customized according to individual health needs and preferences. If you have specific dietary requirements or allergies, please inform us in advance so we can tailor your meals accordingly.",
    },
    {
      question: "What should I bring with me for a residential program?",
      answer:
        "The duration of treatment programs varies depending on the individual's health condition and goals. We offer programs ranging from a single day to several weeks. Our team will help you choose a program that best suits your needs.",
    },
    {
      question: "Can I stay at Arogyadham during my treatment?",
      answer:
        "Many of our programs offer residential options for the duration of the treatment. Please inquire about accommodation and facilities when booking your treatment.",
    },
  ];

  const bannerImg = [
    {
      id: 1,
      Main_Baner_Image: "/images/arogyadham/ezgif-frame-009.jpg",
      Banner_url: "https://example.com/banner1",
    },
    {
      id: 2,
      Main_Baner_Image: "/images/arogyadham/arogyadham center (2).webp",
      Banner_url: "https://example.com/banner2",
    },
    {
      id: 3,
      Main_Baner_Image: "/images/arogyadham/ezgif-frame-036.jpg",
      Banner_url: "https://example.com/banner3",
    },
  ];

  return (
    <Layout className="overflow-hidden">
      <div className="relative md:mt-28 mt-6">
        <div className="overflow-hidden">
          <Carousel autoplay className="flex">
            {bannerImg.map((banner) => (
              <div className="flex" key={banner.id}>
                <a
                  href={banner.Banner_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    height={1000}
                    width={500}
                    className="w-full h-[25vh] md:h-[65vh]"
                    src={banner.Main_Baner_Image}
                    alt={`Banner ${banner.id}`}
                  />
                </a>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <section
        id="what_is_gram"
        className="md:py-16 py-5 bg-gradient-to-r from-blue-100 via-green-500 to-orange-100"
      >
        <div className="md:text-center mb-12 px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Arogyadham: Natural Healing for Body & Mind.
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed md:px-40">
            At Arogyadham, we are committed to natural healing for your entire
            being. Our sanctuary emphasizes holistic health by combining ancient
            Ayurvedic practices, transformative yoga, and mindful meditation to
            improve your physical and mental well-being. Embark on a journey
            towards enduring harmony of mind, body, and spirit with us.
          </p>

          <div className="flex justify-center rounded-xl shadow-lg">
            <Image
              src="/images/arogyadham/understanding_2.jpeg"
              alt="Addressing The Whole You"
              width={1120}
              height={560}
              className="w-full max-w-[70em] md:h-[35em] md:p-5 p-2 rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-[20em]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {/* Left Section */}
            <div className="bg-transparent rounded-lg shadow-lg hover:shadow-2xl text-white relative transform hover:scale-[1.02] transition duration-300 p-4 sm:p-6">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Image
                  src="/images/arogyadham/addressing.png"
                  alt="Addressing The Whole You"
                  width={96}
                  height={96}
                  className="w-24 h-24"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center">
                Addressing The Whole &quot;You&quot;
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-center px-2 sm:px-4 pb-2 sm:pb-4">
                BK Arogyam embraces holistic care, addressing the entire
                &quot;You&quot; - mind, body, and spirit. Our integrated
                treatments blend tradition with innovation for a comprehensive,
                personalized path to wellness and balance.
              </p>
            </div>

            {/* Right Section */}
            <div className="bg-transparent rounded-lg shadow-lg hover:shadow-2xl text-white relative transform hover:scale-[1.02] transition duration-300 p-4 sm:p-6">
              <div className="flex justify-center mb-3 sm:mb-4">
                <Image
                  src="/images/arogyadham/healing.png"
                  alt="The Healing Touch of Nature"
                  width={96}
                  height={96}
                  className="w-24 h-24"
                />
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center">
                The Healing Touch of Nature
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-center px-2 sm:px-4 pb-2 sm:pb-4">
                Nature&apos;s soothing touch: Embrace calm, amid tree&apos;s
                whispers, earth&apos;s warmth. Feel gentle breeze, listen to
                flowing water. Find solace, heal amidst greenery&apos;s embrace.
                Nature&apos;s balm, restoring peace within.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="md:py-16 py-5 bg-gradient-to-r from-blue-100 to-green-100"
        id="medical-tourism"
      >
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center md:mb-16">
            <h3 className="md:text-5xl text-3xl font-extrabold text-green-700 mb-6">
              Rediscover Wellness with Arogyadham
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Welcome to <strong>Arogyadham</strong>, a haven of holistic
              wellness designed to rejuvenate your body, mind, and spirit. Our
              serene sanctuary offers personalized care to help you unlock your
              body’s natural healing potential and rediscover your vitality.
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Escape the chaos of daily life and embrace a journey toward peace
              and health. At <strong>Arogyadham</strong>, we are committed to
              empowering you with tailored Ayurvedic treatments for a healthier,
              more fulfilling life.
            </p>
            <Image
              src="/images/arogyadham/images__1_-removebg-preview.png"
              alt="BK Arogyam Logo"
              width={600}
              height={400}
              className="mx-auto mb-6 w-full max-w-xl transform transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Two-Column Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 lg:px-20">
            {/* Left Column: Image */}
            <div className="w-full lg:w-1/2 text-center mb-8 lg:mb-0">
              <Image
                src="/images/arogyadham/medical-torism-image.webp"
                alt="Ayurvedic Healing"
                width={720}
                height={480}
                className="w-full lg:max-w-[45em] h-auto rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            {/* Right Column: Features List */}
            <div className="w-full lg:w-1/2">
              <ul className="space-y-6">
                <li className="flex items-start space-x-4 transition-transform duration-500 hover:translate-x-2">
                  <i className="bi bi-heart-pulse text-green-600 text-3xl"></i>
                  <p className="text-blue-600 font-semibold text-xl">
                    World-Class Ayurvedic Care: Expert therapies led by seasoned
                    practitioners to promote holistic healing.
                  </p>
                </li>
                <li className="flex items-start space-x-4 transition-transform duration-500 hover:translate-x-2">
                  <i className="bi bi-spa text-green-600 text-3xl"></i>
                  <p className="text-blue-600 font-semibold text-xl">
                    Rejuvenating Therapies: A combination of Panchakarma, herbal
                    treatments, yoga, and meditation for mind-body harmony.
                  </p>
                </li>
                <li className="flex items-start space-x-4 transition-transform duration-500 hover:translate-x-2">
                  <i className="bi bi-geo-alt text-green-600 text-3xl"></i>
                  <p className="text-blue-600 font-semibold text-xl">
                    Explore Varanasi: Embrace the spiritual essence and cultural
                    richness of India’s holiest city.
                  </p>
                </li>
                <li className="flex items-start space-x-4 transition-transform duration-500 hover:translate-x-2">
                  <i className="bi bi-wallet2 text-green-600 text-3xl"></i>
                  <p className="text-blue-600 font-semibold text-xl">
                    Affordable Packages: High-quality treatments at competitive
                    prices for a life-changing experience.
                  </p>
                </li>
                <li className="flex items-start space-x-4 transition-transform duration-500 hover:translate-x-2">
                  <i className="bi bi-globe text-green-600 text-3xl"></i>
                  <p className="text-blue-600 font-semibold text-xl">
                    Customized Experience: Tailored packages that suit your
                    unique health and travel needs.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-12 bg-gradient-to-b from-amber-50 to-white"
        id="tourism-packages"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <span className="text-amber-600 font-semibold">AYURVEDIC WELLNESS</span> */}
            <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Healing Packages
            </h1>
            {/* <div className="w-20 h-1 bg-amber-500 mx-auto mt-6 mb-8"></div> */}
            <p className="text-xl mt-6 text-gray-600 max-w-3xl mx-auto">
              Carefully curated Ayurvedic experiences for holistic healing and
              rejuvenation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  pkg.featured
                    ? "border-2 border-amber-400"
                    : "border border-gray-200"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    Featured
                  </div>
                )}

                <div className="relative h-56 w-full">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </div>

                <div className="p-6 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {pkg.title}
                    </h3>
                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                      {pkg.duration}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{pkg.description}</p>

                  <div className="flex items-center justify-between mt-6">
                    <span className="text-2xl font-bold text-amber-600">
                      {pkg.price}
                    </span>
                    <Link href={pkg.link} passHref>
                      <h3 className="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition duration-300">
                        Details
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </h3>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto md:px-4 pt-5">
          <div className="head-bx text-center mb-8">
            <div className="flex items-center justify-center md:px-20 md:pt-10">
              <span className="flex-grow border-t border-gray-300 md:mx-4"></span>
              <h3 className="text-brown-600 mx-4 font-bold text-black md:text-4xl text-2xl">
                Your Path to Wellness: BK Arogyam Top-tier Health Solutions.
              </h3>
              <span className="flex-grow border-t border-gray-300 mx-4"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:px-20 px-4">
            <div className="mb-6">
              <a
                className="cursor-pointer"
                data-toggle="modal"
                data-target="#myModal"
              >
                <div className="card">
                  <Image
                    id="pen"
                    className="rounded-lg w-full"
                    src="/images/arogyadham/arogyadham center (2).webp"
                    alt="Image for Card 1"
                    width={500}
                    height={300}
                  />
                  <h3 className="text-center mt-4 text-xl font-semibold text-black">
                    Arogyadham Center
                  </h3>
                </div>
              </a>
            </div>
            <div className="mb-6">
              <a
                className="cursor-pointer"
                data-toggle="modal"
                data-target="#myModal"
              >
                <div className="card">
                  <Image
                    id="pen"
                    className="rounded-lg w-full"
                    src="/images/arogyadham/private_room.webp"
                    alt="Image for Card 2"
                    width={500}
                    height={300}
                  />
                  <h3 className="text-center mt-4 text-xl font-semibold text-black">
                    Rooms
                  </h3>
                </div>
              </a>
            </div>
            <div className="mb-6">
              <a
                className="cursor-pointer"
                data-toggle="modal"
                data-target="#myModal"
              >
                <div className="card">
                  <Image
                    id="pen"
                    className="rounded-lg w-full"
                    src="/images/arogyadham/yogaimg.webp"
                    alt="Image for Card 3"
                    width={500}
                    height={300}
                  />
                  <h3 className="text-center mt-4 text-xl font-semibold text-black">
                    Yoga Area
                  </h3>
                </div>
              </a>
            </div>
            <div className="mb-6">
              <a
                className="cursor-pointer"
                data-toggle="modal"
                data-target="#myModal"
              >
                <div className="card">
                  <Image
                    id="pen"
                    className="rounded-lg w-full"
                    src="/images/arogyadham/Meals.webp"
                    alt="Image for Card 4"
                    width={500}
                    height={300}
                  />
                  <h3 className="text-center mt-4 text-xl font-semibold text-black">
                    Meals that heal
                  </h3>
                </div>
              </a>
            </div>
            <div className="mb-6">
              <a
                className="cursor-pointer"
                data-toggle="modal"
                data-target="#myModal"
              >
                <div className="card">
                  <Image
                    id="pen"
                    className="rounded-lg w-full"
                    src="/images/arogyadham/detoxification%20(1).jpg"
                    alt="Image for Card 5"
                    width={500}
                    height={300}
                  />
                  <h3 className="text-center mt-4 text-xl font-semibold text-black">
                    Personalized Treatments
                  </h3>
                </div>
              </a>
            </div>
            <div className="mb-6">
              <a
                className="cursor-pointer"
                data-toggle="modal"
                data-target="#myModal"
              >
                <div className="card">
                  <Image
                    id="pen"
                    className="rounded-lg w-full"
                    src="/images/arogyadham/alldrs.webp"
                    alt="Image for Card 6"
                    width={500}
                    height={300}
                  />
                  <h3 className="text-center mt-4 text-xl font-semibold text-black">
                    Doctors Team
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-t from-green-100 to-blue-50 md:p-8 p-4 rounded-lg shadow-lg">
        <div className="space-y-6 md:space-y-8 pb-5">
          <h3 className="text-2xl md:text-3xl font-semibold text-black text-center">
            Arogyadham Packages and Price List
          </h3>

          <div className="space-y-2 md:space-y-3 md:px-8 lg:px-20 xl:px-40">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-700">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Revive Package - Abyangam, Chun Pind Swed
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Stress Booster Package - Shirodhara, Shirobhyam
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Eye Booster Package - Netra Danpan, Netra Prachalan
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Relaxing Package - Abyangam, Shirodhara
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Rejuration Package - Shirodhara, Abyangam, Swedan
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Holistic Package - Nasya, Abyangam, Patra Potli Sek
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Head Package - Shirodhara, Abyangam, Swedan, Nasya
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>
          </div>

          <hr className="border-t-2 border-red-500 w-full max-w-4xl mx-auto" />

          <h3 className="text-2xl md:text-3xl font-semibold text-black text-center">
            Facial Treatments
          </h3>

          <div className="space-y-2 md:space-y-3 md:px-8 lg:px-20 xl:px-40">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Herbal Facial
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Navara Glow Facial
              </h4>

              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>
          </div>

          <hr className="border-t-2 border-red-500 w-full max-w-4xl mx-auto" />

          <h3 className="text-2xl md:text-3xl font-semibold text-black text-center">
            Petite Massage
          </h3>

          <div className="space-y-2 md:space-y-3 md:px-8 lg:px-20 xl:px-40">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Shoulder Massage
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Head Massage
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Neck Massage
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Back Massage
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-100 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Foot Massage
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Full Body Massage
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>
          </div>

          <hr className="border-t-2 border-red-500 w-full max-w-4xl mx-auto" />

          <div className="space-y-2 md:space-y-3 md:px-8 lg:px-20 xl:px-40 text-black">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Heart Regeneration Package 1 Setting
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Joint Therapy 1 Setting
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-green-500 via-blue-500 to-green-100">
              <h4 className="text-lg sm:text-xl font-medium text-black">
                Diabetes Beta Cell Regeneration Package 1 Setting
              </h4>
              <button
                onClick={() => {
                  router.push("/Booknow");
                }}
                className="bg-blue-600 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="panchakarma-therapy bg-[#f3f9f6] p-4 md:p-12 rounded-xl shadow-lg text-center md:px-20">
        <div className="container mx-auto">
          <div className="therapy-header">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4d796a]">
              Panchakarma Therapy Price List
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed px-4 sm:px-8 lg:px-60">
              Experience the ancient art of healing with our personalized
              Panchakarma therapies designed to detoxify, rejuvenate, and
              harmonize your body and soul.
            </p>
          </div>
          <div className="therapy-content">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="benefit-card bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="icon text-center mb-4">
                  <span className="text-4xl text-[#41b382]">🌿</span>{" "}
                  {/* Increased icon size */}
                </div>
                <h3 className="text-lg font-semibold text-[#4d796a] mb-2">
                  Tailored Detoxification
                </h3>
                <p className="text-gray-700 mb-3">
                  Our personalized treatments help detoxify your body, leaving
                  you refreshed and free of toxins.
                </p>
              </div>

              {/* Card 2 */}
              <div className="benefit-card bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="icon text-center mb-4">
                  <span className="text-4xl text-[#41b382]">🧘‍♂️</span>{" "}
                  {/* Increased icon size */}
                </div>
                <h3 className="text-lg font-semibold text-[#4d796a] mb-2">
                  Mental Clarity Boost
                </h3>
                <p className="text-gray-700 mb-3">
                  Rejuvenate your mind and gain focus through our restorative
                  therapies designed for mental clarity.
                </p>
              </div>

              {/* Card 3 */}
              <div className="benefit-card bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="icon text-center mb-4">
                  <span className="text-4xl text-[#41b382]">💆‍♀️</span>{" "}
                  {/* Increased icon size */}
                </div>
                <h3 className="text-lg font-semibold text-[#4d796a] mb-2">
                  Relaxation & Rejuvenation
                </h3>
                <p className="text-gray-700 mb-3">
                  Our therapies provide deep relaxation and rejuvenation,
                  promoting well-being and harmony.
                </p>
              </div>

              {/* Card 4 */}
              <div className="benefit-card bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="icon text-center mb-4">
                  <span className="text-4xl text-[#41b382]">🍃</span>{" "}
                  {/* Increased icon size */}
                </div>
                <h3 className="text-lg font-semibold text-[#4d796a] mb-2">
                  Authentic Ayurvedic Practices
                </h3>
                <p className="text-gray-700 mb-3">
                  Experience the healing power of authentic Ayurvedic therapies
                  that have been passed down for centuries.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/booknow"
                className="bg-[#41b382] text-white py-3 px-6 rounded-md text-lg hover:bg-[#467560] transition-transform duration-300 transform hover:scale-105"
              >
                Explore Price List
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* rooms */}
      <div className="content-container py-10 p-5">
        <h2 className="text-center md:text-5xl text-3xl font-bold text-gray-800">
          Arogyadham Rooms
        </h2>
        <p className="text-center font-medium text-gray-600 text-xl mb-8 p-3">
          Choose from a variety of rooms tailored to your needs and comfort.
        </p>

        <div className="rooms-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-20">
          {Rooms.map((room, index) => (
            <div
              key={index}
              className="room-card bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden flex flex-col justify-between"
            >
              <Image
                src={room.imgSrc}
                alt={room.label}
                width={400}
                height={192}
                className="room-image w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-sm bg-[#41B3A2] text-white py-1 px-3 rounded-md uppercase inline-block">
                  {room.label}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {room.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 flex-grow">
                  {room.description}
                </p>
                <a
                  onClick={() => {
                    router.push("/roombooking");
                  }}
                  href="#book-now"
                  className="block w-full text-center mt-4 bg-gradient-to-r from-[#41B3A2] to-[#54B435] text-white py-3 rounded-lg text-sm font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* dr-bk chaurasia */}
      <section className="ayurveda bg-gray-100 py-8 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
            {/* Image Section - Full width on mobile & tablet, half on desktop */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/images/arogyadham/bksir.webp"
                alt="Dr. BK Chaurasia"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full lg:max-w-lg"
              />
            </div>

            {/* Content Section - Full width on mobile & tablet, half on desktop */}
            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 pb-4 md:pb-5">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#40A578]">
                Dr. BK Chaurasia
              </h3>
              <h5 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700">
                Kidney Specialist | Ayurvedic Guru | Health Motivational Speaker
              </h5>
              <p className="text-gray-700 text-base sm:text-lg">
                Dr. BK Chaurasia is a visionary in Ayurvedic medicine with over
                24 years of experience specializing in kidney disease
                treatments. As the founder of{" "}
                <strong>B.K. Arogyam & Research Pvt. Ltd.</strong>, he has
                revolutionized kidney care through natural and Ayurvedic
                approaches, helping thousands achieve better health.
              </p>
              <p className="text-gray-700 text-base sm:text-lg">
                Renowned as a health motivator, Dr. Chaurasia has been honored
                with numerous accolades, including the prestigious{" "}
                <strong>Pride of India</strong> and{" "}
                <strong>Indian Icon Award</strong>.
              </p>
              <div>
                <a
                  href="/aboutus/bkchaurasia"
                  className="bg-[#40A578] text-white py-3 px-6 rounded-md text-base md:text-xl font-medium hover:bg-[#82CD47] transition"
                >
                  Know About Dr. BK Chaurasia
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 md:py-16 py-5 md:px-6 px-2">
        {/* Section Heading */}
        <div className="text-center md:mb-12 mb-5">
          <h2 className="md:text-4xl text-3xl font-extrabold text-gray-800">
            Arogyadham Virtual Tour Gallery
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Experience heart-warming hospitality & care at Arogyadham. Discover
            the artistry and serenity of our spaces through this visual tour.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-20 px-3">
          {/* Individual Image Card */}
          {[
            {
              src: "/images/arogyadham/1.png",
              label: "Arogyadham - Highlights 1",
            },
            {
              src: "/images/arogyadham/2.png",
              label: "Arogyadham - Highlights 2",
            },
            {
              src: "/images/arogyadham/3.png",
              label: "Arogyadham - Highlights 3",
            },
            {
              src: "/images/arogyadham/4.png",
              label: "Arogyadham - Highlights 4",
            },
            {
              src: "/images/arogyadham/5.png",
              label: "Arogyadham - Highlights 5",
            },
            {
              src: "/images/arogyadham/buddha%20(1).jpg",
              label: "Arogyadham - Buddha",
            },
          ].map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.label}
                width={500}
                height={288}
                className="w-full h-72 object-cover transform transition duration-300 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">
                  {image.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center md:mt-12 mt-5">
          <a
            href="/gallery/"
            target="_blank"
            className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white md:py-2 py-1 px-8 rounded-full text-lg font-semibold shadow-lg hover:from-green-600 hover:to-blue-600 transition-all"
          >
            View Full Gallery
          </a>
        </div>
      </div>

      {/* faq */}
      <section className="bg-gray-100 md:py-12 py-5" id="faqs">
        <div className="md:px-20 px-2">
          {/* FAQ Header */}
          <div className="flex items-center justify-center text-centyer mb-8">
            <h2 className="md:text-5xl text-2xl font-bold text-gray-800 text-center">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow rounded-lg">
                <button
                  className="flex justify-between w-full px-6 py-4 text-left text-gray-700 font-semibold text-lg hover:text-teal-600"
                  onClick={() =>
                    document
                      .getElementById(`faq-${index}`)
                      .classList.toggle("hidden")
                  }
                >
                  {faq.question}
                  <span className="text-2xl">+</span>
                </button>
                <div
                  id={`faq-${index}`}
                  className="hidden px-6 py-4 text-gray-600"
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* google-3D maps */}
      <section className="w-full" id="gallery">
        <div className="overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1706618066659!6m8!1m7!1sCAoSLEFGMVFpcFA0S0dobmxHbzEyVGtMR2tFWmtPTjJZVHJFYTU2cl8tT25GRzBS!2m2!1d25.30415470007746!2d82.9661496032561!3f20!4f10!5f0.7820865974627469"
            width="100%"
            height="700"
            className="border-none"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Mobile View Adjustments */}
        <style jsx>{`
          @media (max-width: 768px) {
            iframe {
              height: 300px;
            }
          }
        `}</style>
      </section>
    </Layout>
  );
};

export default UnderstandingArogyadham;
