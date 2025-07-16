import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import axios from 'axios';

function Home() {
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    qualification: '',
    organization: '',
    notice: '',
    skills: '',
  });

  const [submittedName, setSubmittedName] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      ...formData,
      organisation: formData.organization,
      message: `New job application from ${formData.name}`,
      time: new Date().toLocaleString(),
    };

    try {
      // 1. Send Email
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      console.log('✅ Email sent successfully');

      // 2. Send to backend for DB insert
      await axios.post('http://localhost:5000/api/applicants', {
        ...formData,
        resume_link: resume?.name || '',
      });

      console.log('✅ Data stored in local DB');

      // 3. Show Thank You Message
      setSubmittedName(formData.name);
      setShowMessage(true);

      // 4. Reset Form
      setFormData({
        name: '',
        email: '',
        contact: '',
        qualification: '',
        organization: '',
        notice: '',
        skills: '',
      });
      setResume(null);

      // 5. Redirect after 5 seconds
      setTimeout(() => {
        setShowMessage(false);
        navigate('/');
      }, 5000);
    } catch (err) {
      console.error('❌ Submission Error:', err);
      alert('Submission failed. Please try again later.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto mt-8 p-4 sm:p-6 bg-white shadow-md rounded-lg"
    >
      {/* Header Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1350&q=80"
        alt="Job Opportunity"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-40 sm:h-60 object-cover rounded-lg mb-5"
      />

      <motion.h1
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl sm:text-2xl font-bold text-center text-blue-700 mb-4"
      >
        Welcome to the Job Opportunity
      </motion.h1>

      {/* Thank You Message */}
      {showMessage && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-green-100 text-green-800 p-4 mb-4 rounded text-center font-medium"
        >
          Thanks <strong>{submittedName}</strong> for applying! We will review and get back to you soon. Redirecting...
        </motion.div>
      )}

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="space-y-4"
      >
        {[
          { label: 'Name', name: 'name', type: 'text' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Contact', name: 'contact', type: 'tel' },
          { label: 'Qualification', name: 'qualification', type: 'text' },
          { label: 'Current Organization', name: 'organization', type: 'text' },
          { label: 'Notice Period (in days)', name: 'notice', type: 'number' },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700">{field.label}:</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded text-sm"
            />
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium text-gray-700">Skills:</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            rows="3"
            className="mt-1 p-2 w-full border rounded text-sm"
            placeholder="Eg: React, Node.js, SQL"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Upload Resume:</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files[0])}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
          />
          {resume && (
            <p className="text-sm text-green-600 mt-1">Selected: {resume.name}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm sm:text-base"
        >
          Apply Now
        </button>
      </motion.form>
    </motion.div>
  );
}

export default Home;
