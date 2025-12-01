
import Head from 'next/head';
import Image from 'next/image';

export default function HeadDayCarePackage() {
  const treatments = [
    {
      name: "Abhyangam",
      hindi: "अभ्यंगम",
      description: "Full-body massage with medicated oils to relieve fatigue, improve blood circulation, enhance strength, and balance Vata/Pitta doshas.",
      image: "/images/arogyadham/therepy-Abhyangam.jpg",
      benefits: ["Reduces fatigue", "Improves circulation", "Balances doshas"]
    },
    {
      name: "Shirodhara",
      hindi: "शिरोधारा",
      description: "Continuous flow of medicated oil on the forehead to reduce stress, improve sleep, calm the mind, and alleviate headaches.",
      image: "/images/arogyadham/therepy-Shirodhara.jpeg",
      benefits: ["Reduces stress", "Improves sleep", "Calms the mind"]
    },
    {
      name: "Nasya",
      hindi: "नस्य",
      description: "Nasal administration of medicated oils to treat neck/head issues like migraines, sinusitis, and hair fall.",
      image: "/images/arogyadham/therepy-nasyam.jpg",
      benefits: ["Relieves migraines", "Clears sinuses", "Reduces hair fall"]
    },
    {
      name: "Swedana",
      hindi: "स्वेदन",
      description: "Herbal steam bath to detoxify, boost circulation, reduce stiffness, and relieve pain.",
      image: "/images/arogyadham/therepy-swedana.jpg",
      benefits: ["Detoxifies body", "Reduces stiffness", "Relieves pain"]
    },
    {
      name: "Kati Basti",
      hindi: "कटि वस्ति",
      description: "Medicated oil retained on the lower back (using a dough boundary) to address back pain, sciatica, and spasms.",
      image: "/images/arogyadham/therepy-kati-basti.jpg",
      benefits: ["Relieves back pain", "Helps sciatica", "Reduces spasms"]
    }
  ];

  const benefits = [
    {
      title: "Free Consultation",
      description: "Personalized assessment by our Ayurvedic doctor"
    },
    {
      title: "Diagnostic Tests",
      description: "Two free tests plus complimentary ECG"
    },
    {
      title: "Medicine Discount",
      description: "10% off on all prescribed medicines"
    },
    {
      title: "Follow-up Support",
      description: "Post-treatment guidance included"
    }
  ];

  const testimonials = [
    {
      quote: "The Head Day Care Package transformed my stress levels. Shirodhara is magical!",
      author: "Priya S., Regular Client",
      rating: 5
    },
    {
      quote: "Authentic Ayurveda with professional practitioners. Worth every rupee.",
      author: "Rahul M., First-time Visitor",
      rating: 5
    },
    {
      quote: "My chronic back pain reduced significantly after Kati Basti treatments.",
      author: "Anjali P., 3-month Patient",
      rating: 4
    }
  ];


  return (
    <div className="min-h-screen bg-amber-50">
      <Head>
        <title>HEAD Health Energy & Detoxification | Day Care Package</title>
        <meta name="description" content="Rejuvenate your mind and body with our Ayurvedic Head Day Care Package including Abhyangam, Shirodhara, Nasya and more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <section className="relative pt-24 md:pt-28 h-screen max-h-[450px]">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-800/80 to-amber-600/80"></div>
        {/* <Image 
          src="/images/arogyadham/ayurveda-hero.jpg" 
          alt="Ayurvedic head massage"
          layout="fill"
          objectFit="cover"
          priority
        /> */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full mt-[-60px]">
            {/* Content remains the same */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Rejuvenate Your <span className="text-amber-200">Mind & Body</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-10 max-w-3xl mx-auto">
              Experience authentic Ayurvedic healing with our Head Health Energy and Detoxification Day Care Package
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl">
                Book Your Session
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold">AYURVEDIC WELLNESS</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">HEAD Day Care Package</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive Ayurvedic package blends ancient wisdom with modern wellness approaches to detoxify your body, 
            rejuvenate your mind, and restore vital energy. Specially designed for today&apos;s stressful lifestyles, our 
            treatments address both physical and mental wellbeing through time-tested techniques.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-500">
            <div className="text-amber-500 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Energy Restoration</h3>
            <p className="text-gray-600">Revitalize your body&apos;s natural energy flow through targeted therapies</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-500">
            <div className="text-amber-500 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Deep Detoxification</h3>
            <p className="text-gray-600">Eliminate toxins at cellular level for improved health and vitality</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-500">
            <div className="text-amber-500 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Holistic Healing</h3>
            <p className="text-gray-600">Address root causes of imbalance for lasting wellness</p>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold">THERAPIES</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Our Ayurvedic Treatments</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each therapy in our package is carefully selected to work synergistically for complete rejuvenation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {treatments.map((treatment, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src={treatment.image}
                    alt={treatment.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {treatment.name} <span className="text-amber-300">({treatment.hindi})</span>
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{treatment.description}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {treatment.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-700 font-semibold">VALUE ADDED</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Package Benefits</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We go beyond treatments to provide complete wellness support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-amber-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-10 md:p-12 lg:p-16 bg-white/10 backdrop-blur-sm">
                <h3 className="text-3xl font-bold text-white mb-4">HEAD Day Care Package</h3>
                <p className="text-amber-100 text-lg mb-8">Complete Ayurvedic Experience with Holistic Benefits</p>
                
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-extrabold text-white">₹5,000</span>
                  <span className="ml-2 text-xl text-amber-200">/ session</span>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <svg className="h-6 w-6 text-amber-200 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-amber-100">Valid for 1 year</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-6 w-6 text-amber-200 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-amber-100">5 specialized treatments</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-6 w-6 text-amber-200 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-amber-100">Personalized consultation</span>
                  </div>
                </div>
                
                <button className="w-full bg-white text-amber-600 hover:bg-gray-100 font-bold py-4 px-6 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl">
                  Book Now
                </button>
              </div>
              
              <div className="md:w-1/2 p-10 md:p-12 lg:p-16 flex items-center">
                <div>
                  <h4 className="text-xl font-semibold text-amber-100 mb-6">What&apos;s Included:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-amber-300 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-amber-50">All 5 Ayurvedic therapies</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-amber-300 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-amber-50">Doctor consultation & assessment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-amber-300 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-amber-50">Two diagnostic tests + ECG</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-amber-300 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-amber-50">10% discount on medicines</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-amber-300 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-amber-50">Personalized wellness advice</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold">CLIENT STORIES</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from people who experienced our Ayurvedic treatments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 text-lg">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">Verified Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Begin Your Ayurvedic Journey Today</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Our HEAD Day Care Package is your gateway to holistic healing and lasting wellness. 
            Take the first step towards a healthier, more balanced life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl">
              Book Your Package
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 border-2 border-white shadow-lg hover:shadow-xl">
              Call Us: +91 9876543210
            </button>
          </div>
        </div>
      </section>
      

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold">HAVE QUESTIONS?</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          </div>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button className="w-full flex justify-between items-center p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">How long does each session take?</h3>
                <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <div className="px-6 pb-6 text-gray-600">
                The complete package typically takes 3-4 hours per session, depending on your specific needs and the doctor&apos;s recommendations.
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button className="w-full flex justify-between items-center p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">How many sessions are recommended?</h3>
                <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <div className="px-6 pb-6 text-gray-600">
                Most clients see significant benefits after 7-14 sessions, but our doctor will assess your condition and recommend a personalized treatment plan.
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button className="w-full flex justify-between items-center p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800">Are there any side effects?</h3>
                <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <div className="px-6 pb-6 text-gray-600">
                Ayurvedic treatments are generally safe with minimal side effects. Some clients may experience mild detox symptoms like tiredness, which typically subside within a day.
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}