import React from 'react';

function RefundPolicy() {
  return (
    <div className="container mx-auto md:px-40 md:mt-28 mt-6 md:mb-3 bg-white shadow-lg rounded-lg md:p-8 p-4">
      <div className="text-center md:mb-12">
        <h2 className="md:text-4xl text-3xl font-extrabold text-green-800 mb-8 leading-tight">
          Refund Policy
        </h2>
      </div>

      <div className="space-y-8 text-lg text-gray-800">
        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Introduction</h3>
          <p>
            At BK Arogyam, we strive to ensure that our customers are satisfied with their purchases and services. This Refund Policy outlines the process and terms for refunds on medicines, consultation services, and other products.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Eligibility for Refunds</h3>
          <p>
            Refunds are subject to the following conditions:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Refunds for medicines will only be issued if the products are damaged or defective upon delivery.</li>
            <li>Consultation services are non-refundable except in cases of technical issues or service failures.</li>
            <li>Other products may be eligible for refunds if returned within 15 days in unused, undamaged condition.</li>
          </ul>
        </section>

        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Refund Process</h3>
          <p>
            To request a refund, follow these steps:
          </p>
          <ul className="list-decimal ml-6 space-y-2">
            <li>Contact our customer support team at <a href="mailto:doctor@bkarogyam.com" className="text-green-700">doctor@bkarogyam.com</a> or call us at 8081222333.</li>
            <li>Provide your order details, including the order number and reason for requesting a refund.</li>
            <li>Our team will evaluate your request and guide you through the refund process.</li>
          </ul>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Refund Timelines</h3>
          <p>
            Refunds will be processed as follows:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Refunds for eligible medicines will be issued within 7-10 business days of approval.</li>
            <li>For consultation services, approved refunds will be processed within 5 business days.</li>
            <li>Refunds for other products will be initiated after the returned item passes inspection.</li>
          </ul>
        </section>

        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Refund Method</h3>
          <p>
            Refunds will be credited to the original payment method used at the time of purchase. If the original payment method is not available, alternative arrangements can be made by contacting our support team.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Exclusions</h3>
          <p>
            The following are not eligible for refunds:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Products purchased during sales or promotions.</li>
            <li>Opened or used medicines unless found defective or damaged upon delivery.</li>
            <li>Refund requests made beyond the specified time frame.</li>
          </ul>
        </section>

        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Contact Us</h3>
          <p>
            If you have any questions or concerns about our Refund Policy, feel free to reach out to us:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Email: <a href="mailto:doctor@bkarogyam.com" className="text-green-700">doctor@bkarogyam.com</a></li>
            <li>Phone: 8081222333</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default RefundPolicy;
