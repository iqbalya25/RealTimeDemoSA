// components/CompanyDetail.tsx
import React from "react";

const CompanyDetail: React.FC = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-[1000px] px-10 md:px-8">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6">
          Our competitive advantage
        </h1>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8 text-justify">
          our competitive advantage lies in our unparalleled expertise,
          innovative approach, and unwavering commitment to customer
          satisfaction. Our team of seasoned professionals brings extensive
          knowledge and experience in both industrial automation and IoT
          technologies, enabling us to deliver cutting-edge solutions tailored
          to meet the unique needs of each client. Our proactive embrace of the
          latest technological advancements ensures that our solutions are not
          only current but also forward-thinking, providing our clients with the
          tools they need to stay ahead in a rapidly evolving market.
          <br />
          <br />
          Additionally, our customer-centric philosophy drives us to offer
          exceptional service and support, fostering strong, long-lasting
          relationships with our clients. By combining these strengths, Sunday
          Automation stands out as a leader in creating smarter, more efficient,
          and interconnected environments across industrial, commercial, and
          residential sectors.
        </p>

        {/* <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
          <li>This is a section of some simple filler text</li>
          <li>Also known as placeholder text</li>
          <li>It shares some characteristics of a real written text</li>
        </ul>

        <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">
          “This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated.”
        </blockquote> */}

        <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
          <img
            src="https://res.cloudinary.com/djyevwtie/image/upload/v1716186031/assetscc/aelqsinj5oxlz175fqi1.webp"
            loading="lazy"
            alt="Teams"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <p className="text-gray-500 sm:text-lg">
          we continue to drive the future of automation and digitalization,
          creating smarter, more efficient environments for all. Together, we
          can build a connected world where technology works seamlessly to
          enhance everyday life.
        </p>
      </div>
    </div>
  );
};

export default CompanyDetail;
