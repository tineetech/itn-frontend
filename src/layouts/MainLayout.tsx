import React from 'react';
import Header from '../components/Header';

type MainLayoutProps = {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showSidebar = true 
}) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="content-container">
        {showSidebar && <aside>Sidebar</aside>}
        <main>{children}</main>
      </div>
      <footer>Footer Content</footer>
    </div>
  );
};