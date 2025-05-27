import React from 'react';
import { Home, Book, Info } from 'lucide-react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const links = [
    { name: 'Home', path: '/', icon: <Home className="mr-2 h-4 w-4" /> },
    {
      name: 'Recipes',
      path: '/recipes',
      icon: <Book className="mr-2 h-4 w-4" />,
    },
    {
      name: 'About',
      path: '/about',
      icon: <Info className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <nav className="bg-orange-50 border-b border-cream-200 py-4 sticky top-0 z-10 shadow-sm px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold font-serif text-olive-700">
              Recipes
            </span>
          </Link>
        </div>
        <ul className="flex space-x-2 md:space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-olive-100 hover:text-olive-700 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2"
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
