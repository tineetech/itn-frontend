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

const KebijakanPage: React.FC = () => {
  return (
    <MainLayout showSidebar={false}>
      {/* Banner */}
      <div className="relative h-lvh">
        <img src={bannerImage} className="absolute -top-25 left-0 w-full h-full" />

        <div className="absolute top-40 left-20">
          <div className="mb-3 font-nevan text-white text-3xl [text-shadow:_0_0_10px_#22c55e]">
            Kebijakan Privasi
          </div>
          <div className="mb-3 font-nevan text-white text-3xl [text-shadow:_0_0_10px_#22c55e]">
            PT. INDONESIA TRANS NETWORK
          </div>
        </div>
      </div>

      {/* ======== SECTION KEBIJAKAN PRIVASI ======== */}
      <div className="container mx-auto px-5 py-4">
        
        {/* Pengolahan Data Pribadi */}
        <div className="border border-green-500 p-6 rounded-lg mb-6">
          <h2 className="text-lg font-semibold text-green-700 mb-3">
            Pengolahan Data Pribadi
          </h2>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Data Pribadi adalah informasi unik yang dapat digunakan untuk mengenali atau menghubungi Anda secara langsung. Saat mendaftarkan sebagai pelanggan Layanan Internet ITN TRANSNET, sistem kami akan meminta Data Pribadi yang dibutuhkan untuk memastikan layanan berjalan aman dan optimal.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Data ini kami peroleh langsung melalui formulir berlangganan internet, yang memverifikasi identitas Anda sebagai pelanggan resmi sekaligus melindungi dari potensi penipuan. Penyediaan Data bersifat sukarela, namun tanpa data tersebut, proses verifikasi, pemberian layanan, transaksi, dan penerimaan pembayaran tidak dapat dilakukan.
          </p>

          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Anda bertanggung jawab untuk memberikan informasi yang akurat, tidak menyesatkan, serta memperbarui Data apabila terjadi perubahan—agar layanan tetap lancar dan terhubung tanpa hambatan.
          </p>

          <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
            <li>Nama Lengkap</li>
            <li>Nomor Kartu Tanda Penduduk (KTP)</li>
            <li>Alamat Rumah/Kantor</li>
            <li>Alamat surat elektronik (email)</li>
            <li>Nomor Telepon (bergerak/handphone)</li>
            <li>Tanggal Lahir</li>
            <li>Status keluarga</li>
            <li>Pekerjaan Anda</li>
            <li>Nomor Pokok Wajib Pajak (NPWP)</li>
          </ul>
        </div>

        {/* Accordion lainnya */}
        <Accordion title="Tautan (link) ke Website Pihak Ketiga">
          Informasi mengenai tautan ke situs pihak ketiga dan bagaimana kami tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik situs eksternal tersebut.
        </Accordion>

        <Accordion title="Informasi dari Cookie dan Teknologi lainnya">
          Kami menggunakan cookie dan teknologi sejenis untuk meningkatkan pengalaman pengguna, menganalisa performa situs, serta menyesuaikan konten yang relevan.
        </Accordion>

        <Accordion title="Tujuan Pengolahan">
          Data Anda digunakan untuk kebutuhan layanan internet, verifikasi identitas, peningkatan layanan, serta kebutuhan administratif lainnya.
        </Accordion>

        <Accordion title="Pengungkapan kepada Pihak Ketiga">
          Data dapat kami bagikan kepada pihak ketiga yang bekerja sama dengan kami, namun tetap dengan standar keamanan dan izin yang sesuai.
        </Accordion>

        <Accordion title="Keamanan Informasi Pribadi">
          Kami menjaga keamanan dan kerahasiaan Data Pribadi Anda menggunakan standar industri terbaik serta pembatasan akses internal.
        </Accordion>

        <Accordion title="Melindungi Privasi Anak-anak">
          Kami tidak secara sengaja mengumpulkan informasi dari anak-anak di bawah usia tertentu tanpa persetujuan orang tua.
        </Accordion>

        <Accordion title="Perubahan dalam Kebijakan">
          Kebijakan ini dapat diperbarui sewaktu-waktu sesuai kebutuhan layanan dan regulasi yang berlaku.
        </Accordion>

        <Accordion title="Pertanyaan dan Saran">
          Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, Anda dapat menghubungi layanan pelanggan kami.
        </Accordion>

      </div>
    </MainLayout>
  );
};

export default KebijakanPage;
