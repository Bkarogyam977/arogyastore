import React from 'react';

function ReturnPolicy() {
  return (
    <div className="container mx-auto md:px-40 md:mt-20 mt-6 md:mb-10 bg-white shadow-lg rounded-lg md:p-8 p-4">
      <div className="text-center md:mb-12">
        <h2 className="md:text-4xl text-2xl font-extrabold text-green-800 mb-8 leading-tight">
          Return and Refund Policy
        </h2>
      </div>

      <div className="space-y-8 text-lg text-gray-800">
        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Introduction</h3>
          <p>
            At BK Arogyam, your satisfaction is our priority. This Return and Refund Policy outlines the terms for returning or refunding medicines, consultation services, and other products.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Medicines</h3>
          <p>
            Due to the nature of medicines, returns and refunds are subject to the following conditions:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Medicines can only be returned if they are delivered in damaged or defective condition.</li>
            <li>Returns must be requested within 7 days of receipt.</li>
            <li>Returned medicines must be unopened, unused, and in their original packaging.</li>
          </ul>
        </section>

        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Consultation Services</h3>
          <p>
            Our consultation services are non-refundable. However, if you experience any issues with the service, please contact us at <a href="mailto:doctor@bkarogyam.com" className="text-green-700">doctor@bkarogyam.com</a>, and we will address your concerns promptly.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Other Products</h3>
          <p>
            For non-medicine products, the following return policy applies:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Products can be returned within 15 days of receipt.</li>
            <li>Returned items must be unused, undamaged, and in their original packaging.</li>
            <li>Products purchased during a sale or promotion are not eligible for returns.</li>
          </ul>
        </section>

        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Return Process</h3>
          <p>
            To initiate a return, please follow these steps:
          </p>
          <ul className="list-decimal ml-6 space-y-2">
            <li>Contact our customer support team at <a href="mailto:doctor@bkarogyam.com" className="text-green-700">doctor@bkarogyam.com</a> or call us at 8081222333.</li>
            <li>Provide your order details, including the order number and reason for return.</li>
            <li>Follow the instructions provided by our team to ship the item back to us.</li>
          </ul>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Refund Policy</h3>
          <p>
            Refunds will be processed as follows:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>For medicines: Refunds will be issued only if the return conditions are met.</li>
            <li>For other products: Refunds will be processed after the returned item passes inspection.</li>
            <li>Refunds for eligible products will be credited to the original payment method within 7-10 business days.</li>
          </ul>
        </section>

        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Shipping Costs</h3>
          <p>
            The cost of return shipping is the responsibility of the customer unless the return is due to an error on our part (e.g., wrong or defective item received).
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Contact Us</h3>
          <p>
            If you have any questions or concerns about our Return and Refund Policy, please contact us:
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

export default ReturnPolicy;
