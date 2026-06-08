import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'  
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import SplashScreen from './components/SplashScreen'
import BackgroundEffect from './components/BackgroundEffect' // අලුත් එක import කළා
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import About from './components/About'

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
  <div className={darkMode ? "dark" : ""}>
    {loading ? (
      <SplashScreen onFinish={() => setLoading(false)} />
    ) : (
      <div className="min-h-screen relative">
        <BackgroundEffect />
        <CustomCursor />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    )}
  </div>
)
}

export default App