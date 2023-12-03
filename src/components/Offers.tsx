
import React from 'react';

const offers: string[] = [
  'Special Offer: 20% off on all items!',
  'Buy one, get one free - Limited time!',
  'Flash Sale: Up to 50% off - Shop now!',
  // Add more offers as needed
];

export default function Offers() {
    return (
      <div className="overflow-hidden">
        <div className="flex marquee animate-marquee">
          {offers.map((offer, index) => (
            <span key={index} className="mr-8 whitespace-nowrap">
              {offer}
            </span>
          ))}
        </div>
      </div>
    )
  }