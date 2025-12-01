'use client';
import { useState } from 'react';
import axios from 'axios';

function Comments() {
    const [contactForm, setContactForm] = useState({
        name: '',
        phone: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            // Only allow numbers in the phone field
            const numericValue = value.replace(/\D/g, '');
            setContactForm((prevForm) => ({
                ...prevForm,
                [name]: numericValue,
            }));
        } else {
            setContactForm((prevForm) => ({
                ...prevForm,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: contactForm.name,
            phone: contactForm.phone,
            comment: contactForm.message,
        };
        try {
            const response = await axios.post('https://main.bkarogyam.com/bkapicomments/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setStatus('Comment submitted successfully!');
            setContactForm({
                name: '',
                phone: '',
                message: '',
            });
        } catch (error) {
            if (error.response) {
                console.error('Error submitting comment:', error.response.data);
            } else {
                console.error('Error submitting comment:', error.message);
            }
            setStatus('Failed to submit comment');
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-r from-green-300 to-blue-100 p-6 rounded-lg shadow-lg"
            >
                <div>
                    <h2 className="text-xl font-semibold text-black">Be the first to comment.</h2>
                    <p className="text-blue-800 p-3">Leave a Reply</p>
                </div>

                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="block text-lg font-semibold text-black">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={contactForm.name}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 text-black rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="w-1/2">
                        <label className="block text-lg font-semibold text-black">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={contactForm.phone}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 text-black rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                            pattern="[0-9]{10}"
                            minLength="10"
                            maxLength="10"
                            required
                            placeholder="Enter 10-digit number"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-lg font-semibold text-black">Comment</label>
                    <textarea
                        name="message"
                        value={contactForm.message}
                        onChange={handleInputChange}
                        className="w-full p-3 border text-black border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        rows="4"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-md hover:bg-blue-700 transition-all"
                >
                    Post Comment
                </button>

                {status && <div className="mt-4 text-center text-green-800 font-bold">{status}</div>}
            </form>
        </div>
    );
}

export default Comments;
