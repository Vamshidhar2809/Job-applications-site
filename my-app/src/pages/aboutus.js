import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function About() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mb-6 text-blue-300 drop-shadow"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            About AK Group of Companies
          </motion.h1>

          {[
            `AK Group of Companies is a dynamic and innovative organization that thrives on excellence and forward thinking. We specialize in scalable solutions across FinTech, HealthTech, eCommerce, and Cloud Infrastructure.`,
            `Our team is powered by passionate engineers, designers, and testers. We take pride in a culture of continuous learning and collaboration. Whether you're a fresher or experienced, we value your journey.`,
            `If you're looking to work with a company that values innovation and impact — you're in the right place. We build not just products, but meaningful careers.`,
          ].map((text, index) => (
            <motion.p
              key={index}
              className="text-base sm:text-lg mb-4 leading-relaxed drop-shadow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.3 }}
            >
              {text}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6 }}
          >
            <Link to="/">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm sm:text-base mt-4">
                Explore Jobs
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
