import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-b py-6 md:flex-row">
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <Link href="/" passHref>
              <div className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                Home
              </div>
            </Link>
            <Link href="/about" passHref>
              <div className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                About
              </div>
            </Link>
            <Link href="/services" passHref>
              <div className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                Services
              </div>
            </Link>
            <Link href="/teams" passHref>
              <div className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">
                Teams
              </div>
            </Link>
          </nav>

          {/* Social Media */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/sundayautomation/?hl=en"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-800 active:text-gray-600"
            >
              <img src="/instagram.png" className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/@sundayautomation6294"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-800 active:text-gray-600"
            >
              <img src="/youtube.png" className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/iqbalya25/SundayAutomationPage"
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-800 active:text-gray-600"
            >
              <img src="/github.png" className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="py-8 text-center text-sm text-gray-400">
          © 2024 - Sunday Automation. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
