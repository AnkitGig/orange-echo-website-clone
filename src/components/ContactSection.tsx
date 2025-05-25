
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold mb-2">CONTACT US</p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Schedule Your Consultation
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch to book an appointment or learn more about our services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Address</h4>
                  <p className="text-gray-600">TrueCare Preventive and Curative Clinic<br />205, Second Floor, BM Tower<br />Opposite Lotus Electronics, Sapna Sangeeta Road<br />Indore</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Phone</h4>
                  <p className="text-gray-600">+91 7240272767</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Email</h4>
                  <p className="text-gray-600">drmoiztopiwala@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Clinic Hours</h4>
                  <p className="text-gray-600">
                    Monday - Saturday: 10:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 2:00 PM<br />
                    Emergency: 24/7 Available
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Book Appointment</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <input 
                  type="text" 
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
              <input 
                type="tel" 
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500">
                <option>Select Consultation Type</option>
                <option>Critical Care</option>
                <option>Respiratory Disease</option>
                <option>Infectious Diseases</option>
                <option>Metabolic Diseases</option>
                <option>Heart Diseases</option>
                <option>Kidney Diseases</option>
              </select>
              <textarea 
                placeholder="Message / Symptoms"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
