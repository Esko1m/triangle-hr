import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { Mail, MapPin, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Training', path: '/training' },
  { name: 'Impact', path: '/impact' },
  { name: 'Contact', path: '/contact' },
  { name: 'Workshops', path: '/workshops' }
];

const SiteFooter = () => {
  return (
    <footer className="bg-white pt-20 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Brand & Mission */}
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="Triangle HR Solutions" 
                className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity cursor-pointer" 
              />
            </Link>
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

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Quick Links</h4>
              <ul className="space-y-3">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path} 
                      className="text-slate-500 text-sm hover:text-slate-900 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 pt-10 md:pt-0">
              <div className="hidden md:block h-[10px]" /> {/* Spacer to align with Quick Links header */}
              <ul className="space-y-3 mt-6">
                {navItems.slice(4).map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path} 
                      className="text-slate-500 text-sm hover:text-slate-900 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact - Pure Minimalist */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Get in Touch</h4>
            <div className="space-y-4">
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
             <Link to="/privacy" className="text-slate-400 text-[10px] uppercase font-bold tracking-widest hover:text-slate-900 transition-colors">Privacy</Link>
             <Link to="/admin-portal" className="text-slate-300 text-[10px] uppercase font-bold tracking-widest hover:text-primary transition-colors ml-4">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

