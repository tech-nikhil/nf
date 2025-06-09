import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-8 md:px-24">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="neuralfence-logo-t.png" 
              alt="NeuralFence" 
              className="h-8 w-auto"
            />
          </div>
          {/* Group navigation and button on the right */}
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-800 hover:text-greenMid transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-800 hover:text-greenMid transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-800 hover:text-greenMid transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-800 hover:text-greenMid transition-colors"
              >
                Contact
              </button>
            </div>
            <div className="hidden md:block">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-greenMid hover:bg-greenDark text-white py-2 px-6 rounded-md transition-colors duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-800">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-md mt-2 shadow-lg">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full mt-4 bg-greenMid hover:bg-greenDark text-white py-2 px-4 rounded-md transition-colors duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;