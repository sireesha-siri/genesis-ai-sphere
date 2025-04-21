
import { useEffect, useRef } from 'react';
import { Brain, Zap, Rocket } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe section elements
    const elements = elementsRef.current.filter(Boolean) as HTMLDivElement[];
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden"
    >
         {/* Decorative elements */}
         <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ai-purple/50 to-transparent"></div>
      <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-ai-purple/5 blur-3xl"></div>
      <div className="absolute -right-40 bottom-20 w-80 h-80 rounded-full bg-ai-cyan/5 blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div 
          ref={(el) => (elementsRef.current[0] = el)}
          className="reveal text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron tracking-tight">
            <span className="text-gradient">About</span> AI Technology
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-inter">
            Artificial Intelligence is transforming how we live, work, and interact with technology. 
            Discover how our advanced AI solutions are pushing the boundaries of what's possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {/* Card 1 */}
          <div 
            ref={(el) => (elementsRef.current[1] = el)}
            className="reveal glass-enhanced rounded-xl p-8 relative overflow-hidden transition-all duration-300 hover-card-effect neon-glow"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-ai-purple/10 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-150"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-lg bg-ai-purple/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <Brain className="w-8 h-8 text-ai-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-rajdhani tracking-wide">Neural Networks</h3>
              <p className="text-gray-400 font-inter">
                Our advanced neural network architectures mimic human brain function to solve complex problems with unprecedented accuracy and efficiency.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            ref={(el) => (elementsRef.current[2] = el)}
            className="reveal glass-enhanced rounded-xl p-8 relative overflow-hidden transition-all duration-300 hover-card-effect neon-glow"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-ai-blue/10 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-150"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-lg bg-ai-blue/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <Zap className="w-8 h-8 text-ai-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-rajdhani tracking-wide">Machine Learning</h3>
              <p className="text-gray-400 font-inter">
                Leverage the power of data with our machine learning algorithms that evolve and improve over time, delivering increasingly accurate results.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            ref={(el) => (elementsRef.current[3] = el)}
            className="reveal glass-enhanced rounded-xl p-8 relative overflow-hidden transition-all duration-300 hover-card-effect neon-glow"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-ai-cyan/10 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-150"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-lg bg-ai-cyan/20 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <Rocket className="w-8 h-8 text-ai-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-rajdhani tracking-wide">Future Technology</h3>
              <p className="text-gray-400 font-inter">
                Stay ahead of the curve with our forward-thinking AI solutions that anticipate industry trends and adapt to emerging technological paradigms.
              </p>
            </div>
          </div>
        </div>

        <div 
          ref={(el) => (elementsRef.current[4] = el)}
          className="reveal mt-20 text-center"
        >
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-inter">
            Our team of AI experts are dedicated to pushing the boundaries of what's possible with artificial intelligence,
            creating solutions that are not just powerful, but also ethical, transparent, and designed with human needs at their core.
          </p>
        </div>
      </div>
      
      
    </section>
  );
};

export default About;
