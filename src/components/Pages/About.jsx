import React from 'react';
import AboutImage from '../../assets/AboutUs.jpg'; 

const About = () => {
  return (
    <div className="pt-24 min-h-screen px-6 md:px-20 bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center mb-6 text-primary">About FundFlow</h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          At FundFlow, we believe that small acts of kindness can create big ripples. 
          We connect generous donors with impactful causes to bring change where it’s needed the most.
        </p>

        {/* Image + Text Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2">
            <img
              src={AboutImage}
              alt="People helping each other"
              className="rounded-xl shadow-md w-full object-cover max-h-[400px]"
            />
          </div>
          <div className="md:w-1/2 mt-[-40px] md:mt-0 px-6 py-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
            <p className="text-base leading-relaxed mb-4">
              FundFlow empowers individuals and communities by making donation transparent, simple, and impactful. 
              Whether it's helping children get an education, supporting disaster relief, or funding medical needs — every rupee you donate brings hope.
            </p>
            <p className="text-base leading-relaxed">
              Our team ensures that all campaigns are verified, and donors receive real-time updates. 
              We're building trust, one donation at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;