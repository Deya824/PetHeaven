"use client";

import { useEffect, useState } from 'react';
import { Card, Button, Input, Select, ListBox } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';

const AllPetsPage = () => {
  const router = useRouter();
  
  // 1. State for our pets and loading status
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // 2. State for our Advanced Search & Filter Challenge
  const [search, setSearch] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("All");

  // 3. Get user session to check if they are logged in
  const { data: session } = authClient.useSession();

  // 4. Fetch data whenever the page loads, or when search/filter changes
  useEffect(() => {
    setIsLoading(true);
    
    // Safety check for the server URL
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL ;
    const url = new URL(`${serverUrl}/petData`);
    
    // Add our search and filter parameters to the URL
    if (search) url.searchParams.append('search', search);
    if (speciesFilter && speciesFilter !== "All") url.searchParams.append('species', speciesFilter);

    fetch(url).then(
      (res) => res.json().then(
        (data) => {
          setPets(data);
          setIsLoading(false);
        },
        () => {
          toast.error("Failed to parse pet data");
          setIsLoading(false);
        }
      ),
      () => {
        toast.error("Failed to fetch pets");
        setIsLoading(false);
      }
    );
  }, [search, speciesFilter]); // This tells React: "Rerun this fetch if search or speciesFilter changes!"

 
  const handleClick = (petId) => {
    if (!session?.user) {
      toast.error("Please login");
      router.push("/login");
    } else {
     
      router.push(`/all-pets/${petId}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf8e3] py-12 px-5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] mb-4">Find Your New Best Friend</h1>
          <p className="text-gray-600 font-medium text-lg">Browse our available pets and give them a forever home.</p>
        </div>

        {/* Challenge: Search & Filter Controls */}
        <div className="bg-white p-6 rounded-3xl shadow-md border border-orange-100 flex flex-col md:flex-row gap-4 mb-10 items-center">
          
          <div className="w-full md:w-2/3">
            <Input 
            aria-label="Search pets by name"
              placeholder="Search pets by name (e.g. Luna)..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl bg-gray-50 border-gray-200"
            />
          </div>

          <div className="w-full md:w-1/3">
            {/* THE FIX: We use 'new Set()' going in, and 'Array.from(keys).join("")' coming out */}
          <select
  value={speciesFilter}
  onChange={(e) => setSpeciesFilter(e.target.value)}
  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 font-bold text-[#1a1a1a]"
>
  <option value="All">All Species</option>
  <option value="Dog">Dogs</option>
  <option value="Cat">Cats</option>
  <option value="Bird">Birds</option>
  <option value="Rabbit">Rabbits</option>
  <option value="Other">Other</option>
</select>
          </div>
        </div>

        {/* Pet Cards Grid */}
        {isLoading ? (
          <div className="text-center py-20 font-bold text-gray-500 text-xl">Loading furry friends...</div>
        ) : pets.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-orange-100">
            <p className="font-bold text-gray-500 text-xl">No pets found matching your criteria.</p>
            <Button onClick={() => {setSearch(""); setSpeciesFilter("All");}} className="mt-4 bg-[#fcf8e3] text-[#f97316] font-bold">Clear Filters</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {pets.map((pet) => (
              <Card key={pet._id} className="overflow-hidden shadow-xl border border-orange-50 rounded-3xl hover:-translate-y-2 transition-transform duration-300">
                <div className="relative h-64">
      
      
      {/* ADD THIS STATUS BADGE */}
      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-black shadow-sm 
        ${pet.adopted 
          ? "bg-red-500 text-white" 
          : "bg-green-500 text-white"
        }`}>
        {pet.adopted ? "ADOPTED" : "AVAILABLE"}
      </div>

      
    
                
                  <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-black text-[#f97316] shadow-sm">
                    {pet.species}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-end mb-2">
                    <h3 className="text-2xl font-black text-[#1a1a1a]">{pet.name}</h3>
                    <p className="text-lg font-black text-[#f97316]">
                      {pet.adoptionFee > 0 ? `$${pet.adoptionFee}` : 'Free'}
                    </p>
                  </div>
                  
                  <div className="text-sm font-bold text-gray-500 mb-6 flex items-center gap-2">
                    <span>{pet.breed}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                    <span>{pet.age}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button onClick={()=>handleClick(pet._id)}  variant="flat" 
                      className="  bg-gray-100 hover:bg-gray-200 text-[#1a1a1a] font-bold">
                    
                      View Details
                
                    </Button>
                    <Button 
                      onClick={() => handleClick(pet._id)}
                      className="bg-[#f97316] hover:bg-orange-600 text-white font-bold shadow-md"
                    >
                      Adopt Now
                    </Button>
                  </div>
                </div>

              </Card>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default AllPetsPage;