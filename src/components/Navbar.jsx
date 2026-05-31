"use client"; 

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
    const handleLogout = async () => {
        await authClient.signOut();
    }
    const {
        data: session,
    } = authClient.useSession();
    const user = session?.user;

  return (
    <nav className="bg-[#fcf8e3] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/icon.png" 
              alt="PetHaven Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-extrabold text-2xl text-[#1a1a1a] tracking-wide">
              PetHaven
            </span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-[#1a1a1a] hover:text-[#f97316] font-bold transition-colors">Home</Link>
            <Link href="/all-pets" className="text-[#1a1a1a] hover:text-[#f97316] font-bold transition-colors">All Pets</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
           {user ? <>
           <li className="list-none">
             {/* Wrapped Avatar in a Link to the dashboard */}
             <Link href="/dashboard" className="block cursor-pointer transition-transform hover:scale-105">
               <Avatar>
                 <Avatar.Image alt="User Profile" src={user?.image} />
                 <Avatar.Fallback>{user?.name?.split(" ").map(n => n[0]).join("")}</Avatar.Fallback>
               </Avatar>
             </Link>
           </li>
           <li className="list-none">
            <Button onClick={handleLogout} variant="danger" className="text-[#1a1a1a] hover:text-[#f97316] font-bold px-4 py-2 transition-colors">Logout</Button>
           </li>
           </>
           :
           <> 
            <Link 
              href="/login" 
              className="text-[#1a1a1a] hover:text-[#f97316] font-bold px-4 py-2 transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="bg-[#f97316] hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold shadow-md transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
           </>}
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;