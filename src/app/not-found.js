import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcf8e3] p-5 text-center">
      <h1 className="text-9xl font-black text-[#f97316]">404</h1>
      <h2 className="text-3xl font-bold text-[#1a1a1a] mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2 max-w-md">
        Oops! It seems like the page you are looking for has wandered off to the park.
      </p>
      <Link href="/">
        <button className="mt-8 px-8 py-4 bg-[#1a1a1a] text-white font-bold rounded-2xl hover:bg-[#333] transition">
          Back to Home
        </button>
      </Link>
    </div>
  );
}