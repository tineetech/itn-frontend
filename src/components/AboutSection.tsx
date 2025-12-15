import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Robot2 from '../assets/robot2.png';

export default function AboutUsSection() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Image and Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0"></div>
            <img
              src={Robot2}
              alt="About Us Illustration"
              className="relative w-full h-auto rounded-3xl" />
          </div>

          {/* Text Content */}
          <div>
            <h1 className="text-4xl font-bold mb-4 font-nevan">
              <span className="text-blue-900">SIAPA </span>
              <span className="text-green-600">KAMI</span>
            </h1>
            
            <div className="space-y-4 text-gray-700 leading-relaxed font-sans">
              <p>
                PT. Indonesia Trans Network (ITN) merupakan satu satu Internet Service Provider (ISP) yang berbasis di Lampung. Tidak untuk menawarkan solusi atau teknologinya digital yang batas dalam mengelola dan konektivitas Kami bergabung konsultas IT, serta infrastruktur layanan internet dengan lini untuk pengelolaan perusahaan Anda dari membangun. Dengan komitmen tinggi terhadap keamanan dan keandalan, ITN menghadirkan solusi konektivitas kelas dunia yang digunakan keamanan internet MPLS, global terpercaya dan layanan.
              </p>
              
              <p>
                Dengan visi yang bebas dan berdistribusi yang secara jasa modern, kami membangun jangka Sehakala pada melalui berbasis di ITN, dalam kompetisi konektivitas bukan hanya soal kelancaran, melainkan tentang dan memberdayakan bisnis untuk berkembang tanpa batas dalam ekosistem digital yang semakin kompetitif.
              </p>
            </div>
          </div>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* VISI Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                {/* <CheckCircle2 className="w-7 h-7 text-white" strokeWidth={2.5} /> */}
                <img src="/assets/visilogo.png" alt="" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mt-2">VISI</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              Menjadi Perusahaan Jasa Koneksi Internet Terbaik.
            </p>

            {/* Decorative element */}
            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* MISI Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                {/* <CheckCircle2 className="w-7 h-7 text-white" strokeWidth={2.5} /> */}
                <img src="/assets/misilogo.png" alt="" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mt-2">MISI</h2>
            </div>
            
            <ol className="space-y-3 text-gray-700 leading-relaxed">
              <li className="flex gap-3">
                <span className="font-semibold text-blue-600 flex-shrink-0">1.</span>
                <span>Meningkatkan pelayanan untuk mencapai kepuasan konsumen dalam bidang jasa koneksi internet.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-blue-600 flex-shrink-0">2.</span>
                <span>Memertahankan jaringan koneksi internet ke seluruh pelosok daerah.</span>
              </li>
            </ol>

            {/* Decorative element */}
            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
    </div>
  );
}