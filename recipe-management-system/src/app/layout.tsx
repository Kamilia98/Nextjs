import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Recipe Management System',
  description: 'Manage your favorite recipes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex space-x-6">
            <Link href="/" className="hover:text-blue-200">
              Home
            </Link>
            <Link href="/recipes" className="hover:text-blue-200">
              Recipes
            </Link>
            <Link href="/login" className="hover:text-blue-200">
              Login
            </Link>
            <Link href="/dashboard" className="hover:text-blue-200">
              Dashboard
            </Link>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
