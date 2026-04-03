import { motion } from 'framer-motion';
import { Heart, ChevronRight, CheckCircle2 } from 'lucide-react';

const initiatives = [
  'Responsible & Inclusive HR practices',
  'Inter-disciplinary professional development platforms',
  'Youth career empowerment & orientation programs',
];

const SocialImpactSection = () => (
  <section id="impact" className="section-padding bg-secondary overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="gold-bar" />
          <h2 className="section-heading mb-8">Social Impact & Collaborations</h2>
          <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-8">
            Triangle HR Solutions actively supports inclusive professional development through collaborations with organizations dedicated to sustainable livelihood.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            We partner with organizations like NAMANAM Centre for Sustainable Livelihood to create meaningful opportunities and bridge the gap between skill development and professional success for underserved communities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="card-elevated p-10 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
            
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                <Heart size={32} className="fill-primary/20" />
              </div>
              <h3 className="text-2xl font-bold font-display text-foreground">Our Impact Focus</h3>
            </div>
            
            <ul className="space-y-6">
              {initiatives.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-100 rounded-full p-1 flex-shrink-0">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                  </div>
                  <span className="text-foreground font-semibold text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SocialImpactSection;
