import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTelegram, faWhatsapp, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-10">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-4">About E3 Expo</h3>
          <p className="text-gray-300">
            E3 Expo is an annual exhibition that brings together leading companies and professionals from the electrical,
            broadcasting, and electro-mechanical industries. It provides a platform for networking, showcasing products,
            and exploring new business opportunities.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
          <p className="text-gray-300">123 Street, City</p>
          <p className="text-gray-300">Email: info@example.com</p>
          <p className="text-gray-300">Phone: 123-456-7890</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="text-gray-300">
            <li>Exhibit</li>
            <li>Visit</li>
            <li>Speak</li>
            <li>Partner</li>
            <li>2023 Speakers</li>
            <li>Schedule</li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center text-gray-300">
        <p>&copy; {currentYear} E3 Expo. All rights reserved. Developed by <a href="https://www.toptech.et" className="text-green-500 underline">Toptech IT Solutions PLC</a></p>
      </div>
    </footer>
  );
};

export default Footer;
