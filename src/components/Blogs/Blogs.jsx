import React from 'react';
import Img1 from "../../assets/blog1.jpg";
import Img2 from "../../assets/blog2.jpg";
import Img3 from "../../assets/blog3.jpg";
import BlogCard from './BlogCard';

const BlogData = [
  {
    id: 1,
    img: Img1,
    title: '“No one has ever become poor from giving.” – Anne Frank. The only way to do great.',
    description: "Discover how small acts of kindness can lead to profound change in underprivileged communities. Real stories that inspire action.",
    date: "Jan 22, 2025",
    writer: "John",
  },
  {
    id: 2,
    img: Img2,
    title: '“No one has ever become poor from giving.” – Anne Frank. The only way to do great.',
    description: "Explore how consistent contributions are helping provide food, shelter, and education to those in need across the country.",
    date: "April 25, 2025",
    writer: "Anonymous",
  },
  {
    id: 3,
    img: Img3,
    title: '“No one has ever become poor from giving.” – Anne Frank. The only way to do great.',
    description: "Learn about the power of community-driven support and how every rupee you donate builds a stronger, more compassionate world.",
    date: "May 28, 2025",
    writer: "Frank",
  },
];

const Blogs = () => {
  return (
    <div className='dark:bg-gray-900 dark:text-white py-12'>
      <div className='container mx-auto px-4 md:px-8'>
        <h1 className='mb-8 border-l-8 pl-2 text-center text-3xl font-bold'>
          Our Latest Blogs
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {BlogData.map((blog) => (
            <BlogCard 
              key={blog.id} 
              img={blog.img}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              writer={blog.writer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;