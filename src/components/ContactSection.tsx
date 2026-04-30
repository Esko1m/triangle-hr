import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import contactContent from '../content/contact.json';

const ContactSection = () => {
  const { contact } = contactContent;
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch('https://formspree.io/f/xwvnarzj', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const inputClass = "w-full bg-white border border-border/60 rounded-xl px-6 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm";

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="gold-bar" />
              <h2 className="section-heading mb-6">{contact.title}</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                {contact.description}
              </p>
            </motion.div>

            <div className="space-y-10">
              
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent shadow-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-black text-muted-foreground uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl font-bold text-foreground">{contact.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-700 shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-black text-muted-foreground uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-bold text-foreground">{contact.location}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl shadow-primary/5 border border-border/50 relative z-10">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-foreground mb-4 font-display">Message Sent!</h3>
                  <p className="text-muted-foreground text-lg mb-8 font-medium">We appreciate you reaching out. Our team will get back to you shortly.</p>
                  <button onClick={() => setFormStatus('idle')} className="btn-primary w-full">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground mb-8 font-display">{contact.formTitle}</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-muted-foreground uppercase tracking-widest px-2">Your Name</label>
                      <input name="name" required className={inputClass} placeholder="Full name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-muted-foreground uppercase tracking-widest px-2">Work Email</label>
                      <input name="email" type="email" required className={inputClass} placeholder="email@company.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-black text-muted-foreground uppercase tracking-widest px-2">Organization</label>
                    <input name="organization" className={inputClass} placeholder="Company or Institution" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-black text-muted-foreground uppercase tracking-widest px-2">Your Message</label>
                    <textarea name="message" required rows={4} className={inputClass} placeholder="How can we help your organization grow?" />
                  </div>
                  
                  {formStatus === 'error' && (
                    <motion.p initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-destructive font-bold text-sm bg-destructive/10 p-4 rounded-xl text-center">
                      Something went wrong. Please try again or email us directly.
                    </motion.p>
                  )}
                  
                  <button 
                    type="submit" 
                    disabled={formStatus === 'sending'} 
                    className="btn-primary w-full py-5 text-base"
                  >
                    {formStatus === 'sending' ? (
                      <span className="flex items-center gap-2">
                         <Send size={18} className="animate-pulse" /> Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                         Send Message <ArrowRight size={18} />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
