const FooterNavBar = () => {
  return (
    <div className="flex justify-around">
      <div className="text-left">
        <h1 className="text-lg font-semibold mb-2">About Us</h1>
        <p className="text-sm">Our Company</p>
      </div>
      <div className="text-left">
        <h1 className="text-lg font-semibold mb-2">Services</h1>
        <ul>
          <li>Project1</li>
          <li>Project2</li>
          <li>Project3</li>
        </ul>
      </div>
      <div className="text-left">
        <h1 className="text-lg font-semibold mb-2">Team</h1>
        <p className="text-sm">Our Team</p>
      </div>
    </div>
  );
};

export default FooterNavBar;
