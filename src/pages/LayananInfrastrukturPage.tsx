import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import bannerImage from '../assets/banner2.png';
import bannerImage1 from '../assets/banner3_1.png';
import { Wifi, Server, Cloud, RefreshCw } from 'lucide-react';
import ProfileSection from '../components/ProfileSection';
import CTASection from '../components/CTASection';
import Video1 from '../assets/Video Background 1.mp4';
const LayananInfrastrukturPage: React.FC = () => {

  const services = [
    {
      icon: Wifi,
      title: "Jaringan Wifi Kecepatan Tinggi",
      description: "Akses internet cepat, stabil, dan scalable sesuai kebutuhan bisnis",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: Server,
      title: "Server & Infrastruktur",
      description: "Kelola data Anda dengan aman bersantara kuat dan skalabel yang aman",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Simpan cloud fleksibel untuk penyimpanan data dan aplikasi bisnis",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: RefreshCw,
      title: "Virtualization & Backup",
      description: "Optimalkan resource IT dengan virtualisasi, serta jaga data penting dari kehilangan",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500"
    }
  ];

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
        LAYANAN IT INFRASTRUKTUR <br/> 
        TERINTEGRASI UNTUK BISNIS MODERN
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

  <div> {/* Padding top yang besar */}
    <div className='font-nevan text-3xl px-30'>
      <span className='text-[#044a81]'>DAFTAR</span>{' '}
      <span className='text-[#4caf50]'>LAYANAN</span>
    </div>
    
  </div>

  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex justify-end p-8 pl-70 pt-40">
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-4">
                {/* Icon Container */}
                <div className={`flex-shrink-0 w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} strokeWidth={2} />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  <ProfileSection />

  <CTASection />

  
</MainLayout>
  );
};

export default LayananInfrastrukturPage;