import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between min-h-screen">
      
      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 mt-12 md:mt-0">
        <p className="text-blue-400 text-lg md:text-xl font-medium tracking-wide">
          Hello, I'm
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Kavishka Manohara
        </h1>
        
        <div className="text-xl md:text-3xl font-bold text-gray-300 flex items-center gap-2 h-10">
          <span>I am a</span>
          <TypeAnimation
            sequence={[
              'Software Engineering Student.',
              2000,
              'Full-Stack Developer.',
              2000,
              'Flutter Developer.',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-blue-400"
            repeat={Infinity}
          />
        </div>

        <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed">
          An enthusiastic and detail-oriented Software Engineering student. Passionate about building scalable applications and currently seeking a 6-month internship to leverage my technical skills.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]">
            Contact Me
          </button>
          <button className="border border-gray-600 hover:border-blue-400 hover:text-blue-400 text-gray-300 px-8 py-3 rounded-lg font-medium transition-all duration-300">
            Download CV
          </button>
        </div>
      </div>

      {/* Right Side: Profile Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-[80px] opacity-20 animate-pulse"></div>
          
          {/* Image Container (Danata placeholder ekak, passe photo eka damu) */}
          <div className="relative w-full h-full rounded-full border-2 border-gray-700 overflow-hidden bg-gray-800 flex items-center justify-center shadow-2xl z-10">
            <span className="text-gray-400 font-medium">Profile Picture Here</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;