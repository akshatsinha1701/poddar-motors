import React from "react";

const Footer: React.FC = () => {
  const contactInfo = {
    logo: "/path/to/your/logo.png",
    email: "info@poddarmotors.com",
    phone: "+91 123 456 7890",
  };

  const homeSections = [
    { label: "Home", link: "#" },
    { label: "Services", link: "#services" },
    { label: "Highlights", link: "#highlights" },
    // Add more sections as needed
  ];

  const renderContactColumn = () => (
    <div className="flex flex-col items-start mr-8">
      <img src={contactInfo.logo} alt="Company Logo" className="mb-4" />
      <a
        href={`mailto:${contactInfo.email}`}
        className="text-blue-500 hover:underline mb-2"
      >
        {contactInfo.email}
      </a>
      <a
        href={`tel:${contactInfo.phone}`}
        className="text-blue-500 hover:underline"
      >
        {contactInfo.phone}
      </a>
    </div>
  );

  const renderSectionsColumn = () => (
    <div className="flex flex-col items-start">
      {homeSections.map((section, index) => (
        <a
          key={index}
          href={section.link}
          className="text-blue-500 hover:underline mb-2"
        >
          {section.label}
        </a>
      ))}
    </div>
  );

  return (
    <footer className="bg-gray-800 p-8 text-white">
      <div className="flex flex-wrap justify-between">
        {renderContactColumn()}
        {renderSectionsColumn()}
        {/* Add more columns as needed */}
      </div>
    </footer>
  );
};

export default Footer;
