
import React from 'react';
import { Heart, Lungs, ShieldCheck, Droplets, Stethoscope, Kidney } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Critical Care",
      description: "Get expert opinion and care of critically ill ICU patients. 7 years of experience in critical care and has worked as Head intensivist in various reputed hospitals.",
      highlighted: true
    },
    {
      icon: Lungs,
      title: "Respiratory Disease",
      description: "Get all latest treatment options especially for patients with COPD and Bronchial Asthma. Vast experience in managing patients of lung failure on ventilators."
    },
    {
      icon: ShieldCheck,
      title: "Infectious Diseases",
      description: "Get the best in the town opinion and management for infectious diseases - Dengue, Typhoid, Tuberculosis etc. Dr. Moiz Topiwala has experience of treating 1000+ COVID patients. Get expert opinion for HIV + patients and other health issues related to it."
    },
    {
      icon: Droplets,
      title: "Metabolic Diseases",
      description: "Expertise in Metabolic Diseases like Diabetes, Obesity, Hypothyroidism, Dyslipidemia, Hypertension etc with counselling and education regarding diet and workout."
    },
    {
      icon: Stethoscope,
      title: "Heart Diseases",
      description: "Get expert opinion and treatment options on all patients with acute and chronic heart diseases and heart failure."
    },
    {
      icon: Kidney,
      title: "Kidney Diseases",
      description: "Get expert opinion and treatment options on all patients with acute and chronic kidney diseases and kidney failures."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-2">SPECIALIZATION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
            Expertise Area
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
            Dr. Moiz Topiwala has expertise in metabolic diseases like Diabetes, Thyroid disorder, Obesity, Hypertension with counselling and knowledge about right diet and workout.
          </p>
          
          <div className="space-y-2 text-left max-w-4xl mx-auto">
            <div className="flex items-center text-gray-600">
              <span className="text-orange-500 mr-2">✓</span>
              <span>Thorough in Emergency Procedures like IJV cannulation, endotracheal intubation, H.D catheterisation, Arterial line placement.</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="text-orange-500 mr-2">✓</span>
              <span>ACLS and BLS provider and Instructor</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="text-orange-500 mr-2">✓</span>
              <span>Chronic care understanding</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="text-orange-500 mr-2">✓</span>
              <span>Medical training coordination</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="text-orange-500 mr-2">✓</span>
              <span>Geriatric issues expertise</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="text-orange-500 mr-2">✓</span>
              <span>Emergency care coordination</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="text-orange-500 mr-2">✓</span>
              <span>Policies and procedures</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${service.highlighted ? 'border-t-4 border-orange-500' : ''}`}>
              <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
