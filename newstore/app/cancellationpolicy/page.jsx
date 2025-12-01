import React from 'react';

function CancellationPolicy() {
    return (
        <div className="container mx-auto md:px-40 md:mt-28 mt-6 md:mb-3 bg-white shadow-lg rounded-lg md:p-8 p-4">
            <div className="text-center md:mb-12">
                <h2 className="md:text-4xl text-3xl font-extrabold text-green-800 mb-8 leading-tight">
                    Cancellation Policy
                </h2>
            </div>

            <div className="space-y-8 text-lg text-gray-800">
                <section className="bg-green-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Introduction</h3>
                    <p>
                        At ArogyaMission, we strive to provide the best possible service. However, we understand that plans may change. This Cancellation Policy outlines the terms under which cancellations are accepted, the process, and any associated charges.
                    </p>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Cancellation Timeline</h3>
                    <p>
                        Cancellations can be made up to 24 hours before the scheduled service. Cancellations made within 24 hours of the service will incur a cancellation fee.
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Cancellations made 24+ hours in advance: No charge</li>
                        <li>Cancellations made within 24 hours: 50% of the service fee</li>
                        <li>No-show or failure to cancel: 100% of the service fee</li>
                    </ul>
                </section>

                <section className="bg-green-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">How to Cancel</h3>
                    <p>
                        To cancel your service, please follow these steps:
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Contact our support team via email or phone.</li>
                            <li>Provide your booking reference and reason for cancellation.</li>
                            <li>You will receive a confirmation of your cancellation request.</li>
                        </ul>
                    </p>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Refund Policy</h3>
                    <p>
                        Refunds will be processed according to the cancellation policy:
                        <ul className="list-disc ml-6 space-y-2">
                            <li>If you cancel 24 hours or more in advance, you will receive a full refund.</li>
                            <li>If you cancel within 24 hours, the service fee will be refunded after deducting the cancellation charge.</li>
                            <li>No-show: No refund will be provided.</li>
                        </ul>
                    </p>
                </section>

                <section className="bg-green-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Exceptions</h3>
                    <p>
                        In certain cases, such as medical emergencies or unavoidable circumstances, we may consider exceptions to this policy. Please contact us as soon as possible to discuss your situation.
                    </p>
                </section>

                <section className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Changes to This Cancellation Policy</h3>
                    <p>
                        We may update this Cancellation Policy from time to time. Any changes will be posted on this page with an updated effective date. By continuing to use our services, you accept the revised terms.
                    </p>
                </section>

                <section className="bg-green-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4">Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy or our practices, please contact us at:
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

export default CancellationPolicy;
