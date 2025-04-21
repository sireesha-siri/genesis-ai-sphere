
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import TerminalAnimation from './TerminalAnimation';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = "Empowering the Future with AI...";
  const typingSpeed = 100; // milliseconds per character
  const typingRef = useRef<number | null>(null);
  
  const terminalLines = [
    "Initializing neural network...",
    "Processing data inputs...",
    "Analyzing pattern recognition algorithms...",
    "Optimizing machine learning models...",
    "Generating AI insights...",
    "AI analysis complete. Ready for deployment."
  ];
  
  // Typing animation effect
  useEffect(() => {
    let i = 0;
    
    const typeWriter = () => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
        typingRef.current = window.setTimeout(typeWriter, typingSpeed);
      }
    };
    
    typingRef.current = window.setTimeout(typeWriter, typingSpeed);
    
    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollPosition / windowHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
    toast({
      title: "Welcome to SiriNeura",
      description: "Explore our cutting-edge AI technologies",
      duration: 3000,
    });
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 w-full h-full bg-hero-pattern bg-cover bg-center transition-all duration-300"
        style={{ 
          opacity: 1 - scrollProgress,
          transform: `scale(${1 + scrollProgress * 0.1})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div 
        className="absolute inset-0 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:20px_20px] transition-opacity duration-300"
        style={{ opacity: 0.2 * (1 - scrollProgress) }}
      ></div>

      <div 
        className="container mx-auto px-6 pt-32 pb-20 relative z-10 text-center"
        style={{ 
          transform: `translateY(${scrollProgress * 50}px)`,
          opacity: 1 - scrollProgress,
        }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeIn font-orbitron tracking-tight">
          <span className="text-gradient">SiriNeura</span>
          <br />
          <span className="text-white inline-block">{typedText}<span className="animate-pulse">|</span></span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fadeIn animate-delay-200 font-inter">
          Explore the cutting-edge AI technologies that are revolutionizing industries and transforming the way we interact with digital systems.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn animate-delay-400">
          <Button 
            className="glow-on-hover pulse-effect px-8 py-6 text-lg rounded-full bg-ai-purple hover:bg-ai-purple/90 text-white transform transition-all duration-300 hover:scale-105 active:scale-95 font-rajdhani tracking-wider"
            onClick={handleGetStarted}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            className="px-8 py-6 text-lg rounded-full border-white/20 text-white hover:bg-white/10 transform transition-all duration-300 hover:scale-105 active:scale-95 font-rajdhani tracking-wider"
            onClick={handleLearnMore}
          >
            Learn More
          </Button>
        </div>

        {/* Live AI Insight Panel - Visual element */}
        <div className="mt-16 max-w-md mx-auto glass-enhanced rounded-lg p-4 neon-glow hidden md:block">
          <div className="text-left">
            <div className="flex items-center mb-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-2 text-xs text-gray-400 font-mono">sirineura_insight.sh</span>
            </div>
            <TerminalAnimation lines={terminalLines} typingSpeed={40} />
          </div>
        </div>

        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-ai-purple/20 blur-3xl animate-float"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-ai-blue/20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse transition-opacity duration-300"
        style={{ opacity: 1 - scrollProgress * 2 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-[float_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
      
    
    </section>
  );
};

export default Hero;
