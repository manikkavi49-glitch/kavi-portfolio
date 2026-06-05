import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'  
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

function App() {
  // Dark Mode එක සඳහා State එක (Default විදිහට True දීලා තියෙන්නේ)
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    // මේ ප්‍රධාන div එකෙන් තමයි මුළු website එකම Dark ද Light ද කියලා තීරණය කරන්නේ
    <div className={darkMode ? "dark" : ""}>
      
      {/* Background සහ Text පාට අලුත් විදිහට (dark:bg- යොදාගෙන) */}
      <div className="bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white min-h-screen font-sans selection:bg-blue-500/30 cursor-none overflow-x-hidden transition-colors duration-500">
        <CustomCursor />
        {/* Navbar එකට අදාළ දේවල් Pass කරනවා */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </div>

    </div>
  )
}

export default App