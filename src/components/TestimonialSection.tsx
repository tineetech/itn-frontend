import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Person3 from '../assets/persons3.jpg';

export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      badge: "Capaian Kami",
      title: "8000+ PENGGUNA",
      description: "Lorem ipsum dolor sit amet consectetur. Semectus nunc eget nec malesuada pulvinar pretium sed. Senectus cursus nulla at porttitor justo malesuada blandit platea morbi. In eget pellentesque scelerisque eu tempor id. Cursus ultrices mi laoreet diam. Ipsum in amet dolor non tempor. Mattis diam dolor faucibus libero."
    },
    {
      badge: "Kepercayaan",
      title: "5000+ MITRA",
      description: "Kami bangga melayani lebih dari 5000 mitra bisnis yang mempercayai layanan kami. Dengan dedikasi penuh, kami terus memberikan solusi terbaik untuk mengembangkan bisnis mereka ke level yang lebih tinggi."
    },
    {
      badge: "Pengalaman",
      title: "15+ TAHUN",
      description: "Lebih dari 15 tahun pengalaman dalam industri teknologi informasi. Kami telah membantu ribuan perusahaan bertransformasi digital dengan solusi yang inovatif dan terpercaya."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-blue-950 via-blue-800 to-blue-950 rounded-3xl overflow-hidden shadow-2xl" style={{
        backgroundImage: `url(${Person3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
          {/* Background Image Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>

          {/* Content Container */}
          <div className="relative z-10 flex items-center justify-between p-12 min-h-[400px]">
            {/* Left Arrow */}
            <button 
              onClick={prevSlide}
              className="flex-shrink-0 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
            </button>

            {/* Content */}
            <div className="flex-1 max-w-2xl mx-12">
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
                  {testimonials[currentSlide].badge}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-5xl font-bold text-white mb-6 tracking-wide">
                {testimonials[currentSlide].title}
              </h2>

              {/* Description */}
              <p className="text-white/90 text-base leading-relaxed">
                {testimonials[currentSlide].description}
              </p>

              {/* Dots Indicator */}
              <div className="flex gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-8 bg-white' 
                        : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button 
              onClick={nextSlide}
              className="flex-shrink-0 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
            </button>
          </div>

          {/* Background Pattern - simulating people silhouettes */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
}