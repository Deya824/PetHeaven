"use client";

import { useState, useEffect } from 'react';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { useParams } from 'next/navigation';
import AdoptionForm from '@/components/AdoptionForm';

export default function PetDetailsPage() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/petData/${id}`)
      .then(res => res.json())
      .then(data => {
        setPet(data);
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load pet details");
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return (
    <div className="min-h-screen bg-[#fcf8e3] flex items-center justify-center text-xl font-bold text-[#1a1a1a]">
      Loading...
    </div>
  );

  if (!pet) return (
    <div className="min-h-screen bg-[#fcf8e3] flex items-center justify-center text-xl font-bold text-[#1a1a1a]">
      Pet not found
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fcf8e3] py-12 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Side - Pet Info */}
          <div className="lg:col-span-2 space-y-6">

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-96">
              <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-black px-3 py-1 rounded-full">
                Available
              </div>
            </div>

            {/* Name & Fee */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-orange-100">
              <div className="flex justify-between items-center mb-3">
                <h1 className="text-4xl font-extrabold text-[#1a1a1a]">{pet.name}</h1>
                <div className="text-right">
                  <p className="text-xs text-gray-400 font-bold">Adoption Fee</p>
                  <p className="text-2xl font-black text-[#f97316]">
                    {pet.adoptionFee > 0 ? `$${pet.adoptionFee}` : 'Free'}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {[pet.species, pet.breed, pet.gender].map((tag, i) => (
                  <span key={i} className="bg-orange-50 text-[#f97316] px-3 py-1 rounded-full text-sm font-bold border border-orange-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Details Grid */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-orange-100">
              <h2 className="text-xl font-extrabold text-[#1a1a1a] mb-4">Pet Details</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Species", value: pet.species },
                  { label: "Breed", value: pet.breed },
                  { label: "Age", value: pet.age },
                  { label: "Gender", value: pet.gender },
                  { label: "Location", value: pet.location },
                  { label: "Adoption Fee", value: pet.adoptionFee > 0 ? `$${pet.adoptionFee}` : 'Free' },
                  { label: "Health Status", value: pet.healthStatus },
                  { label: "Vaccination Status", value: pet.vaccinationStatus },
                ].map((item, i) => (
                  <div key={i} className="bg-[#fcf8e3] rounded-2xl p-4 border border-orange-50">
                    <p className="text-xs text-gray-400 font-bold mb-1">{item.label}</p>
                    <p className="font-extrabold text-[#1a1a1a]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-orange-100">
              <h2 className="text-xl font-extrabold text-[#1a1a1a] mb-3">About {pet.name}</h2>
              <p className="text-gray-600 leading-relaxed font-medium">{pet.description}</p>
            </div>

            {/* Owner Info */}
            <div className="bg-white rounded-3xl p-6 shadow-md border border-orange-100">
              <h2 className="text-xl font-extrabold text-[#1a1a1a] mb-3">Owner Info</h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-[#f97316] font-black text-xl">
                  {pet.ownerName?.[0]}
                </div>
                <div>
                  <p className="font-extrabold text-[#1a1a1a]">{pet.ownerName}</p>
                  <p className="text-gray-500 text-sm">{pet.ownerEmail}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side - Adoption Form */}
          <div className="lg:col-span-1">
            <AdoptionForm pet={pet} />
          </div>

        </div>
      </div>
    </div>
  );
}