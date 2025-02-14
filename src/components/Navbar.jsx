/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleNavbar = () => {
    setOpenMenu(!openMenu);
  };
  const closeNavbar = () => {
    setOpenMenu(false)
  }

  return (
    <div className="fixed w-full h-16 md:border-none sm:fixed sm:mt-0 sm:border-b sm:rounded-b px-6 md:bg-transparent sm:bg-gpoppy sm:fixed z-10 text-txtcolor">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mb-10 mx-auto mt-2">
        <Link to="/" className="flex text-2xl tracking-wide uppercase font-montserrat font-semi-bold">
          jw
        </Link>
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-txtcolor rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gpoppy"
          aria-controls="navbar-default"
          aria-expanded={openMenu}>
          <FaBars className="w-5 h-5 hover:text-txtspan" />
        </button>
        <div className={`${openMenu ? 'fixed inset-0 w-1/2 mx-auto rounded-sm sm:mt-[5rem] md:mt-0 bg-opacity-50 z-20' : 'hidden'} md:block md:w-auto`}>
          <ul className="flex flex-col font-montserrat p-8 mt-6 md:flex-row md:space-x-12">
            <li>
              <Link to="/" onClick={closeNavbar} smooth="true" duration={500} className="block py-2 bg-transparent px-3 text-txtcolor hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)] md:text-gpoppy md:p-0">Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeNavbar} smooth="true" duration={500} className="block py-2 bg-transparent px-3 text-txtcolor shadow-md p-2 md:hover:bg-transparent sm:hover:bg-transparent hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)] md:p-0">About Me</Link>
            </li>
            <li>
              <Link to="/skills" onClick={closeNavbar} smooth="true" duration={500} className="block py-2 bg-transparent px-3 text-txtcolor shadow-md p-2 md:hover:bg-transparent sm:hover:bg-transparent hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)] md:p-0">Skills</Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeNavbar} smooth="true" duration={500} className="block py-2 bg-transparent px-3 text-txtcolor shadow-md p-2 md:hover:bg-transparent sm:hover:bg-transparent hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)] md:p-0">Projects</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeNavbar} smooth="true" duration={500} className="block py-2 bg-transparent px-3 text-txtcolor shadow-md p-2 md:hover:bg-transparent sm:hover:bg-transparent hover:shadow-[0px_20px_207px_10px_rgba(20,_30,_203,_0.88)] md:p-0">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
