import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import bannerImage from '../assets/banner2.png';
import RegistrationForm from '../components/RegistrationForm';

const PendaftaranPage: React.FC = () => {

  return (
    <MainLayout showSidebar={false}>
  {/* Banner */}
  <div className="relative h-lvh">
    <img src={bannerImage} className='absolute -top-25 left-0 w-full h-full' />
    
    <div className='absolute top-40 left-20'>
      <div className='mb-3 font-nevan text-white text-3xl [text-shadow:_0_0_10px_#22c55e]'>
        FORM PENDAFTARAN
      </div>
      <div className='text-white text-sm mt-5'>
        Temukan informasi yang anda butuhkan seputar layanan internet kami.
      </div>
    </div>

  </div>

    <div className='px-30'>
      <RegistrationForm />
    </div>

    
</MainLayout>
  );
};

export default PendaftaranPage;