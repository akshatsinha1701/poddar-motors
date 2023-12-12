// pages/Contact.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const ContactPage: React.FC = () => {
  const socialMediaIcons = [
    { icon: <FaTwitter />, link: "https://twitter.com/" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/" },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-100">
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            Have questions or want to get in touch with us? Feel free to contact
            our team!
          </p>

          {/* Contact Form */}
          <form className="mb-8">
            {/* Add your form fields here */}
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-600 block">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-gray-600 block">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border rounded-md p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="text-gray-600 block">
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border rounded-md p-2"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>

          {/* Google Map (Replace the URL with the actual embed URL) */}
          <iframe
            title="Google Map"
            className="w-full h-60 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.051929135624!2d85.2956423149925!3d23.357121684732676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcb84bc6bbcee9%3A0x6821bcf8f276db7d!2sKokar%20Industrial%20Area%2C%20Ranchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1640441035763!5m2!1sen!2sin"
            allowFullScreen
          ></iframe>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 mt-4">
            {socialMediaIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-blue-500 hover:text-blue-700 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactPage;
