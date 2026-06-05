import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Icons import කිරීම

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Navbar Background එක Light/Dark දෙකටම ගැලපෙන්න හැදුවා
    <nav className="w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-gray-900 dark:text-white fixed top-0 left-0 z-50 border-b border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-lg transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500 dark:text-blue-400 cursor-pointer">
          <a href="#home">Kavishka<span className="text-gray-900 dark:text-white">.dev</span></a>
        </div>

        <div className="flex items-center gap-6">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-600 dark:text-gray-300 font-medium">
            <li><a href="#home" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Home</a></li>
            <li><a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Contact</a></li>
          </ul>

          {/* Theme Toggle Button (Sun/Moon) */}
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" /> 
            ) : (
              <FaMoon className="text-gray-600" />
            )}
          </button>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white focus:outline-none text-2xl ml-2"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
          <ul className="flex flex-col text-gray-600 dark:text-gray-300 font-medium px-4 pt-2 pb-6 space-y-4">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="block hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Home</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="block hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Projects</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)} className="block hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Skills</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;