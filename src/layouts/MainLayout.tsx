import React from 'react';
import Header from '../components/Header';
import { Phone, Mail, MessageCircle, Instagram, Twitter, Facebook, Linkedin, Youtube, MapPin } from 'lucide-react';
import Logo from '../assets/logo.png';

type MainLayoutProps = {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const footerLinks = {
  profil: [
    { label: 'Tentang', href: '#' },
    { label: 'Karir', href: '#' },
    { label: 'Kontak', href: '#' }
  ],
  layanan: [
    { label: 'Internet', href: '/layanan/internet' },
    { label: 'Server Infrastruktur', href: '#' },
    { label: 'Teknologi Digital', href: '#' }
  ],
  informasi: [
    { label: 'Berita', href: '#' },
    { label: 'Artikel', href: '#' },
    { label: 'Download', href: '#' }
  ],
  dukungan: [
    { label: 'Pusat Bantuan', href: '#' },
    { label: 'Panduan Jaringan', href: '#' },
    { label: 'Kemitraan', href: '#' }
  ]
};

export const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showSidebar = true 
}) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="content-container">
        {showSidebar && <aside>Sidebar</aside>}
        <main>{children}</main>
      </div>
      
      <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
                <img src={Logo} className="w-30 h-15" />
            </div>

            <div className="space-y-3 text-sm text-gray-600 mt-15">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>0893-5088-881</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>indosa@itn.id</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-gray-400" />
                <span>+6287832153758</span>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-7 h-7 text-gray-400" />
                <span>Jl Amplas Rihua Delam Icon Kel Sipang Jaya, Kec Labuhan Retu, Kota Banda Lampung Lampung 35146</span>
              </div>
            </div>

          </div>

          {/* Profil */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4 text-sm">Profil</h3>
            <ul className="space-y-2">
              {footerLinks.profil.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-emerald-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4 text-sm">Layanan</h3>
            <ul className="space-y-2">
              {footerLinks.layanan.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-emerald-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4 text-sm">Informasi</h3>
            <ul className="space-y-2">
              {footerLinks.informasi.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-emerald-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dukungan */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4 text-sm">Dukungan</h3>
            <ul className="space-y-2">
              {footerLinks.dukungan.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-emerald-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span>© 2025, Indonesia Team Network PTI</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-600">
            <a href="#" className="hover:text-emerald-500 transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Service Level Agreement</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>

    </div>
  );
};