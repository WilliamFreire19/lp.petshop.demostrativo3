import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ image, name, pet, testimonial, rating, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-white p-6 rounded-xl shadow-md transition-all duration-700 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        {Array(5).fill().map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-6">"{testimonial}"</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-gray-500 text-sm">Tutor(a) de {pet}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Ana Silva",
      pet: "Max (Golden Retriever)",
      testimonial: "Meu cachorro sempre fica super feliz quando vai ao PetAmigo! O banho e tosa são perfeitos, e a equipe é extremamente atenciosa.",
      rating: 5,
      image: "/images/usuario.jpg"
    },
    {
      id: 2,
      name: "Carlos Mendes",
      pet: "Luna (Gato Persa)",
      testimonial: "Minha gata costumava ficar muito estressada em outros pet shops, mas aqui ela se sente segura e tranquila. Os produtos são excelentes!",
      rating: 5,
      image: "/images/usuario.jpg"
    },
    {
      id: 3,
      name: "Patricia Rocha",
      pet: "Thor (Bulldog)",
      testimonial: "O veterinário foi extremamente cuidadoso no tratamento do meu cachorro. Recomendo fortemente os serviços veterinários do PetAmigo.",
      rating: 5,
      image: "/images/usuario.jpg"
    },
    {
      id: 4,
      name: "Roberto Alves",
      pet: "Nina (Labrador)",
      testimonial: "A creche para pets é incrível! Minha cachorra volta para casa feliz e cansada de tanto brincar. Vale cada centavo!",
      rating: 4,
      image: "/images/usuario.jpg"
    },
    {
      id: 5,
      name: "Mariana Costa",
      pet: "Mia (Shih Tzu)",
      testimonial: "O spa de luxo transformou minha cachorrinha. O pelo ficou brilhante e ela adorou toda a experiência. Voltaremos com certeza!",
      rating: 5,
      image: "/images/usuario.jpg"
    },
    {
      id: 6,
      name: "Lucas Ferreira",
      pet: "Oliver (Gato Siamês)",
      testimonial: "Excelente atendimento e produtos de qualidade. Meu gato adora a ração que compro aqui, e os preços são justos.",
      rating: 4,
      image: "/images/usuario.jpg"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="py-20 bg-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div 
            className={`inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Depoimentos
          </div>
          <h2 
            className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 transition-all duration-700 delay-100 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            O que nossos clientes dizem
          </h2>
          <p 
            className={`text-gray-600 transition-all duration-700 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Veja a opinião de quem já confia em nossos serviços para cuidar de seus melhores amigos.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.slice(activeIndex * 3, activeIndex * 3 + 3).map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id}
                image={testimonial.image}
                name={testimonial.name}
                pet={testimonial.pet}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="md:hidden">
            <TestimonialCard 
              image={testimonials[activeIndex].image}
              name={testimonials[activeIndex].name}
              pet={testimonials[activeIndex].pet}
              testimonial={testimonials[activeIndex].testimonial}
              rating={testimonials[activeIndex].rating}
              delay={0}
            />
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-md focus:outline-none hover:bg-blue-50 transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-md focus:outline-none hover:bg-blue-50 transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array(Math.ceil(testimonials.length / 3)).fill().map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;