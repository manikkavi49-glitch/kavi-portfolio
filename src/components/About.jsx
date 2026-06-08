import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Text - මෙතනට මම data-aos එකතු කළා */}
        <div 
          data-aos="fade-right" 
          data-aos-duration="1000" 
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a passionate Software Engineering student dedicated to building robust and scalable web applications. 
            My journey is driven by a constant desire to learn, solve complex problems, and create seamless digital experiences.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and collaborating with like-minded developers. 
            I am currently looking for an internship opportunity to apply my skills in a real-world environment.
          </p>
        </div>

        {/* Right Side: Skills/Highlights - මෙතනටත් data-aos එකතු කළා */}
        <div 
          data-aos="fade-left" 
          data-aos-duration="1000" 
          data-aos-delay="200"
          className="w-full md:w-1/2 grid grid-cols-2 gap-4"
        >
          <div className="p-6 bg-[#111] rounded-xl border border-gray-800 hover:border-blue-500 transition-colors">
            <h3 className="text-white font-bold mb-2">Education</h3>
            <p className="text-gray-400 text-sm">Software Engineering Degree (Undergraduate)</p>
          </div>
          <div className="p-6 bg-[#111] rounded-xl border border-gray-800 hover:border-blue-500 transition-colors">
            <h3 className="text-white font-bold mb-2">Focus</h3>
            <p className="text-gray-400 text-sm">Full-Stack Development & Mobile Apps</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;