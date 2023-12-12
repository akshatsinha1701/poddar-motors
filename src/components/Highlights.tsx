import React from "react";

const Highlights: React.FC = () => {
  const commonColor = "#000000"; // Set your desired black color here

  const highlightsData = [
    { icon: "🌟", text: "24 X 7 helpline service", info: "Lorem ipsum" },
    {
      icon: "💵",
      text: "Cash facility. No policy charge",
      info: "Lorem ipsum",
    },
    {
      icon: "🚗",
      text: "Free Pick and Drop facility (In town)",
      info: "Lorem ipsum",
    },
    { icon: "🧼", text: "Washing with Polishing is free", info: "Lorem ipsum" },
    { icon: "🛡️", text: "Insurance Renewal", info: "Lorem ipsum" },
    {
      icon: "🔧",
      text: "Complete PMS in just 45 mins (40k km to 120k km)",
      info: "Lorem ipsum",
    },
    {
      icon: "🔩",
      text: "Genuine Maruti Accessories and spare parts",
      info: "Lorem ipsum",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <h2 className="text-4xl font-bold mb-4 text-white">Best Services</h2>
      <p className="text-white mb-8">Choose from the best services</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {highlightsData.map((highlight, index) => (
          <div
            key={index}
            className="flex flex-row items-center text-white border p-4 rounded-md"
            style={{ backgroundColor: commonColor }}
          >
            <div className="mr-4 text-2xl">{highlight.icon}</div>
            <div>
              <p className="font-bold text-lg">{highlight.text}</p>
              <p className="text-sm">{highlight.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
