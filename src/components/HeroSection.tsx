
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gray-100 py-8 sm:py-12 lg:py-16 pt-20 sm:pt-24 lg:pt-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="relative z-10 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
              <span className="text-blue-900">Dr. </span>
              <span className="text-orange-500">Moiz</span>
              <br />
              <span className="text-blue-900">Topiwala</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 lg:mb-8 italic px-2 sm:px-0">
              Physician, Intensivist, Chest Physician
            </p>
            
            {/* Decorative icons - hidden on mobile for better layout */}
            <div className="hidden lg:block">
              <div className="absolute -top-10 right-20 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
              </div>
              <div className="absolute top-32 -left-10 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="text-blue-500 text-2xl">⚕</div>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <img 
              src="/lovable-uploads/29579fc9-d8ff-4dc1-a4b4-d4e30f9da6b8.png"
              alt="Dr. Moiz Topiwala"
              className="w-full h-auto max-w-sm sm:max-w-md mx-auto lg:max-w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Background geometric pattern - simplified for mobile */}
      <div className="absolute inset-0 opacity-5 lg:opacity-10">
        <div className="absolute top-10 left-4 lg:top-0 lg:left-0 w-12 h-12 lg:w-32 lg:h-32 border-2 border-gray-300 transform rotate-45"></div>
        <div className="absolute top-20 right-6 lg:top-20 lg:right-20 w-10 h-10 lg:w-24 lg:h-24 border-2 border-gray-300 transform rotate-45"></div>
        <div className="absolute bottom-10 left-8 lg:bottom-20 lg:left-20 w-11 h-11 lg:w-28 lg:h-28 border-2 border-gray-300 transform rotate-45"></div>
      </div>
    </section>
  );
};

export default HeroSection;
