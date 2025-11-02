import React from 'react';
import Robot5Flip from '../assets/robot5-flip.png';
import Person from '../assets/person.png';


export default function ProfileSection() {
  return (
    <div className='min-h-screen pt-50 relative'>

        {/* Logo/Icon - Top Left */}
      <div className="absolute top-20 left-2 z-50">
            <img src={Robot5Flip} className='w-50' />
      </div>

    <div className="bg-gradient-to-br from-[#012d55] via-blue-950 to-[#012d55] flex items-center justify-center p-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-700 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
      
      

      {/* Title - Top Right */}
      <div className="absolute top-12 right-12">
        <h1 className="text-3xl font-ligh tracking-[0.3em] uppercase font-nevan text-transparent [-webkit-text-stroke:2px_grey] [text-stroke:2px_white]">
          APA KATA MEREKA
        </h1>
      </div>

      {/* Main Card Container */}
      <div className="relative z-10 flex items-center gap-8">
        {/* Glass Card */}
        <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 w-80 h-80 shadow-2xl">
          {/* Decorative circles in background */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-xl"></div>
            <div className="absolute -top-5 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold text-white mb-2">Jhon Doe</h2>
            <p className="text-blue-300 text-sm">Poda Lampung</p>
          </div>
        </div>

        {/* Profile Image - Overlapping */}
        <div className="absolute left-60 z-20">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl blur-xl opacity-60 animate-pulse"></div>
            
            {/* Image container */}
            <div className="relative w-40 h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              {/* Placeholder for actual image */}
              <img src={Person} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Description Card */}
        <div className="ml-10 borderounded-2xl p-6 w-80">
          <p className="text-gray-300 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. At in euismod nisl facilisis venenatis tortor. venenatis et fermentum dui purus.
          </p>
          
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
    </div>
    </div>
  );
}