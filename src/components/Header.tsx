import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from '../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const [isLayananOpen, setIsLayananOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.includes(path);

  const isActiveExact = (path: string) => location.pathname === path;

  const isActiveStartsWith = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <header className="bg-gradient-to-b from-[#02091e] to-blue-950 py-4 px-6" style={{zIndex: 999}}>
      <div className="max-w-7xl mx-auto flex items-center justify-between"  style={{zIndex: 999}}>
        {/* Logo */}
        <img src={Logo} alt="ITN Logo" className="h-14 w-auto z-10 object-cover" />

        {/* ======= DESKTOP NAV ======= */}
        <nav className="hidden md:flex items-center gap-6 bg-[#00051f] rounded-full pr-4 pl-4" style={{zIndex: 999}}>
          <Link
            to="/"
            className={`${isActiveExact('/') ? 'bg-[#009a49]' : ''} text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition`}
          >
            Beranda
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsLayananOpen(!isLayananOpen)}
              className={`${isActiveStartsWith('/layanan') ? 'bg-[#009a49]' : ''} text-white px-4 py-2 rounded-full hover:bg-emerald-600 flex items-center gap-1 transition`}
            >
              Layanan
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Dropdown */}
            {isLayananOpen && (
              <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg py-2 w-48 z-50">
                <Link
                  to="/layanan/internet"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Internet Home
                </Link>

                <Link
                  to="/layanan/infrastruktur"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  IT Infrastruktur / Software
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/kemitraan"
            className={`${isActiveExact('/kemitraan') ? 'bg-[#009a49]' : ''} text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition`}
          >
            Kemitraan
          </Link>

          <Link
            to="/pusat-bantuan"
            className={`${isActiveExact('/pusat-bantuan') ? 'bg-[#009a49]' : ''} text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition`}
          >
            Pusat Bantuan
          </Link>
        </nav>

        {/* ======= MOBILE BUTTON ======= */}
        <button
          style={{zIndex: 999}}
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ======= MOBILE NAV MENU ======= */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-[#00051f] rounded-lg shadow-lg p-4 space-y-2 animate-slide-down" style={{zIndex: 999}}>
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-white px-3 py-2 rounded-lg hover:bg-emerald-600 transition"
          >
            Beranda
          </Link>

          {/* Mobile dropdown */}
          <div>
            <button
              onClick={() => setIsLayananOpen(!isLayananOpen)}
              className="w-full flex items-center justify-between text-white px-3 py-2 rounded-lg hover:bg-emerald-600"
            >
              Layanan
              <ChevronDown className={`w-4 h-4 transition ${isLayananOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLayananOpen && (
              <div className="mt-2 bg-white rounded-lg shadow p-2 space-y-1">
                <Link
                  to="/layanan/internet"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Internet Home
                </Link>

                <Link
                  to="/layanan/infrastruktur"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  IT Infrastruktur / Software
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/kemitraan"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-white px-3 py-2 rounded-lg hover:bg-emerald-600 transition"
          >
            Kemitraan
          </Link>

          <Link
            to="/pusat-bantuan"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-white px-3 py-2 rounded-lg hover:bg-emerald-600 transition"
          >
            Pusat Bantuan
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
