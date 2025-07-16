import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
      <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
