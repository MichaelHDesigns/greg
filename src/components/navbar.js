import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#downloads">Download</Link>
        </li>
        <li>
          <Link to="/donate">Donate</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
