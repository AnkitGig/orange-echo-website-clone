
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient Family Member",
      content: "Dr. Topiwala's expertise in critical care saved my father's life. His compassionate approach and thorough knowledge made all the difference during a very difficult time.",
      rating: 5
    },
    {
      name: "Michael Chen", 
      role: "COVID Recovery Patient",
      content: "Dr. Moiz handled my COVID treatment with exceptional care. His experience with 1000+ COVID patients really showed in his treatment approach and recovery plan.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Diabetes Patient",
      content: "The dietary counseling and diabetes management plan from Dr. Topiwala has completely transformed my health. His holistic approach is remarkable.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-2">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Read testimonials from patients who have experienced our expert medical care
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-orange-500 mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-blue-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
