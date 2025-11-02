import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import bannerImage from '../assets/banner2.png';
import bannerImage1 from '../assets/banner4.png';
import { ArrowRight, Server, Cloud, RefreshCw } from 'lucide-react';
import LocationCardsSection from '../components/LocationCardsSection';
import TestimonialSection from '../components/TestimonialSection';

const KemitraanPage: React.FC = () => {

  return (
    <MainLayout showSidebar={false}>
  {/* Banner */}
  <div className="relative h-lvh">
    <img src={bannerImage} className='absolute -top-25 left-0 w-full h-full' />
    
    <div className='absolute top-40 left-20'>
      <div className='mb-3 font-nevan text-white text-3xl [text-shadow:_0_0_10px_#22c55e]'>
        BANGUN KEMITRAAN BERSAMA KAMI
      </div>
      <div className='text-white text-sm mt-5'>
        Nikmati koneksi internet super cepat, stabil dan tanpa kuota. Pilih paket sesuai <br/>
        kebutuhan, mulai dari 30 Mbps hingga 100 Mbps!
      </div>
    </div>

    <div className='absolute bottom-15 right-25'>
      <img src={bannerImage1} className='w-90' />
    </div>
  </div>

  <div className='px-30'> {/* Padding top yang besar */}
    <div className='font-nevan text-3xl'>
      <span className='text-[#044a81]'>MITRA ITN</span>{' '}
      <span className='text-[#4caf50]'>DISELURUH INDONESIA</span>
    </div>

    <div className='mt-5 text-gray-600'>ITN telah hadir di berbagai wilayah sebagai bentuk kolaborasi dan peluasan jangkauan layanan. <br/> Berikut daftar cabang resmi kami.</div>
    
  </div>

    
  <LocationCardsSection />

    <TestimonialSection />

  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 mt-10 flex items-center gap-2 mx-auto transition-colors shadow-lg hover:shadow-xl font-sans rounded-br-4xl rounded-tl-4xl">
              Berlanggan Sekarang
              <ArrowRight className="w-5 h-5" />
            </button>

  
</MainLayout>
  );
};

export default KemitraanPage;