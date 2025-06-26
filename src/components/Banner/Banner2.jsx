import React from 'react';
import Image from "../../assets/image2.jpg";
import { Link } from 'react-router-dom';

const Banner2 = () => {
  return (
    <div className='bg-slate-100 dark:bg-slate-900 dark:text-white'>
      <div className='container md:h-[500px] flex items-center justify-center py-10'>
        <div className='grid grid-cols-1 items-center gap-4 sm:grid-cols-2'>
          
          {/* text container */}
          <div className='lg:max-w-[400px] space-y-6'>
            <h1 className='text-2xl font-semibold md:text-4xl mb-4'>Be the Light in Someone’s Darkness</h1>
            <ul className='flex list-inside list-disc flex-col gap-2 md:gap-4'>
              <li className='font-medium'>
                Every kind act is a step toward a better tomorrow.
              </li>
              <li className='font-medium'>
                Together, we can create a community of care and compassion.
              </li>
              <li className='font-medium'>
                Your support brings hope, healing, and happiness.
              </li>
            </ul>
            <Link to="/donate">
              <button className='btn-primary mt-6'>
                Get Started
              </button>
            </Link>
          </div>

          {/* img container */}
          <div>
            <img src={Image} alt='' className='mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
