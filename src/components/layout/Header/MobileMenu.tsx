import React from 'react';
import { ChevronRight, X } from 'lucide-react';
import { MenuItem } from '../../../types';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  menuItems: MenuItem[];
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, menuItems, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="space-y-2">
            {menuItems.map((item) => (
              <div key={item.id} className="border-b border-gray-100 last:border-0">
                <Link
                  to={item.path}
                  className="flex items-center justify-between py-4 px-2 text-gray-700 hover:text-instacad-blue hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  <span className="font-medium">{item.label}</span>
                  {item.submenu && <ChevronRight className="w-4 h-4" />}
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <div className="ml-4 space-y-1 py-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.id}
                        to={subItem.path}
                        className="flex items-center py-2 px-2 text-sm text-gray-600 hover:text-instacad-blue hover:bg-blue-50 rounded-lg transition-colors"
                        onClick={onClose}
                      >
                        <div className="w-1.5 h-1.5 bg-instacad-blue rounded-full mr-3" />
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-8 p-4 bg-gradient-to-r from-instacad-blue/10 to-instacad-dark/10 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-3">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📞 +91-8779600550</p>
              <p>✉️ instacad@instacad.in</p>
              <p className="text-xs mt-2">Thane, Mumbai, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;