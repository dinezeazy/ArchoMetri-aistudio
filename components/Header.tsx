
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION } from '../constants';

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
      isScrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#/" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-1 group"
        >
          <div className="w-2 h-2 bg-brand mr-2 group-hover:scale-150 transition-transform duration-300"></div>
          <span className="text-xl font-black uppercase tracking-tighter">
            Archo<span className="text-zinc-500 font-light group-hover:text-brand transition-colors">Metri</span>
          </span>
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
              className="relative text-[11px] font-bold uppercase tracking-[0.2em] group"
            >
              <span className={`transition-colors duration-300 ${currentPath === item.href ? 'text-brand' : 'text-zinc-400 group-hover:text-white'}`}>
                {item.name}
              </span>
              {currentPath === item.href && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-brand"
                />
              )}
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            href="#/contact"
            className="px-5 py-2 border border-brand/30 hover:bg-brand hover:text-black text-[10px] font-black uppercase tracking-widest transition-all duration-300"
          >
            Inquire
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col space-y-1.5"
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
                  className="block text-5xl font-black uppercase tracking-tighter hover:text-brand transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            <div className="mt-24 border-t border-white/10 pt-8">
               <p className="text-zinc-500 text-xs uppercase tracking-widest">Follow us</p>
               <div className="flex space-x-6 mt-4 text-brand font-bold text-sm">
                 <a href="#">IG</a>
                 <a href="#">LI</a>
                 <a href="#">VM</a>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
