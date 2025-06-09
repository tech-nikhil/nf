import React from 'react';
import ServiceCard from './ServiceCard';
import { 
  ShieldCheck, 
  Code, 
  Server, 
  Gauge, 
  Cloud, 
  FileCode 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Security Implementation',
      description: 'We integrate security throughout your development lifecycle with automated testing, vulnerability scanning, and secure coding practices.',
      icon: <ShieldCheck className="h-10 w-10 text-greenDark" />,
      color: 'from-green-50 to-green-100',
      iconBg: 'bg-greenLight bg-opacity-30'
    },
    {
      title: 'CI/CD Pipeline Optimization',
      description: 'Build efficient, secure continuous integration and delivery pipelines that accelerate deployment while maintaining quality standards.',
      icon: <Code className="h-10 w-10 text-cyan-700" />,
      color: 'from-cyan-50 to-cyan-100',
      iconBg: 'bg-cyan-100'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Implement infrastructure as code solutions using Terraform, CloudFormation, or Ansible to ensure consistency and version control.',
      icon: <Server className="h-10 w-10 text-sky-700" />,
      color: 'from-sky-50 to-sky-100',
      iconBg: 'bg-sky-100'
    },
    {
      title: 'Performance Optimization',
      description: 'Identify bottlenecks and optimize your systems for speed, reliability, and cost-effectiveness using advanced monitoring tools.',
      icon: <Gauge className="h-10 w-10 text-indigo-700" />,
      color: 'from-indigo-50 to-indigo-100',
      iconBg: 'bg-indigo-100'
    },
    {
      title: 'Cloud Migration',
      description: 'Securely migrate your infrastructure to the cloud with minimal disruption and maximum security, using best practices for AWS, Azure, or GCP.',
      icon: <Cloud className="h-10 w-10 text-purple-700" />,
      color: 'from-purple-50 to-purple-100',
      iconBg: 'bg-purple-100'
    },
    {
      title: 'Compliance as Code',
      description: 'Automate compliance checks and security standards enforcement with pre-built templates for HIPAA, PCI-DSS, SOC2, and more.',
      icon: <FileCode className="h-10 w-10 text-pink-700" />,
      color: 'from-pink-50 to-pink-100',
      iconBg: 'bg-pink-100'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-8 md:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-green-100 text-greenDark rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive DevSecOps Solutions
          </h2>
          <p className="text-xl text-gray-600">
            We provide end-to-end services to help your organization implement DevSecOps practices that enhance security, accelerate delivery, and improve quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              iconBg={service.iconBg}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;