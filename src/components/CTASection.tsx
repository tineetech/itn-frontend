import React from 'react';
import { ArrowRight } from 'lucide-react';
import Robot1 from '/assets/robot1.png';

const CTASection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
          {/* Robot Image */}
          <div className="absolute left-0 bottom-0 w-1/8">
            <img
              src={Robot1}
              alt="AI Robot"
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center">
            <h2 className="text-4xl md:text-3xl font-bold mb-6 leading-tight font-nevan">
              <span className="text-blue-600">NIKMATI KONEKSI</span>{' '}
              <span className="text-blue-600">INTERNET</span>{' '}
              <span className="text-emerald-500">LEBIH CEPAT</span>{' '}
              <span className="text-emerald-500">& STABIL</span>
              <br />
              <span className="text-blue-600">UNTUK AKTIVITAS TANPA BATAS</span>
            </h2>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 mt-10 flex items-center gap-2 mx-auto transition-colors shadow-lg hover:shadow-xl font-sans rounded-br-4xl rounded-tl-4xl">
              Berlanggan Sekarang
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right side spacer for balance */}
          <div className="flex-shrink-0 w-1/3 hidden lg:block" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-50" />
    </section>
  );
};

export default CTASection;