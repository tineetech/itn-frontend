import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function AccordionFAQSection() {
  const [openSection, setOpenSection] = useState('penggantian');

  const sections = [
    {
      id: 'penggantian',
      title: 'Penggantian',
      content: [
        'GP: Indonesia Trans Network: Penukaran perangkat hanya 14 hari sejak barang menjangkau ketinggian pengiriman atau diterima dalam jangka waktu 24 jam karena kerusakan terkirim.',
        'Perangkat dapat dikembalikan dengan menyertakan bukti pembelian yang asli (tagihan cetak) atau pengembalian akan ditolak dan biaya pengiriman tidak dapat diganti.',
        'Barang Pelanggan harus dicatat dan dikembalikan sebagai penerima barang tersebut yang secara otomatis menerima.',
        'Biaya ONGKIR yang ditambahnkan sebagai asuransi pengiriman karena sesuai kerusakan lain yang secara Pembayaran kasus saat itu tidak akan dijanjikan.',
        'Jangan melaporkan produk yang diterima karena untuk mengenali berbagai kesalahan yang sedikit rusak pada pengiriman.',
        'Paket akan diperiksa barang tersebut merupakan tujuan merek dari sumber distributor resmi dalam transportasi.',
        'Jangan mencoba IT: beralihin yang telah dicari untuk memberikan kenyamanan dan layanan dalam film tersebut.',
        'Jangan menggunakan kesejahteraan penukaran ketika melakukan kertas perangkat tersebut untuk mengajukan.',
        'Tidak dapat mencegah IT: Tidak dapat digunakan mulai selama perangkat pengiriman.',
        'Ketika produk tidak dapat dikembalikan atau diterima sedang tidak dikuatkan jasa logistik yang tetap pengiriman tersebut meski halal peluang akan dipertanyakan.',
        'Layanan Pelanggan: Gunakan admin yang dapat dikonfirmasi halaman terpilih atau email.'
      ]
    },
    {
      id: 'kewajiban',
      title: 'Kewajiban Pelanggan',
      content: [
        'Menjaga kerahasiaan akun dan password pribadi.',
        'Menggunakan layanan sesuai dengan ketentuan yang berlaku.',
        'Melakukan pembayaran tagihan tepat waktu.',
        'Tidak menggunakan layanan untuk kegiatan ilegal.',
        'Melaporkan gangguan atau masalah teknis kepada customer service.'
      ]
    },
    {
      id: 'hak',
      title: 'Hak Pelanggan',
      content: [
        'Mendapatkan layanan internet yang stabil dan berkualitas.',
        'Menerima informasi yang jelas mengenai paket dan tagihan.',
        'Mengajukan komplain jika terjadi gangguan layanan.',
        'Mendapatkan kompensasi sesuai ketentuan SLA.',
        'Membatalkan layanan sesuai prosedur yang berlaku.'
      ]
    },
    {
      id: 'larangan',
      title: 'Larangan Bagi Pelanggan',
      content: [
        'Dilarang menggunakan layanan untuk kegiatan ilegal.',
        'Dilarang menyalahgunakan bandwidth untuk aktivitas merugikan.',
        'Dilarang membagikan akses internet kepada pihak ketiga tanpa izin.',
        'Dilarang merusak atau memodifikasi perangkat milik perusahaan.',
        'Dilarang melakukan spamming atau penyebaran malware.'
      ]
    },
    {
      id: 'kewajiban-pt',
      title: 'Kewajiban PT. Indonesia Trans Network',
      content: [
        'Menyediakan layanan internet sesuai paket yang dipilih pelanggan.',
        'Melakukan maintenance rutin untuk menjaga kualitas layanan.',
        'Memberikan customer service 24/7 untuk keluhan pelanggan.',
        'Menjaga keamanan data dan privasi pelanggan.',
        'Memberikan kompensasi sesuai SLA jika terjadi gangguan.'
      ]
    },
    {
      id: 'hak-pt',
      title: 'Hak PT. Indonesia Trans Network',
      content: [
        'Melakukan maintenance dan upgrade infrastruktur jaringan.',
        'Menonaktifkan layanan jika pelanggan menunggak pembayaran.',
        'Mengubah ketentuan layanan dengan pemberitahuan terlebih dahulu.',
        'Memblokir konten ilegal sesuai regulasi pemerintah.',
        'Menghentikan layanan jika pelanggan melanggar ketentuan.'
      ]
    },
    {
      id: 'sanksi',
      title: 'Sanksi',
      content: [
        'Peringatan tertulis untuk pelanggaran ringan.',
        'Penonaktifan sementara layanan untuk tunggakan pembayaran.',
        'Pemutusan layanan permanen untuk pelanggaran berat.',
        'Tuntutan hukum untuk kerugian yang ditimbulkan.',
        'Denda sesuai ketentuan dalam perjanjian layanan.'
      ]
    },
    {
      id: 'resolusi',
      title: 'Resolusi Sengketa',
      content: [
        'Penyelesaian sengketa akan dilakukan secara musyawarah.',
        'Jika musyawarah gagal, akan diselesaikan melalui mediasi.',
        'Penyelesaian melalui arbitrase sebagai opsi terakhir.',
        'Hukum yang berlaku adalah hukum Republik Indonesia.',
        'Domisili hukum ditetapkan di Pengadilan Negeri Bandar Lampung.'
      ]
    },
    {
      id: 'hukum',
      title: 'Hukum dan Pernyataan Perunduhan',
      content: [
        'Syarat dan ketentuan ini tunduk pada hukum Indonesia.',
        'Setiap perubahan akan diberitahukan melalui website resmi.',
        'Pelanggan dianggap menyetujui perubahan jika tetap menggunakan layanan.',
        'Ketentuan yang tidak berlaku tidak mempengaruhi ketentuan lainnya.',
        'Perusahaan berhak mengubah ketentuan tanpa pemberitahuan sebelumnya dalam kondisi darurat.'
      ]
    },
    {
      id: 'lain',
      title: 'Lain-lain',
      content: [
        'Semua komunikasi resmi akan dilakukan melalui email terdaftar.',
        'Pelanggan wajib memperbarui data pribadi jika terjadi perubahan.',
        'Perusahaan tidak bertanggung jawab atas kerugian akibat force majeure.',
        'Ketentuan ini berlaku sejak pelanggan mengaktifkan layanan.',
        'Untuk informasi lebih lanjut, hubungi customer service kami.'
      ]
    }
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Accordion List */}
        <div className="space-y-3">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base font-semibold text-gray-800">
                  {section.title}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openSection === section.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSection === section.id ? 'max-h-[2000px]' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                  <ul className="space-y-3">
                    {section.content.map((item, index) => (
                      <li key={index} className="text-sm text-gray-700 leading-relaxed flex gap-3">
                        <span className="text-green-600 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}