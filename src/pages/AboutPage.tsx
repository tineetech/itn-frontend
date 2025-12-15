import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import bannerImage from '../assets/banner2.png';
import bannerImage1 from '../assets/banner5_1.png';
import { ChevronDown, Play } from 'lucide-react';
import AboutUsSection from '../components/AboutSection';
import FeaturesSection2 from '../components/FeatureSection2';
import CTASection from '../components/CTASection';

const stats = [
  {
    value: '2019',
    label: 'Tahun Berdiri',
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    value: '8000+',
    label: 'Customer Kami',
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    value: '99.9%',
    label: 'Uptime Network',
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
];

const AboutPage: React.FC = () => {
  console.log('HalamanLayananInternet dirender');
  return (
    <MainLayout showSidebar={false}>
  {/* Banner */}
  <div className="relative h-lvh">
    {/* <img src={bannerImage} className='absolute -top-25 left-0 w-full h-full' /> */}
    
    <video 
      className="absolute -top-55 left-0 w-full h-[%20]"
      style={{
        maskImage: "url('../assets/banner_1.png')",
        WebkitMaskImage: "url('../assets/banner_1.png')",
        // maskSize: 'contain',
        // WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
      }}
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={'../assets/Desain tanpa judul.mp4'} type="video/mp4" />
    </video>
    
    <div className='absolute top-40 left-20'>
      <div className='text-green-600 mb-8'>Tentang Kami</div>
      <div className='mb-3 font-nevan text-white text-3xl [text-shadow:_0_0_10px_#22c55e]'>
        MENYEDIAKAN KONEKSI LUAS <br/> 
        DAN TAK TERPUTUS
      </div>
    </div>

    <div className='absolute bottom-25 -right-30'>
      {/* <img src={bannerImage1} className='w-xl' /> */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          
          {/* 1. KARTU PERTAMA: Tahun Berdiri (Normal) */}
          <div
            className="bg-black/70 p-8 shadow-white shadow-2xl backdrop-blur-sm 
                       transition duration-300 w-70 ease-in-out hover:shadow-blue-500/50"
            style={{
              border: '1px solid rgba(59, 130, 246, 0.2)',
            }}
          >
            {/* Nilai Statistik */}
            <p 
              className="text-6xl sm:text-5xl font-extrabold mb-4 leading-none"
              style={{
                backgroundImage: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              2019
            </p>

            {/* Label */}
            <p className="text-md font-semibold text-white uppercase mb-2">
              Tahun Berdiri
            </p>

            {/* Deskripsi */}
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          {/* 2. KARTU KEDUA: Customer Kami (Bergeser ke Atas dan Z-Index lebih tinggi) */}
          <div
            className="bg-black/70 p-8 shadow-white shadow-2xl backdrop-blur-sm 
                       transition duration-300 overflow-hidden h-50 ease-in-out hover:shadow-blue-500/50 
                       md:-mt-12 md:z-10 md:-ml-10 w-70" 
            style={{
              border: '1px solid rgba(59, 130, 246, 0.2)',
            }}
          >
            {/* Nilai Statistik */}
            <p 
              className="text-6xl sm:text-5xl font-extrabold mb-4 leading-none"
              style={{
                backgroundImage: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              8000+
            </p>

            {/* Label */}
            <p className="text-md font-semibold text-white uppercase mb-2">
              Customer Kami
            </p>

            {/* Deskripsi */}
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          
          {/* 3. KARTU KETIGA: Uptime Network (Bergeser ke Atas dan Z-Index lebih tinggi) */}
          <div
             // Kelas untuk efek geser ke atas dan overlap (hanya di layar MD ke atas)
            className="bg-black/70 p-8 shadow-white shadow-2xl backdrop-blur-sm 
                       transition duration-300 ease-in-out w-70 hover:shadow-blue-500/50
                       md:-mt-30 md:-ml-20 h-50 "
            style={{
              border: '1px solid rgba(59, 130, 246, 0.2)',
            }}
          >
            {/* Nilai Statistik */}
            <p 
              className="text-6xl sm:text-5xl font-extrabold mb-4 leading-none"
              style={{
                backgroundImage: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              99.9%
            </p>

            {/* Label */}
            <p className="text-md font-semibold text-white uppercase mb-2">
              Uptime Network
            </p>

            {/* Deskripsi */}
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

    <AboutUsSection />

    <div> {/* Padding top yang besar */}
    <div className='font-nevan text-3xl text-end px-30'>
      <span className='text-[#044a81]'>KEUNGGULAN</span>{' '}
      <span className='text-[#4caf50]'>KAMI</span>
    </div>
    
    <FeaturesSection2 />
  </div>

    <CTASection />


  
</MainLayout>
  );
};

export default AboutPage;