import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

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
  const location = useLocation();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-border/50 ${isScrolled ? 'py-3 shadow-lg' : 'py-5 shadow-sm'
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
              className={`h-24 w-auto transition-all duration-300 drop-shadow-sm ${isScrolled ? 'scale-90' : 'scale-100'}`}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
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
        <div className="bg-white/98 dark:bg-black/98 backdrop-blur-2xl border-t border-border shadow-2xl p-6">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={`w-full text-left px-5 py-4 text-sm font-semibold rounded-2xl transition-all ${location.pathname === item.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-primary/5 hover:text-primary'
                  }`}
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
