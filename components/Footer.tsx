import React from 'react';
import { Facebook, Instagram, Linkedin, GraduationCap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
            <GraduationCap className="text-accent w-8 h-8" />
            <span className="text-2xl font-extrabold tracking-tight">Ahssassi Academy</span>
        </div>
        
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Premier English Language Academy in Morocco. Empowering students to achieve global success through language mastery.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-slate-300 hover:text-white">
            <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors text-slate-300 hover:text-white">
            <Instagram size={20} />
          </a>
          <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors text-slate-300 hover:text-white">
            <Linkedin size={20} />
          </a>
        </div>

        <div className="border-t border-slate-800 pt-8 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Ahssassi Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};