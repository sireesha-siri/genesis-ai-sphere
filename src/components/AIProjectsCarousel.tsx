
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    id: 1,
    title: 'Neural Network Visualization',
    // Swapped with a guaranteed Unsplash placeholder image
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Machine Learning Dashboard',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'AI Data Analysis Platform',
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Predictive Analytics System',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1170&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Computer Vision Project',
    image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1170&auto=format&fit=crop',
  },
];

const AIProjectsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Custom dot styling
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .slick-dots li button:before {
        color: #8B5CF6 !important;
      }
      .slick-dots li.slick-active button:before {
        color: #3B82F6 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
          AI Projects Showcase
        </h2>
        
        <div className="mx-6">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="px-3">
                <div className="overflow-hidden rounded-xl transition-all duration-300 
                  hover:shadow-xl shadow-md shadow-primary/20 hover:shadow-primary/40 glass-enhanced">
                  <div className="relative aspect-[16/9]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-black/40 backdrop-blur-md">
                    <h3 className="text-lg font-bold font-orbitron text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AIProjectsCarousel;
