"use client";

import CardAbout from "./CardAbout";

const AboutItem = [
  {
    title: "Mission",
    caption:
      "seeks to create a sustainable and digitalised energy grid, and to constantly improve energy efficiency through adoption of sustainable energy. We work towards being eco-friendly, innovative and proactive in the sustainable energy industry.",
  },
  {
    title: "Vision",
    caption:
      "With the adoption of renewables and digital technology growing exponentially, there will be major transformations to the energy grid. Our vision is to create an energy cloud for distributed energy resources, effectively managing today’s energy ecosystem.",
  },
];

const AboutContent = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center relative bg-opacity-50"
        style={{
          background: "linear-gradient(90deg, #1FA2FF, #12D8FA, #A6FFCB) ",
          minHeight: "70vh",
          maxHeight: "auto",
        }}
      >
        <div className="bg-black opacity-20 absolute top-0"></div>
        <div className="w-full md:w-[80%] max-w-[1000px] text-justify text-white p-4 md:p-0 font-semibold top-52">
          <h1 className="text-2xl md:text-4xl font-bold pb-5">About Us</h1>
          <div className=" ">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              vero voluptatum dicta cumque? Voluptate, amet placeat maxime nobis
              tenetur ut laudantium rem facilis, temporibus impedit eius
              cupiditate iure modi aliquid. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Blanditiis nam distinctio veritatis
              officiis dolorum doloribus fuga hic eos molestiae ab recusandae,
              corporis iure facere adipisci error, laudantium sunt! Accusamus,
              nobis! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Libero eum excepturi, quod dolore repellat corporis quis
              laudantium doloribus nisi, ut quae temporibus assumenda impedit
              tempora sunt aut explicabo eligendi et?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              vero voluptatum dicta cumque? Voluptate, amet placeat maxime nobis
              tenetur ut laudantium rem facilis, temporibus impedit eius
              cupiditate iure modi aliquid. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Blanditiis nam distinctio veritatis
              officiis dolorum doloribus fuga hic eos molestiae ab recusandae,
              corporis iure facere adipisci error, laudantium sunt! Accusamus,
              nobis! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Libero eum excepturi, quod dolore repellat corporis quis
              laudantium doloribus nisi, ut quae temporibus assumenda impedit
              tempora sunt aut explicabo eligendi et?
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-28">
        <div className="flex flex-col gap-7 md:flex-row max-w-[1000px]">
          {AboutItem.map((item, index) => (
            <CardAbout key={index}>
              <h2 className="text-4xl font-bold mb-2 py-5">{item.title}</h2>
              <p>{item.caption}</p>
            </CardAbout>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
