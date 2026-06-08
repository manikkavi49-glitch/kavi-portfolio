import React, { useRef, useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/profile.jpg';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Hero = () => {
  const lanyardRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const rotate = useMotionValue(0);
  const springRotate = useSpring(rotate, { stiffness: 80, damping: 12 });

  const handleMouseDown = useCallback((e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    if (lanyardRef.current) lanyardRef.current.style.cursor = 'grabbing';
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    const dx = e.clientX - startX.current;
    rotate.set(Math.max(-35, Math.min(35, dx * 0.25)));
  }, [rotate]);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    rotate.set(0);
    if (lanyardRef.current) lanyardRef.current.style.cursor = 'grab';
  }, [rotate]);

  const handleTouchStart = useCallback((e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - startX.current;
    rotate.set(Math.max(-35, Math.min(35, dx * 0.25)));
  }, [rotate]);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
    rotate.set(0);
  }, [rotate]);

  return (
    <div
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between min-h-screen"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >

      {/* LEFT: Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 mt-12 md:mt-0">
        <p data-aos="fade-right" className="text-blue-500 dark:text-blue-400 text-lg md:text-xl font-medium tracking-wide">
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
              'Software Engineering Student.', 2000,
              'Full-Stack Developer.', 2000,
              'Mobile App Developer.', 2000,
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
          An enthusiastic and detail-oriented Software Engineering student with a solid foundation in
          core computing principles, OOP, and full-stack development. Eager to leverage technical
          skills and a passion for problem-solving in a 6-month software engineering internship.
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

      {/* RIGHT: Lanyard ID Card — BIGGER, COLOR PHOTO */}
      <div
        data-aos="fade-down"
        data-aos-delay="300"
        className="w-full md:w-1/2 flex justify-center md:justify-end items-start pt-8 md:pt-16"
      >
        <motion.div
          ref={lanyardRef}
          style={{ rotate: springRotate, transformOrigin: 'top center', cursor: 'grab' }}
          animate={{ rotate: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex flex-col items-center select-none"
        >

          {/* Lanyard Strap */}
          <div
            className="flex flex-col items-center justify-evenly rounded-sm"
            style={{
              width: '36px',
              height: '110px',
              background: 'linear-gradient(to bottom, #1e3a5f, #0f3460)',
              boxShadow: 'inset 2px 0 6px rgba(255,255,255,0.06)',
            }}
          >
            <span style={{ fontSize: '6px', color: 'rgba(255,255,255,0.45)', letterSpacing: '2.5px', writingMode: 'vertical-rl', textTransform: 'uppercase', userSelect: 'none' }}>
              ID CARD
            </span>
            <span style={{ fontSize: '6px', color: 'rgba(255,255,255,0.45)', letterSpacing: '2.5px', writingMode: 'vertical-rl', textTransform: 'uppercase', userSelect: 'none' }}>
              ID CARD
            </span>
          </div>

          {/* Metal Clip */}
          <div style={{
            width: '20px', height: '14px', marginBottom: '-2px', zIndex: 2,
            background: 'linear-gradient(to bottom, #d4d4d4, #888)',
            borderRadius: '3px 3px 0 0',
            border: '1px solid #aaa',
            boxShadow: '0 -2px 4px rgba(0,0,0,0.4)',
          }} />

          {/* ID CARD — bigger: 240px wide */}
          <motion.div
            whileHover={{ scale: 1.03, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 260 }}
            style={{
              width: '280px',
              background: '#ffffff',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 30px 70px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.4)',
            }}
          >
            {/* Blue top bar */}
            <div style={{
              background: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)',
              padding: '12px 16px 10px',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.95)', margin: 0 }}>
                Developer Portfolio
              </p>
              <div style={{
                width: '24px', height: '24px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)', margin: '6px auto 0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', color: 'white',
              }}>✦</div>
            </div>

            {/* COLOR Profile Photo — full width feel */}
            <div style={{ padding: '16px 16px 10px', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '160px',
                height: '185px',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '3px solid #e2e8f0',
                boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
              }}>
                <img
                  src={profilePic}
                  alt="Kavishka Manohara"
                  style={{
                    width: '130%',
                    height: '130%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                    /* NO grayscale — full color */
                  }}
                />
              </div>
            </div>

            {/* Name & Role */}
            <div style={{ textAlign: 'center', padding: '4px 14px 10px' }}>
              <p style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', letterSpacing: '0.5px', margin: '0 0 4px' }}>
                KAVISHKA MANOHARA
              </p>
              <p style={{ fontSize: '9px', color: '#3b82f6', letterSpacing: '1.5px', textTransform: 'uppercase', margin: 0, fontWeight: 600 }}>
                Software Engineering
              </p>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: '#e2e8f0', margin: '0 16px' }} />

            {/* Barcode */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5px', margin: '10px 16px 4px', height: '28px' }}>
              {[3,1,2,1,3,1,2,3,1,2,1,3,2,1,3,1,2,1,3,2,1,2,3,1].map((w, i) => (
                <div key={i} style={{
                  background: i % 3 === 0 ? '#0f172a' : '#475569',
                  width: `${w}px`, height: '100%', borderRadius: '1px',
                }} />
              ))}
            </div>

            {/* ID number */}
            <p style={{ fontSize: '8px', color: '#94a3b8', letterSpacing: '2px', textAlign: 'center', paddingBottom: '10px', margin: 0 }}>
              ID: KM-2024-SE-001
            </p>

            {/* Blue bottom bar */}
            <div style={{ height: '8px', background: 'linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)' }} />
          </motion.div>

        </motion.div>
      </div>

    </div>
  );
};

export default Hero;
