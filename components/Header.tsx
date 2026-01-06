
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION, LOGO_WHITE } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleHash = () => setCurrentPath(window.location.hash || '#/');
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHash);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const WHATSAPP_URL = "https://wa.me/919600966664?text=Hi%20ArchoMetri%2C%20I'm%20interested%20in%20your%20photography%20and%20videography%20services.";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled ? 'py-4 bg-black/80 backdrop-blur-2xl border-b border-white/5' : 'py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#/" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center group"
        >
          <img 
            src={LOGO_WHITE} 
            alt="ArchoMetri Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-all duration-500 group-hover:brightness-125"
          />
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2 bg-white/5 p-1.5 rounded-full border border-white/10">
          {NAVIGATION.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`relative px-6 py-2 text-[11px] font-bold uppercase tracking-widest transition-all rounded-full overflow-hidden ${
                currentPath === item.href ? 'text-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {currentPath === item.href && (
                <motion.div 
                  layoutId="nav-bg"
                  className="absolute inset-0 bg-brand z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </motion.a>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-8 py-3 bg-brand/10 border border-brand/20 text-brand hover:bg-brand hover:text-black text-[11px] font-black uppercase tracking-widest transition-all duration-500 rounded-full"
        >
          Inquire
        </motion.a>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 p-3 bg-white/5 rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-5 h-0.5 bg-white rounded-full transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-5 h-0.5 bg-brand rounded-full transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-5 h-0.5 bg-white rounded-full transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 flex flex-col p-8 justify-center items-center"
          >
            <div className="space-y-4 text-center">
              {NAVIGATION.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-4xl font-black uppercase tracking-tighter hover:text-brand transition-colors py-2"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-2xl font-black uppercase tracking-widest text-brand mt-8"
              >
                Inquire via WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
