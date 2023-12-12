"use client";

import React, { useEffect } from "react";
import ServiceCarousel from "@/components/ServiceCarousel";
import Navbar from "@/components/Navbar";
import Link from "next/link";

interface Service {
  id: number;
  title: string;
  description: string;
}

const services: Service[] = [
  // ... (your existing service data)
];

const ServicesPage: React.FC = () => {
  useEffect(() => {
    const handleScroll = (event: Event) => {
      event.preventDefault();
      const target = event.target as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.substring(1);
      const targetElement = document.getElementById(targetId || "");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleScroll);

    return () => {
      document.removeEventListener("click", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-black text-white p-8">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <ServiceCarousel />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.title.toLowerCase().replace(/\s/g, "")}
              className="flex flex-col items-center text-gray-800 border p-6 rounded-md h-full"
            >
              {/* Placeholder graphic (you can replace this with actual graphics) */}
              <div className="mb-4 text-4xl">🔧</div>
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Link href={`#${service.title.toLowerCase().replace(/\s/g, "")}`}>
                <a className="text-blue-500 hover:underline">Learn More</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
