import React from 'react';
import { UserCheck, Smartphone, Award, TrendingUp } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: 'Expert Teachers',
    description: 'Highly qualified instructors with international certifications (CELTA, TESOL).',
    icon: UserCheck
  },
  {
    title: 'Online & On-site',
    description: 'Flexible learning options to fit your busy schedule and learning preference.',
    icon: Smartphone
  },
  {
    title: 'Certified Programs',
    description: 'Receive recognized certificates upon successful completion of your course.',
    icon: Award
  },
  {
    title: 'Proven Results',
    description: '95% success rate with our students achieving their desired exam scores.',
    icon: TrendingUp
  }
];

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-light text-primary rounded-full font-bold text-sm mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900">
            Excellence in English Education
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-light to-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-primary-light">
                <feature.icon className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};