import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100 font-poppins transition-colors duration-300">
      {/* Top Nav */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow px-6 py-10">
        <div className="max-w-[1400px] mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Footer at Bottom Always */}
      <Footer />
    </div>
  );
};

export default AppLayout;
