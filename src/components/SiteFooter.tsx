import logo from '@/assets/logo.png';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';

const SiteFooter = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-20 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Brand & Mission */}
          <div className="md:col-span-4 space-y-6">
            <img 
              src={logo} 
              alt="Triangle HR Solutions" 
              className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity cursor-pointer" 
              onClick={() => scrollTo('home')} 
            />
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
              Building industry-ready talent through excellence in HR consultancy and professional training.
            </p>
            <div className="flex items-center gap-5">
              {[Linkedin, Twitter, Facebook, Globe].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-primary transition-colors duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Practical Links */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Services</h4>
            <ul className="space-y-3">
              {['Training', 'Recruitment', 'Events', 'Capability'].map((item) => (
                <li key={item} className="text-slate-500 text-sm hover:text-slate-900 transition-colors cursor-pointer" onClick={() => scrollTo(item.toLowerCase())}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Training', 'Impact'].map((item) => (
                <li key={item} className="text-slate-500 text-sm hover:text-slate-900 transition-colors cursor-pointer" onClick={() => scrollTo(item.toLowerCase())}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Pure Minimalist */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-500 group">
                <Phone size={14} className="text-slate-400 group-hover:text-primary transition-colors" />
                <span className="text-sm font-semibold group-hover:text-slate-900 transition-colors">7338626988</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 group">
                <Mail size={14} className="text-slate-400 group-hover:text-primary transition-colors" />
                <span className="text-sm font-semibold group-hover:text-slate-900 transition-colors">info.trianglehrsolutions@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 group">
                <MapPin size={14} className="text-slate-400 group-hover:text-primary transition-colors" />
                <span className="text-sm font-semibold group-hover:text-slate-900 transition-colors">Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
            © {new Date().getFullYear()} Triangle HR Solutions
          </p>
          <div className="flex items-center gap-6">
             <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
               Associated with <span className="text-slate-700">NAMANAM CENTRE</span>
             </span>
             <a href="#" className="text-slate-400 text-[10px] uppercase font-bold tracking-widest hover:text-slate-900 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

