"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const navLinks = [
    { name: 'My Listings', href: '/dashboard/my-listings' },
    { name: 'Add Pet', href: '/dashboard/add-pet' },
    { name: 'My Requests', href: '/dashboard/my-requests' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      
    
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex-shrink-0 md:min-h-screen">
        <div className="p-6">
          <h2 className="text-xl font-black text-[#1a1a1a] uppercase tracking-wider mb-6">
            Dashboard
          </h2>
          <nav className="flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`whitespace-nowrap px-4 py-3 rounded-xl font-bold transition-colors ${
                    isActive
                      ? 'bg-[#fcf8e3] text-[#f97316] border border-orange-100'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-[#1a1a1a]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

     
      <main className="flex-1 overflow-y-auto">
    
        {children}
      </main>
      
    </div>
  );
}