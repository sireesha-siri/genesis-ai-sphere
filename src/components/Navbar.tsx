
import { useState, useEffect } from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
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
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDarkTheme(savedTheme === 'dark');
      document.body.classList.toggle('dark', savedTheme === 'dark');
      document.body.classList.toggle('light', savedTheme === 'light');
    } else {
      setIsDarkTheme(prefersDark);
      document.body.classList.toggle('dark', prefersDark);
      document.body.classList.toggle('light', !prefersDark);
    }
  }, []);

  // Detect scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle between dark and light theme with localStorage persistence
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    
    if (newTheme) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-gradient">
              Genesis AI
            </h1>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
            <Button 
              size="icon" 
              variant="ghost" 
              onClick={toggleTheme}
              className="rounded-full transition-all duration-300"
              aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkTheme ? <Sun size={20} className="text-yellow-300" /> : <Moon size={20} className="text-blue-400" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Button 
              size="icon" 
              variant="ghost" 
              onClick={toggleTheme}
              className="rounded-full"
              aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkTheme ? <Sun size={20} className="text-yellow-300" /> : <Moon size={20} className="text-blue-400" />}
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
              aria-label="Toggle mobile menu"
            >
              <Menu />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 py-2 rounded-md bg-black/80 backdrop-blur-md border border-gray-800">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a 
                    href={link.href}
                    className="block px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300"
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
