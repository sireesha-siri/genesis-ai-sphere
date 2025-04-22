
import { useState, useRef, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "SiriNeura transformed our business by providing cutting-edge AI solutions that increased our efficiency by 45%. Their team's expertise in machine learning is unmatched.",
    name: "Alex Johnson",
    role: "CTO, TechLabs"
  },
  {
    id: 2,
    text: "The predictive analytics model developed by SiriNeura helped us anticipate market trends with remarkable accuracy. We've been able to stay ahead of our competition consistently.",
    name: "Samantha Lee",
    role: "Data Science Lead, FutureCorp"
  },
  {
    id: 3,
    text: "Implementing SiriNeura's AI chatbot increased our customer satisfaction ratings by 60%. The natural language processing capabilities are extraordinary.",
    name: "David Rodriguez",
    role: "Product Manager, InnovateTech"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = ((e.clientX - centerX) / 20);
    const rotateX = ((centerY - e.clientY) / 20);
    setRotation({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRotation({ x: 0, y: 0 });
  }, []);

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full bg-transparent shadow-md rounded-tr-2xl rounded-bl-2xl border border-white/10 transition-all duration-300"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.3s, background-color 0.3s, box-shadow 0.3s, border-color 0.3s'
      }}
    >
      <CardContent
        className={`
          p-6 flex flex-col h-full 
          border-t-4 border-b-4 border-l-4 border-r-4
          border-t-[#e5e7eb] border-b-[#e5e7eb] border-l-[#e5e7eb] border-r-[#e5e7eb]
          bg-transparent
          transition-all duration-300
          hover:border-t-[#14B8A6] hover:border-b-[#14B8A6]
          hover:border-l-[#3B82F6] hover:border-r-[#3B82F6]
          hover:bg-white/10
          hover:shadow-lg
        `}
      >
        <Quote className="text-[#8B5CF6] mb-4 w-8 h-8" />
        <p className="text-gray-100 mb-4 flex-grow">{testimonial.text}</p>
        <div className="mt-auto">
          <h4 className="font-bold text-[#3B82F6]">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-black/80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gradient">
          Client Testimonials
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          See what our clients have to say about our AI-powered solutions and services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
