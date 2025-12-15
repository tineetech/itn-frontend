import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, ChevronDown, ChevronUp } from 'lucide-react';

export default function ContactPartnersSection() {
  const [expandedPartner, setExpandedPartner] = useState(null);

  const partners = [
    { id: 1, name: "ITN Lampung Barat", region: "Lampung Barat" },
    { id: 2, name: "ITN Lampung Barat", region: "Lampung Barat" },
    { id: 3, name: "ITN Lampung Barat", region: "Lampung Barat" },
    { id: 4, name: "ITN Lampung Barat", region: "Lampung Barat" },
    { id: 5, name: "ITN Lampung Barat", region: "Lampung Barat" },
    { id: 6, name: "ITN Lampung Barat", region: "Lampung Barat" }
  ];

  const togglePartner = (id) => {
    setExpandedPartner(expandedPartner === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card - Company Info */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
            {/* Company Name */}
            <h3 className="text-xl font-bold text-sky-700 mb-8 font-nevan">
              PT. INDONESIA TRANS NETWORK <span className='text-green-500'>(ITN)</span>
            </h3>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Jl.Kimaja (Buko Kimaja terus) Kel.Sepang Jaya, Kec.Labuhan Ratu, Kota Bandar Lampung, Lampung 35142
                  </p>
                  <p className="text-xs text-gray-500 mt-1">(Waktu Operasional)</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">082188090909698</p>
                  <p className="text-xs text-gray-500 mt-1">Senin-Jumat</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">082188090909698</p>
                  <p className="text-xs text-gray-500 mt-1">08.00 - 17.00 WIB</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">itn@mail.com</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </div>
                  <span>itn.tiktok</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </div>
                  <span>itn.tiktok</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </div>
                  <span>itn.tiktok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Card - Partners */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
            {/* Partners Title */}
            <h3 className="text-xl font-bold text-sky-700 mb-8 font-nevan">
              MITRA <span className='text-green-500'>(ITN)</span>
            </h3>

            {/* Partners List */}
            <div className="space-y-3">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all"
                >
                  <button
                    onClick={() => togglePartner(partner.id)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {partner.name}
                    </span>
                    <div className="flex-shrink-0">
                      {expandedPartner === partner.id ? (
                        <ChevronUp className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedPartner === partner.id ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-5 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
                      <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex gap-2">
                          <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400" />
                          <span>Jl. Raya {partner.region}, Lampung</span>
                        </div>
                        <div className="flex gap-2">
                          <Phone className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400" />
                          <span>0821-8809-0698</span>
                        </div>
                        <div className="flex gap-2">
                          <Clock className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400" />
                          <span>08.00 - 17.00 WIB</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}