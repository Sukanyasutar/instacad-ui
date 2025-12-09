import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { menuItems } from '../../../utils/constants';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-instacad-blue to-instacad-dark text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91-8779600550</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">instacad@instacad.in</span>
            </div>
          </div>
          <button className="bg-white text-instacad-blue px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm">
            Request Demo
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="bg-instacad-blue p-2 rounded-lg">
              <img
                src="/assets/images/logo.svg"
                alt="InstaCAD Solutions"
                className="h-10 w-auto"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-heading">
                Insta<span className="text-instacad-blue">CAD</span>
              </h1>
              <p className="text-xs text-gray-600">Engineering Excellence Since 1990</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <DesktopMenu menuItems={menuItems} />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          menuItems={menuItems}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;