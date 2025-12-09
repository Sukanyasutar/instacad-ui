import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from '../../types';
import {
  HomeIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

interface NavigationProps {
  menuItems?: MenuItem[];
  variant?: 'desktop' | 'mobile';
  onItemClick?: () => void;
}

const defaultMenuItems: MenuItem[] = [
  { 
    id: 'home', 
    label: 'Home', 
    path: '/', 
    icon: <HomeIcon className="w-5 h-5" /> 
  },
  { 
    id: 'products', 
    label: 'Products', 
    path: '/products', 
    icon: <BriefcaseIcon className="w-5 h-5" /> 
  },
  { 
    id: 'services', 
    label: 'Services', 
    path: '/services', 
    icon: <WrenchScrewdriverIcon className="w-5 h-5" /> 
  },
  { 
    id: 'about', 
    label: 'About Us', 
    path: '/about', 
    icon: <BuildingOfficeIcon className="w-5 h-5" /> 
  },
  { 
    id: 'contact', 
    label: 'Contact', 
    path: '/contact', 
    icon: <PhoneIcon className="w-5 h-5" /> 
  },
];

const Navigation: React.FC<NavigationProps> = ({
  menuItems = defaultMenuItems,
  variant = 'desktop',
  onItemClick
}) => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleItemClick = () => {
    if (onItemClick) {
      onItemClick();
    }
    setActiveDropdown(null);
  };

  // Desktop Navigation
  if (variant === 'desktop') {
    return (
      <nav className="flex items-center space-x-1">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="relative group"
            onMouseEnter={() => setActiveDropdown(item.id)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to={item.path}
              onClick={handleItemClick}
              className={`
                flex items-center px-4 py-2.5 rounded-lg transition-all duration-200
                ${isActive(item.path)
                  ? 'bg-instacad-blue text-white shadow-md'
                  : 'text-gray-700 hover:text-instacad-blue hover:bg-gray-50'
                }
              `}
            >
              {item.icon && <span className="mr-2.5">{item.icon}</span>}
              <span className="font-medium">{item.label}</span>
              {item.submenu && (
                <ChevronDownIcon className="ml-1.5 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              )}
            </Link>

            {/* Dropdown Menu */}
            {item.submenu && activeDropdown === item.id && (
              <div className="absolute left-0 top-full mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in z-50">
                <div className="py-2">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.id}
                      to={subItem.path}
                      className="flex items-center px-4 py-3 text-gray-700 hover:text-instacad-blue hover:bg-blue-50 transition-colors group/sub"
                      onClick={handleItemClick}
                    >
                      <div className="w-2 h-2 bg-instacad-blue rounded-full mr-3 opacity-0 group-hover/sub:opacity-100 transition-opacity" />
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
  }

  // Mobile Navigation
  return (
    <nav className="flex flex-col">
      {menuItems.map((item) => (
        <div key={item.id} className="border-b border-gray-100 last:border-0">
          <div className="flex flex-col">
            <Link
              to={item.path}
              onClick={handleItemClick}
              className={`
                flex items-center justify-between py-4 px-3 rounded-lg transition-colors
                ${isActive(item.path)
                  ? 'bg-instacad-blue text-white'
                  : 'text-gray-700 hover:text-instacad-blue hover:bg-blue-50'
                }
              `}
            >
              <div className="flex items-center">
                {item.icon && <span className="mr-3">{item.icon}</span>}
                <span className="font-medium">{item.label}</span>
              </div>
              {item.submenu && (
                <ChevronRightIcon className="w-4 h-4" />
              )}
            </Link>

            {/* Mobile Submenu */}
            {item.submenu && (
              <div className="ml-12 space-y-1 py-2">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.id}
                    to={subItem.path}
                    onClick={handleItemClick}
                    className="flex items-center py-2.5 px-3 text-sm text-gray-600 hover:text-instacad-blue hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <div className="w-1.5 h-1.5 bg-instacad-blue rounded-full mr-3" />
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;