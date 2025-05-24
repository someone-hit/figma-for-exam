import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
} from "react-icons/fa";
import amid_logo from "../assets/Logo.svg";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-[#e6f8f6] text-gray-800 pt-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title & subscribe */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-3">
            Subscribe To Our Newsletter <br />
            Get The Best Offers
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8">
            <span className="text-orange-500">With One Click</span>
            <Button
              text="Subscribe →"
              className="bg-[#FF823B] rounded-full text-white py-3 px-8"
            />
          </div>
        </div>

        {/* Middle section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 pb-6 text-center md:text-left">
          {/* Logo + description */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <img src={amid_logo} className="w-[118px]" alt="Logo" />
            <span className="text-sm text-orange-300">
              business consultancy agency
            </span>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-3 md:gap-6 text-sm text-gray-700">
            <a href="#">About</a>
            <a href="#" className="font-bold text-orange-500">
              Terms
            </a>
            <a href="#">Blogs</a>
            <a href="#">Contact</a>
          </div>

          {/* Contact info */}
          <div className="text-sm text-gray-700 space-y-1 text-center md:text-left">
            <p>+998 1276 234</p>
            <p>82/93 Boeird Street. NY</p>
            <p>info@amid.mail.com</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0d4c44] text-white py-4 mt-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">All Rights Reserved @Dabuuzi2020</p>
          <div className="flex items-center space-x-4 text-lg">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaSkype />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
