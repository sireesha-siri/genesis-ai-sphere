
import { useState, useRef, useEffect } from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background to-black relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ai-purple/50 to-transparent"></div>
      <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-ai-purple/5 blur-3xl"></div>
      <div className="absolute -right-40 bottom-20 w-80 h-80 rounded-full bg-ai-cyan/5 blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="reveal text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Interested in our AI solutions? Send us a message and our team will get back to you shortly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="reveal glass-card rounded-xl p-8 md:p-10"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-ai-purple focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-ai-purple focus:border-transparent outline-none transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-ai-purple focus:border-transparent outline-none transition-all duration-200 resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-6 glow-on-hover bg-gradient-ai hover:opacity-90 transition-opacity text-white font-medium rounded-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </div>
            </div>
          </form>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            <div className="glass-card rounded-xl p-6 flex items-center">
              <div className="w-12 h-12 rounded-lg bg-ai-purple/20 flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-ai-purple" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email Us</h3>
                <p className="text-gray-400">contact@genesisai.com</p>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 flex items-center">
              <div className="w-12 h-12 rounded-lg bg-ai-blue/20 flex items-center justify-center mr-4">
                <MessageSquare className="w-6 h-6 text-ai-blue" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Chat Support</h3>
                <p className="text-gray-400">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
