import React from 'react';

const BlogCard = ({ img, title, description, date, writer }) => {
  return (
    <div className='p-5 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white'>
      <div className='overflow-hidden'>
        <img src={img} alt='' className='mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110'/>
      </div>

      <div className='flex justify-between pt-2 text-slate-600 dark:text-slate-400 text-sm'>
        <p>{date}</p>
        <p className='line-clamp-1'>by {writer}</p>
      </div>

      <div className='space-y-2 py-3'>
        <h1 className='font-bold text-base line-clamp-1 hover:line-clamp-none transition-all duration-300 ease-in-out'>{title}</h1>
        <p className='text-sm line-clamp-2 hover:line-clamp-none transition-all duration-300 ease-in-out'>{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
