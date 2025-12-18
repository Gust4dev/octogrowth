import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

export const StickyCTA = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      // Toggle visibility based on scroll position (800px)
      // Using Functional State Update to ensure latest value if needed, 
      // but here boolean logic is simple.
      const shouldBeVisible = latest > 800;
      if (isVisible !== shouldBeVisible) {
        setIsVisible(shouldBeVisible);
      }
    });
  }, [scrollY, isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert("Abrir Modal de Aplicação (Typeform/Tally)")}
          className="fixed bottom-8 right-8 z-50 bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 px-8 rounded-full shadow-[0_0_30px_rgba(197,160,40,0.4)] border-2 border-gold-400 uppercase tracking-widest text-sm flex items-center gap-2"
        >
          <span className="relative flex h-3 w-3 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-30"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
          </span>
          Aplicação
        </motion.button>
      )}
    </AnimatePresence>
  );
};
