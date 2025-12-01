import React from 'react'
import Image from 'next/image';

function Treatmentphilosophy() {
    return (
        <div>
            <section className="ayurnique-sec why-ayurnique py-12 bg-gray-50 md:px-20">
                <div className="container mx-auto px-4">
                    <div className="ayurnique-treatment">
                        {/* Treatment Philosophy Section */}
                        <div className="w-full mb-12 text-center">
                            <div className="head-sec">
                                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Treatment Philosophy</h2>
                                <p className="text-lg text-gray-700 mx-auto max-w-3xl">
                                    A treatment philosophy at BK Arogyam is based on holistic therapies in Ayurveda, natural remedies, personalized care, and lifestyle adjustment for comprehensive health and wellness.
                                </p>
                            </div>
                        </div>

                        {/* Treatment Boxes */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Box 1 */}
                            <div className="innerbx text-center">
                                <Image
                                    src="/images/hops/protocol.png"
                                    alt="Personalized Treatment and Medicines"
                                    title="Personalized Treatment and Medicines"
                                    width={500}
                                    height={256}
                                    className="w-full h-64 object-cover mb-4"
                                />                                <h3 className="text-xl font-semibold text-black mb-2">Personalized Treatment</h3>
                                <p className="text-gray-700">
                                    Unique Ayurvedic solutions prepared just for you, based on a deep dive to find the root cause of your health concerns.
                                </p>
                            </div>

                            {/* Box 2 */}
                            <div className="innerbx text-center">
                                <Image
                                    src="/images/hops/yogaimg1.jpeg"
                                    alt="End-To-End Relief Tracking"
                                    title="End-To-End Relief Tracking"
                                    width={500}
                                    height={256}
                                    className="w-full h-64 object-cover mb-4"
                                />                                <h3 className="text-xl font-semibold text-black mb-2">Focus on Prevention</h3>
                                <p className="text-gray-700">
                                    Prevention of illness by diet, exercise, yoga, meditation, and stress management practices-a way of holistic wellness.
                                </p>
                            </div>

                            {/* Box 3 */}
                            <div className="innerbx text-center">
                                <Image
                                    src="/images/hops/dietandpersonalize.jpeg"
                                    alt="Diet & Lifestyle Plans Customized Just for You"
                                    title="Diet & Lifestyle Plans Customized Just for You"
                                    width={500}
                                    height={256}
                                    className="w-full h-64 object-cover mb-4"
                                />                                <h3 className="text-xl font-semibold text-black mb-2">Diet & Lifestyle Plans Customized Just for You</h3>
                                <p className="text-gray-700">
                                    Personalized plans including diet, therapy, and lifestyle guides by your doctor to be used in conjunction with herbal treatments in a holistic approach to healing the cause itself.
                                </p>
                            </div>
                        </div>

                        {/* Know More Button */}
                        <div className="know-btn mt-8 text-center">
                            <a className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition" onClick={() => {
                                const element = document.getElementById("id_book_apointment");
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                }
                            }}>
                                Know more about the treatment
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Treatmentphilosophy
