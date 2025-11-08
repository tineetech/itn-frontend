import React, {useState, useEffect} from 'react';
import { MainLayout } from '../layouts/MainLayout';
import bannerImage from '../assets/banner_1.png';
import MitraStrategis from '../assets/mitra_strategis.png';
import Telkom from '../assets/telkomdll.png';
import { ChevronDown, Play } from 'lucide-react';
import FeaturesSection from '../components/FeatureSection';
import PricingSection from '../components/PricingSection';
import DipercayaOleh from '../assets/dipercaya_oleh.png';
import ArticlesSection from '../components/ArticleSection';
import CTASection from '../components/CTASection';
import Video1 from '../assets/Video Background 1.mp4';
import {ArrowRight} from 'lucide-react';
import delapanRibu from '../assets/8000.png';
import HexBlinkIcon from '../components/HexBlinkIcon';
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';

const HomePage: React.FC = () => {

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const icons = ["../assets/i1.png", "../assets/i2.png", "../assets/i3.png", "../assets/i4.png"]; // ganti dengan ikonmu
  const [active, setActive] = useState(0);
  const [allOn, setAllOn] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < 4) {
        setActive(index);
        setAllOn(false);
        index++;
      } else {
        setAllOn(true);
        index = 0;
      }
    }, 700); // durasi per langkah
    return () => clearInterval(interval);
  }, []);

  const words = [
    { text: "Disconnected Calls", color: "text-green-400" },
    { text: "Loading Forever", color: "text-green-400" },
    { text: "Pixel Parties", color: "text-green-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade out
      setIsAnimating(true);
      
      // Change word after fade out
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => 
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
        
        // Trigger fade in
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, 500); // Wait for fade out to complete
    }, 2000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <MainLayout showSidebar={false}>
  {/* Banner */}
  {/* <div className="relative h-lvh">
    <img src={bannerImage} className='absolute -top-25 left-0 w-full h-full pointer-events-none' />

    <video 
        className="w-full h-full object-cover absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={Video1} type="video/mp4" />
      </video>
    
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
  </div> */}

  <div className="relative h-lvh w-full">
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

      <div className='absolute top-20 left-20'>
      <div className='mb-3 font-nevan text-white text-3xl'>
        PT INDONESIA TRANS NETWORK
      </div>
      {/* <div className='text-2xl'>Say No To <span className='text-green-400'>Disconnected Calls.</span></div> */}

      <div className='text-2xl font-semibold text-white'>
      Say No To{' '}
      <span className={`inline-block ${words[currentWordIndex].color} transition-all duration-500 ${
        isAnimating 
          ? 'opacity-0 transform -translate-y-4' 
          : 'opacity-100 transform translate-y-0'
      }`}>
        {words[currentWordIndex].text}
      </span>
    </div>



    <button className="bg-[#141d5c] hover:bg-blue-700 border-2 border-white text-white px-8 py-3 mt-20 flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl font-sans rounded-br-4xl rounded-tl-4xl">
              Berlanggan Sekarang
              <ArrowRight className="w-3 h-3" />
            </button>

            
    
    
    </div>

    <div className='absolute right-8 bottom-70'>
      <div className='rounded-lg py-8 px-13 text-center font-bold'>
      <div className="relative p-6">
        <div className='[text-shadow:_0_0_10px_#22c55e] text-3xl text-white'>8000+</div>
        <div className='mt-3 text-white'>Customer Transet</div>

        {/* Top: dari kiri (radius) sampai 85% (putus) */}
      <div className="absolute top-0 left-3 h-[2px] bg-white w-10/12 rounded-tl-lg"></div>
      
      {/* Right: dari bawah (radius) sampai 30px dari atas (putus) */}
      <div className="absolute top-4 right-0 w-[2px] bg-white h-10/12 rounded-br-lg"></div>
      
      {/* Bottom: dari kanan (radius) sampai 15% dari kiri (putus) */}
      <div className="absolute bottom-0 right-1 h-[2px] bg-white w-10/12 rounded-br-lg"></div>
      
      {/* Left: dari atas (radius) sampai 85% dari bawah (putus) */}
      <div className="absolute top-3 left-0 w-[2px] bg-white h-10/12 rounded-tl-lg"></div>
      
      {/* Corner radius indicators */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white rounded-tl-lg"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white rounded-br-lg"></div>
      </div>
      </div>
              {/* <img src={delapanRibu} alt="" className='w-50' /> */}
            </div>

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

    <div className="absolute right-3 bottom-40 flex items-center">
      {icons.map((src, i) => (
        <div
          key={i}
          className={`
            relative w-20 h-20 flex items-center justify-center
            hex-wrapper transition-all duration-500
            ${i === 1 || i === 3 ? "-translate-y-12 -translate-x-6" : ""}
            ${i === 2 ? "-translate-x-12" : ""}
            ${i === 3 ? "-translate-x-18" : ""}
            ${(allOn || active === i) ? "glow-yellow" : "dim-yellow"}
          `}
        >

          {/* SVG border hexagon */}
          <svg
            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              points="25,5 75,5 100,50 75,95 25,95 0,50"
              className="hex-border"
            />
          </svg>
          
          <img src={`${src}`} alt={`icon-${i}`} className="w-10 h-10 object-contain opacity-80" />
        </div>
      ))}
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

  <div className='mt-10 px-20'>
    <img src={DipercayaOleh} alt="" className='w-full' />
  </div>

  <ArticlesSection />

  <CTASection />
  
</MainLayout>
  );
};

export default HomePage;