
import React from 'react';
import { Heart, Award, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-orange-50 to-orange-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Expert Pediatric Cardiology Care for Your Child
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Dr. Moiz Topiwala provides comprehensive cardiac care for children with congenital heart conditions, 
              ensuring the best possible outcomes with compassionate, family-centered treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-600 hover:text-white transition-colors">
                Learn More
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-700">15+ Years Experience</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-700">Board Certified</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-semibold text-gray-700">1000+ Patients</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Dr. Moiz Topiwala"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold text-orange-600">15+</p>
              <p className="text-sm text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
