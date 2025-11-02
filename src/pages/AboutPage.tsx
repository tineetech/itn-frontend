import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import bannerImage from '../assets/banner2.png';
import bannerImage1 from '../assets/banner5_1.png';
import { ChevronDown, Play } from 'lucide-react';
import AboutUsSection from '../components/AboutSection';
import FeaturesSection from '../components/FeatureSection';
import CTASection from '../components/CTASection';

const AboutPage: React.FC = () => {
  console.log('HalamanLayananInternet dirender');
  return (
    <MainLayout showSidebar={false}>
  {/* Banner */}
  <div className="relative h-lvh">
    <img src={bannerImage} className='absolute -top-25 left-0 w-full h-full' />
    
    <div className='absolute top-40 left-20'>
      <div className='text-green-600 mb-8'>Tentang Kami</div>
      <div className='mb-3 font-nevan text-white text-3xl [text-shadow:_0_0_10px_#22c55e]'>
        MENYEDIAKAN KONEKSI LUAS <br/> 
        DAN TAK TERPUTUS
      </div>
    </div>

    <div className='absolute bottom-25 right-25'>
      <img src={bannerImage1} className='w-xl' />
    </div>
  </div>

    <AboutUsSection />

    <div> {/* Padding top yang besar */}
    <div className='font-nevan text-3xl text-end px-30'>
      <span className='text-[#044a81]'>KEUNGGULAN</span>{' '}
      <span className='text-[#4caf50]'>KAMI</span>
    </div>
    
    <FeaturesSection />
  </div>

    <CTASection />


  
</MainLayout>
  );
};

export default AboutPage;