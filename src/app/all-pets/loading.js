export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcf8e3]">
    
      <div className="w-16 h-16 border-4 border-orange-200 border-t-[#f97316] rounded-full animate-spin"></div>
      <p className="mt-4 text-[#f97316] font-bold animate-pulse">Loading amazing pets...</p>
    </div>
  );
}