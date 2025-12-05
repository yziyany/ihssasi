import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Courses } from './components/Courses';
import { WhyUs } from './components/WhyUs';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Courses />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;