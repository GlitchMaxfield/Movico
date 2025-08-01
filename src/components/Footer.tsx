import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-gray-50/95 backdrop-blur-sm border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Movico Studio" className="h-8 w-auto" />
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 max-w-md">
              Pioneering the future of storytelling through AI-powered video creation. Transform your ideas into stunning visual narratives.
            </p>
            <div className="flex space-x-4">
              <button className="bg-black hover:bg-gray-800 text-white p-3 rounded-full transition-colors duration-300">
                <div className="w-5 h-5 bg-current" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} />
              </button>
              <button className="bg-black hover:bg-gray-800 text-white p-3 rounded-full transition-colors duration-300">
                <div className="w-5 h-5 bg-current rounded-full" />
              </button>
              <button className="bg-black hover:bg-gray-800 text-white p-3 rounded-full transition-colors duration-300">
                <div className="w-5 h-5 bg-current" style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)" }} />
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-black font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">AI Video Generation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">Commercial Production</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">Short Film Creation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">Brand Storytelling</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors duration-300">Motion Graphics</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-gray-600"><span className="block text-sm text-gray-500">Email</span>hello@movico.studio</li>
              <li className="text-gray-600"><span className="block text-sm text-gray-500">Phone</span>+1 (555) 123-4567</li>
              <li className="text-gray-600"><span className="block text-sm text-gray-500">Address</span>123 Creative District, Los Angeles, CA 90028</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Movico Studio. All rights reserved.</div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;