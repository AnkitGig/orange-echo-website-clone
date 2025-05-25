
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <p className="text-orange-500 font-semibold mb-2 text-xs sm:text-sm">About Dr. Moiz Topiwala</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <img 
              src="/lovable-uploads/4978b7a0-8c5c-48f3-a329-3107d75ac37f.png"
              alt="Dr. Moiz Topiwala with patients"
              className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md mx-auto lg:max-w-full"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-900 mb-3 sm:mb-4 lg:mb-6 text-center lg:text-left leading-tight">
              Dr. Moiz Topiwala MBBS, DNB (Internal Medicine)
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-gray-600 text-xs sm:text-sm lg:text-base">
              <p className="leading-relaxed">
                Dr. Moiz Topiwala is a <span className="text-orange-500 font-semibold">Physician</span> and <span className="text-blue-900 font-semibold">Intensivist</span> with expertise in patient care and management. Currently, he is practicing at Apple Hospital Indore as a Medical Director. He is skilled to perform all emergency procedures and a certified ACLS and BLS provider. For the hospital, he has managed COVID-19 IPD and OPD during the pandemic.
              </p>
              
              <p className="leading-relaxed">
                He has the experience of managing patients with varying array of illnesses in field of Internal Medicine and Intensive care. He has conducted training sessions of junior doctors and Intensivist in ventilator settings and adjustments in I.C.U.
              </p>
            </div>

            {/* Orange medical cross icon */}
            <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center lg:justify-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <div className="text-white text-base sm:text-lg lg:text-2xl font-bold">✚</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
