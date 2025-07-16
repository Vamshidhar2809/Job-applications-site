import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Jobs() {
  const jobs = [
    {
      title: 'Software Engineer - React.js',
      role: 'Build user-friendly web apps using React & frontend tools.',
      experience: '0 - 2 years',
      category: 'Frontend',
      location: 'Hyderabad',
    },
    {
      title: 'QA Automation Engineer',
      role: 'Write and maintain automation test cases using Selenium/Postman.',
      experience: '1 - 3 years',
      category: 'QA',
      location: 'Bengaluru',
    },
    {
      title: 'Cloud Infrastructure Specialist',
      role: 'Manage cloud deployments using AWS/Azure.',
      experience: '2 - 5 years',
      category: 'Cloud',
      location: 'Pune',
    },
    {
      title: 'Python Backend Developer',
      role: 'Develop REST APIs and backend logic using Django/Flask.',
      experience: '1 - 4 years',
      category: 'Backend',
      location: 'Gurgaon',
    },
    {
      title: 'UI/UX Designer',
      role: 'Create intuitive designs using Figma and Adobe XD.',
      experience: '0 - 2 years',
      category: 'Design',
      location: 'Chennai',
    },
    {
      title: 'Frontend Developer Intern',
      role: 'Support web UI development with HTML/CSS/React.',
      experience: '0 - 1 year',
      category: 'Frontend',
      location: 'Mumbai',
    },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'QA', 'Cloud', 'Design'];
  const locations = ['All', 'Hyderabad', 'Bengaluru', 'Pune', 'Gurgaon', 'Chennai', 'Mumbai'];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const filteredJobs = jobs.filter((job) => {
    const matchTitle = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchLocation = selectedLocation === 'All' || job.location === selectedLocation;
    return matchTitle && matchCategory && matchLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4 sm:mb-0 text-center sm:text-left">
          Welcome to AK Group of Companies!!!
        </h1>

        <div className="flex flex-wrap gap-3 justify-center sm:justify-end">
          <Link to="/contact">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">
              Contact Us
            </button>
          </Link>
          <Link to="/about">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm">
              About Us
            </button>
          </Link>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search jobs by title..."
        className="w-full p-3 mb-6 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h2 className="font-semibold text-gray-800 mb-2">Filter by Category:</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded-full border text-sm ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <h2 className="font-semibold text-gray-800 mb-2">Filter by Location:</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => setSelectedLocation(loc)}
            className={`px-3 py-1 rounded-full border text-sm ${
              selectedLocation === loc
                ? 'bg-teal-600 text-white'
                : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            {loc}
          </button>
        ))}
      </div>

      {filteredJobs.length === 0 ? (
        <p className="text-center text-gray-500">No matching jobs found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredJobs.map((job, index) => (
  <div key={index} className="bg-white rounded-xl shadow-md p-6">
    <h3 className="text-lg font-bold text-blue-700">{job.title}</h3>
    <p className="text-gray-700 mt-1">{job.role}</p>
    <p className="text-sm text-gray-600 mt-2">Experience: {job.experience}</p>
    <p className="text-sm text-gray-600 mb-3">Location: {job.location}</p>

    <Link to="/home">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
        Apply Now
      </button>
    </Link>
  </div>
))}
        </div>
      )}
    </div>
  );
}

export default Jobs;
