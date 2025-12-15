import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import bannerImage from '../assets/banner2.png';
import Banner4 from '../assets/banner4_1.png';
import {ArrowDown} from 'lucide-react';
import JobListingsSection from '../components/JobListingsSection';

const JoinPage: React.FC = () => {

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
    
    <div className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
      <div className='mb-3 font-nevan text-white text-3xl [text-shadow:_0_0_10px_#22c55e]'>
        BERGABUNGLAH DENGAN TIM KAMI <br />
        DAN BANGUN MASA DEPAN BERSAMA
      </div>
      <div className='text-white text-sm mt-5'>
        Jadilah bagian dari tim inovatif yang mengubah cara bisnis berjalan dengan solusi yang cerdas, <br/> mulus, dan siap menghadapi masa depan.
      </div>

      <button className="bg-[#27384f] border-3 border-[#3b4c63] hover:bg-blue-700 text-white px-4 py-2 mt-10 flex items-center gap-2 mx-auto transition-colors shadow-lg hover:shadow-xl font-sans rounded-br-4xl rounded-tl-4xl">
              Lihat Lowongan
              <ArrowDown className="w-5 h-5" />
            </button>

        <div className='absolute -bottom-90 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
            <img src={Banner4} className='h-48 w-full mt-10 mx-auto' />
            </div>
    </div>

  </div>

  <JobListingsSection />




    
</MainLayout>
  );
};

export default JoinPage;