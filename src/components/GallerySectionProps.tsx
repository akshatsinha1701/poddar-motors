// components/GallerySection.tsx
import React from "react";
import Image from "next/image";

interface GallerySectionProps {
  galleryImages: string[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ galleryImages }) => {
  return (
    <div className="mt-8 p-4 bg-gray-100 text-gray-800 text-center">
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg hover:shadow-lg transition duration-300"
          >
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              layout="responsive"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
