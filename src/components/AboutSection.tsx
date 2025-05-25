
import React from 'react';
import { GraduationCap, Award, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "MD from Harvard Medical School, Pediatric Cardiology Fellowship at Boston Children's Hospital"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Board Certified in Pediatric Cardiology, American Board of Pediatrics"
    },
    {
      icon: Users,
      title: "Experience",
      description: "15+ years treating pediatric cardiac conditions with over 1000 successful cases"
    },
    {
      icon: Clock,
      title: "Availability",
      description: "Flexible scheduling with same-day appointments available for urgent cases"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Dr. Moiz Topiwala in clinic"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Dr. Moiz Topiwala
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Dr. Moiz Topiwala is a board-certified pediatric cardiologist with over 15 years of experience 
              in treating children with heart conditions. He is dedicated to providing the highest quality 
              cardiac care while ensuring a comfortable and supportive environment for both patients and families.
            </p>
            <p className="text-gray-600 mb-8">
              His expertise includes congenital heart disease, cardiac catheterization, echocardiography, 
              and preventive cardiology. Dr. Topiwala believes in a family-centered approach to care, 
              working closely with parents and caregivers to develop personalized treatment plans.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-orange-600 p-2 rounded-lg">
                    <credential.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{credential.title}</h4>
                    <p className="text-sm text-gray-600">{credential.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
