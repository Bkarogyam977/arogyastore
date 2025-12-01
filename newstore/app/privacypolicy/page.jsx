import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="container mx-auto md:px-40 px-2 md:mt-28 mt-6 md:mb-5 bg-white shadow-lg rounded-lg md:p-8 p-4">
      <div className="text-center md:mb-12">
        <h2 className="md:text-4xl text-3xl font-extrabold text-green-800 mb-8 leading-tight">
          Privacy Policy
        </h2>
      </div>

      <div className="space-y-8 text-lg text-gray-800">
        <section className="bg-green-50 md:p-6 p-2 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Introduction</h3>
          <p>
            At ArogyaMission, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or use our services.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Information We Collect</h3>
          <p>
            We may collect personal information from you when you:
            <ul className="list-disc ml-6 space-y-2">
              <li>Sign up for an account</li>
              <li>Make a purchase</li>
              <li>Submit inquiries or requests</li>
              <li>Subscribe to our newsletter</li>
            </ul>
            The types of personal information we may collect include:
            <ul className="list-disc ml-6 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Payment information</li>
              <li>IP address</li>
              <li>Other necessary information for providing our services</li>
            </ul>
          </p>
        </section>

        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">How We Use Your Information</h3>
          <p>
            We use the information we collect to:
            <ul className="list-disc ml-6 space-y-2">
              <li>Provide and manage our services</li>
              <li>Process payments and fulfill orders</li>
              <li>Respond to your inquiries and requests</li>
              <li>Improve our website and services</li>
              <li>Send marketing communications (if you opt-in)</li>
            </ul>
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Data Security</h3>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee the absolute security of your data.
          </p>
        </section>

        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Third-Party Services</h3>
          <p>
            We may use third-party services to enhance your experience or improve our website&apos;s functionality. These third parties may collect information as part of their services, and we encourage you to review their privacy policies.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Cookies</h3>
          <p>
            Our website uses cookies to enhance user experience, analyze website traffic, and offer personalized content. You can manage or disable cookies through your browser settings.
          </p>
        </section>

        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Your Rights</h3>
          <p>
            You have the right to:
            <ul className="list-disc ml-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction or deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            To exercise any of these rights, please contact us using the information below.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy or our practices, please contact us at:
            <ul className="list-disc ml-6 space-y-2">
              <li>Email: <a href="mailto:doctor@bkarogyam.com" className="text-green-700">support@arogyamission.com</a></li>
              <li>Phone: +91 8081222333</li>
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
