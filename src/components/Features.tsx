
import { useRef, useEffect } from 'react';
import { Code, Robot, Brain, Search, Zap, Computer } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    icon: Brain,
    title: 'Deep Learning',
    description: 'Advanced neural networks that learn from vast datasets to recognize patterns and make predictions.',
    color: 'text-ai-purple',
    bgColor: 'bg-ai-purple/10',
  },
  {
    icon: Robot,
    title: 'Intelligent Automation',
    description: 'Smart systems that automate complex workflows while continuously improving performance.',
    color: 'text-ai-blue',
    bgColor: 'bg-ai-blue/10',
  },
  {
    icon: Code,
    title: 'Natural Language Processing',
    description: 'Sophisticated algorithms that understand, interpret, and generate human language.',
    color: 'text-ai-cyan',
    bgColor: 'bg-ai-cyan/10',
  },
  {
    icon: Search,
    title: 'Predictive Analytics',
    description: 'Forecast future trends and outcomes based on historical data and pattern recognition.',
    color: 'text-ai-green',
    bgColor: 'bg-ai-green/10',
  },
  {
    icon: Computer,
    title: 'Computer Vision',
    description: 'AI systems that can analyze, understand and process visual information like humans.',
    color: 'text-ai-purple',
    bgColor: 'bg-ai-purple/10',
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Lightning-fast data analysis and decision-making capabilities for time-critical applications.',
    color: 'text-ai-blue',
    bgColor: 'bg-ai-blue/10',
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Advanced <span className="text-gradient">AI Features</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our cutting-edge AI technologies offer a comprehensive suite of capabilities
            designed to transform your business operations and user experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                ref={(el) => (featuresRef.current[index + 1] = el)}
                className="reveal glass-card rounded-xl p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-lg ${feature.bgColor} flex items-center justify-center mb-5`}>
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
