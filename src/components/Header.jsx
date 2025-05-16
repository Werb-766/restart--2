import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Bella Onojie" className="h-12" />
      </div>

      <nav className="hidden md:flex space-x-8">
        <a href="#home" className="text-orange-500 font-semibold border-b-2 border-orange-500">Home</a>
        <a href="#product" className="text-gray-800 font-medium hover:text-orange-500 transition">Product</a>
        <a href="#faq" className="text-gray-800 font-medium hover:text-orange-500 transition">Faq</a>
        <a href="#contact" className="text-gray-800 font-medium hover:text-orange-500 transition">Contact</a>
      </nav>
    </header>
  );
};

export default Header;