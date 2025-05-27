'use client';

import React from 'react';
import { Package, Users, FileText, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const navItems = [
    { icon: BarChart3, label: 'Dashboard', path: '/dashboard' },
    {
      icon: Package,
      label: 'Products',
      path: '/dashboard/products',
    },
    { icon: Users, label: 'Users', path: '/dashboard/users' },
    { icon: FileText, label: 'Posts', path: '/dashboard/posts' },
  ];

  return (
    <div className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 z-40">
      <div className="p-6">
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const pathname = usePathname();
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.label}
                href={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
