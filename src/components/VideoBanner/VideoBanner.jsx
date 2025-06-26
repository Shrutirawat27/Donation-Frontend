import React from 'react';

const VideoBanner = () => {
  return (
    <div className='bg-primary'>
      <div className='container py-8 md:py-16'>
        <div className='grid grid-cols-1 items-center md:grid-cols-2 gap-10 md:gap-24'>
            {/* Video Section */}
            <div className="p-4">
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/0CbFrom3Qkk?si=f9hr5IqO9MmI9kN6" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen>
                </iframe>
            </div>
            {/* Text Section */}
            <div className='space-y-4 px-4 md:px-0 text-center md:text-left text-white'>
                <h1 className='text-4xl font-bold'>Watch Our Video</h1>
                <p>This video highlights the real stories of lives transformed through the power of giving. 
                   Discover how your contributions bring food, shelter, education, and hope to communities in need. 
                   Every small act creates a ripple of change—watch and be inspired to make a difference.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
