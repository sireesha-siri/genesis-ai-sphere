
import { useRef, useEffect } from 'react';
import { Code, Bot, Brain, Search, Zap, Computer } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  extendedDescription?: string;
}

const features: Feature[] = [
  {
    icon: Brain,
    title: 'Deep Learning',
    description: 'Advanced neural networks that learn from vast datasets to recognize patterns and make predictions.',
    color: 'text-ai-purple',
    bgColor: 'bg-ai-purple/10',
    extendedDescription: 'Our deep learning models achieve state-of-the-art performance across various domains including computer vision, natural language processing, and reinforcement learning.',
  },
  {
    icon: Bot,
    title: 'Intelligent Automation',
    description: 'Smart systems that automate complex workflows while continuously improving performance.',
    color: 'text-ai-blue',
    bgColor: 'bg-ai-blue/10',
    extendedDescription: 'From robotic process automation to intelligent decision systems, our solutions streamline operations and reduce manual intervention across industries.',
  },
  {
    icon: Code,
    title: 'Natural Language Processing',
    description: 'Sophisticated algorithms that understand, interpret, and generate human language.',
    color: 'text-ai-cyan',
    bgColor: 'bg-ai-cyan/10',
    extendedDescription: 'Our NLP models can analyze sentiment, extract entities, summarize text, and even generate human-like responses in multiple languages.',
  },
  {
    icon: Search,
    title: 'Predictive Analytics',
    description: 'Forecast future trends and outcomes based on historical data and pattern recognition.',
    color: 'text-ai-green',
    bgColor: 'bg-ai-green/10',
    extendedDescription: 'By combining machine learning with statistical analysis, our predictive models help businesses anticipate market changes and customer behavior.',
  },
  {
    icon: Computer,
    title: 'Computer Vision',
    description: 'AI systems that can analyze, understand and process visual information like humans.',
    color: 'text-ai-purple',
    bgColor: 'bg-ai-purple/10',
    extendedDescription: 'From facial recognition to object detection and scene understanding, our computer vision systems bring visual intelligence to applications.',
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Lightning-fast data analysis and decision-making capabilities for time-critical applications.',
    color: 'text-ai-blue',
    bgColor: 'bg-ai-blue/10',
    extendedDescription: 'Our optimized algorithms and specialized hardware acceleration enable millisecond-level responses for applications where timing is critical.',
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

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

    const elements = featuresRef.current.filter(Boolean) as HTMLDivElement[];
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background/95 to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -left-40 top-20 w-80 h-80 rounded-full bg-ai-purple/5 blur-3xl"></div>
      <div className="absolute -right-40 bottom-40 w-80 h-80 rounded-full bg-ai-blue/5 blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div 
          ref={(el) => (featuresRef.current[0] = el)}
          className="reveal text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron tracking-tight">
            Advanced <span className="text-gradient">AI Features</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-inter">
            Our cutting-edge AI technologies offer a comprehensive suite of capabilities
            designed to transform your business operations and user experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <HoverCard key={feature.title} openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <div
                    ref={(el) => (featuresRef.current[index + 1] = el)}
                    className={`reveal glass-enhanced rounded-xl p-6 transition-all duration-300 hover-card-effect cursor-pointer border border-white/5 hover:border-white/20 ${
                      index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-14 h-14 rounded-lg ${feature.bgColor} flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
                      <Icon className={`w-7 h-7 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 font-rajdhani tracking-wide">{feature.title}</h3>
                    <p className="text-gray-400 font-inter">{feature.description}</p>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="glass-enhanced border border-white/10 bg-black/80 backdrop-blur-xl text-white w-80 neon-glow">
                  <div className="flex justify-between space-x-4">
                    <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold font-rajdhani">{feature.title}</h4>
                      <p className="text-xs text-gray-300 font-inter">{feature.extendedDescription}</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
      </div>
      
      
    </section>
  );
};

export default Features;
