const PetCareTips = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] text-center mb-12">Pet Care Tips & Tricks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500&q=80" alt="Dog eating" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">Nutrition Basics</h3>
              <p className="text-gray-500 text-sm mb-4">Learn about the right portion sizes and nutrient-rich foods to keep your pet healthy and energetic.</p>
              <button className="text-[#f97316] font-bold text-sm hover:underline">Read More →</button>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img src="https://images.unsplash.com/photo-1593483316242-efb5420596ca?auto=format&fit=crop&w=500&q=80" alt="Cat playing" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">Mental Stimulation</h3>
              <p className="text-gray-500 text-sm mb-4">Toys, puzzles, and regular playtime are crucial to prevent destructive behavior and keep minds sharp.</p>
              <button className="text-[#f97316] font-bold text-sm hover:underline">Read More →</button>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=500&q=80" alt="Vet exam" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">Routine Checkups</h3>
              <p className="text-gray-500 text-sm mb-4">Don't wait for your pet to get sick. Preventative vet visits ensure a long, healthy life for your furry friend.</p>
              <button className="text-[#f97316] font-bold text-sm hover:underline">Read More →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetCareTips;