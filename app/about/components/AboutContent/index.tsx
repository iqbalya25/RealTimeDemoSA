"use client";

import CardAbout from "./CardAbout";

const AboutItem = [
  {
    title: "Mission",
    caption:
      "Innovation, To continuously innovate and integrate cutting-edge technologies in our solutions and always keep quality To deliver top-notch products and services that meet the highest standards of quality and reliability with the customer Satisfaction To build long-term relationships with our clients through exceptional service and support",
  },
  {
    title: "Vision",
    caption:
      "we envision a future where automation and digitalization seamlessly converge to create smarter, more efficient environments. Our IoT solutions are designed to provide real time data and analytics, enabling our clients to make informed decisions, optimize energy usage, and improve overall operational efficiency.",
  },
];

const AboutContent = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center relative bg-opacity-50 font-trueno"
        style={{
          background: "linear-gradient(90deg, #bdc3c7, #2c3e50)",
          minHeight: "70vh",
          maxHeight: "auto",
        }}
      >
        <div className="w-full px-10 md:w-[80%] max-w-[1000px] text-justify text-white p-4 md:p-8 mt-20 md:mt-20 z-1">
          <h1 className="text-2xl md:text-4xl font-bold pb-5">About Us</h1>
          <div className="text-sm md:text-xl">
            <p>
              Established in 2018, Sunday Automation has swiftly emerged as a
              leader in the field of industrial automation. Our journey began
              with a commitment to revolutionize the automation industry,
              providing innovative solutions that enhance efficiency,
              reliability, and productivity for our clients. In the initial
              years, our focus was on delivering state-of-the-art industrial
              automation systems that catered to a wide array of industries. Our
              expertise and dedication to quality helped us build a strong
              reputation and a loyal customer base.
              <br />
              <br />
              Recognizing the rapid advancements in technology and the growing
              importance of connectivity, in 2023, we expanded our horizons to
              specialize in IoT (Internet of Things) solutions. This strategic
              shift allowed us to broaden our scope, integrating digitalized
              systems that enhance electrical management across various domains
              including industrial, commercial, and residential sectors.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-20">
        <div className="flex flex-col gap-7 md:flex-row max-w-[1000px]">
          {AboutItem.map((item, index) => (
            <CardAbout key={index}>
              <h2 className="text-4xl font-bold mb-2 py-5">{item.title}</h2>
              <p className="text-justify">{item.caption}</p>
            </CardAbout>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
