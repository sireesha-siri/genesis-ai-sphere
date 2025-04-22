
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface NavLink {
  text: string;
  href: string;
}

const navLinks: NavLink[] = [
  { text: 'Home', href: '#home' },
  { text: 'About', href: '#about' },
  { text: 'Features', href: '#features' },
  { text: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-gradient font-orbitron tracking-wider">
              SiriNeura
            </h1>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 font-rajdhani text-lg tracking-wide relative 
                      after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-white 
                      after:scale-x-0 after:origin-right after:transition-transform after:duration-300 
                      hover:after:scale-x-100 hover:after:origin-left"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              size="icon" 
              variant="ghost" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 py-2 rounded-md glass-enhanced neon-glow">
            <ul className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a 
                    href={link.href}
                    className="block px-4 py-3 text-gray-300 hover:text-white transition-colors duration-300 font-rajdhani text-lg tracking-wide relative 
                      after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-white 
                      after:scale-x-0 after:origin-right after:transition-transform after:duration-300 
                      hover:after:scale-x-100 hover:after:origin-left"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
