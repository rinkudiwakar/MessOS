import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenModal?: () => void;
}

const Navbar = ({ onOpenModal }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Features', id: 'features' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Portals', id: 'portals' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'About', id: 'about' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 h-[64px] flex items-center transition-all duration-300 ${isScrolled ? 'bg-base/85 backdrop-blur-md border-b border-border' : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-display font-bold text-[22px] text-text-primary tracking-tight">Mess</span>
          <span className="font-display font-bold text-[22px] text-accent tracking-tight">OS</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-[14px] font-medium text-text-secondary hover:text-text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent/70 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollTo('contact')}
            className="text-[13px] font-medium px-4 py-2 rounded-md border border-border text-text-primary hover:border-text-muted transition-colors hover:scale-[1.02] active:scale-[0.98]"
          >
            Contact Us
          </button>
          <button
            onClick={onOpenModal}
            className="text-[13px] font-medium px-4 py-2 rounded-md bg-accent text-white hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_15px_rgba(79,110,247,0.3)]"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-primary p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[64px] left-0 right-0 bg-surface border-b border-border shadow-2xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="text-left text-[16px] font-medium text-text-primary py-2 border-b border-border/50"
              >
                {link.name}
              </button>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full text-[14px] font-medium px-4 py-3 rounded-md border border-border text-text-primary text-center"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenModal) onOpenModal();
                }}
                className="w-full text-[14px] font-medium px-4 py-3 rounded-md bg-accent text-white text-center shadow-[0_0_15px_rgba(79,110,247,0.3)]"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
