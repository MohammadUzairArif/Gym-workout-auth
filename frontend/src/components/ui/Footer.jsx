import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900/90 border-t border-gray-800 shadow-inner">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-center items-center text-sm text-gray-400 font-poppins">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">
          {" "}
          Workout<span className="text-emerald-400">Buddy</span>
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
