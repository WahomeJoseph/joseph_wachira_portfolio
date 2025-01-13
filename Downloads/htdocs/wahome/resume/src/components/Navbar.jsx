/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="flex flex-row bg-bgcolor items-center justify-center min-h-screen text-txtcolor border-b-2 border-b-uscgold">

        <div className='w-full p-6 bg-transparent bg-opacity-90 shadow-customglow z-10 block border-b-2 border-b-gpoppy rounded-b-sm md:block md:w-auto'>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link to="/" className="block py-2 px-3 text-txtcolor bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 text-txtcolor rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gpoppy dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About Me</Link>
            </li>
            <li>
              <Link to="/skills" className="block py-2 px-3 ttext-txtcolor rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gpoppy dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</Link>
            </li>
            <li>
              <Link to="/projects" className="block py-2 px-3 text-txtcolor rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gpoppy dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 text-txtcolor rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gpoppy dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
            </li>
          </ul>
        </div>

    </nav>
  );
}

export default Navbar;

