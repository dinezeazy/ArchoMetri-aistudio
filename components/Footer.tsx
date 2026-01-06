
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              Archo<span className="text-brand">Metri</span>
            </h2>
            <p className="text-zinc-500 max-w-md leading-relaxed font-light text-lg">
              Documenting the evolution of modern structural engineering through a technical and artistic lens.
            </p>
            <div className="flex space-x-6">
               <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-brand hover:text-brand transition-colors cursor-pointer">IG</div>
               <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-brand hover:text-brand transition-colors cursor-pointer">LI</div>
               <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-brand hover:text-brand transition-colors cursor-pointer">TW</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-brand">Navigation</h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-zinc-400">
              <li><a href="#/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#/gallery" className="hover:text-white transition-colors">Archive</a></li>
              <li><a href="#/services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-brand">Office</h3>
            <p className="text-zinc-400 font-light leading-relaxed">
              Mumbai, BKC 400051<br />
              +91 98765 43210<br />
              projects@archometri.com
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600">
          <p>© {new Date().getFullYear()} ArchoMetri. Visual Engineering.</p>
          <div className="mt-4 md:mt-0 space-x-8">
            <a href="#" className="hover:text-brand">Privacy</a>
            <a href="#" className="hover:text-brand">Terms</a>
            <a href="#" className="hover:text-brand">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
