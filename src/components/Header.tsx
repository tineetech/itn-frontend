import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const [isLayananOpen, setIsLayananOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-[#02091e] to-blue-950 py-6 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src={Logo} alt="SafeNet Logo" className="h-15 w-30 object-cover" />

        {/* Navigation */}
        <nav className="flex items-center gap-6 bg-[#00051f] rounded-full pr-4 z-2">
          <Link to="/" className={`${location.pathname === '/' ? 'bg-[#009a49] hover:bg-emerald-600' : ''} text-white px-6 py-2 rounded-full transition-colors`}>
            Beranda
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsLayananOpen(!isLayananOpen)}
              className={`${location.pathname.includes('/layanan') ? 'bg-[#009a49] hover:bg-emerald-600 rounded-full px-4 py-2' : ''} text-white hover:text-emerald-300 flex items-center gap-1 transition-colors`}
            >
              Layanan
              <ChevronDown className="w-4 h-4" />
            </button>
            {isLayananOpen && (
              <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg py-2 w-48 z-50">
                <Link to="/layanan/internet" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsLayananOpen(false)}>
                  Internet Home
                </Link>
                <Link to="/layanan/infrastruktur" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  IT Infrastruktur / Software
                </Link>
                {/* <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Layanan 3
                </a> */}
              </div>
            )}
          </div>

          <Link to="/kemitraan" className={`${location.pathname === '/kemitraan' ? 'bg-[#009a49] hover:bg-emerald-600 rounded-full px-4 py-2' : ''} text-white hover:text-emerald-300 transition-colors`}>
            Kemitraan
          </Link>

          <Link to="/pusat-bantuan" className={`${location.pathname === '/pusat-bantuan' ? 'bg-[#009a49] hover:bg-emerald-600 rounded-full px-4 py-2' : ''} text-white not-visited:text-white hover:text-emerald-300 transition-colors`}>
            Pusat Bantuan
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;