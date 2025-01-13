import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-bgcolor border-b-2 border-b-uscgold text-txtcolor">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3">
          <Link to="/" className="text-2xl font-semibold">
            My Portfolio
          </Link>
        </div>
        <button 
          onClick={toggleNavbar}
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-txtcolor rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gpoppy" 
          aria-controls="navbar-default" 
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <FaBars className="w-5 h-5" />
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-b-2 rounded-b-lg bg-bgcolor md:flex-row md:space-x-8">
            <li>
              <Link to="/" className="block py-2 bg-transparent px-3 text-txtcolor bg-gpoppy md:bg-transparent md:text-gpoppy md:p-0">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 bg-transparent px-3 text-txtcolor hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gpoppy md:p-0">About Me</Link>
            </li>
            <li>
              <Link to="/skills" className="block py-2 bg-transparent px-3 text-txtcolor hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gpoppy md:p-0">Skills</Link>
            </li>
            <li>
              <Link to="/projects" className="block py-2 bg-transparent px-3 text-txtcolor hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gpoppy md:p-0">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 bg-transparent px-3 text-txtcolor hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gpoppy md:p-0">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
