import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Logo } from './Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Visit Us', path: '/visit' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isTransparent ? 'bg-transparent py-6' : 'bg-primary py-4 shadow-md'
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50">
          <Logo fill="white" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                'text-sm font-medium tracking-wide uppercase transition-colors relative group',
                isTransparent ? 'text-white/90 hover:text-white' : 'text-white/90 hover:text-white',
                location.pathname === link.path && 'text-white'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                />
              )}
            </Link>
          ))}
          <Link
            to="/menu"
            className={clsx(
              "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105",
              isTransparent 
                ? "bg-white text-primary hover:bg-white/90"
                : "bg-white text-primary shadow-md hover:shadow-lg hover:bg-white/90"
            )}
          >
            Order Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={clsx("md:hidden z-50", isOpen ? "text-text" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <motion.div
          initial={false}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: '-100%', pointerEvents: 'none' }}
          className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                'text-2xl font-serif transition-colors',
                location.pathname === link.path ? 'text-primary' : 'text-text hover:text-primary'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/menu"
            className="mt-4 px-8 py-3 bg-primary text-white rounded-full text-lg font-medium shadow-md"
          >
            Order Now
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
