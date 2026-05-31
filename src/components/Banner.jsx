import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative bg-[#fcf8e3] overflow-hidden min-h-[500px] md:min-h-[600px] border-b border-gray-200 flex items-center justify-center">
      
      {/* Background Doodles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <svg className="absolute top-12 left-[20%] w-10 h-10 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12,2 22,20 2,20" />
        </svg>
        <svg className="absolute top-8 left-[45%] w-16 h-16 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3,12 Q6,6 9,12 T15,12 T21,12" />
        </svg>
        <svg className="absolute bottom-16 right-[25%] w-12 h-12 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="2,12 6,4 10,20 14,8 18,16 22,12" />
        </svg>
      </div>

      {/* Left Dog Container - Anchored to bottom-left */}
      <div className="hidden md:block absolute left-0 bottom-0 w-[30%] lg:w-[35%] h-[85%] z-10">
        <div className="w-full h-full rounded-tr-full overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Dog" 
            className="w-full h-full object-cover object-right-top"
          />
        </div>
        
        {/* Orange "HELLO!" Bubble - Attached to the dog container edge */}
        <div className="absolute -right-8 bottom-12 transform -rotate-6 z-30">
          <div className="relative bg-[#f97316] text-white font-black text-xl md:text-2xl px-6 py-4 rounded-[40px] rounded-bl-sm shadow-md border-[3px] border-[#f97316]">
            HELLO!
            <div className="absolute -bottom-3 left-2 w-6 h-6 bg-[#f97316] transform rotate-45 -z-10 border-b-[3px] border-r-[3px] border-[#f97316]"></div>
          </div>
        </div>
      </div>

      {/* Center Text Container - Sits cleanly above the background */}
      <div className="w-full md:w-[40%] lg:w-[30%] text-center px-4 relative z-20 flex flex-col items-center">
        
        <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
          PETHAVEN ANIMALS
        </p>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] leading-tight mb-2 tracking-tight">
          Start A Story. Adopt
        </h1>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] leading-tight mb-8 tracking-tight">
          Search to find your <br className="hidden md:block" /> new best friend
        </h2>

        <Link 
          href="/all-pets" 
          className="inline-flex items-center text-sm font-bold text-[#1a1a1a] uppercase tracking-widest hover:text-[#f97316] transition-colors pb-1 border-b-2 border-[#1a1a1a] hover:border-[#f97316]"
        >
          Adopt Now
        </Link>
      </div>

      {/* Right Cat Container - Anchored to bottom-right */}
      <div className="hidden md:block absolute right-0 bottom-0 w-[30%] lg:w-[35%] h-[85%] z-10">
        <div className="w-full h-full rounded-tl-full overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Cat" 
            className="w-full h-full object-cover object-left-top"
          />
        </div>
      </div>

    </div>
  );
};

export default Banner;