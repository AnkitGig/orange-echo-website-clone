
import React from 'react';
import { Heart, Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Dr. Moiz Topiwala</h3>
                <p className="text-sm text-gray-300">MBBS, DNB (Internal Medicine)</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Providing exceptional medical care with expertise in Internal Medicine, Critical Care, and Intensive Care.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-300 hover:text-orange-500 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-300 hover:text-orange-500 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-300 hover:text-orange-500 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-300 hover:text-orange-500 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-orange-500 transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-orange-500 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Specializations</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Critical Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Respiratory Disease</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Infectious Diseases</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Metabolic Diseases</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <p className="text-sm">TrueCare Preventive and Curative Clinic, 205, Second Floor, BM Tower, Indore</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <p className="text-sm">+91 7240272767</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <p className="text-sm">drmoiztopiwala@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Dr. Moiz Topiwala. All rights reserved. | 
            <a href="#" className="text-orange-500 hover:underline ml-1">Privacy Policy</a> | 
            <a href="#" className="text-orange-500 hover:underline ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
