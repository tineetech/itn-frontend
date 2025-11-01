import React from 'react';
import Robot3 from '../../public/assets/robot3.png';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      number: '01',
      title: 'Unlimited Kuota',
      description: 'Lorem ipsum dolor sit amet consectetur. Id nunc metus lectus netus id. Et pretium faucibus praesellus non bibendum aliquet pretium.'
    },
    {
      number: '02',
      title: 'IT Support 24/7',
      description: 'Lorem ipsum dolor sit amet consectetur. Id nunc metus lectus netus id. Et pretium faucibus praesellus non bibendum aliquet pretium.'
    },
    {
      number: '03',
      title: 'Biaya Bulanan Tetap',
      description: 'Lorem ipsum dolor sit amet consectetur. Id nunc metus lectus netus id. Et pretium faucibus praesellus non bibendum aliquet pretium.'
    },
    {
      number: '04',
      title: 'Pendaftaran Mudah',
      description: 'Lorem ipsum dolor sit amet consectetur. Id nunc metus lectus netus id. Et pretium faucibus praesellus non bibendum aliquet pretium.'
    }
  ];

  return (
    <section className="py-20 px-30 relative overflow-hidden">
      {/* Robot Hand Image */}
      <div className="absolute right-0 top-0 w-1/4 h-full pointer-events-none">
        <img
          src={Robot3}
          alt="Robot hand"
          className="absolute right-0 top-10 w-full max-w-2xl object-contain opacity-90"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className={`relative font-sans ${index % 2!==0 ? 'pt-20' : ''}`}>
              <div className="text-4xl text-cyan-400 mb-3 leading-none">
                {feature.number}
              </div>
              <h3 className="text-1xl font-bold text-cyan-600 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative dots */}
      <div className="absolute right-40 top-1/3 opacity-20">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;