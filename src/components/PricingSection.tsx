import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import BelakangPrice from '../assets/belakang_price.png';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Standar',
      speed: 30,
      price: '195.000',
      features: [
        'Bandwidth Broadband',
        'Fiber Optik',
        'Tanpa WiFi',
        'Tanpa IPTV',
        'Biaya Instalasi FLAT (Gratis)',
        'Exclude PPN'
      ]
    },
    {
      name: 'Bronze',
      speed: 50,
      price: '285.000',
      features: [
        'Bandwidth Broadband',
        'Fiber Optik',
        'Tanpa WiFi',
        'Tanpa IPTV',
        'Biaya Instalasi FLAT (Gratis)',
        'Exclude PPN'
      ]
    },
    {
      name: 'Silver',
      speed: 100,
      price: '285.000',
      features: [
        'Bandwidth Broadband',
        'Fiber Optik',
        'Tanpa WiFi',
        'Tanpa IPTV',
        'Biaya Instalasi FLAT (Gratis)',
        'Exclude PPN'
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 relative overflow-hidden">
      <div className='absolute left-0 -top-30'>
        <img src={BelakangPrice} className='' />
      </div>
      <div className='absolute -right-50 -top-10'>
        <img src={BelakangPrice} className='' />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 font-nevan">
            <span className="text-blue-900">PAKET</span>{' '}
            <span className="text-[#4caf50]">UNGGULAN</span>
          </h2>
          <p className="text-gray-500 text-sm mt-5">
            Pilihan paket sesuai kebutuhan, dari pribadi hingga bisnis.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto font-sans">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#f2f6f9] rounded-3xl p-8 shadow-md hover:shadow-xl transition-all relative border border-blue-300 shadow-blue-300"
            >
              {/* Plan Name */}
              <div className="mb-8">
                <h3 className="text-cyan-500 font-bold text-xl mb-5">
                  {plan.name}
                </h3>
                
                {/* Speed Bar - Same for all cards */}
                <div className="flex gap-1.5 mb-4">
                  <div className="h-3.5 w-12 transform -skew-x-12 bg-blue-600"></div>
                  <div className={`h-3.5 w-12 -skew-x-12 ${index==0 ? 'bg-gray-300 border-r-2 border-b-2 border-l-2 border-blue-600' : 'bg-blue-600'}`}></div>
                  <div className={`h-3.5 w-12 -skew-x-12 ${index==0 ? 'bg-gray-300 border-r-2 border-b-2 border-l-2 border-blue-600' : 'bg-blue-600'}`}></div>
                  <div className={`h-3.5 w-12 -skew-x-12 ${index==2 ? 'bg-blue-600' : 'bg-gray-300 border-r-2 border-b-2 border-l-2 border-blue-600'}`}></div>
                  <div className={`h-3.5 w-12 -skew-x-12 ${index==2 ? 'bg-blue-600' : 'bg-gray-300 border-r-2 border-b-2 border-l-2 border-blue-600'}`}></div>
                </div>

                {/* Speed Display */}
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-bold text-blue-600 leading-none">
                    {plan.speed}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    Mbps
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8 min-h-[180px]">
                <ul className="space-y-2.5">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 text-sm leading-relaxed">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-blue-600">
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    /bulan
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button className={`w-full ${index==1 ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'text-blue-500 border-1 border-l-blue-500 border-b-blue-500 border-t-blue-500'} py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg`}>
                Daftar Sekarang
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;