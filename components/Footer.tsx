
import React from 'react';
import { LOGO_WHITE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-10">
            <img 
              src={LOGO_WHITE} 
              alt="ArchoMetri Logo" 
              className="h-10 w-auto object-contain"
            />
            <p className="text-zinc-500 max-w-md leading-relaxed font-medium text-lg">
              Visualizing the structural symphony. We capture the intersections of architecture and industry with surgical precision.
            </p>
            <div className="flex space-x-4">
               {['IG', 'LI', 'VM'].map(s => (
                 <div key={s} className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-[10px] font-black hover:border-brand hover:text-brand transition-all cursor-pointer">
                   {s}
                 </div>
               ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-brand">Directory</h3>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
              <li><a href="#/" className="hover:text-white transition-colors">Studio</a></li>
              <li><a href="#/gallery" className="hover:text-white transition-colors">The Archive</a></li>
              <li><a href="#/services" className="hover:text-white transition-colors">Capabilities</a></li>
              <li><a href="#/contact" className="hover:text-white transition-colors">Consultation</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-brand">Connect</h3>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">
              BKC, Mumbai 400051<br />
              hello@archometri.com<br />
              +91 9600966664
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-700">
          <p>© {new Date().getFullYear()} ArchoMetri. High-Precision Visual Documentation.</p>
          <div className="mt-4 md:mt-0 space-x-8">
            <a href="#/privacy" className="hover:text-brand transition-colors">Privacy</a>
            <a href="#/security" className="hover:text-brand transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
