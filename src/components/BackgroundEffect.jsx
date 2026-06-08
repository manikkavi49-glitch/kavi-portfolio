import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500">
      {/* නිල් රවුම */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"
      />
      {/* දම් රවුම */}
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]"
      />
    </div>
  );
};

export default BackgroundEffect;