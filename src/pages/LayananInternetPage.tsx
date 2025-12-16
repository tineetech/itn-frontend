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
                  maskImage: "url('../assets/banner5.png')",
                  WebkitMaskImage: "url('../assets/banner5.png')",
                  maskSize: 'contain',
                  WebkitMaskSize: 'cover',
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
                <source src={'../assets/Desain tanpa judul (2).mp4'} type="video/mp4" />
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



  <div className='px-10 flex flex-wrap justify-between items-center pb-20 bg-zinc-50'>
    {/* <img src={MitraStrategis} alt="" /> */}
    <div>
      <h1 className='text-xl font-bold'>DIPERCAYA OLEH</h1>
      <p>Perusahaan & Instusi Ternama di Indonesia.</p>
    </div>
    <div className='flex flex-wrap pt-5 gap-3 justify-center'>
      <img src='/assets/mitra/bkk.jpg' alt="" className='w-30 object-contain ' />
      <img src='/assets/mitra/bawaslu.jpg' alt="" className='w-30 object-contain ' />
      <img src='/assets/mitra/malkartini.jpg' alt="" className='w-30 object-contain ' />
      <img src='/assets/mitra/sigertv.jpg' alt="" className='w-30 object-contain ' />
      <img src='/assets/mitra/apji.jpg' alt="" className='w-30 object-contain ' />
      <img src='/assets/mitra/tripanca.jpg' alt="" className='w-30 object-contain ' />

    </div>
  </div>
  <ProfileSection />

  <CTASection />

  
</MainLayout>
  );
};

export default LayananInternetPage;