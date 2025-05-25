
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gray-100 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-blue-900">Dr. </span>
              <span className="text-orange-500">Moiz</span>
              <br />
              <span className="text-blue-900">Topiwala</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 italic">
              Physician, Intensivist, Chest Physician
            </p>
            
            {/* Decorative icons */}
            <div className="absolute -top-10 right-20 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-500 rounded"></div>
            </div>
            <div className="absolute top-32 -left-10 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="text-blue-500 text-2xl">⚕</div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/29579fc9-d8ff-4dc1-a4b4-d4e30f9da6b8.png"
              alt="Dr. Moiz Topiwala"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 border-2 border-gray-300 transform rotate-45"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-gray-300 transform rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 border-2 border-gray-300 transform rotate-45"></div>
      </div>
    </section>
  );
};

export default HeroSection;
