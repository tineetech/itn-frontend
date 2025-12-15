import React, { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import bannerImage from '../assets/banner_fix.jpeg';

const Accordion = ({ title, children }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-3 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800"
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

const ServiceLevelPage: React.FC = () => {
  return (
    <MainLayout showSidebar={false}>
      {/* Banner */}
      <div className="relative h-lvh">
        <img src={bannerImage} className="absolute -top-25 left-0 w-full h-full" />

        <div className="absolute top-40 left-20">
          <div className="mb-3 font-nevan text-white text-3xl [text-shadow:_0_0_10px_#22c55e]">
            Service Level Agreement
          </div>
          <div className="mb-3 font-nevan text-white text-3xl [text-shadow:_0_0_10px_#22c55e]">
            PT. INDONESIA TRANS NETWORK
          </div>
        </div>
      </div>

      {/* ======== SECTION KEBIJAKAN PRIVASI ======== */}
      <div className="container mx-auto px-5 py-4">
        
        <div className="border border-green-500 p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold text-green-700 mb-3">
            Uptime
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Periode dimana layanan pelanggan tersedia secara online. Sebagian besar SLA internet menjamin sejumlah waktu aktif untuk pelanggan. Misalnya, Anda dapat menjamin waktu aktif layanan 99 persen setiap tahun.
          </p>
        </div>

        {/* Accordion SLA Section */}
        {/* <Accordion title="Uptime">
          Periode dimana layanan pelanggan tersedia secara online. Sebagian besar SLA internet menjamin sejumlah waktu aktif untuk pelanggan. Misalnya, Anda dapat menjamin waktu aktif layanan 99 persen setiap tahun.
        </Accordion> */}

        <Accordion title="Packet Delivery">
          Packet Delivery adalah tingkat keberhasilan pengiriman paket data dari pengirim ke penerima tanpa kehilangan. Layanan internet yang baik harus menjaga tingkat keberhasilan pengiriman paket tetap tinggi untuk memastikan koneksi stabil dan andal.
        </Accordion>

        <Accordion title="Latency">
          Latency adalah waktu yang dibutuhkan sebuah paket data untuk berpindah dari satu titik ke titik lainnya. Semakin rendah nilai latency, semakin responsif koneksi internet, terutama untuk aktivitas real-time seperti video call dan gaming.
        </Accordion>

        <Accordion title="MTTR">
          Mean Time to Repair (MTTR) adalah rata-rata waktu yang dibutuhkan tim teknis untuk memperbaiki gangguan layanan. Semakin kecil nilai MTTR, semakin cepat layanan kembali normal setelah terjadi gangguan.
        </Accordion>

        <Accordion title="Remedies">
          Remedies adalah tindakan kompensasi atau perbaikan yang diberikan ketika penyedia layanan tidak memenuhi standar SLA. Bentuk remedies dapat berupa pengurangan tagihan, penambahan kuota, atau kompensasi layanan lainnya sesuai ketentuan yang berlaku.
        </Accordion>


      </div>
    </MainLayout>
  );
};

export default ServiceLevelPage;
