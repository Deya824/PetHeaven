import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 pt-16 pb-8 border-t-[6px] border-[#f97316]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#f97316] rounded-full flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="font-extrabold text-2xl tracking-wide text-white">
                PetHaven
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting loving families with pets in need. We believe every animal deserves a safe, warm, and loving forever home.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#fcf8e3] mb-4 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">Address:</span> 123 Adoption Avenue, Pet City, PC 12345
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">Phone:</span> +880 1234-567890
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f97316]">Email:</span> support@pethaven.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#fcf8e3] mb-4 uppercase tracking-wider">Follow Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our newest arrivals and success stories!
            </p>
            <div className="flex space-x-4">
              {/* Facebook Icon */}
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-[#fcf8e3] hover:bg-[#f97316] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              
              {/* Twitter (X) Icon */}
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-[#fcf8e3] hover:bg-[#f97316] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              
              {/* Instagram Icon */}
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-[#fcf8e3] hover:bg-[#f97316] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} PetHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;