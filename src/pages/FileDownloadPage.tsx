import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import bannerImage from '../assets/banner6.png';
import DocumentDownloadSection from '../components/DocumentDownloadSection';

const FileDownloadPage: React.FC = () => {

  return (
    <MainLayout showSidebar={false}>
  {/* Banner */}
  <div className="relative h-lvh">
    <img src={bannerImage} className='absolute -top-40 left-0 w-full h-full' />
    
    <div className='absolute top-40 left-20'>
    <div className='text-green-600 mb-8'>Dukungan</div>
      <div className='mb-3 font-nevan text-white text-3xl [text-shadow:_0_0_10px_#22c55e]'>
        FILE DOWNLOAD
      </div>
      <div className='text-white text-sm mt-5'>
        Pilih paket internet yang sesuai dengan kebutuhan Anda dan isi formulir pendaftaran di bawah ini. <br /> Tim kami akan segera menghubungi Anda untuk proses verifikasi dan pemasangan.
      </div>
    </div>

  </div>

    <div className='px-30'>
      <DocumentDownloadSection />
    </div>


    
</MainLayout>
  );
};

export default FileDownloadPage;