import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import './index.css';
import Home from './pages/HomePage';
import LayananInternet from './pages/LayananInternetPage';
import LayananInfrastruktur from './pages/LayananInfrastrukturPage';
import Kemitraan from './pages/KemitraanPage';
import PusatBantuan from './pages/PusatBantuanPage';
import Pendaftaran from './pages/PendaftaranPage';
import Join from './pages/JoinPage';
import About from './pages/AboutPage';
import FileDownload from './pages/FileDownloadPage';
import PeralatanJaringan from './pages/PeralatanJaringanPage';
import SyaratKetentuanPage from './pages/SyaratKetentuanPage';
import InformasiKontakPage from './pages/InformasiKontakPage';
import ArtikelPage from './pages/ArtikelPage';
import KebijakanPage from './pages/KebijakanPage';
import ServiceLevelPage from './pages/ServiceLevelPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layanan/internet" element={<LayananInternet />} />
        <Route path="/layanan/infrastruktur" element={<LayananInfrastruktur />} />
        <Route path="/kemitraan" element={<Kemitraan />} />
        <Route path="/pusat-bantuan" element={<PusatBantuan />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route path="/join" element={<Join />} />
        <Route path="/about" element={<About />} />
        <Route path="/file-download" element={<FileDownload />} />
        <Route path="/peralatan-jaringan" element={<PeralatanJaringan />} />
        <Route path="/syarat-dan-ketentuan" element={<SyaratKetentuanPage />} />
        <Route path="/informasi-kontak" element={<InformasiKontakPage />} />
        <Route path="/artikel" element={<ArtikelPage />} />
        <Route path="/kebijakan" element={<KebijakanPage />} />
        <Route path="/service-level" element={<ServiceLevelPage />} />
      </Routes>
  )
}

export default App
