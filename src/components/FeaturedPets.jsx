import Link from 'next/link';

const FeaturedPets = async() => {
 const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/petData`);
  const allPets = await res.json();
  const mockPets = allPets.slice(0, 6);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4">Meet Our Featured Pets</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Discover these wonderful companions who are patiently waiting for a loving family. Your new best friend might be right here!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPets.map((pet) => (
            <div key={pet.id} className="bg-[#fcf8e3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="h-64 overflow-hidden">
              <img 
  src={pet.image} 
  alt={pet.name} 
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
/>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-1">{pet.name}</h3>
                <p className="text-[#f97316] font-semibold text-sm uppercase tracking-wide mb-3">{pet.breed}</p>
                <div className="flex justify-center gap-4 text-gray-500 text-sm mb-6 font-medium">
                  <span>Species: {pet.species}</span>
                  <span>•</span>
                  <span>Age: {pet.age}</span>
                </div>
                <Link href={`/pet/${pet.id}`} className="inline-block border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-bold py-2 px-6 rounded-full transition-colors">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/all-pets" className="bg-[#f97316] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors">
            See All Pets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;