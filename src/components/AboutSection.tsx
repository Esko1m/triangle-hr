import { motion } from 'framer-motion';
import { Eye, Target, Compass, Play } from 'lucide-react';

const pillars = [
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be a trusted partner in shaping confident, skilled, and future-ready professionals who thrive in a changing world.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/5',
  },
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To connect learning with real-world success by helping individuals grow with confidence and enabling organizations.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/5',
  },
  {
    icon: Compass,
    title: 'Our Objective',
    text: 'Connecting learning with real-world impact by developing capable people, strong organizations, and future-ready careers.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/5',
  },
];

const solutions = [
  'Students preparing for professional careers',
  'Organizations building capable teams',
  'Professionals enhancing leadership and employability skills',
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background relative overflow-hidden">
    {/* Abstract Background Elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="gold-bar mb-10" />
          <h2 className="text-5xl md:text-6xl font-black text-primary uppercase tracking-tighter mb-10 font-display">ABOUT US</h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-xl text-foreground font-medium leading-relaxed">
              Triangle HR Solutions is a professionally managed learning and human resource development organization dedicated to building industry-ready talent and strengthening organizational capability.
            </p>
            <p className="text-xl text-foreground font-medium leading-relaxed">
              With over a decade of experience, we design impactful training programs that help individuals and organizations build the skills, mindset, and capabilities needed for the future of work.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">Our solutions support:</h3>
            {solutions.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="text-foreground shrink-0 group-hover:translate-x-1 transition-transform duration-300">
                  <Play size={18} fill="currentColor" />
                </div>
                <span className="text-xl text-foreground font-bold tracking-tight">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative"
        >
          {/* Custom SVG & Glassmorphism Visual */}
          <div className="relative aspect-square flex items-center justify-center">
            {/* Animated SVG Path in background */}
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-primary/5 animate-slow-spin">
              <path 
                fill="currentColor" 
                d="M45,-78.2C58.3,-71.4,69.2,-58.5,76.5,-44.2C83.8,-29.9,87.6,-15,86.4,-0.7C85.2,13.6,79,27.2,71.1,40.5C63.2,53.8,53.7,66.8,40.8,74.6C27.9,82.4,14,84.9,-0.6,86C-15.1,87.1,-30.3,86.7,-43.3,80.1C-56.3,73.5,-67.1,60.7,-74.8,46.7C-82.5,32.7,-87.1,17.4,-87.7,1.8C-88.3,-13.7,-84.8,-29.6,-76,-42.6C-67.2,-55.6,-53.1,-65.7,-38.7,-71.9C-24.3,-78.1,-9.7,-80.4,2.5,-84.6C14.7,-88.9,29.4,-95,45,-78.2Z" 
                transform="translate(100 100)" 
              />
            </svg>
            
            <div className="relative z-10 w-full max-w-[320px] aspect-square rounded-[3rem] bg-white/40 backdrop-blur-xl border border-white/40 shadow-2xl flex flex-col items-center justify-center p-8 text-center overflow-hidden">
               <div className="w-24 h-24 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-primary/20 rotate-12">
                 <span className="text-4xl font-black font-display -rotate-12">10+</span>
               </div>
               <h4 className="text-3xl font-black font-display text-primary leading-tight mb-2 uppercase">Years of Impact</h4>
               <p className="text-foreground/70 font-bold text-sm uppercase tracking-widest">Excellence in HR & Learning</p>
               
               {/* Decorative light rays */}
               <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-primary/5 pointer-events-none" />
            </div>

            {/* Floating abstract dots/nodes */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3 + i, 
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                className="absolute w-3 h-3 bg-primary/30 rounded-full blur-[1px]"
                style={{
                  top: `${20 + (i * 15)}%`,
                  left: `${10 + (i * 20)}%`
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Strategic Pillars Layout */}
      <div className="relative">
        <div className="absolute inset-0 bg-secondary/30 rounded-[3rem] -z-10" />
        <div className="p-10 md:p-20">
          <div className="grid lg:grid-cols-4 gap-12 items-start">
            <div className="lg:col-span-1">
               <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4">Strategic Framework</h3>
               <h4 className="text-4xl font-extrabold font-display leading-tight mb-6">How We Guide Growth</h4>
               <p className="text-muted-foreground font-medium text-lg">Our vision, mission, and objectives are integrated to ensure every learner and organization reaches their full potential.</p>
            </div>
            
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative group pt-8"
                >
                  <div className={`w-16 h-16 ${p.bg} ${p.color} rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:shadow-lg transition-all duration-300`}>
                    <p.icon size={32} />
                  </div>
                  <div className="h-px w-full bg-border mb-8 relative">
                     <div className="absolute top-0 left-0 h-full w-0 bg-primary group-hover:w-full transition-all duration-700" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-foreground mb-4">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium text-lg">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
