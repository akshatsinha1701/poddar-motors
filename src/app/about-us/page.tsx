import React from "react";
//import milanPoddarImage from "public\images\website images and logos\Pmpl_logo.png"; // Add the actual path to the image
import Image from "next/image";
//import director_photo from "public/director_photo.jpg";
import Navbar from "@/components/Navbar";
const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-gray-100">
        <div className="flex-grow container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

          <section className="mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to Poddar Motors Pvt. Ltd., where passion meets precision
              in automotive care. Established in 1996, we take pride in being
              one of the largest authorized Maruti Suzuki workshops in Ranchi
              dedicated to delivering top-notch service and exceeding your
              expectations.
            </p>
          </section>

          {/* <section className="mb-12 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <Image
                src={director_photo}
                alt="Milan Poddar"
                height={200}
                width={200}
                className="mb-4 rounded-lg shadow-lg w-full"
              />
            </div> */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Director's Message</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our journey began in 1992, and since then, we have been dedicated
              to providing unparalleled automotive services. Our team, led by
              experienced technicians, shares a passion for excellence, and we
              take pride in the quality of work we deliver. At Poddar Motors, we
              understand the importance of trust when it comes to servicing your
              vehicle. That's why we prioritize transparent communication,
              quality service, and a commitment to exceeding your expectations.
              I invite you to explore our range of services, meet our skilled
              team, and experience the difference that sets Poddar Motors apart.
              Whether you need routine maintenance or more complex repairs, we
              are here to ensure your vehicle receives the care it deserves.
              Thank you for considering Poddar Motors for your automotive needs.
              We look forward to serving you and becoming your trusted partner
              in maintaining the health and performance of your vehicle. <br />
              <span className="font-bold block mt-4">Best Regards,</span>
              Milan Poddar
              <br />
              Director, Poddar Motors.
            </p>
          </div>
          {/* </section> */}

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Poddar Motors, our mission is to provide comprehensive
              automotive solutions with a commitment to quality, reliability,
              and customer satisfaction. We believe in fostering long-term
              relationships by ensuring your vehicle receives the care it
              deserves.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Behind every successful workshop is a team of skilled and
              passionate individuals. Meet our team of experienced technicians
              who bring a wealth of knowledge and expertise to every service we
              offer. Committed to excellence, our professionals undergo
              continuous training to stay ahead in the ever-evolving automotive
              industry.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From routine maintenance to complex repairs, Poddar Motors offers
              a wide range of services designed to keep your Maruti Suzuki
              running at its best. We use state-of-the-art equipment and genuine
              parts to guarantee the highest standard of care for your vehicle.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Choose us?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Expertise: Our team consists of certified technicians with a deep
              understanding of Maruti Suzuki vehicles. Quality Service: We
              prioritize quality in every service, ensuring your vehicle
              performs optimally and reliably. Transparent Communication: At
              PMPL, we believe in transparent communication. We keep you
              informed about your vehicle's condition, providing honest
              recommendations and upfront pricing. Community Involvement Beyond
              automotive expertise, is proud to be an active member of the
              Ranchi community. We support local initiatives and events,
              recognizing the importance of giving back to the community that
              has entrusted us with their automotive needs.
            </p>
          </section>

          {/* Add more sections for "Our Team," "Our Services," and "Why Choose Us?" as needed */}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
