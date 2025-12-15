import React from 'react';
import Robot5Flip from '../assets/robot5-flip.png';
import Person from '../assets/person.png';

const testimonials = [
  {
    name: "Jhon Doe",
    location: "Poda Lampung",
    personImage: Person,
    text: "Lorem ipsum dolor sit amet consectetur. At in euismod nisl facilisis venenatis tortor."
  },
  {
    name: "Sarah Lee",
    location: "Jakarta",
    personImage: Person,
    text: "Pelayanan sangat cepat dan stabil. Internet jarang gangguan."
  },
  {
    name: "Michael Tan",
    location: "Bandung",
    personImage: Person,
    text: "Support responsif dan harga transparan."
  }
];


export default function ProfileSection() {
  const [index, setIndex] = React.useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

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
      <div className="relative w-full flex justify-center ">

        {/* SLIDE */}
        <div
          key={index}
          className="
            relative z-10 flex items-center gap-8
            transition-all duration-700 ease-in-out
            animate-fade-slide
          "
        >
          {/* Glass Card */}
          <div className="relative overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 w-80 h-80 shadow-2xl">
            <img src="/assets/quote.png" className="absolute bottom-0 left-0 opacity-40" />

            <div className="relative z-10">
              <h2 className="text-3xl font-semibold text-white mb-2">
                {testimonials[index].name}
              </h2>
              <p className="text-blue-300 text-sm">
                {testimonials[index].location}
              </p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="absolute left-60 z-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl blur-xl opacity-40"></div>

              <div className="relative w-40 h-40 rounded-3xl overflow-hidden border-4 border-white/20">
                <img src={testimonials[index].personImage} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="ml-10 p-6 w-80">
            <p className="text-gray-300 text-sm leading-relaxed">
              {testimonials[index].text}
            </p>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="absolute -bottom-20 flex gap-4 mt-6">
          <button
            onClick={prev}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20"
          >
            ›
          </button>
        </div>
      </div>
      

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
    </div>
    </div>
  );
}