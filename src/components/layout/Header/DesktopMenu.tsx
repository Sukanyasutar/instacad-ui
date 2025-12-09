import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '../../../types';
import { Link } from 'react-router-dom';

interface DesktopMenuProps {
  menuItems: MenuItem[];
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menuItems }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => item.submenu && setActiveDropdown(item.id)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <Link
            to={item.path}
            className="flex items-center px-4 py-2 text-gray-700 hover:text-instacad-blue font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 group"
          >
            {item.label}
            {item.submenu && (
              <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
            )}
          </Link>

          {/* Dropdown Menu */}
          {item.submenu && activeDropdown === item.id && (
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in">
              <div className="p-2">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.id}
                    to={subItem.path}
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-instacad-blue hover:bg-blue-50 rounded-lg transition-colors group"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <div className="w-2 h-2 bg-instacad-blue rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="font-medium">{subItem.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopMenu;