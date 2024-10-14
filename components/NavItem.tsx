import React, { useState } from 'react';
import Dropdown from './Dropdown';

interface NavItemProps {
  item: {
    title: string;
    dropdown?: string[];
  };
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isDropdown = Array.isArray(item.dropdown);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <li
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center cursor-pointer">
        {item.title}
        {isDropdown && (
          <svg
            className="w-4 h-4 ml-1 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        )}
      </button>

      {isDropdown && isDropdownOpen && item.dropdown && (
        <Dropdown items={item.dropdown} />
      )}
    </li>
  );
};

export default NavItem;
