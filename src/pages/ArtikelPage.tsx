import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import bannerImage from '../assets/banner2.png';
import ArticlesSection from '../components/ArticlesSection';

const ArtikelPage: React.FC = () => {

    const categories = [
        {
          name: "#Animal",
          image: "https://source.unsplash.com/400x200/?dog",
        },
        {
          name: "#Car",
          image: "https://source.unsplash.com/400x200/?car",
        },
        {
          name: "#Sport",
          image: "https://source.unsplash.com/400x200/?sport",
        },
        {
          name: "#Music",
          image: "https://source.unsplash.com/400x200/?music",
        },
        {
          name: "#Technology",
          image: "https://source.unsplash.com/400x200/?technology",
        },
        {
          name: "#Nature",
          image: "https://source.unsplash.com/400x200/?nature",
        },
      ];

  return (
    <MainLayout showSidebar={false}>
  {/* Banner */}
  <div className="relative h-lvh">
    <img src={bannerImage} className='absolute -top-25 left-0 w-full h-full' />
    
    <div className='absolute top-40 left-20'>
      <div className='mb-3 font-nevan text-white text-3xl [text-shadow:_0_0_10px_#22c55e]'>
        ITN ARTIKEL
      </div>
      
    </div>

    <div className='absolute bottom-50 left-30'>
    <div className="w-full bg-[#0b1120] py-4 px-6 overflow-x-auto">
      <div className="flex space-x-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-40 h-20 rounded-2xl overflow-hidden group shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Background image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-sm font-semibold bg-yellow-600/80 px-3 py-1 rounded-xl backdrop-blur-sm group-hover:bg-yellow-500/90 transition-colors duration-300">
                {cat.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>

  </div>

    <ArticlesSection />
    
</MainLayout>
  );
};

export default ArtikelPage;