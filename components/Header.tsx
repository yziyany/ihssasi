import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-primary-dark/95 backdrop-blur shadow-lg' : 'py-5 bg-gradient-to-r from-primary to-primary-dark'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group text-white">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <span className="text-xl md:text-2xl font-extrabold tracking-tight">Ahssassi Academy</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-white font-medium hover:text-accent transition-colors duration-300 text-sm uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary-dark border-t border-white/10 shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white font-medium hover:text-accent transition-colors px-2 py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};