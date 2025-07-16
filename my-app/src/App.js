import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jobs from './pages/jobs';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/aboutus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Jobs />} />          {/* First page */}
        <Route path="/home" element={<Home />} />      {/* Second page */}
        <Route path="/contact" element={<Contact />}
         /> {/* Optional */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
