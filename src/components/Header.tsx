import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Header: React.FC = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(-1);

  const handleSubMenuToggle = (index: number) => {
    if (activeMenuIndex === index) {
      setActiveMenuIndex(-1);
    } else {
      setActiveMenuIndex(index);
    }
  };

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'For Visitors', link: '/visitors', subMenuItems: ['Registration', 'Why is it worth it', 'FAQ'] },
    { name: 'For Exhibitors', link: '/exhibitors', subMenuItems: ['Book a Stand', 'Exhibitors Catalog', 'Organizational Information', 'Designed Exhibition Stands', 'Documents to Download'] },
  ];

  return (
    <nav className="flex items-center justify-between bg-gray-900 text-white p-6">
      <div className="flex items-center">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-2xl tracking-tight">Electrical Expo</span>
      </div>
      <div className="ml-auto flex items-center">
        <ul className="flex space-x-4">
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleSubMenuToggle(index)}
              onMouseLeave={() => handleSubMenuToggle(index)}
            >
              <a
                href={menuItem.link}
                className="text-lg hover:text-white flex items-center"
              >
                {menuItem.name}
                {menuItem.subMenuItems && menuItem.subMenuItems.length > 0 && (
                  <FiChevronDown className="ml-1" />
                )}
              </a>
              {index === activeMenuIndex && menuItem.subMenuItems && menuItem.subMenuItems.length > 0 && (
                <ul className="absolute top-full bg-gray-800 text-white py-2 px-4 rounded shadow text-lg min-w-max">
                  {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={`${menuItem.link}/${subMenuItem.toLowerCase().replace(/ /g, '-')}`}
                        className="block hover:bg-green-600 transition-colors duration-300 py-2 px-4"
                      >
                        {subMenuItem}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <a
              href="exhibitor-register"
              className="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-green-500"
            >
              Book Stand
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-green-500"
            >
              Exhibitor Catalog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
