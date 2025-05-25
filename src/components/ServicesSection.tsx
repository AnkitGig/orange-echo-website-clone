
import React from 'react';
import { Heart, Wind, ShieldCheck, Droplets, Stethoscope, Droplet } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Critical Care",
      description: "Get expert opinion and care of critically ill ICU patients. 7 years of experience in critical care and has worked as Head intensivist in various reputed hospitals.",
      highlighted: true
    },
    {
      icon: Wind,
      title: "Respiratory Disease",
      description: "Get all latest treatment options especially for patients with COPD and Bronchial Asthma. Vast experience in managing patients of lung failure on ventilators."
    },
    {
      icon: ShieldCheck,
      title: "Infectious Diseases",
      description: "Get expert opinion and management for infectious diseases - Dengue, Typhoid, Tuberculosis etc. Dr. Moiz Topiwala has experience of treating 1000+ COVID patients. Get expert opinion for HIV + patients and other health issues related to it."
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
      icon: Droplet,
      title: "Kidney Diseases",
      description: "Get expert opinion and treatment options on all patients with acute and chronic kidney diseases and kidney failures."
    }
  ];

  return (
    <section id="services" className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-orange-500 font-semibold mb-2 text-xs sm:text-sm">SPECIALIZATION</p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-900 mb-4 sm:mb-6 lg:mb-8">
            Expertise Area
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-0">
            Dr. Moiz Topiwala has expertise in metabolic diseases like Diabetes, Thyroid disorder, Obesity, Hypertension with counselling and knowledge about right diet and workout.
          </p>
          
          <div className="space-y-1 sm:space-y-2 text-left max-w-4xl mx-auto text-xs sm:text-sm">
            <div className="flex items-start text-gray-600">
              <span className="text-orange-500 mr-2 mt-1 flex-shrink-0">✓</span>
              <span>Thorough in Emergency Procedures like IJV cannulation, endotracheal intubation, H.D catheterisation, Arterial line placement.</span>
            </div>
            <div className="flex items-start text-gray-600">
              <span className="text-orange-500 mr-2 mt-1 flex-shrink-0">✓</span>
              <span>ACLS and BLS provider and Instructor</span>
            </div>
            <div className="flex items-start text-gray-600">
              <span className="text-orange-500 mr-2 mt-1 flex-shrink-0">✓</span>
              <span>Chronic care understanding</span>
            </div>
            <div className="flex items-start text-gray-600">
              <span className="text-orange-500 mr-2 mt-1 flex-shrink-0">✓</span>
              <span>Medical training coordination</span>
            </div>
            <div className="flex items-start text-gray-600">
              <span className="text-orange-500 mr-2 mt-1 flex-shrink-0">✓</span>
              <span>Geriatric issues expertise</span>
            </div>
            <div className="flex items-start text-gray-600">
              <span className="text-orange-500 mr-2 mt-1 flex-shrink-0">✓</span>
              <span>Emergency care coordination</span>
            </div>
            <div className="flex items-start text-gray-600">
              <span className="text-orange-500 mr-2 mt-1 flex-shrink-0">✓</span>
              <span>Policies and procedures</span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className={`bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${service.highlighted ? 'border-t-4 border-orange-500' : ''}`}>
              <div className="bg-orange-500 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                <service.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900 mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
