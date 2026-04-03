import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import heroTeam from '../assets/hero_tech_team.png';
import heroAi from '../assets/hero_tech_ai.png';
import heroTraining from '../assets/hero_tech_training.png';
import heroAnalytics from '../assets/hero_tech_analytics.png';

interface FloatingImageProps {
  src: string;
  alt: string;
  label: string;
  className: string;
  delay: number;
  floatY?: number;
}

const FloatingImage = ({ src, alt, label, className, delay, floatY = 12 }: FloatingImageProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={`absolute ${className} select-none`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Ambient glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: hovered
            ? '0 0 0 6px rgba(16,185,129,0.25), 0 0 40px 10px rgba(16,185,129,0.15)'
            : '0 0 0 3px rgba(16,185,129,0.12), 0 8px 32px rgba(0,0,0,0.18)',
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Slow float animation */}
      <motion.div
        animate={{ y: [0, -floatY, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Image circle */}
        <motion.div
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="rounded-full overflow-hidden border-4 border-white/90 shadow-2xl cursor-pointer"
          style={{ width: '100%', height: '100%' }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{ transform: hovered ? 'scale(1.1)' : 'scale(1)' }}
          />
          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-primary/20 flex items-end justify-center pb-4"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-white text-xs font-bold bg-primary/80 px-3 py-1 rounded-full backdrop-blur-sm">
              {label}
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const HeroSection = () => {
  const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-background overflow-hidden pt-20"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/4 rounded-full blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(160 84% 20%) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Floating Tech Images — corner positions */}
      <FloatingImage
        src={heroTeam}
        alt="HR Tech Team"
        label="Team Collaboration"
        className="top-[10%] left-0 w-72 h-72 md:w-96 md:h-96"
        delay={0.6}
        floatY={14}
      />
      <FloatingImage
        src={heroAi}
        alt="HR AI Platform"
        label="AI Recruitment"
        className="top-[5%] right-0 w-64 h-64 md:w-80 md:h-80"
        delay={0.8}
        floatY={10}
      />
      <FloatingImage
        src={heroTraining}
        alt="Corporate Training"
        label="Training Programs"
        className="bottom-[5%] left-0 w-64 h-64 md:w-80 md:h-80"
        delay={1.0}
        floatY={12}
      />
      <FloatingImage
        src={heroAnalytics}
        alt="Workforce Analytics"
        label="People Analytics"
        className="bottom-[5%] right-0 w-72 h-72 md:w-96 md:h-96"
        delay={1.2}
        floatY={16}
      />

      {/* Main content */}
      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 w-full z-10 py-20">
        <div className="text-center space-y-8">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5"
          >
            <Sparkles size={13} className="text-primary" />
            <span className="text-primary text-xs font-black uppercase tracking-[0.25em]">HR Consultancy &amp; Professional Training</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-display font-extrabold tracking-tight text-foreground"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)', lineHeight: 1.1 }}
          >
            Empowering Talent,
            <br />
            <span className="text-primary">Strengthening</span> Organisations,
            <br />
            Building the Future.
          </motion.h1>

          {/* Divider accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="w-16 h-1 bg-primary rounded-full mx-auto"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="text-slate-500 text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto"
          >
            A professionally managed learning and human resource development organization dedicated to building industry-ready talent and strengthening organizational capability.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="flex flex-wrap justify-center gap-4 pt-2"
          >
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/services" className="btn-primary group">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline group bg-transparent border-primary/20 text-foreground hover:bg-primary/5 hover:text-primary hover:border-primary"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
