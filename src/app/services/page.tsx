
'use client'

import React, { useEffect } from 'react';
import ServiceCarousel from '@/components/ServiceCarousel';

interface Service {
    id: number;
    title: string;
    description: string;
}
  
const services: Service[] = [
    { id: 1, title: 'Service 1', description: 'Description for Service 1' },
    { id: 2, title: 'Service 2', description: 'Description for Service 2' },
    { id: 3, title: 'Service 3', description: 'Description for Service 3' },
    { id: 4, title: 'Service 4', description: 'Description for Service 4' },
    { id: 5, title: 'Service 5', description: 'Description for Service 5' },
    { id: 6, title: 'Service 6', description: 'Description for Service 6' },
];

const ServicesPage: React.FC = () => {
  useEffect(() => {
    const handleScroll = (event: Event) => {
      event.preventDefault();
      const target = event.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId || '');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleScroll);

    return () => {
      document.removeEventListener('click', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <ServiceCarousel />
      <div className="mt-8">
        {services.map((service) => (
          <div key={service.id} id={service.title.toLowerCase().replace(/\s/g, '')} className="mb-8">
            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
