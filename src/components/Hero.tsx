import React, { useEffect, useState } from 'react';
import { Shield, Lock, Server } from 'lucide-react';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Secure', 'Resilient', 'Automated'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-8 md:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-green-100 text-greenDark rounded-full text-sm font-medium">
              DevSecOps Experts
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Building{' '}
              <span className="text-greenMid relative inline-block min-w-[160px]">
                {words.map((word, index) => (
                  <span 
                    key={word}
                    className={`absolute left-0 transition-opacity duration-500 ${
                      index === currentWord ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {word}
                  </span>
                ))}
                <span className="invisible">{words[0]}</span>
              </span>
              <br />Infrastructure
            </h1>
            <p className="text-xl text-gray-600 md:pr-12 mb-6">
              We help enterprises implement robust DevSecOps practices to deliver
              secure, high-quality software at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-greenMid hover:bg-greenDark text-white py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                Explore Services
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-greenLight bg-opacity-20 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-greenDark" />
                </div>
                <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Advanced security measures integrated at every development stage</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-cyan-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Lock className="h-8 w-8 text-cyan-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compliance Ready</h3>
                <p className="text-gray-600">Built-in compliance with industry standards and regulations</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 col-span-2">
                <div className="bg-sky-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Server className="h-8 w-8 text-sky-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Automated Infrastructure</h3>
                <p className="text-gray-600">Streamlined deployment and management with advanced automation tools</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">CI/CD</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Cloud Native</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">DevSecOps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;