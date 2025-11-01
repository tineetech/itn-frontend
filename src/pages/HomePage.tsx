import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import bannerImage from '../../public/assets/banner_1.png';
import MitraStrategis from '../../public/assets/mitra_strategis.png';
import Telkom from '../../public/assets/telkomdll.png';
import { ChevronDown, Play } from 'lucide-react';
import FeaturesSection from '../components/FeatureSection';
import PricingSection from '../components/PricingSection';

const HomePage: React.FC = () => {
  return (
    <MainLayout showSidebar={false}>
  {/* Banner */}
  <div className="relative h-lvh">
    <img src={bannerImage} className='absolute -top-25 left-0 w-full h-full' />
    
    <div className='absolute bottom-25 left-20'>
      <div className='mb-3'>
        Jelajahi layanan internet dan digital kami yang <br/> 
        dirancang untuk mempermudah hidupmu.
      </div>
      <div className='font-nevan flex items-center'>
        <div className='bg-black text-white rounded-full p-1'>
          <Play />
        </div>
        <div className='ml-3'>VIDEO PROFILE KAMI</div>
      </div>
    </div>
  </div>

  {/* Keunggulan - tambah padding top besar */}
  <div> {/* Padding top yang besar */}
    <div className='font-nevan text-3xl text-end px-30'>
      <span className='text-[#044a81]'>KEUNGGULAN</span>{' '}
      <span className='text-[#4caf50]'>KAMI</span>
    </div>
    
    <FeaturesSection />
  </div>

  <div className='px-10'>
    <img src={MitraStrategis} alt="" />
  </div>

  <div className='mt-20'>
    <img src={Telkom} alt="" className='w-4xl mx-auto' />
  </div>

  <PricingSection />
</MainLayout>
  );
};

export default HomePage;