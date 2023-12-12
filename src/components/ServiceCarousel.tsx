"use client";
// ServiceCarousel.tsx

import React, { useState } from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  id: number;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Wheel Alignment",
    description: "Computerized wheel alignment",
  },
  {
    id: 2,
    title: " wheel balancing",
    description: "Computerized wheel balancing",
  },
  { id: 3, title: "Washing", description: "Car wash with free polishing" },
  { id: 4, title: "PMS", description: "32 point check" },
  { id: 5, title: "Service 5", description: "Description for Service 5" },
  { id: 6, title: "Service 6", description: "Description for Service 6" },
];

const ServiceCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + services.length) % services.length
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex"
        style={{
          transform: `translateX(-${currentSlide * (100 / 3)}%)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {services.map((service) => (
          <div key={service.id} className="flex-shrink-0 w-full sm:w-1/3 p-4">
            <ServiceCard
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default ServiceCarousel;
