
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        transform: `translateY(${scrolled ? '0' : '0'}px)`,
        opacity: scrolled ? '0.8' : '1',
        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
      }}
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0 w-full h-full bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Animated dots/particles overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeIn">
          <span className="text-gradient">Artificial Intelligence</span>
          <br />
          <span className="text-white">Reimagined for the Future</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fadeIn animate-delay-200">
          Explore the cutting-edge AI technologies that are revolutionizing industries and transforming the way we interact with digital systems.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn animate-delay-400">
          <Button className="glow-on-hover px-8 py-6 text-lg rounded-full bg-ai-purple hover:bg-ai-purple/90 text-white">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-white/20 text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>

        {/* Floating elements for futuristic effect */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-ai-purple/20 blur-3xl animate-float"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-ai-blue/20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-[float_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
