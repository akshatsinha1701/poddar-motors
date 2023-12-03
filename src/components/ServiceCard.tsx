'use client'

import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">
        <Link href="/services">
          {title}
        </Link>
      </h3>
      <p className="text-gray-600">{description}</p>
      <p>
        <Link href={`/services#${title.toLowerCase().replace(/\s/g, '')}`}>
          Learn more
        </Link>
      </p>
    </div>
  );
};

export default ServiceCard;
