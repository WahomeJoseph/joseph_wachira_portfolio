/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full outline-none px-6 mb-8 text-txtcolor">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mb-10 mx-auto p-4">
        <div className="flex items-center space-x-3">
          <Link to="/" className="text-2xl italic font-semibold">
            jw
          </Link>
        </div>
        <button 
          onClick={toggleNavbar}
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-txtcolor rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gpoppy" 
          aria-controls="navbar-default" 
          aria-expanded={isOpen}>
          <span className="sr-only">Open main menu</span>
          <FaBars className="w-5 h-5 hover:text-gpoppy" />
        </button>
        <div className={`${isOpen ? 'block hidden' : ''} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-8 md:p-0 mt-6 md:flex-row md:space-x-12">
            <li>
              <Link to="/" smooth="true" duration={500} className="block py-2 bg-transparent px-3 text-txtcolor md:bg-transparent md:text-gpoppy md:p-0">Home</Link>
            </li>
            <li>
              <Link to="/about" smooth="true" duration={500} className="block py-2 bg-transparent px-3 text-txtcolor shadow-md p-2 md:hover:bg-transparent md:hover:shadow-gpoppy md:p-0">About Me</Link>
            </li>
            <li>
              <Link to="/skills" smooth="true" duration={500} className="block py-2 bg-transparent px-3 text-txtcolor shadow-md p-2 md:hover:bg-transparent md:hover:shadow-gpoppy md:p-0">Skills</Link>
            </li>
            <li>
              <Link to="/projects" smooth="true" duration={500} className="block py-2 bg-transparent px-3 text-txtcolor shadow-md p-2 md:hover:bg-transparent md:hover:shadow-gpoppy md:p-0">Projects</Link>
            </li>
            <li>
              <Link to="/contact" smooth="true" duration={500} className="block py-2 bg-transparent px-3 text-txtcolor shadow-md p-2 md:hover:bg-transparent md:hover:shadow-gpoppy md:p-0">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
