
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      {/* Top contact bar */}
      <div className="bg-orange-500 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-2 sm:space-x-6">
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Tel: </span>
                <span>+91 7240272767</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>drmoiztopiwala@gmail.com</span>
              </div>
              <div className="hidden lg:block text-xs">
                <span>TrueCare Preventive and Curative Clinic - 205, Second Floor, BM Tower, Opposite Lotus Electronics, Sapna Sangeeta Road, Indore</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Facebook className="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer hover:text-orange-200" />
              <Instagram className="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer hover:text-orange-200" />
              <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 cursor-pointer hover:text-orange-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
              <span className="text-blue-900">Dr. </span>
              <span className="text-orange-500">Moiz </span>
              <span className="text-blue-900">Topiwala</span>
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#home" className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors text-sm">Home</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors text-sm">About</a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors text-sm">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-orange-500 transition-colors text-sm">Gallery</a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors text-sm">Testimonials</a>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors text-sm">
              Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={closeMenu} />
        )}

        {/* Mobile menu */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-blue-900">Menu</h2>
              <button 
                onClick={closeMenu}
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-1">
              <a 
                href="#home" 
                className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors rounded-lg"
                onClick={closeMenu}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors rounded-lg"
                onClick={closeMenu}
              >
                About
              </a>
              <a 
                href="#services" 
                className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors rounded-lg"
                onClick={closeMenu}
              >
                Services
              </a>
              <a 
                href="#gallery" 
                className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors rounded-lg"
                onClick={closeMenu}
              >
                Gallery
              </a>
              <a 
                href="#testimonials" 
                className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors rounded-lg"
                onClick={closeMenu}
              >
                Testimonials
              </a>
              <button 
                className="mt-4 bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors text-center w-full"
                onClick={closeMenu}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
