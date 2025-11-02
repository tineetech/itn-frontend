import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import bannerImage from '../assets/banner6.png';
import PeralatanJaringanSection from '../components/PeralatanJaringanSection';
import Robot5 from '../assets/robot5.png';

const PeralatanJaringanPage: React.FC = () => {

  return (
    <MainLayout showSidebar={false}>
  {/* Banner */}
  <div className="relative h-lvh">
    <img src={bannerImage} className='absolute -top-40 left-0 w-full h-full' />
    
    <div className='absolute top-40 left-20'>
    <div className='text-green-600 mb-8'>Dukungan</div>
      <div className='mb-3 font-nevan text-white text-3xl [text-shadow:_0_0_10px_#22c55e]'>
        PERALATAN JARINGAN
      </div>
      <div className='text-white text-sm mt-5'>
        Pilih paket internet yang sesuai dengan kebutuhan Anda dan isi formulir pendaftaran di bawah ini. <br /> Tim kami akan segera menghubungi Anda untuk proses verifikasi dan pemasangan.
      </div>
    </div>

  </div>

    <div className='relative px-30'>
      <PeralatanJaringanSection />
      
      <div className='absolute right-0 top-30'>
        <img src={Robot5} alt="Robot" className='w-60' />
        </div>
    </div>


    
</MainLayout>
  );
};

export default PeralatanJaringanPage;