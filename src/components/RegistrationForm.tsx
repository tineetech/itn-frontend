import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    paket: 'Home Internet',
    namaLengkap: '',
    nomorKTP: '',
    email: '',
    nomorHandphone: '',
    alamat: '',
    acceptTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    if (formData.acceptTerms) {
      console.log('Form submitted:', formData);
      alert('Formulir berhasil dikirim!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Formulir Pendaftaran</h2>
            <p className="text-gray-500 text-sm">Lengkapi data berikut untuk mendaftar layanan internet</p>
          </div>

          <div className="space-y-6">
            {/* Pilihan Paket Internet */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pilihan Paket Internet
              </label>
              <select
                name="paket"
                value={formData.paket}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="Home Internet">Home Internet</option>
                <option value="Business Internet">Business Internet</option>
                <option value="Premium Internet">Premium Internet</option>
                <option value="Enterprise Internet">Enterprise Internet</option>
              </select>
            </div>

            {/* Nama Lengkap */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleChange}
                placeholder="Isi nama sesuai KTP..."
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Nomor KTP */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nomor KTP
              </label>
              <input
                type="text"
                name="nomorKTP"
                value={formData.nomorKTP}
                onChange={handleChange}
                placeholder="Isi nomor KTP/NPWP"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Isi alamat email yang aktif dan valid"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Nomor Handphone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nomor Handphone
              </label>
              <input
                type="tel"
                name="nomorHandphone"
                value={formData.nomorHandphone}
                onChange={handleChange}
                placeholder="Isi nomor handphone"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Alamat/Lokasi Pemasangan Internet */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alamat/Lokasi Pemasangan Internet
              </label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                placeholder="Alamat lengkap"
                rows="3"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="acceptTerms" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                Saya sudah membaca{' '}
                <span className="text-blue-600 hover:text-blue-700 font-medium underline cursor-pointer">
                  Syarat & Ketentuan
                </span>
                {' '}yang berlaku
              </label>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!formData.acceptTerms}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Kirim</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}