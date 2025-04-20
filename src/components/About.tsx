
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
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-ai-purple/5 to-transparent"></div>
      <div className="absolute -left-20 top-40 w-60 h-60 rounded-full bg-ai-blue/5 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 w-80 h-80 rounded-full bg-ai-cyan/5 blur-3xl"></div>

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
      
      {/* Section Divider */}
      <div className="section-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default About;
