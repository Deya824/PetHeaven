const SuccessStories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4">Happy Tails</h2>
            <p className="text-gray-500 max-w-xl">Read about some of our favorite adoption success stories from families who found their perfect match.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#fcf8e3] rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center shadow-sm">
            <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=200&q=80" alt="Happy family with dog" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md" />
            <div>
              <p className="text-gray-600 italic mb-4 text-sm">&quot;Adopting Buster was the best decision we ever made. He brought so much energy and joy into our home. PetHaven made the process smooth and wonderful!&quot;</p>
              <h4 className="font-bold text-[#1a1a1a]">- The Smith Family</h4>
            </div>
          </div>

          <div className="bg-[#fcf8e3] rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center shadow-sm">
            <img src="https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?auto=format&fit=crop&w=200&q=80" alt="Girl with cat" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md" />
            <div>
              <p className="text-gray-600 italic mb-4 text-sm">&quot;Mittens was so shy at first, but now she rules the house. Thank you to the shelter for taking such good care of her until we found each other.&quot;</p>
              <h4 className="font-bold text-[#1a1a1a]">- Sarah Jenkins</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;