import React from 'react';
import { Book, Target, Trophy, Check, ArrowRight } from 'lucide-react';
import { CourseItem } from '../types';

const courses: CourseItem[] = [
  {
    title: 'General English',
    description: 'Build strong foundation in speaking, listening, reading, and writing for daily life scenarios.',
    features: ['All skill levels (A1-C2)', 'Interactive communication', 'Real-world practice scenarios'],
    icon: Book,
    color: 'bg-blue-600'
  },
  {
    title: 'IELTS Preparation',
    description: 'Intensive coaching to achieve Band 7.5+ for immigration, work, or study abroad.',
    features: ['Band 7.5+ guarantee targets', 'Weekly mock tests', 'Expert exam strategies'],
    icon: Target,
    color: 'bg-indigo-600'
  },
  {
    title: 'TOEFL Preparation',
    description: 'Comprehensive prep for TOEFL iBT. Focus on academic skills for US universities.',
    features: ['Score 100+ objectives', 'Academic vocabulary focus', 'Computer-based training'],
    icon: Trophy,
    color: 'bg-amber-500'
  }
];

export const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-light text-primary rounded-full font-bold text-sm mb-4">
            Our Programs
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Choose Your Path to Success
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive English courses designed for every proficiency level and professional goal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group border border-slate-100"
            >
              <div className={`absolute top-0 left-0 w-full h-2 ${course.color}`}></div>
              
              <div className={`w-16 h-16 ${course.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                <course.icon size={32} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {course.description}
              </p>

              <ul className="space-y-3 mb-8">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-slate-500 text-sm">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`inline-flex items-center font-bold ${course.color === 'bg-amber-500' ? 'text-amber-600' : 'text-primary'} hover:underline`}>
                Enroll Now <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};