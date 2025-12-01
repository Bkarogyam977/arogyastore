import React from 'react';

function TermsandCondition() {
    return (
        <div className="container mx-auto md:px-40 md:mt-28 mt-6 md:mb-3 bg-white shadow-lg rounded-lg md:p-8 p-3">
            <div className="text-center md:mb-12">
                <h2 className="md:text-4xl text-3xl font-extrabold text-green-800 mb-8 leading-tight">
                    Terms and Conditions
                </h2>
            </div>

            <div className="space-y-8 text-lg text-gray-800">
                <section className="bg-green-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Introduction</h3>
                    <p>
                        Welcome to ArogyaMission! These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to comply with these terms. If you do not agree with these terms, please do not use our services.
                    </p>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Use of Our Services</h3>
                    <p>
                        You agree to use ArogyaMission&apos;s website and services for lawful purposes only. You must not:
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Violate any applicable local, state, or national laws.</li>
                            <li>Engage in any activity that disrupts or damages our website or services.</li>
                            <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity.</li>
                        </ul>
                    </p>
                </section>

                <section className="bg-green-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Account Registration</h3>
                    <p>
                        To access certain features of our services, you may need to create an account. You are responsible for maintaining the confidentiality of your account information, including your username and password.
                    </p>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Intellectual Property</h3>
                    <p>
                        All content on our website, including text, graphics, logos, images, and software, is the property of ArogyaMission or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute our content without our permission.
                    </p>
                </section>

                <section className="bg-green-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Limitation of Liability</h3>
                    <p>
                        ArogyaMission is not liable for any damages arising from your use of our website or services, including but not limited to any direct, indirect, incidental, or consequential damages. You agree to use our services at your own risk.
                    </p>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Privacy and Data Protection</h3>
                    <p>
                        Your privacy is important to us. Our privacy practices are outlined in our Privacy Policy, which you should review to understand how we collect, use, and protect your personal data.
                    </p>
                </section>

                <section className="bg-green-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Termination</h3>
                    <p>
                        We reserve the right to suspend or terminate your account if you violate these Terms and Conditions. Upon termination, all provisions of these terms will survive, except for your right to access our services.
                    </p>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Changes to the Terms</h3>
                    <p>
                        We may update these Terms and Conditions from time to time. Any changes will be posted on this page with an updated effective date. By continuing to use our services after any changes, you accept the revised terms.
                    </p>
                </section>

                <section className="bg-green-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Governing Law</h3>
                    <p>
                        These Terms and Conditions are governed by the laws of the jurisdiction in which ArogyaMission operates, without regard to its conflict of law principles.
                    </p>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Contact Us</h3>
                    <p>
                        If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Email: <a href="mailto:doctor@bkarogyam.com" className="text-green-700">doctor@bkarogyam.com</a></li>
                            <li>Phone: +91 8081222333</li>
                        </ul>
                    </p>
                </section>
            </div>
        </div>
    );
}

export default TermsandCondition;
