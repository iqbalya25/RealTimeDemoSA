import ContentSection from "../ContentSection";
import FooterNavBar from "./FooterNavBar";

const Footer = () => {
  return (
    <div className="bg-slate-900 text-white h-40vh">
      <ContentSection
        contentLeft={
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Sunday Automation</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odion
              molestias quisquam molestiae numquam rem.
            </p>
          </div>
        }
        contentRight={
          <div className="w-full">
            <FooterNavBar />
          </div>
        }
      />
      <div className="border-t border-white p-4 text-center text-xs">
        <p>©2024 Sunday Automation, All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
