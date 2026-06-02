import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900/95 backdrop-blur-sm text-white p-5 fixed top-0 left-0 z-50 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        
        {/* Logo Eka */}
        <div className="text-2xl font-bold text-blue-400 cursor-pointer">
          Kavishka<span className="text-white">.dev</span>
        </div>

        {/* Desktop Menu Eka */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">Home</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">About</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors duration-300">Contact</li>
        </ul>

        {/* Mobile Menu Icon Eka (Passe hadamu) */}
        <button className="md:hidden text-gray-300 hover:text-white focus:outline-none text-2xl">
          ☰
        </button>

      </div>
    </nav>
  );
};

export default Navbar;