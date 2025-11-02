import React from 'react';
import { ArrowRight } from 'lucide-react';

const ArticlesSection: React.FC = () => {
  const articles = [
    {
      id: 1,
      category: 'Teknologi',
      date: '08 Agustus 2025',
      title: 'Lorem ipsum dolor sit amet consectetur. Dignissim imperdiet tellor odio velit.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
      featured: true,
      size: 'large'
    },
    {
      id: 2,
      category: 'Teknologi',
      date: '08 Agustus 2025',
      title: 'Lorem ipsum dolor sit amet consectetur. Dignissim imperdiet tellor odio velit.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      featured: true,
      size: 'large'
    },
    {
      id: 3,
      category: 'Teknologi',
      date: '08 Agustus 2025',
      title: 'Lorem ipsum dolor sit amet consectetur. Dignissim imperdiet tellor odio velit.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
      featured: false,
      size: 'small'
    },
    {
      id: 4,
      category: 'Teknologi',
      date: '08 Agustus 2025',
      title: 'Lorem ipsum dolor sit amet consectetur. Dignissim imperdiet tellor odio velit.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
      featured: false,
      size: 'small'
    },
    {
      id: 5,
      category: 'Teknologi',
      date: '08 Agustus 2025',
      title: 'Lorem ipsum dolor sit amet consectetur. Dignissim imperdiet tellor odio velit.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
      featured: false,
      size: 'small'
    }
  ];

  return (
    <section className="bg-white py-20 px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-transparent [-webkit-text-stroke:0.2px_grey] [text-stroke:0.2px_grey] tracking-widest font-nevan">
            ARTIKEL TERBARU
          </h2>
          <button className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 pl-5 pr-1 py-1 rounded-full font-medium transition-colors">
            Artikel Lainnya
            <div className='bg-white rounded-full text-blue-700 p-1'>
                <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Featured Articles */}
          {articles.filter(a => a.size === 'large').map((article, index) => (
            <div
              key={article.id}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer h-96 ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              
              <div className="absolute top-4 right-4 text-white text-xs opacity-75">
                {article.date}
              </div>

              {/* {index === 0 && (
                <div className="absolute bottom-6 left-6">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                    Baca Artikel
                  </button>
                </div>
              )} */}
              
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm leading-relaxed">
                  {article.title}
                </p>
              </div>
            </div>
          ))}

          {/* Small Articles */}
          {articles.filter(a => a.size === 'small').map((article) => (
            <div
              key={article.id}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-72"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              
              <div className="absolute top-4 right-4 text-white text-xs opacity-75">
                {article.date}
              </div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm leading-relaxed">
                  {article.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;