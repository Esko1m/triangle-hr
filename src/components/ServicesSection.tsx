import { motion } from 'framer-motion';
import servicesContent from '../content/services.json';

const ServicesSection = () => {
  const { services } = servicesContent;

  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="gold-bar" />
          <h2 className="section-heading text-primary uppercase tracking-tighter mb-4">{services.title}</h2>
        </motion.div>

        <div className="space-y-0">
          {services.items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 -mx-4 px-4 rounded-xl transition-colors duration-300 items-start"
            >
              {/* Circular Image — col 1 */}
              <div className="lg:col-span-2 flex items-start justify-start">
                <div className="relative shrink-0">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-primary/30 transition-colors duration-500 shadow-sm">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-[10px] font-black flex items-center justify-center shadow-md">
                    {s.number}
                  </span>
                </div>
              </div>

              {/* Main Content — col 2 */}
              <div className="lg:col-span-5 pt-1">
                <p className="text-primary/50 text-[10px] font-black uppercase tracking-[0.25em] mb-2">
                  Service Portfolio {s.number}
                </p>
                <h3 className="text-xl md:text-2xl font-bold font-display text-foreground mb-3 leading-snug tracking-tight group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed font-medium">
                  {s.description}
                </p>
              </div>

              {/* Creative Accent Panel — col 3 */}
              <div className="lg:col-span-5 pt-1">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 via-primary/3 to-transparent border border-primary/10 h-full min-h-[140px] flex items-end p-6 group-hover:border-primary/20 transition-all duration-500">
                  {/* Giant decorative number */}
                  <span className="absolute -top-4 -right-2 text-[8rem] font-black text-primary/5 group-hover:text-primary/8 leading-none select-none transition-all duration-500 font-display tracking-tighter">
                    {s.number}
                  </span>
                  {/* Topic keywords in a flowing, spaced typographic display */}
                  <div className="relative z-10 space-y-1">
                    {s.highlights.map((h, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                        <p className="text-xs text-slate-500 font-medium leading-snug group-hover:text-primary/70 transition-colors duration-300">{h}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
