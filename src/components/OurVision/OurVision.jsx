import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'; 

const fadeAnimation = (delay) => {
    return {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: "easeInOut",
            },
        },
    };
};

const OurVision = () => {
  return (
    <div className='container my-16 bg-white dark:bg-gray-900 dark:text-white'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        <motion.div 
          variants={fadeAnimation(0.2)}
          initial="initial"
          whileInView="animate"
          className='mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-green-800 dark:bg-slate-800'>
            <h1 className='text-xl font-semibold'>Our Vision</h1>
            <p>At FundFlow, our vision is to create a world where everyone has the opportunity to support meaningful causes with ease. We aim to bridge the gap between donors and impactful initiatives, making generosity more accessible and effective.</p>
            <Link to="/about" className='inline-block hover:text-primary border-b hover:border-primary'>
              Learn More
            </Link>
        </motion.div>
        
        <motion.div 
          variants={fadeAnimation(0.4)}
          initial="initial"
          whileInView="animate"
          className='mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-yellow-500 dark:bg-slate-800'>
            <h1 className='text-xl font-semibold'>Our Mission</h1>
            <p>Our mission is to empower communities by enabling transparent, secure, and user-friendly donation experiences. Through innovation, trust, and collaboration, we strive to support social good and drive sustainable change.</p>
            <Link to="/about" className='inline-block hover:text-primary border-b hover:border-primary'>
              Learn More
            </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OurVision;