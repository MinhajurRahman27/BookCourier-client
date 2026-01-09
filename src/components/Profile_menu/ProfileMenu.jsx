import React, { useState, useRef, useEffect } from 'react';
import { User, LayoutDashboard, LogOut, ChevronDown } from 'lucide-react';

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    {
      icon: User,
      label: 'My Profile',
      href: '/profile',
      description: 'View and edit your profile'
    },
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      href: '/dashboard',
      description: 'Your personal dashboard'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center pt-20">
      {/* Demo Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          {/* <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-bold text-gray-800">bookCourier</span>
          </div> */}

          {/* Profile Menu */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-orange-50 transition-all duration-300 border border-gray-200 hover:border-orange-300 group"
            >
              {/* Profile Avatar */}
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-semibold">JD</span>
              </div>
              
              {/* Name & Role */}
              <div className="hidden md:block text-left">
                <div className="text-sm font-semibold text-gray-800">John Doe</div>
                <div className="text-xs text-gray-500">Premium Member</div>
              </div>

              {/* Dropdown Arrow */}
              <ChevronDown 
                className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 origin-top ${
                isOpen
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}
            >
              {/* User Info Header */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 border-b border-orange-200">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">JD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">John Doe</div>
                    <div className="text-sm text-gray-600">john.doe@email.com</div>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 px-4 py-3 hover:bg-orange-50 transition-all duration-200 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-200 flex-shrink-0">
                      <item.icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {item.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100"></div>

              {/* Logout Button */}
              <button
                className="w-full flex items-center gap-4 px-4 py-3 hover:bg-red-50 transition-all duration-200 group"
                onClick={() => {
                  setIsOpen(false);
                  alert('Logging out...');
                }}
              >
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors duration-200">
                  <LogOut className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-red-600">
                    Logout
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Sign out of your account
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}