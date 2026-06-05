import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/profile.jpg'; 

const Hero = () => {
  return (
    <div id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between min-h-screen">
      
      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 mt-12 md:mt-0">
        <p 
          data-aos="fade-right" 
          className="text-blue-500 dark:text-blue-400 text-lg md:text-xl font-medium tracking-wide"
        >
          Hello, I'm
        </p>
        <h1 
          data-aos="fade-right" 
          data-aos-delay="100" 
          className="text-gray-900 dark:text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight transition-colors duration-500"
        >
          Kavishka Manohara
        </h1>
        
        <div 
          data-aos="fade-right" 
          data-aos-delay="200" 
          className="text-xl md:text-3xl font-bold text-gray-600 dark:text-gray-300 flex items-center gap-2 h-10 transition-colors duration-500"
        >
          <span>I am a</span>
          <TypeAnimation
            sequence={[
              'Software Engineering Student.',
              2000,
              'Full-Stack Developer.',
              2000,
              'Mobile App Developer.',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-blue-500 dark:text-blue-400"
            repeat={Infinity}
          />
        </div>

        <p 
          data-aos="fade-right" 
          data-aos-delay="300" 
          className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-lg leading-relaxed transition-colors duration-500"
        >
          An enthusiastic and detail-oriented Software Engineering student with a solid foundation in core computing principles, OOP, and full-stack development. Eager to leverage technical skills and a passion for problem-solving in a 6-month software engineering internship.
        </p>

        <div 
          data-aos="fade-right" 
          data-aos-delay="400" 
          className="flex flex-wrap gap-4 pt-4"
        >
          <a 
            href="https://wa.me/94742164190" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]"
          >
            Contact Me
          </a>
          <a 
            href="/MYCV.pdf" 
            download 
            className="border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-8 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right Side: Profile Image */}
      <div 
        data-aos="zoom-in" 
        data-aos-delay="300"
        className="w-full md:w-1/2 flex justify-center md:justify-end"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-[80px] opacity-20 animate-pulse"></div>
          <div className="relative w-full h-full rounded-full border-2 border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800 shadow-2xl z-10 transition-colors duration-500">
            <img 
              src={profilePic} 
              alt="Kavishka Manohara" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;