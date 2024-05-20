"use client";

const TeamsContent = () => {
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
          <h1 className="text-2xl md:text-4xl font-bold pb-5">Our Teams</h1>
          <div className="text-xl">
            <p className="text-sm md:text-xl">
              At Sunday Automation, our team exemplifies professionalism and
              expertise in every aspect of our work. Comprised of highly skilled
              engineers, designers, and technicians, our professionals bring
              extensive experience in industrial automation and IoT
              technologies. We prioritize continuous learning and professional
              development to stay at the forefront of industry advancements,
              ensuring our solutions are innovative and effective. Our teams
              commitment to professionalism is reflected in our meticulous
              attention to detail, adherence to the highest standards of
              quality, and dedication to delivering exceptional customer
              service. By working closely with our clients, we provide
              customized solutions that address their specific needs and drive
              their success. At Sunday Automation, our professionalism is the
              cornerstone of our reputation, making us a trusted leader in
              creating smarter, more efficient environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsContent;
