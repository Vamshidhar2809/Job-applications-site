import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10 relative">
      {/* Top-Left Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
      >
        ← Back to Job Listings
      </button>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded border border-green-400 text-sm text-center">
            Message sent successfully!
          </div>
        )}

        <div className="mt-8 text-sm text-center text-gray-600">
          <p><strong>Email:</strong> vamshidharreddy625@gmail.com</p>
          <p><strong>Phone:</strong> +91 9391133625</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
