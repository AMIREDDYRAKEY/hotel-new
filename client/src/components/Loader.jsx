import React from 'react';
import { motion } from 'framer-motion';

export const Loader = ({ onLoadComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-[#0c0a09] z-[9999] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="flex flex-col items-center gap-6">
        
        {/* Crown Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-gold-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path d="M11.645 20.91l-.007-.003-.003-.001a.752.752 0 01-.7-.45l-4.5-9a.75.75 0 01.378-1.026l5.25-2.25a.75.75 0 01.57 0l5.25 2.25a.75.75 0 01.377 1.025l-4.5 9a.752.752 0 01-.701.452l-.003.001-.007.003-.06.027a.75.75 0 01-.616 0l-.06-.027zM12 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-6 3.75a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zm12 0a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z" />
          </svg>
        </motion.div>

        {/* Text Animation */}
        <motion.h2
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
          className="font-serif text-2xl text-stone-100 uppercase tracking-[0.3em]"
        >
          Majestic Hotel
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[10px] uppercase text-stone-400 tracking-[0.2em] font-light"
        >
          Pure Luxury & Comfort
        </motion.p>

        {/* Custom Progress Bar */}
        <div className="w-48 h-[1px] bg-stone-800 relative overflow-hidden mt-4">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gold-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
            onAnimationComplete={onLoadComplete}
          />
        </div>

      </div>
    </motion.div>
  );
};
