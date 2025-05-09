import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-100 font-poppins transition-colors duration-300">
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 py-10">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 transition-all">
          <Outlet />
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default AppLayout;
