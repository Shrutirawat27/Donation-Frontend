import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='text-white rounded-t-3xl bg-gradient-to-r from-violet-950 to-violet-900'>
      <div className='mx-auto max-w-[1200px] p-4'>
        {/* Footer Main Section */}
        <div className='grid py-5 md:grid-cols-4 gap-6'>
          
          {/* Logo & Description */}
          <div className='px-4 py-8 col-span-1'>
            <h1 className='mb-3 text-justify text-xl sm:text-left sm:text-3xl'>
              <a href='/#home' className='uppercase'>
                Fund <span className='inline-block font-bold text-primary'>Flow</span>
              </a>
            </h1>
            <p>
              We believe small contributions can make a big impact when directed to the right places.
              Join us in making a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className='px-16 py-8'>
            <h1 className='mb-3 text-xl font-bold sm:text-left sm:text-xl'>Quick Links</h1>
            <ul className='flex flex-col gap-3'>
              <li><a href='/' className='hover:text-primary transition-all'>Home</a></li>
              <li><a href='/about' className='hover:text-primary transition-all'>About</a></li>
              <li><a href='/services' className='hover:text-primary transition-all'>Services</a></li>
              <li><a href='/privacy-policy' className='hover:text-primary transition-all'>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='px-4 py-8'>
            <h1 className='mb-3 text-xl font-bold sm:text-left sm:text-xl'>Contact Info</h1>
            <ul className='flex flex-col gap-3'>
              <li className='hover:text-primary transition-all'>Mumbai, Maharashtra</li>
              <li>
                <a href='tel:+917208640562' className='hover:text-primary transition-all'>
                  +91 7208640562
                </a>
              </li>
              <li>
                <a href='mailto:shrutirawat0208@gmail.com' className='hover:text-primary transition-all'>
                  shrutirawat0208@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links & Newsletter */}
          <div className='px-4 py-8'>
            <h1 className='mb-3 text-xl font-bold sm:text-left sm:text-xl'>Social Links</h1>
            <div className='space-y-3'>
              <h1>Subscribe to our newsletter</h1>
              <input
                type='text'
                placeholder='Enter your email'
                className='rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 w-full'
              />
              <div className='flex gap-3 mt-4 items-center'>
                <a
                  href='https://www.instagram.com/shrutirawat0208'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='duration-200 hover:scale-105 hover:text-pink-500'
                >
                  <FaInstagram className='text-3xl' />
                </a>
                <a
                  href='https://github.com/Shrutirawat27'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='duration-200 hover:scale-105 hover:text-orange-500'
                >
                  <FaGithub className='text-3xl' />
                </a>
                <a
                  href='https://www.linkedin.com/in/shruti-rawat-6b7969314'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='duration-200 hover:scale-105 hover:text-blue-500'
                >
                  <FaLinkedin className='text-3xl' />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className='bottom-footer'>
          <p className='border-t-2 border-gray-300/50 py-6 text-center'>
            © 2025 FundFlow. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
