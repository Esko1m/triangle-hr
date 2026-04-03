import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Triangle HR Solutions completely transformed our hiring process. Their team's understanding of our niche requirements was exceptional.",
    author: "Director of HR",
    company: "Leading Financial Institution",
    rating: 5,
  },
  {
    quote: "The corporate training programs provided by Triangle HR were exactly what our middle management team needed taking their skills to the next level.",
    author: "Operations Manager",
    company: "Retail Enterprise",
    rating: 5,
  },
  {
    quote: "We've been partnering with Triangle for over three years. Their payroll compliance services have given us total peace of mind.",
    author: "CEO",
    company: "Manufacturing Startup",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding bg-secondary relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
    
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center flex flex-col items-center"
      >
        <div className="gold-bar" />
        <h2 className="section-heading mb-6">Client Success Stories</h2>
        <p className="section-subheading text-center">
          We take pride in building lasting relationships with our clients and delivering exceptional HR solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="card-elevated group"
          >
            <Quote className="text-primary/20 w-12 h-12 mb-6 group-hover:text-primary/40 transition-colors" />
            
            <p className="text-foreground/80 font-medium leading-relaxed mb-8 italic">
              "{testimonial.quote}"
            </p>
            
            <div className="mt-auto">
              <div className="flex text-amber-500 mb-4 gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <h4 className="font-bold text-foreground text-lg">{testimonial.author}</h4>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">{testimonial.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
