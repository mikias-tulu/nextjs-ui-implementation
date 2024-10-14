'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavItem from './NavItem';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navItems, setNavItems] = useState<any[]>([]);
  const [buttonText, setButtonText] = useState<string>('');
  const [menuText, setMenuText] = useState<string>('');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchNavData = async () => {
      const response = await fetch('/api/data');
      const data = await response.json();
      setNavItems(data.navbar.items);
      setButtonText(data.navbar.buttonText); 
      setMenuText(data.navbar.menu1);
    };
    fetchNavData();
  }, []);

  return (
    <nav className="relative p-4">
      <div className="flex flex-row justify-between items-center mx-10 ml-10">
        <Link href="/" legacyBehavior>
          <Image src="/logo.webp" alt="Logo" className="cursor-pointer" width={130} height={32} />
        </Link>
        
        <button onClick={toggleMenu} className="text-white md:hidden focus:outline-none mr-0 flex items-center">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 7.5C5 7.22386 5.22386 7 5.5 7H9.5C9.77614 7 10 7.22386 10 7.5C10 7.77614 9.77614 8 9.5 8H5.5C5.22386 8 5 7.77614 5 7.5Z"
                fill="#000000"
              />
            </svg>
          )}
        </button>

        {/* FullScreen Mobile Menu */}
        <div className={`${isOpen ? 'fixed' : 'hidden'} inset-0 bg-sky-500 z-50 flex flex-col p-4 md:hidden`}>
          <div className="flex justify-between items-center mb-8">
            <Link href="/">
              <Image src="/logo.webp" alt="Logo" width={120} height={120} />
            </Link>
            <button onClick={toggleMenu} className="text-white flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="text-white mb-4">{menuText}</div>

          <ul className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </ul>
        </div>

        <div className="flex flex-row gap-8">
          <ul className="hidden md:flex gap-20">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </ul>
          <div className="hidden md:flex gap-20">
            {menuText}
          </div>
        </div>

        <Link href="#" legacyBehavior>
          <button className="bg-white text-[#4A77FF] px-6 py-[6px] font-bold rounded-lg hidden md:block">
            {buttonText}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
