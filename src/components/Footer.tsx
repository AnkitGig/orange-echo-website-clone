
import React from 'react';
import { Heart, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Dr. Moiz Topiwala</h3>
                <p className="text-sm text-gray-400">Pediatric Cardiologist</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Providing exceptional pediatric cardiac care with compassion and expertise.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-orange-600 cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-orange-600 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-600 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-orange-600 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-orange-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Congenital Heart Disease</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Cardiac Catheterization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Echocardiography</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">Preventive Cardiology</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Medical Center Drive</p>
              <p>Suite 456, New York, NY 10001</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@drmoiztopiwala.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Dr. Moiz Topiwala. All rights reserved. | 
            <a href="#" className="text-orange-600 hover:underline ml-1">Privacy Policy</a> | 
            <a href="#" className="text-orange-600 hover:underline ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
