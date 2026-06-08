import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onFinish }) => {
  
  // හරියටම තත්පර 4කට පස්සේ onFinish එක ක්‍රියාත්මක කරන්න
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 4000); // මෙතන 4000 කියන්නේ තත්පර 4යි. ඕන නම් මේක වැඩි කරන්න.
    
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white text-center"
      >
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-400 text-lg mb-2 tracking-widest uppercase"
        >
          Welcome to my Portfolio
        </motion.h2>

        <motion.h1
          initial={{ scale: 0.8, rotateX: 90 }}
          animate={{ scale: 1, rotateX: 0 }}
          transition={{ delay: 1.2, duration: 1, type: "spring" }}
          className="text-5xl font-bold"
        >
          I'm <span className="text-blue-500">Kavishka</span>
        </motion.h1>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.5, duration: 2.5 }}
          className="h-1 bg-blue-500 mt-8 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;