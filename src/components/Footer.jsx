import React from 'react';
// Logos ටික import කරගන්නවා
import { FaWhatsapp, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-gray-50 dark:bg-[#050505] border-t border-gray-200 dark:border-gray-800 px-4 overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 
          data-aos="fade-down"
          className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white transition-colors duration-500"
        >
          Let's Work <span className="text-blue-500 dark:text-blue-400">Together</span>
        </h2>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Left Side: Contact Form */}
          <div 
            data-aos="fade-right"
            className="bg-white dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl transition-colors duration-500"
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-500 dark:text-blue-400 font-sans">Send a Message</h3>
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST" 
              className="w-full"
            >
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="b766f00e-fd6e-44e8-a112-8b19db26eff5" />
              
              {/* Name Field */}
              <div className="mb-5">
                <label className="block text-gray-700 dark:text-gray-400 text-sm font-semibold mb-2 transition-colors duration-500" htmlFor="name">
                  Your Name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  placeholder="John Doe" 
                  className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" 
                />
              </div>

              {/* Email Field */}
              <div className="mb-5">
                <label className="block text-gray-700 dark:text-gray-400 text-sm font-semibold mb-2 transition-colors duration-500" htmlFor="email">
                  Your Email
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  placeholder="john@example.com" 
                  className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" 
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-400 text-sm font-semibold mb-2 transition-colors duration-500" htmlFor="message">
                  Message
                </label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="4" 
                  required 
                  placeholder="Hello, I'd like to talk about an internship..." 
                  className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)] dark:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Right Side: Other Details */}
          <div 
            data-aos="fade-left"
            className="flex flex-col space-y-6 p-2"
          >
            <h3 className="text-2xl font-semibold mb-2 text-blue-500 dark:text-blue-400 transition-colors duration-500">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed transition-colors duration-500">
              I'm currently seeking a 6-month Software Engineering internship to leverage my technical skills. Feel free to reach out directly through any of the channels or drop a message here!
            </p>
            
            <div className="space-y-5 pt-4">
              <div className="flex items-start gap-4">
                <span className="text-xl">📍</span>
                <div>
                  <h4 className="text-gray-900 dark:text-gray-300 font-semibold transition-colors duration-500">Address</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-500">82/1/A Kahambe, Pilimathalawa.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xl">✉️</span>
                <div>
                  <h4 className="text-gray-900 dark:text-gray-300 font-semibold transition-colors duration-500">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-500">manikkavi49@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xl">📞</span>
                <div>
                  <h4 className="text-gray-900 dark:text-gray-300 font-semibold transition-colors duration-500">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-500">+94 78 290 6811</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-xl">🎓</span>
                <div>
                  <h4 className="text-gray-900 dark:text-gray-300 font-semibold transition-colors duration-500">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-500">Higher Diploma in Computing and Software Engineering</p>
                  <p className="text-gray-500 text-xs transition-colors duration-500">Cardiff Metropolitan University (ICBT Kandy Campus)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        {/* Bottom Social Links with Original Logos */}
        <div 
          data-aos="fade-up"
          className="border-t border-gray-200 dark:border-gray-800 pt-10 flex flex-col items-center justify-center transition-colors duration-500"
        >
          <div className="flex gap-6 md:gap-10 mb-8 flex-wrap justify-center text-base md:text-lg font-medium tracking-wide">
            <a 
              href="https://wa.me/94742164190" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-[#25D366] transition-colors flex items-center gap-2 group"
            >
              <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>
            <a 
              href="https://github.com/manikkavi49-glitch" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 group"
            >
              <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
            <a 
              href="#" 
              className="text-gray-600 dark:text-gray-400 hover:text-[#0077B5] transition-colors flex items-center gap-2 group"
            >
              <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://www.facebook.com/kavishka.manohara.640660/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-[#1877F2] transition-colors flex items-center gap-2 group"
            >
              <FaFacebook className="text-2xl group-hover:scale-110 transition-transform" />
              <span>Facebook</span>
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-gray-500 dark:text-gray-600 text-sm text-center transition-colors duration-500">
            © {new Date().getFullYear()} Kavishka Manohara. Built with React & Tailwind CSS.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;