import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

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
    { name: 'Home', link: '/', subMenuItems: [] },
    // { name: 'Registration', link: '/registration', subMenuItems: [] },
    { name: 'Exhibit', link: '/exhibit', subMenuItems: ['Benefits', 'Guidelines', 'Reservation'] },
    { name: 'Visit', link: '/visit', subMenuItems: ['Details', 'Travel', 'Venue'] },
    { name: 'Speak', link: '/speak', subMenuItems: ['Info', 'Application', 'Speakers'] },
    { name: 'Partner', link: '/partner', subMenuItems: ['Opportunities', 'Contact', 'Partners'] },
    { name: 'About', link: '/about', subMenuItems: ['Background', 'Objectives', 'Testimonials'] },
    // { name: 'Focus', link: '/focus-areas', subMenuItems: [] },
    // { name: 'Categories', link: '/categories', subMenuItems: [] },
    // { name: 'Schedule', link: '/schedule', subMenuItems: [] },
    // { name: 'Years', link: '/previous-years', subMenuItems: [] },
    // { name: 'Gallery', link: '/gallery', subMenuItems: [] },
    // { name: 'Price', link: '/price', subMenuItems: [] },
    // { name: 'Contact', link: '/contact', subMenuItems: [] },
    // { name: 'Media', link: '/media', subMenuItems: [] },

  ];

  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold">
            E3 Expo
          </NavLink>
          <div className="relative">
            <ul className="flex space-x-4">
              {menuItems.map((menuItem, index) => (
                <li
                  key={index}
                  className={`relative ${index === activeMenuIndex ? 'active' : ''}`}
                  onMouseEnter={() => handleSubMenuToggle(index)}
                  onMouseLeave={() => handleSubMenuToggle(index)}
                >
                  <NavLink to={menuItem.link} className="text-lg">
                    {menuItem.name}
                    {menuItem.subMenuItems.length > 0 && (
                      <>
                        {index === activeMenuIndex ? (
                          <FiChevronUp className="ml-1 inline" />
                        ) : (
                          <FiChevronDown className="ml-1 inline" />
                        )}
                      </>
                    )}
                  </NavLink>
                  {index === activeMenuIndex && menuItem.subMenuItems.length > 0 && (
                    <ul className="absolute top-full bg-white py-2 px-4 rounded shadow text-black">
                      {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                        <li key={subIndex}>
                          <NavLink
                            to={`/${menuItem.link}/${subMenuItem.toLowerCase().replace(/ /g, '-')}`}
                            className="text-lg hover:text-green-500 transition-colors duration-300"
                          >
                            {subMenuItem}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              {/* <li>
                <NavLink to="/register" className="text-lg px-4 py-2 rounded bg-green-500 text-white">
                  Register
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
