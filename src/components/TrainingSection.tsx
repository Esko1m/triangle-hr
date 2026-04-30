import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Check, Target, Lightbulb, Users } from 'lucide-react';
import trainingContent from '../content/training.json';

const TrainingSection = () => {
  const { training } = trainingContent;

  return (
    <section id="training" className="section-padding bg-background w-full">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="gold-bar mb-6" />
          <h2 className="section-heading mb-6 tracking-tighter">{training.title}</h2>
          <p className="section-subheading max-w-2xl bg-gradient-to-r from-muted-foreground to-foreground bg-clip-text text-transparent font-medium">
            {training.description}
          </p>
        </motion.div>

        {/* Methodology Section - The "Ladder" Vertical Approach */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32 items-start">
          <div className="lg:col-span-4 sticky top-32">
            <div className="p-8 bg-secondary/30 rounded-3xl border border-primary/10">
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">{training.process.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                {training.process.description}
              </p>
              <div className="space-y-4">
                {['Learn', 'Practice', 'Apply', 'Improve'].map((label, i) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-foreground/80 tracking-wide uppercase">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4 relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border/50 hidden md:block" />
            {training.process.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-0 md:pl-20 group"
              >
                <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-background border border-border rounded-2xl items-center justify-center z-10 transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10">
                  <span className="font-display font-extrabold text-foreground/20 text-3xl group-hover:text-primary/40 transition-colors">
                    0{i + 1}
                  </span>
                </div>
                <div className="bg-card border border-border/60 p-8 rounded-2xl transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/[0.01]">
                  <div className="flex items-baseline gap-4 mb-3">
                     <span className="md:hidden font-display font-bold text-primary text-sm tracking-widest uppercase">Step {i+1}</span>
                     <h4 className="font-display font-bold text-xl text-foreground">{step.title}</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic border-l-2 border-accent/20 pl-4">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Training Experience & Tools - Edge-Accented Cards */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Experiential Learning</span>
              <h3 className="font-display font-bold text-3xl text-foreground">{training.experience.title}</h3>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {training.experience.categories.map((cat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border-l-4 border-primary p-10 shadow-sm transition-all duration-300 hover:shadow-xl group"
              >
                <h4 className="font-display font-bold text-lg text-foreground mb-8 flex items-center gap-2 group-hover:text-primary transition-colors">
                  <Target size={18} className="text-accent" /> {cat.title}
                </h4>
                <ul className="space-y-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 group/item">
                      <ChevronRight size={14} className="text-primary mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                      <span className="text-sm text-muted-foreground font-medium leading-relaxed group-hover/item:text-foreground transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Value We Deliver - Bold Split Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary p-1 md:p-1.5 rounded-[2rem] overflow-hidden"
        >
          <div className="bg-primary-foreground/5 rounded-[1.9rem] p-12 md:p-20 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="font-display font-bold text-4xl md:text-5xl text-white mb-8 tracking-tighter leading-tight">
                {training.whyChooseUs.title.split('.').map((part, index) => (
                  <span key={index}>
                    {index === 0 ? part : <span className="text-white/40">{part}</span>}
                  </span>
                ))}
              </h3>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                {training.whyChooseUs.description}
              </p>
            </div>
            <div className="space-y-3">
              {training.whyChooseUs.items.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white/5 hover:bg-white/20 transition-all cursor-default group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-white font-semibold text-sm md:text-base leading-tight">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;
