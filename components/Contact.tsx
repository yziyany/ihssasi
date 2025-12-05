import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { ContactItem } from '../types';

const contactDetails: ContactItem[] = [
  { title: 'Location', info: 'Rabat, Morocco', icon: MapPin },
  { title: 'Phone', info: '+212-621-029837', icon: Phone },
  { title: 'Email', info: 'info@ahssassiacademy.com', icon: Mail },
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-light text-primary rounded-full font-bold text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900">
            Contact Ahssassi Academy
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
            <div className="space-y-8">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <item.icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-lg">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-primary-dark font-medium mb-2">Office Hours</p>
              <p className="text-slate-600">Mon - Fri: 09:00 - 20:00</p>
              <p className="text-slate-600">Sat: 09:00 - 18:00</p>
            </div>
          </div>

          {/* Contact Form Wrapper */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-slate-100 flex flex-col justify-center">
             <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Send us a message</h3>
                <p className="text-slate-600">
                    Fill out the form below or call us directly. We're here to help you succeed!
                </p>
             </div>

             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="I'm interested in the IELTS course..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                    Send Message
                    <Send size={18} />
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};