import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              English From <br />
              <span className="text-accent inline-block mt-2">Zero to Hero</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Master English with Morocco's premier language academy. Expert preparation for IELTS, TOEFL, and TOEIC. Join thousands of successful students achieving their dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-full font-bold text-lg hover:bg-accent-hover transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-accent/20"
              >
                Start Free Assessment
              </a>
              <a 
                href="#courses" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                View Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto lg:ml-auto w-full max-w-lg">
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/3] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center overflow-hidden relative">
                 <img 
                    src="https://picsum.photos/600/450" 
                    alt="Student Learning" 
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
                 />
                 <BookOpen className="text-white/90 w-24 h-24 relative z-10" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-xl">A+</span>
                 </div>
                 <div>
                    <p className="text-sm text-gray-500">Average Grade</p>
                    <p className="font-bold text-gray-900">Excellent Results</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};