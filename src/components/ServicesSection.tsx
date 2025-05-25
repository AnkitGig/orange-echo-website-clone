
import React from 'react';
import { Heart, Stethoscope, Activity, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Congenital Heart Disease",
      description: "Comprehensive diagnosis and treatment of congenital heart defects in infants and children."
    },
    {
      icon: Stethoscope,
      title: "Cardiac Catheterization",
      description: "Minimally invasive procedures for diagnostic and therapeutic cardiac interventions."
    },
    {
      icon: Activity,
      title: "Echocardiography",
      description: "Advanced cardiac imaging to assess heart structure and function in pediatric patients."
    },
    {
      icon: Shield,
      title: "Preventive Cardiology",
      description: "Early detection and prevention of cardiovascular risk factors in children and adolescents."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Specialized Pediatric Cardiac Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Providing comprehensive cardiovascular care tailored specifically for children, 
            from newborns to young adults.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-orange-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Emergency Care?</h3>
          <p className="mb-6">Our team is available 24/7 for urgent pediatric cardiac emergencies.</p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Emergency Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
