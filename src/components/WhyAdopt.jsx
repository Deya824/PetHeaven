const WhyAdopt = () => {
  return (
    <section className="py-20 bg-[#fcf8e3] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-12">Why Adopt a Pet?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 flex flex-col items-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-[#f97316] mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Save a Life</h3>
            <p className="text-gray-500 text-sm leading-relaxed">When you adopt, you save a loving animal by making them part of your family and open up shelter space for another animal who might desperately need it.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 flex flex-col items-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-[#f97316] mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Unconditional Love</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Adopted pets are extremely grateful. They will bring endless joy, companionship, and unconditional love into your everyday life.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 flex flex-col items-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-[#f97316] mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Long-Term Happiness</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Caring for a pet has been shown to lower stress levels, improve blood pressure, and increase overall long-term mental well-being.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;