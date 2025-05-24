import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSkype } from "react-icons/fa";
import amid_logo from '../assets/Logo.svg'
import Button from "./Button";
const Footer = () => {
  return (
    <footer className="bg-[#e6f8f6] text-center text-gray-800 pt-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2  ">Subscribe To Our Newsletter <br /> Get The Best Offers</h2>
        <div className="flex justify-center items-center gap-2 mb-8">
          <span className="text-orange-500">With One Click</span>
          <Button text='  Subscribe →' className=' bg-[#FF823B] rounded-4xl text-white py-3 px-8'/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left  pt-8 pb-6">
          <div>
            <div className=" flex flex-col  gap-2 ">
                <img src={amid_logo} className="w-[118px]" alt="" />
              <span className="text-sm text-orange-300">business consultancy agency</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-700">
            <a href="#">About</a>
            <a href="#" className="font-bold text-orange-500">Terms</a>
            <a href="#">Blogs</a>
            <a href="#">Contact</a>
          </div>

          <div className="text-sm text-gray-700">
            <p>+998 1276 234</p>
            <p>82/93 Boeird Street. NY</p>
            <p>info@amid.mail.com</p>
          </div>
        </div>
      </div>

      <div className="bg-[#0d4c44] text-white py-4 mt-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">All Rights Reserved @Dabuuzi2020</p>
          <div className="flex gap-4 mt-2 space-x-6">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaSkype/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;