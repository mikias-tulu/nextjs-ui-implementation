import React from 'react';

interface DropdownProps {
  items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <ul className="absolute bg-white text-blue-600 space-y-1 py-2 shadow-lg rounded-md w-48">
      {items.map((item, index) => (
        <li
          key={index}
          className={`block px-2 py-2 text-gray-700 cursor-pointer ${
            index === 0 ? 'font-bold' : ''
          } ${index === items.length - 1 ? 'border-t-[2px] border-t-[#F2F4F7]' : ''} hover:font-bold`}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
