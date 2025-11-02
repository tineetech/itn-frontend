import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function LocationCardsSection() {
  const locations = [
    {
      name: "ITN LAMPUNG TIMUR",
      address: "Jl. lorem ipsum No 17, Dolor Amet, Dolor Amet Lampung Timur"
    },
    {
      name: "ITN LAMPUNG TIMUR",
      address: "Jl. lorem ipsum No 17, Dolor Amet, Dolor Amet Lampung Timur"
    },
    {
      name: "ITN LAMPUNG TIMUR",
      address: "Jl. lorem ipsum No 17, Dolor Amet, Dolor Amet Lampung Timur"
    },
    {
      name: "ITN LAMPUNG TIMUR",
      address: "Jl. lorem ipsum No 17, Dolor Amet, Dolor Amet Lampung Timur"
    },
    {
      name: "ITN LAMPUNG TIMUR",
      address: "Jl. lorem ipsum No 17, Dolor Amet, Dolor Amet Lampung Timur"
    },
    {
      name: "ITN LAMPUNG TIMUR",
      address: "Jl. lorem ipsum No 17, Dolor Amet, Dolor Amet Lampung Timur"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center py-8 px-30">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-lg font-bold text-gray-800 mb-3 font-nevan">
                  <span className="text-gray-900">ITN</span>{' '}
                  <span className="text-green-600">LAMPUNG TIMUR</span>
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {location.address}
                </p>

                {/* Arrow Button */}
                <div className="flex justify-end">
                  <button className="w-10 h-10 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                    <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}