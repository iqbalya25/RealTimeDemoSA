"use client";

const ServicesContent = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center relative bg-opacity-50 px-6"
        style={{
          background: "linear-gradient(90deg, #bdc3c7, #2c3e50) ",
          minHeight: "50vh",
          maxHeight: "auto",
        }}
      >
        <div className="bg-black opacity-20 absolute top-0"></div>
        <div className="w-full md:w-[80%] max-w-[1000px] text-justify text-white p-4 md:p-10   mt-20">
          <h1 className="text-2xl md:text-4xl font-bold pb-5">Our Services</h1>
          <div className="text-xl">
            <p className="text-sm md:text-xl">
              At Sunday Automation, we offer a comprehensive suite of services
              designed to meet the diverse needs of our clients across various
              sectors. Our core expertise in industrial automation enables us to
              deliver advanced solutions that optimize manufacturing and
              production processes, enhancing efficiency and minimizing
              downtime. With the advent of IoT, we have expanded our
              capabilities to include smart digitalization systems for
              electrical management, providing innovative IoT solutions that
              ensure seamless connectivity and control in industrial,
              commercial, and residential settings. Our commitment to
              customization means we work closely with each client to develop
              tailored solutions that address their specific challenges and
              goals, ensuring optimal performance and satisfaction. Through our
              integrated approach, we empower businesses and homeowners alike to
              harness the power of automation and digitalization, creating
              smarter, more efficient environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
