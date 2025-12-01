"use client";
import { useState } from "react";


function AccountDeletion() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!name || !mobile) {
      setMessage("Please fill out all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://main.bkarogyam.com/bkapienquiry/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          mobile,
          category: "Account Delete Request",
        }),
      });

      if (response.ok) {
        setMessage("Your account deletion request has been submitted.");
        setName("");
        setMobile("");
      } else {
        setMessage("Failed to submit request. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please check your internet connection.");
    }

    setLoading(false);
  };

  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center border-t-8 border-green-900">
        <p className="text-center text-2xl pb-2">REQUEST ACCOUNT DELETION</p>
        <ul className="text-left text-sm text-gray-700 mb-4 list-disc pl-5">
          <li>Your order history and messages with support will be erased.</li>
          <li>All your earned points and credits will be forfeited.</li>
          <li>You will no longer participate in exclusive events or rewards.</li>
          <li>You will no longer receive promotional emails.</li>
        </ul>

        <div className="space-y-3">
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            className="w-full p-2 border rounded-md"
            placeholder="Your Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button
            onClick={handleDelete}
            disabled={loading}
            className={`w-full py-2 rounded-md text-white ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-900 hover:bg-green-700"
            }`}
          >
            {loading ? "Processing..." : "Yes, Delete My Account"}
          </button>
        </div>

        {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
      </div>
    </div>
  );
}


export default AccountDeletion;
