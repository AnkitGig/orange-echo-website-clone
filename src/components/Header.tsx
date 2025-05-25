
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      {/* Top contact bar */}
      <div className="bg-orange-500 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>Tel: +91 7240272767</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>drmoiztopiwala@gmail.com</span>
            </div>
            <div className="hidden md:block">
              <span>TrueCare Preventive and Curative Clinic - 205, Second Floor, BM Tower, Opposite Lotus Electronics, Sapna Sangeeta Road, Indore</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Facebook className="w-4 h-4 cursor-pointer hover:text-orange-200" />
            <Instagram className="w-4 h-4 cursor-pointer hover:text-orange-200" />
            <Linkedin className="w-4 h-4 cursor-pointer hover:text-orange-200" />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-blue-900">Dr. </span>
              <span className="text-orange-500">Moiz </span>
              <span className="text-blue-900">Topiwala</span>
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-orange-500 transition-colors">Gallery</a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors">Testimonials</a>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors">
              Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-orange-500 transition-colors">Gallery</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors">Testimonials</a>
              <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors w-fit">
                Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
