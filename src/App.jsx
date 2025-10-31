import { useState, useEffect } from 'react'
import { Play, ChevronDown } from 'lucide-react';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded transform rotate-45"></div>
              </div>
              <div className="text-white">
                <div className="text-sm font-light">Digi Net Jaya Internet</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-2">
              <button className="px-6 py-2 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
                Beranda
              </button>
              <button className="px-4 py-2 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center">
                Layanan
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <button className="px-4 py-2 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                Kemitraan
              </button>
              <button className="px-4 py-2 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                Pusat Bantuan
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6 z-10">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                Jelajahi layanan internet dan digital kami yang dirancang untuk mempermudah hidupmu.
              </div>
              
              <button className="flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all group">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 text-white fill-white ml-1" />
                </div>
                <span className="font-medium">VIDEO PROFILE KAMI</span>
              </button>
            </div>

            {/* Right Globe Visualization */}
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Globe */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                  
                  {/* Main globe circle */}
                  <div className="absolute inset-0 rounded-full border border-cyan-500/30 bg-gradient-to-br from-blue-900/40 to-transparent"></div>
                  
                  {/* Network lines */}
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    return (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-px h-40 bg-gradient-to-b from-cyan-400/60 to-transparent origin-top"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${i * 30}deg)`
                        }}
                      />
                    );
                  })}
                  
                  {/* Latitude lines */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={`lat-${i}`}
                      className="absolute left-1/2 -translate-x-1/2 border border-cyan-500/20 rounded-full"
                      style={{
                        width: `${100 - i * 15}%`,
                        height: `${100 - i * 15}%`,
                        top: `${i * 7.5}%`
                      }}
                    />
                  ))}
                  
                  {/* Connection nodes */}
                  {[...Array(20)].map((_, i) => {
                    const angle = (Math.random() * 360 * Math.PI) / 180;
                    const radius = 120 + Math.random() * 60;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <div
                        key={`node-${i}`}
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${1.5 + Math.random()}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
                      </div>
                    );
                  })}
                  
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                    {[...Array(8)].map((_, i) => {
                      const x1 = 50 + Math.cos((i * 45 * Math.PI) / 180) * 30;
                      const y1 = 50 + Math.sin((i * 45 * Math.PI) / 180) * 30;
                      const x2 = 50 + Math.cos(((i * 45 + 180) * Math.PI) / 180) * 35;
                      const y2 = 50 + Math.sin(((i * 45 + 180) * Math.PI) / 180) * 35;
                      
                      return (
                        <line
                          key={`line-${i}`}
                          x1={`${x1}%`}
                          y1={`${y1}%`}
                          x2={`${x2}%`}
                          y2={`${y2}%`}
                          stroke="rgba(34, 211, 238, 0.3)"
                          strokeWidth="1"
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path
              fill="#f9fafb"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </div>

      {/* Keunggulan Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-slate-800">KEUNGGULAN </span>
          <span className="text-emerald-500">KAMI</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Kecepatan Tinggi', desc: 'Internet super cepat hingga 100 Mbps untuk semua kebutuhan digital Anda' },
            { title: 'Harga Terjangkau', desc: 'Paket internet dengan harga bersaing dan berbagai pilihan sesuai budget' },
            { title: 'Layanan 24/7', desc: 'Tim support siap membantu Anda kapan saja, dimana saja' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
