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
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleNavbar = () => {
    setOpenMenu(!openMenu);
  };
  const closeNavbar = () => {
    setOpenMenu(false)
  }

  return (
    <div className={`fixed w-full h-[6rem] md:border-none z-50 sm:border-b sm:rounded-b px-2 bg-transparent text-txtcolor transition-all duration-300
    ${scrolled ? 'bg-[#000fff]/20 backdrop-blur-2xl border-b shadow-lg' : 'bg-transparent'} `}>

      <nav className={`w-full flex items-center  justify-between`}>
        <Link to='/' className='flex text-[2rem] items-center tracking-wide uppercase ml-10 font-semi-bold'>
          𝓙𝓦
        </Link>
        <button
          onClick={toggleNavbar}
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-txtcolor rounded-lg md:hidden hover:bg-transparent'
          aria-controls='navbar-default'
          aria-expanded={openMenu}>
          {!openMenu ? <FaBars className='rounded-sm' size={28} /> : <MdOutlineCloseFullscreen className='rounded-sm' size={28} />}
        </button>

        <div className={`${openMenu ? 'fixed inset-0 w-1/4 pl-2 bg-gray-800 rounded-sm bg-opacity-100 z-50' : 'hidden'} md:block md:w-auto`}>
          <ul className='flex flex-col font-montserrat p-8 pr-10 items-center md:flex-row md:space-x-10'>
            <li>
              <Link to='/' onClick={closeNavbar} className='block bg-transparent text-start text-txtcolor p-2 hover:bg-[#000fff]/20'>𝑯𝒐𝒎𝒆</Link>
            </li>
            <li>
              <Link to='/about' onClick={closeNavbar} className='block bg-transparent text-start text-txtcolor p-2 hover:bg-[#000fff]/20'>𝑨𝒃𝒐𝒖𝒕 𝑴𝒆</Link>
            </li>
            <li>
              <Link to='/skills' onClick={closeNavbar} className='block bg-transparent text-start text-txtcolor p-2 hover:bg-[#000fff]/20'>𝑺𝒌𝒊𝒍𝒍𝒔</Link>
            </li>
            <li>
              <Link to='/projects' onClick={closeNavbar} className='block bg-transparent text-start text-txtcolor p-2 hover:bg-[#000fff]/20'>𝑷𝒓𝒐𝒋𝒆𝒄𝒕𝒔</Link>
            </li>
            <li>
              <Link to='/contact' onClick={closeNavbar} className='block bg-transparent text-start text-txtcolor p-2 hover:bg-[#000fff]/20'>𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒔</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
