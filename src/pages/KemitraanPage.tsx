import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import bannerImage from '../assets/banner2.png';
import bannerImage1 from '../assets/banner4.png';
import { ArrowRight, Server, Cloud, RefreshCw, BoltIcon, ShieldCheckIcon, UsersIcon } from 'lucide-react';
import LocationCardsSection from '../components/LocationCardsSection';
import TestimonialSection from '../components/TestimonialSection';
import Video1 from '../assets/Desain tanpa judul (2).mp4';
import { ShieldCheck, Users, Lightbulb, Zap } from 'lucide-react'; 

const features = [
  {
    icon: ShieldCheck, // Icon Lucide untuk Kepercayaan
    title: 'Brand yang Telah Terpercaya',
  },
  {
    icon: Users, // Icon Lucide untuk Tenaga Ahli/Tim
    title: 'Didukung Tenaga Ahli Berpengalaman',
  },
  {
    icon: Lightbulb, // Icon Lucide untuk Inovasi
    title: 'Inovasi Berkelanjutan',
  },
  {
    icon: Zap, // Icon Lucide untuk Respons Cepat/Kekuatan
    title: 'Jangkauan Luas & Respons Cepat',
  },
];
const KemitraanPage: React.FC = () => {

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
      <source src={'../assets/Desain tanpa judul (2).mp4'} type="video/mp4" />
    </video>
    
    <div className='absolute top-40 left-20'>
      <div className='mb-3 font-nevan text-white text-3xl [text-shadow:_0_0_10px_#22c55e]'>
        BANGUN KEMITRAAN BERSAMA KAMI
      </div>
      <div className='text-white text-sm mt-5'>
        Nikmati koneksi internet super cepat, stabil dan tanpa kuota. Pilih paket sesuai <br/>
        kebutuhan, mulai dari 30 Mbps hingga 100 Mbps!
      </div>
    </div>

    <div className='absolute bottom-20 right-0'>
      {/* <img src={bannerImage1} className='w-90' /> */}
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        {/* Grid 2x2 untuk menampilkan fitur */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            // Card untuk setiap fitur
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-6 border-2 border-blue-400 rounded-2xl shadow-xl backdrop-blur-sm bg-white 
                         transition duration-300 ease-in-out hover:shadow-2xl hover:border-blue-300 transform hover:scale-[1.02]"
              style={{
                // Menambahkan efek gradien/cahaya biru di pinggiran yang mirip dengan gambar
                boxShadow: '0 0 15px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3) inset',
              }}
            >
              {/* Ikon */}
              <div className="mb-4">
                <feature.icon className="h-12 w-12 text-blue-600 group-hover:text-blue-200 transition duration-300" aria-hidden="true" />
              </div>

              {/* Teks/Judul */}
              <p className="mt-2 text-md text-center text-gray-600">
                {feature.title}
              </p>

              {/* Elemen sudut dekoratif (Opsional, untuk meniru tampilan bingkai) */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-400 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-400 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-400 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-400 rounded-br-lg"></div>
            </div>
          ))}
        </div>
      </div>
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