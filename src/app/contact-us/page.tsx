// pages/contact.tsx

import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-gray-600">
        Have questions or want to get in touch with us? Feel free to contact our team!
      </p>
      <ul className="mt-4 text-gray-600">
        <li>Email: info@example.com</li>
        <li>Phone: +1 (123) 456-7890</li>
        <li>Address: 123 Main Street, Cityville, Country</li>
      </ul>
    </div>
  );
};

export default ContactPage;
