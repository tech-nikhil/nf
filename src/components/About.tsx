import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Lock, AlertTriangle, Shield } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const securityStats = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-red-600" />,
      title: '3.8M+',
      description: 'Cyber Attacks Daily'
    },
    {
      icon: <Lock className="h-6 w-6 text-amber-600" />,
      title: '$4.35M',
      description: 'Avg. Breach Cost'
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-orange-600" />,
      title: '94%',
      description: 'Malware via Email'
    },
    {
      icon: <Shield className="h-6 w-6 text-greenMid" />,
      title: '82%',
      description: 'Preventable Breaches'
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-8 md:px-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 bg-green-100 text-greenDark rounded-full text-sm font-medium mb-4">
            Why Security Matters
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Cost of Inadequate Security
          </h2>
          <p className="text-lg text-gray-600">
            In today's digital landscape, cybersecurity isn't just an IT concern—it's a business imperative. 
            The rising frequency and sophistication of cyber attacks make robust security measures essential.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {securityStats.map((stat, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                {stat.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Protect Your Business with DevSecOps
              </h3>
              <p className="text-gray-600 mb-6">
                DevSecOps isn't just about tools—it's about building security into every stage of your development process. 
                Our approach helps you stay ahead of threats while maintaining development velocity.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-greenMid mt-1 mr-3" />
                  <span className="text-gray-700">Continuous security monitoring and threat detection</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-greenMid mt-1 mr-3" />
                  <span className="text-gray-700">Automated security testing and vulnerability scanning</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-greenMid mt-1 mr-3" />
                  <span className="text-gray-700">Compliance automation and security policy enforcement</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4 bg-green-50 rounded-2xl p-6">
                  <div className="bg-white p-6 rounded-lg flex flex-col items-start shadow-sm">
                    <div className="bg-green-100 p-2 rounded-full mb-3">
                      <ShieldCheck className="h-6 w-6 text-greenMid" />
                    </div>
                    <h4 className="font-bold text-lg mb-1">Early Detection</h4>
                    <p className="text-sm text-gray-600">Identify vulnerabilities before they reach production</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg flex flex-col items-start shadow-sm">
                    <div className="bg-cyan-100 p-2 rounded-full mb-3">
                      <AlertTriangle className="h-6 w-6 text-cyan-600" />
                    </div>
                    <h4 className="font-bold text-lg mb-1">Fast Response</h4>
                    <p className="text-sm text-gray-600">Rapid incident response and remediation</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg flex flex-col items-start shadow-sm">
                    <div className="bg-yellow-100 p-2 rounded-full mb-3">
                      <Lock className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h4 className="font-bold text-lg mb-1">Automation</h4>
                    <p className="text-sm text-gray-600">Automated security checks and testing</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg flex flex-col items-start shadow-sm">
                    <div className="bg-green-100 p-2 rounded-full mb-3">
                      <Shield className="h-6 w-6 text-greenMid" />
                    </div>
                    <h4 className="font-bold text-lg mb-1">Compliance</h4>
                    <p className="text-sm text-gray-600">Built-in regulatory compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;