/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { MdOutlineCloseFullscreen } from "react-icons/md";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])


  const toggleNavbar = () => {
    setOpenMenu(!openMenu);
  };
  const closeNavbar = () => {
    setOpenMenu(false)
  }

  return (
    <div className={`fixed w-full h-[8rem] md:border-none sm:fixed sm:mt-0 sm:border-b sm:rounded-b px-2 md:m-0 md:bg-transparent sm:h-[4rem] sm:fixed z-10 text-txtcolor transition-all duration-200
    ${scrolled ? 'w-full backdrop-blur-lg shadow-md' : 'bg-transparent'} `}>

      <nav className={`w-full flex flex-wrap items-center p-2 justify-between mb-10
      ${scrolled ? 'w-full backdrop-blur-md' : 'bg-transparent'}`}>
        <Link to='/' className='flex text-2xl tracking-wide uppercase ml-10 font-montserrat font-semi-bold'>
        𝓙𝓦
        </Link>
        <button
          onClick={toggleNavbar}
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-txtcolor rounded-lg md:hidden hover:bg-transparent'
          aria-controls='navbar-default'
          aria-expanded={openMenu}>
          {!openMenu ? <FaBars className='rounded-sm' size={28} /> : <MdOutlineCloseFullscreen  className='rounded-sm' size={28} />}
        </button>

        <div className={`${openMenu ? 'fixed inset-0 w-1/2 pl-2 bg-red-400 rounded-sm sm:mt-[2rem] md:mt-0 bg-opacity-50 z-100' : 'hidden'} md:block md:w-auto`}>
          <ul className='flex flex-col font-montserrat p-8 pr-10 mt-6 md:flex-row md:space-x-12'>
            <li>
              <Link to='/' onClick={closeNavbar} smooth='true' duration={500} className='block py-2 bg-transparent px-3 text-txtcolor  md:p-0'>𝓗𝓸𝓶𝓮</Link>
            </li>
            <li>
              <Link to='/about' onClick={closeNavbar} smooth='true' duration={500} className='block py-2 bg-transparent px-3 text-txtcolor shadow-md p-2 md:hover:bg-transparent sm:hover:bg-transparent  md:p-0'>𝓐𝓫𝓸𝓾𝓽𝓮 𝓜𝓮</Link>
            </li>
            <li>
              <Link to='/skills' onClick={closeNavbar} smooth='true' duration={500} className='block py-2 bg-transparent px-3 text-txtcolor shadow-md p-2 md:hover:bg-transparent sm:hover:bg-transparent  md:p-0'>𝓢𝓴𝓲𝓵𝓵𝓼</Link>
            </li>
            <li>
              <Link to='/projects' onClick={closeNavbar} smooth='true' duration={500} className='block py-2 bg-transparent px-3 text-txtcolor shadow-md p-2 md:hover:bg-transparent sm:hover:bg-transparent  md:p-0'>𝓟𝓻𝓸𝓳𝓮𝓬𝓽𝓼</Link>
            </li>
            <li>
              <Link to='/contact' onClick={closeNavbar} smooth='true' duration={500} className='block py-2 bg-transparent px-3 text-txtcolor shadow-md p-2 md:hover:bg-transparent sm:hover:bg-transparent  md:p-0'>𝓒𝓸𝓷𝓽𝓪𝓬𝓽𝓼</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
