import Image from "next/image";
import Navbar from "@/components/Navbar";
import ServiceCarousel from "@/components/ServiceCarousel";
import HighlightsSection from "@/components/Highlights";
import GallerySectionProps from "@/components/GallerySectionProps";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  const galleryImages = [
    "/gallery/image1.jpg",
    "/gallery/image2.jpg",
    "/gallery/image3.jpg",
    // Add more images as needed
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-tl from-blue-50 to-blue-100">
        <div className="container mx-auto my-12 p-6 shadow-lg rounded-lg">
          {/* Larger Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div className="lg:w-2/3 lg:pr-8 mb-4 lg:mb-0">
              <h2 className="text-5xl font-bold mb-4 text-black-800">
                Navigating Perfection, Accelerating Satisfaction
              </h2>
              <p className="text-gray-600">
                Welcome to Poddar Motors Pvt. Ltd., where passion for
                automobiles meets precision in automotive care. Our commitment
                is to deliver top-notch services, exceeding your expectations
                since 1996.
              </p>
              <div className="mt-6 space-x-4">
                {/* Call Us Now Button */}
                <a
                  href="tel:+918873002702"
                  className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-transform"
                >
                  Call Us Now
                </a>

                {/* Book a Service Now Button */}
                <a
                  href="/service-booking"
                  className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition-transform"
                >
                  Book a Service Now
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={"/maruti_car.png"}
                  alt="Maruti Suzuki Car"
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <HighlightsSection />

          {/* Service Carousel Section */}
          <ServiceCarousel />

          {/* Gallery Section */}
          <GallerySectionProps galleryImages={galleryImages} />

          <Footer />

          {/* Contact Information Section */}
          <div className="mt-8 p-4 bg-gray-100 text-gray-800 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">
              Contact Us
            </h2>
            <p>Email: info@poddarmotors.com</p>
            <p>Phone: +91 123 456 7890</p>
            <p>Address: Your Business Address, City, Country</p>

            {/* Google Maps Link */}
            <a
              href="https://maps.app.goo.gl/4U6BVF1NkEH6CKxz5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-4 p-2 bg-gray-200 text-gray-800 text-center">
        <p>
          &copy; {new Date().getFullYear()} Poddar Motors Pvt. Ltd. All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Home;
