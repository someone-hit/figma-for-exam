import React, { useState } from 'react';
import header_logo from '../assets/Logo.svg';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuList = [
    { title: 'About amid', link: '#about' },
    { title: 'Features', link: '#features' },
    { title: 'Portfolio', link: '#portfolio' },
    { title: 'Reviews', link: '#reviews' },
  ];

  return (
    <header className="container mx-auto px-4 py-6!">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <img src={header_logo} alt="Logo" className="h-10" />
          <ul className="hidden md:flex space-x-10">
            {menuList.map((item, index) => (
              <li key={index}>
                <a className="text-gray-700 hover:text-[#124F48] transition" href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <Button className="bg-[#124F48] text-white py-2 px-6 rounded-full" text="Login" />
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!MobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {MobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {MobileMenuOpen && (
        <ul className="flex flex-col items-center space-y-5 mt-6 md:hidden">
          {menuList.map((item, index) => (
            <li key={index}>
              <a className="text-gray-700 hover:text-[#124F48] transition" href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
