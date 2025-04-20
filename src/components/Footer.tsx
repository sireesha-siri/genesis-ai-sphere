
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-black relative">
      {/* Top border gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gradient">Genesis AI</h2>
          </div>
          
          {/* Navigation */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </nav>
          
          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>© {currentYear} Genesis AI. All rights reserved.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
              {' '}•{' '}
              <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
