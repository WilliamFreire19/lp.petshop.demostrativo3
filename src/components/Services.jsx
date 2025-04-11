import { useState, useEffect, useRef } from 'react';
import { Scissors, Bath, Heart, Award, Users, Stethoscope } from 'lucide-react';

const ServiceCard = ({ icon, title, description, delay }) => {
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
      className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-700 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4">
        <a href="#contact" className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors">
          Agendar 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Services = () => {
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

  const services = [
    {
      icon: <Scissors className="w-8 h-8 text-blue-600" />,
      title: "Banho e Tosa",
      description: "Mantemos seu pet limpo e estiloso com nossos banhos premium e serviços de tosa profissional.",
      delay: 100
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      title: "Veterinário",
      description: "Cuidados médicos completos com nossa equipe de veterinários altamente qualificados.",
      delay: 200
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Creche para Pets",
      description: "Um espaço seguro e divertido para seu animal de estimação socializar enquanto você está fora.",
      delay: 300
    },
    {
      icon: <Bath className="w-8 h-8 text-blue-600" />,
      title: "Spa de Luxo",
      description: "Tratamentos especiais para mimar seu amigo peludo, incluindo hidratação e aromaterapia.",
      delay: 400
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Adestramento",
      description: "Técnicas modernas e positivas para ensinar seu pet a se comportar adequadamente.",
      delay: 500
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Pet Taxi",
      description: "Transporte seguro e confortável para levar seu pet até nosso espaço ou para outros compromissos.",
      delay: 600
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div 
            className={`inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Nossos Serviços
          </div>
          <h2 
            className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 transition-all duration-700 delay-100 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Cuidados completos para seu melhor amigo
          </h2>
          <p 
            className={`text-gray-600 transition-all duration-700 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Oferecemos uma ampla variedade de serviços de alta qualidade para garantir o bem-estar, saúde e felicidade do seu pet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>

        <div 
          className={`mt-16 text-center transition-all duration-700 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <a 
            href="#contact" 
            className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg inline-flex items-center"
          >
            Ver Todos Serviços
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;