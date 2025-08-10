import React from 'react';
import CountUp from "react-countup";
import { motion } from "framer-motion";

const OverviewCounter = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="container p-3 mb-16"  
    >
      <div 
        className="
          mx-auto my-4 
          grid grid-cols-1 gap-y-6 
          sm:grid-cols-2 sm:gap-x-0 sm:gap-y-0
          md:grid-cols-4 md:divide-x md:divide-slate-700 
          bg-white p-4 shadow-lg dark:bg-gray-800 dark:text-white/70 
          md:max-w-[800px] md:h-32 md:p-8 
          lg:-translate-y-20
        "
      >
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={234} suffix="+" duration={2.75} />
          </p>
          <p className="sm:text-md text-xs md:text-lg">Fundraisers</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={56} suffix="+" duration={2.75} />
          </p>
          <p className="sm:text-md text-xs md:text-lg">Raised</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={234} suffix="k+" duration={2.75} />
          </p>
          <p className="sm:text-md text-xs md:text-lg">Raised</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
            <CountUp end={160527} suffix="+" duration={2.75} />
          </p>
          <p className="sm:text-md text-xs md:text-lg">Volunteers</p>
        </div>
      </div>
    </motion.section>
  );
};

export default OverviewCounter;