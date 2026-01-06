
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-3 bg-black/90 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
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
            className="h-8 md:h-10 w-auto brightness-200 group-hover:drop-shadow-[0_0_8px_rgba(169,247,25,0.4)] transition-all duration-300"
          />
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {NAVIGATION.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative text-[10px] font-black uppercase tracking-[0.3em] group"
            >
              <span className={`transition-colors duration-300 ${currentPath === item.href ? 'text-brand' : 'text-zinc-500 group-hover:text-white'}`}>
                {item.name}
              </span>
              {currentPath === item.href && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-brand shadow-[0_0_5px_#A9F719]"
                />
              )}
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            href="#/contact"
            className="px-6 py-2 border border-brand/50 text-brand hover:bg-brand hover:text-black text-[10px] font-black uppercase tracking-widest transition-all duration-300 rounded-sm"
          >
            Inquire
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-brand transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 bg-black z-40 flex flex-col p-12 justify-center"
          >
            <div className="space-y-8">
              {NAVIGATION.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-4xl font-black uppercase tracking-tighter hover:text-brand transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            <div className="mt-24 border-t border-white/10 pt-8">
               <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-4">Social Connect</p>
               <div className="flex space-x-8 text-brand font-black text-sm tracking-widest">
                 <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
                 <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
