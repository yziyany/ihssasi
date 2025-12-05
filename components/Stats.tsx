import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { number: '5000+', label: 'Students Enrolled' },
  { number: '95%', label: 'Success Rate' },
  { number: '50+', label: 'Expert Instructors' },
  { number: '7.5+', label: 'Avg IELTS Score' },
];

export const Stats: React.FC = () => {
  return (
    <section className="relative -mt-16 z-20 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 lg:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, index) => (
            <div key={index} className="text-center pt-4 md:pt-0">
              <span className="block text-4xl lg:text-5xl font-extrabold text-primary mb-2">
                {stat.number}
              </span>
              <span className="text-gray-500 font-medium text-sm uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};