import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import bgImage from '../assets/bgimg.jpg';
import homeContent from '../content/home.json';

const HeroSection = () => {
  const { hero } = homeContent;

  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-20"
    >
      {/* 1. FULL-BLEED BACKGROUND WITH CENTERED OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Professional HR Solutions" 
          className="w-full h-full object-cover grayscale-[0.2]"
        />
        
        {/* Centered High-Contrast Vignette/Overlay (Brand Blue) */}
        <div className="absolute inset-0 bg-[#01416d]/80 z-10" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70 z-10" />
      </div>

      {/* 2. CENTERED CONTENT STACK */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center text-center space-y-10 py-20">
        
        <div className="space-y-6 flex flex-col items-center">
          {/* Headline (Centered) */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white font-display leading-[1.1] tracking-tight max-w-4xl"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            {hero.title.split(',').map((part, index) => (
              <span key={index}>
                {index === 0 ? (
                  <>
                    {part}
                  </>
                ) : (
                  <>
                    <br />
                    <span className="underline decoration-[#e25c68]/40 underline-offset-8">
                      {part}
                    </span>
                  </>
                )}
              </span>
            ))}
          </motion.h1>

          {/* Description (Centered) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl font-medium leading-[1.7] max-w-2xl"
          >
            {hero.description}
          </motion.p>
        </div>

        {/* Primary Action Button (ROUNDED & Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link to="/services" className="inline-flex bg-white border-2 border-white/10 text-[#01416d] px-12 py-5 font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl hover:bg-[#e25c68] hover:text-white hover:scale-105 transition-all duration-300 rounded-full items-center gap-3 group">
            {hero.buttonText}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* 3. SOLID BOTTOM ACCENT BAR (HIGH VISIBILITY CAROUSEL) */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-[#01416d] flex items-center justify-center overflow-hidden z-20 border-t border-white/20">
         <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-40 whitespace-nowrap text-[12px] font-black text-white uppercase tracking-[0.5em]"
         >
            <span>{hero.tickerText}</span>
            <span>{hero.tickerText}</span>
         </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
