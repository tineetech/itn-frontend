import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, SlidersHorizontal } from 'lucide-react';

export default function JobListingsSection() {
  const [expandedJob, setExpandedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Network Engineer",
      type: "Full Time",
      location: "Bandar Lampung",
      description: "Bertanggung jawab untuk merancang, membangun, mengkonfigurasi, dan memelihara infrastruktur jaringan ISP agar dapat memberikan layanan internet yang stabil, aman, dan memenuhi kebutuhan pelanggan.",
      requirements: [
        "Pendidikan minima D3/S1 di bidang Teknik Informatika, Sistem Informasi, atau Teknik Telekomunikasi.",
        "Pengalaman minimal 1-2 tahun di bidang jaringan pengalaman di ISP menjadi nilai tambah.",
        "Menguasai konfigurasi jaringan TCP/IP, Routing, Switching, dan protokol seperti OSPF, BGP, MPLS.",
        "Berpengalaman dengan perangkat jaringan dari vendor seperti Cisco, Mikrotik, Juniper, atau Huawei.",
        "Memahami konsep jaringan wireless (WiFi, PtP, PtMP).",
        "Mampu menggunakan tools monitoring jaringan misalnya PRTG, Zabbix, The Dude.",
        "Memiliki sertifikasi seperti CCNA, MTCNA, atau sejenisnya menjadi nilai plus.",
        "Mampu bekerja secara individu maupun dalam tim, serta siap bekerja di bawah tekanan.",
        "Memiliki kemampuan analisis dan pemecahan masalah yang baik."
      ]
    },
    {
      id: 2,
      title: "Wireless Network Engineer",
      type: "Full Time",
      location: "Lampung Timur",
      description: "Merancang, mengimplementasikan, dan mengelola infrastruktur jaringan wireless untuk memastikan konektivitas yang optimal dan stabil bagi pelanggan ISP.",
      requirements: [
        "Pendidikan minimal D3/S1 di bidang Teknik Informatika atau Telekomunikasi.",
        "Pengalaman minimal 2 tahun dalam implementasi jaringan wireless.",
        "Menguasai teknologi wireless seperti WiFi, PtP, PtMP, dan MIMO.",
        "Berpengalaman dengan perangkat dari vendor Ubiquiti, Cambium, atau Mikrotik.",
        "Memahami konsep RF Planning dan Site Survey."
      ]
    },
    {
      id: 3,
      title: "Network Security Specialist",
      type: "Full Time",
      location: "Lampung Selatan",
      description: "Bertanggung jawab untuk melindungi infrastruktur jaringan ISP dari ancaman keamanan siber dan memastikan keamanan data pelanggan.",
      requirements: [
        "Pendidikan minimal S1 di bidang Teknik Informatika atau Cyber Security.",
        "Pengalaman minimal 3 tahun dalam bidang network security.",
        "Menguasai firewall, IDS/IPS, VPN, dan security protocols.",
        "Memiliki sertifikasi seperti CEH, CISSP, atau security+.",
        "Mampu melakukan penetration testing dan vulnerability assessment."
      ]
    }
  ];

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Filter Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex gap-4">
            {/* Posisi */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600 mb-2">Posisi</label>
              <select className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>Text</option>
                <option>Network Engineer</option>
                <option>Security Specialist</option>
                <option>System Administrator</option>
              </select>
            </div>

            {/* Lokasi */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600 mb-2">Lokasi</label>
              <select className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>Text</option>
                <option>Bandar Lampung</option>
                <option>Lampung Timur</option>
                <option>Lampung Selatan</option>
              </select>
            </div>

            {/* Pendidikan */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600 mb-2">Pendidikan</label>
              <select className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>Text</option>
                <option>D3</option>
                <option>S1</option>
                <option>S2</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300 flex items-center gap-2">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Posisi Tersedia <span className="text-gray-500">(4)</span>
          </h2>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
            <span>Terbaru</span>
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Job Header */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm mb-4">
                      <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full font-medium">
                        {job.type}
                      </span>
                      <span className="text-gray-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                        {job.location}
                      </span>
                    </div>
                  </div>
                  
                  {/* Buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleJob(job.id)}
                      className="w-10 h-10 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-green-500 hover:text-green-500 transition-all"
                    >
                      {expandedJob === job.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    <button className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium transition-all duration-300 rounded-br-3xl rounded-tl-3xl">
                      Kirim Lamaran
                    </button>
                  </div>
                </div>

                {/* Collapsed View */}
                {expandedJob !== job.id && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Job Deskripsi</h4>
                    <p className="text-gray-600 text-sm line-clamp-2">{job.description}</p>
                  </div>
                )}
              </div>

              {/* Expanded View */}
              {expandedJob === job.id && (
                <div className="px-6 pb-6 border-t border-gray-100 pt-6">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Job Deskripsi</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Persyaratan</h4>
                    <ol className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="text-gray-600 text-sm leading-relaxed flex gap-3">
                          <span className="font-medium text-gray-700">{index + 1}.</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}