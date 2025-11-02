import React, { useState } from 'react';
import { ChevronDown, Search, Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

export default function FAQFooterSection() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    { title: "Akun & Profil" },
    { title: "Layanan & Paket" },
    { title: "Pembayaran" },
    { title: "Pembayaran" }
  ];

  const faqItems = [
    {
      question: "Kenajiban Pelanggan",
      answer: "Pelanggan wajib menjaga kerahasiaan akun, menggunakan layanan sesuai ketentuan, melakukan pembayaran tepat waktu, dan mematuhi semua peraturan yang berlaku."
    },
    {
      question: "Kenajiban Pelanggan",
      answer: "Pelanggan wajib menjaga kerahasiaan akun, menggunakan layanan sesuai ketentuan, melakukan pembayaran tepat waktu, dan mematuhi semua peraturan yang berlaku."
    },
    {
      question: "Kenajiban Pelanggan",
      answer: "Pelanggan wajib menjaga kerahasiaan akun, menggunakan layanan sesuai ketentuan, melakukan pembayaran tepat waktu, dan mematuhi semua peraturan yang berlaku."
    },
    {
      question: "Kenajiban Pelanggan",
      answer: "Pelanggan wajib menjaga kerahasiaan akun, menggunakan layanan sesuai ketentuan, melakukan pembayaran tepat waktu, dan mematuhi semua peraturan yang berlaku."
    },
    {
      question: "Kenajiban Pelanggan",
      answer: "Pelanggan wajib menjaga kerahasiaan akun, menggunakan layanan sesuai ketentuan, melakukan pembayaran tepat waktu, dan mematuhi semua peraturan yang berlaku."
    },
    {
      question: "Kenajiban Pelanggan",
      answer: "Pelanggan wajib menjaga kerahasiaan akun, menggunakan layanan sesuai ketentuan, melakukan pembayaran tepat waktu, dan mematuhi semua peraturan yang berlaku."
    },
    {
      question: "Kenajiban Pelanggan",
      answer: "Pelanggan wajib menjaga kerahasiaan akun, menggunakan layanan sesuai ketentuan, melakukan pembayaran tepat waktu, dan mematuhi semua peraturan yang berlaku."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                FAQ
              </div>
              <nav className="flex items-center gap-6">
                <a href="#" className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors">Bantuan</a>
                <a href="#" className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors">Metode Pembayaran</a>
                <a href="#" className="text-gray-700 hover:text-green-600 text-sm font-medium transition-colors">Troubleshoot</a>
              </nav>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari Topik Bantuan"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="flex-1">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-800 font-medium">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        openAccordion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-4 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 font-nevan">
          {/* CTA Text */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-medium mb-2">
              <span className="text-gray-600">UNTUK </span>
              <span className="text-green-500">INFORMASI LEBIH LANJUT</span>
              <span className="text-gray-600">, </span>
              <span className="text-blue-600">SILAKAN HUBUNGI KAMI</span>
            </h3>
            <p className="text-2xl text-gray-600">
              <span className="text-gray-600">MELALUI </span>
              <span className="text-green-500">MEDIA BERIKUT</span>
              <span className="text-gray-600">.</span>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="#"
              className="w-12 h-12 bg-gray-100 hover:bg-green-500 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-100 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-100 hover:bg-blue-400 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-100 hover:bg-red-600 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-100 hover:bg-blue-700 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}