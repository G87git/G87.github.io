import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  // FaFacebook,
  // FaLinkedinIn,
} from 'react-icons/fa';

import Logo from '../assets/logo.gif';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-1 text-white text-xl'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '70px' }} />
        {/* <h1 className='text-5xl'><strong>G87</strong></h1> */}
      </div>

      {/* menu */}
      <ul className='hidden md:flex '>
        <li className='hover:text-[#ED9728]'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-[#ED9728]'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:text-[#ED9728]'>
          <Link to='skills' smooth={true} duration={500}>
            Experience
          </Link>
        </li>
        <li className='hover:text-[#ED9728]'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='hover:text-[#ED9728]'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className='hover:text-[#ED9728]'>
          <Link to='more' smooth={true} duration={500}>
            ...
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='more' smooth={true} duration={500}>
            ...
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      
    </div>
  );
};

export default Navbar;
