import React from 'react';

function ShippingPolicy() {
  return (
    <div className="container mx-auto md:px-40 md:mt-28 mt-6 md:mb-3 bg-white shadow-lg rounded-lg md:p-8 p-4">
      <div className="text-center md:mb-12">
        <h2 className="md:text-4xl text-3xl font-extrabold text-green-800 mb-8 leading-tight">
          Shipping Policy
        </h2>
      </div>

      <div className="space-y-8 text-lg text-gray-800">
        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Introduction</h3>
          <p>
            At ArogyaMission, we are committed to delivering your orders in a timely and efficient manner. Our Shipping Policy outlines the terms and conditions regarding shipping, delivery times, and costs associated with the shipment of your products.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Shipping Methods</h3>
          <p>
            We offer various shipping methods to ensure that your orders are delivered to you as quickly as possible. The available methods will be displayed during checkout.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Standard Shipping (Varies by destination)</li>
            <li>Express Shipping (Varies by destination)</li>
            <li>International Shipping (Varies by destination)</li>
          </ul>
        </section>

        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Shipping Costs</h3>
          <p>
            Shipping costs are calculated based on the shipping method chosen, the weight of the items, and the delivery address. The final shipping cost will be displayed at checkout before you complete your order.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Free shipping for orders over Rs.50 (Domestic only)</li>
            <li>International shipping fees will be calculated based on the destination and weight of the order.</li>
            <li>Express shipping costs will vary depending on the shipping destination.</li>
          </ul>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Order Processing Time</h3>
          <p>
            Orders are processed within 1-2 business days from the time of order placement, excluding weekends and public holidays. You will receive a confirmation email once your order has been processed and shipped.
          </p>
        </section>

        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Tracking Your Order</h3>
          <p>
            Once your order has been shipped, you will receive a tracking number via email. You can use this tracking number to monitor the progress of your shipment.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Delivery Times</h3>
          <p>
            Delivery times depend on the shipping method chosen and the destination address. Below are the general delivery timeframes:
            <ul className="list-disc ml-6 space-y-2">
              <li>Standard Shipping: 3-5 business days</li>
              <li>Express Shipping: 2-4 business days</li>
              <li>International Shipping: Varies depending on location</li>
            </ul>
            Delivery times are estimates and may be affected by factors such as weather conditions or carrier delays.
          </p>
        </section>

        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Shipping Restrictions</h3>
          <p>
            We currently do not ship to P.O. Box addresses or certain restricted international locations. If your shipping address falls within one of these categories, we will notify you during the checkout process.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Lost or Damaged Items</h3>
          <p>
            If your item is lost or damaged during shipping, please contact us immediately at doctor@bkarogyam.com. We will assist you in resolving the issue and ensuring that you receive your order in a timely manner.
          </p>
        </section>

        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Changes to This Shipping Policy</h3>
          <p>
            We may update this Shipping Policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Contact Us</h3>
          <p>
            If you have any questions about our shipping policy or need assistance with your order, please contact us:
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

export default ShippingPolicy;
