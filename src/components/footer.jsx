import React from "react";
import logo from "../assets/logo.png";
import socialIcons from "../assets/lgotpi.png";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Bella Onojie" className="h-10" />
            <span className="text-xl font-bold text-orange-500">Bella Onojie</span>
          </div>

          <div>
            <img src={socialIcons} alt="Social Media Icons" className="h-8 w-auto" />
          </div>

          <p className="text-gray-500 text-sm text-center md:text-right">
            Copyright © 2025 Bella Onojie.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
