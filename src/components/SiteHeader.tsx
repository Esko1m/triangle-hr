import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Training', path: '/training' },
  { name: 'Impact', path: '/impact' },
  { name: 'Contact', path: '/contact' },
  { name: 'Workshops', path: '/workshops' }
];

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 shadow-lg border-b border-border/50'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
          >
            <img
              src={logo}
              alt="Triangle HR Solutions"
              className={`h-20 w-auto transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${isScrolled ? 'text-foreground' : 'text-foreground/90'}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden lg:flex btn-primary px-6 py-3 text-xs"
            >
              Get in Touch
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground transition-colors hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-x-0 top-[100%] transition-all duration-500 md:hidden overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          }`}
      >
        <div className="bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-border shadow-2xl p-6">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className="w-full text-left px-4 py-4 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-all"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="btn-primary w-full justify-center mt-4 py-4"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
