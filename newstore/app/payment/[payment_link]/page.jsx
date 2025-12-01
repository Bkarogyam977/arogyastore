// app/payment/page.js (Server Component)
import PaymentRequest from "./PaymentRequest";

export default async function PaymentRequestPage({params}) {
    const {payment_link} = await params
  const apiUrl = `https://healdiway.bkarogyam.com/erp-api/payment-create-link-payment/by-payment-link/${payment_link}/`;

  console.log(apiUrl)
  let paymentData = {
    shopName: "BK Arogyam PVT LTD",
    amount: 100.00,
    paymentFor: "Kidney Care",
    receipt: "Kidney Care Project",
    expiryDate: "Feb 28, 2025",
  };

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Ensures fresh data on each request
    });

    if (!response.ok) {
        console.log(apiUrl)
      throw new Error("Failed to fetch payment data");
    }

    const data = await response.json();

    // Map API response to component data structure
    paymentData = {
      shopName: data.center_name || "BK Arogyam PVT LTD",
      amount: data.amount || 100.00,
      paymentFor: data.name || "Kidney Care",
      receipt: data.description || "Kidney Care Project",
      expiryDate: data.expiry_date || "2025-02-28",
    };
  } catch (error) {
    // console.error("Error fetching payment data:", error);
  }

  return <PaymentRequest data={paymentData} />;
}
