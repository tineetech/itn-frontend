import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function ArticlesSection() {
  const featuredArticle = {
    image: "/assets/peron3.jpg",
    badge: "Teknologi",
    title: "Lorem ipsum dolor sit amet consectetur. Nisl mattis tellus at sit faucibus.",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Duis facilisi urna posuere velit ac eu ipsum sed. Velit egestas et magna tellus venenatis. Urna velit massa at nulla amet mauris et ultrices et. Enim neque magna ante ornare. Porttitor ut mauris nibh cursus tempor. Porttitor aliquam porttitor turpis amet consectetur. Vel cursus pulvinar lorem.",
    author: "John Doe",
    role: "IT ISP Developer",
    date: "24 Des 2023"
  };

  const articles = [
    {
      id: 1,
      image: "/assets/laptop2.jpg",
      badge: "Teknologi",
      title: "Lorem ipsum dolor sit amet consectetur. Dignissim tempus elit ac nisl.",
      date: "20 Jan 2024",
      size: "medium"
    },
    {
      id: 2,
      image: "/assets/sky.jpg",
      badge: "Inovasi",
      title: "Lorem ipsum dolor sit amet consectetur. Dignissim tempus elit ac nisl.",
      date: "18 Jan 2024",
      size: "medium"
    },
    {
      id: 3,
      image: "/assets/bukit.jpg",
      badge: "Bisnis",
      title: "Lorem ipsum dolor sit amet consectetur. Dignissim tempus elit ac nisl.",
      date: "15 Jan 2024",
      size: "medium"
    },
    {
      id: 4,
      image: "/assets/kaset.jpg",
      badge: "Tutorial",
      title: "Lorem ipsum dolor sit amet consectetur. Dignissim tempus elit ac nisl.",
      date: "12 Jan 2024",
      size: "medium"
    },
    {
      id: 5,
      image: "/assets/singa.jpg",
      badge: "Panduan",
      title: "Lorem ipsum dolor sit amet consectetur. Dignissim tempus elit ac nisl odio tempus.",
      date: "10 Jan 2024",
      size: "large"
    },
    {
      id: 6,
      image: "/assets/car.jpg",
      badge: "Berita",
      title: "Lorem ipsum dolor sit amet consectetur. Dignissim tempus elit ac nisl.",
      date: "08 Jan 2024",
      size: "large"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Featured Article */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={featuredArticle.image}
                alt="Featured"
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                {featuredArticle.badge}
              </span>

              <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-gray-600 leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  {/* <User className="w-6 h-6 text-white" /> */}
                  <img src="/assets/person2.jpg" alt="" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{featuredArticle.author}</p>
                  <p className="text-xs text-gray-500">{featuredArticle.role}</p>
                </div>
                <div className="ml-auto text-right">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{featuredArticle.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-300 mb-8 tracking-wider">
            ARTIKEL TERBARU
          </h3>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* First Row - 4 Medium Cards */}
            {articles.slice(0, 4).map((article) => (
              <div
                key={article.id}
                className="group relative bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-[380px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
                      {article.badge}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-white font-semibold text-base leading-snug line-clamp-3">
                      {article.title}
                    </h4>

                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-xs">{article.date}</span>
                      <button className="w-9 h-9 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 Large Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {articles.slice(4, 6).map((article) => (
              <div
                key={article.id}
                className="group relative bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-[280px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
                      {article.badge}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-white font-semibold text-lg leading-snug line-clamp-2">
                      {article.title}
                    </h4>

                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-xs">{article.date}</span>
                      <button className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center gap-2 text-white text-sm font-medium transition-all">
                        <span>Baca Artikel</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg flex items-center gap-2 rounded-br-4xl rounded-tl-4xl">
              <span>Lihat semua artikel</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}