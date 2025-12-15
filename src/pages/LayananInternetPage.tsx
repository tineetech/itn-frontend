import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import bannerImage from '../assets/banner2.png';
import bannerImage1 from '../assets/banner2_1.png';
import { ChevronDown, Play } from 'lucide-react';
import PricingSection from '../components/PricingSection';
import DipercayaOleh from '../assets/dipercaya_oleh.png';
import ProfileSection from '../components/ProfileSection';
import CTASection from '../components/CTASection';
import Video1 from '../assets/Video Background 1.mp4';

const LayananInternetPage: React.FC = () => {
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
                <source src={Video1} type="video/mp4" />
              </video>
        
    
    <div className='absolute top-40 left-20'>
      <div className='text-green-600 mb-8'>Layanan {'>'} Home Internet</div>
      <div className='mb-3 font-nevan text-white text-3xl [text-shadow:_0_0_10px_#22c55e]'>
        INTERNET CEPAT TANPA BATAS, <br/> 
        UNTUK SEMUA KEBUTUHAN!
      </div>
      <div className='text-white text-sm mt-5'>
        Nikmati koneksi internet super cepat, stabil dan tanpa kuota. Pilih paket sesuai <br/>
        kebutuhan, mulai dari 30 Mbps hingga 100 Mbps!
      </div>
    </div>

    <div className='absolute bottom-15 right-25'>
      <img src={bannerImage1} className='w-65' />
    </div>
  </div>

  <PricingSection />

  <div className='mt-10 px-20'>
    <img src={DipercayaOleh} alt="" className='w-full' />
  </div>

  <ProfileSection />

  <CTASection />

  
</MainLayout>
  );
};

export default LayananInternetPage;