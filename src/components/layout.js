// Layout.js
import React, { useState } from 'react';
import Sidebar from './sidebar';
import MainContent from '../App';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      {isSidebarOpen && <Sidebar />}
      <MainContent />
    </div>
  );
};

export default Layout;