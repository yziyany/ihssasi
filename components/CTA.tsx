import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Ready to Start Your English Journey?
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Take the first step towards fluency. Get a free level assessment today and find out which course is perfect for you.
        </p>
        <a 
          href="#contact" 
          className="inline-block px-10 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-xl"
        >
          Start Free Assessment
        </a>
      </div>
    </section>
  );
};