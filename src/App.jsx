import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-blue-500/30">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App