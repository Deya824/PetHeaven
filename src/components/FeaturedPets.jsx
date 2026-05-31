import Link from 'next/link';

const FeaturedPets = () => {
  const mockPets = [
    { id: 1, name: "Max", species: "Dog", breed: "Golden Retriever", age: "2 Years", img: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Luna", species: "Cat", breed: "Persian", age: "1 Year", img: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Charlie", species: "Dog", breed: "Beagle", age: "3 Months", img: "https://images.unsplash.com/photo-1537151608804-ea2f1fa3f34d?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Bella", species: "Cat", breed: "Siamese", age: "4 Years", img: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Rocky", species: "Dog", breed: "Bulldog", age: "1.5 Years", img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Milo", species: "Cat", breed: "Maine Coon", age: "6 Months", img: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=500&q=80" },
  ];

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
                <img src={pet.img} alt={pet.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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