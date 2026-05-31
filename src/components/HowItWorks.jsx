const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-16">How Adoption Works</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 relative">
          
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 border-t-2 border-dashed border-orange-200 z-0"></div>

          <div className="relative z-10 flex flex-col items-center flex-1">
            <div className="w-24 h-24 bg-[#fcf8e3] rounded-full flex items-center justify-center border-4 border-white shadow-md mb-6">
              <span className="text-3xl font-black text-[#f97316]">1</span>
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Find Your Match</h3>
            <p className="text-gray-500 text-sm max-w-xs">Browse our diverse directory of adorable pets looking for homes and find the one that fits your lifestyle.</p>
          </div>

          <div className="relative z-10 flex flex-col items-center flex-1">
            <div className="w-24 h-24 bg-[#fcf8e3] rounded-full flex items-center justify-center border-4 border-white shadow-md mb-6">
              <span className="text-3xl font-black text-[#f97316]">2</span>
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Submit Request</h3>
            <p className="text-gray-500 text-sm max-w-xs">Create an account and submit a formal adoption request through the pet's specific profile page.</p>
          </div>

          <div className="relative z-10 flex flex-col items-center flex-1">
            <div className="w-24 h-24 bg-[#fcf8e3] rounded-full flex items-center justify-center border-4 border-white shadow-md mb-6">
              <span className="text-3xl font-black text-[#f97316]">3</span>
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Take Them Home</h3>
            <p className="text-gray-500 text-sm max-w-xs">Once the owner approves your application, coordinate the pickup and welcome your new best friend!</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;