import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-instacad-blue p-2 rounded-lg">
                <img
                  src="/assets/images/logo-white.svg"
                  alt="InstaCAD Solutions"
                  className="h-8 w-auto"
                />
              </div>
              <h3 className="text-2xl font-bold">Insta<span className="text-instacad-blue">CAD</span></h3>
            </div>
            <p className="text-gray-300 mb-6">
              Pioneering engineering software solutions since 1990. 
              Delivering excellence through innovation and technology.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-instacad-blue rounded-full flex items-center justify-center transition-colors"
                  aria-label={`Follow on ${Icon.name}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Services', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-instacad-blue transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {[
                'Insta_TRAY',
                'Insta_INTERNALS',
                'Insta_TRANS.TOWER',
                'Insta_LT+HT',
                'Insta_PID',
                'Other Solutions'
              ].map((product) => (
                <li key={product}>
                  <Link
                    to={`/products/${product.toLowerCase().replace('.', '').replace('+', '')}`}
                    className="text-gray-300 hover:text-instacad-blue transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-instacad-blue mt-1" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-300">+91-8779600550</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-instacad-blue mt-1" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300">instacad@instacad.in</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-instacad-blue mt-1" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-gray-300">
                    Thane, Mumbai, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} InstaCAD Solutions (India) Pvt. Ltd. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              <Link to="/privacy" className="hover:text-instacad-blue transition-colors mr-6">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-instacad-blue transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;