
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mother of 8-year-old patient",
      content: "Dr. Topiwala saved our daughter's life. His expertise and compassionate care made all the difference during a very scary time for our family.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Father of 3-year-old patient",
      content: "The level of care and attention Dr. Topiwala provides is exceptional. He took the time to explain everything and made sure we understood the treatment plan.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Mother of 12-year-old patient",
      content: "We've been seeing Dr. Topiwala for 5 years now. His follow-up care and monitoring have been outstanding. Our son is thriving thanks to his expertise.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Families Are Saying
          </h2>
          <p className="text-lg text-gray-600">
            Read testimonials from families who have experienced our compassionate care
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-orange-600 mr-2" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
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
