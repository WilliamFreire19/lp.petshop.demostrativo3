import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-pink-50 z-0">
        <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full -mr-32 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 rounded-full -ml-32 -mb-16"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 pt-24 md:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div 
            className={`lg:w-1/2 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-4">
              Cuidamos do seu Pet <br />
              <span className="text-blue-600">como família</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Oferecemos serviços premium de cuidados para animais de estimação, 
              com profissionais qualificados e produtos de alta qualidade para o
              bem-estar do seu melhor amigo.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#services" 
                className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Nossos Serviços
              </a>
              <a 
                href="#contact" 
                className="bg-white text-blue-600 border-2 border-blue-600 py-3 px-8 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Agendar Visita
              </a>
            </div>
            
            <div className="flex items-center mt-10 space-x-8">
              <div className="flex items-center">
                <div className="bg-white shadow-md p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-700 font-medium">Equipe Qualificada</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white shadow-md p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-700 font-medium">Produtos Premium</span>
              </div>
            </div>
          </div>
          
          <div 
            className={`lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="w-full h-full bg-blue-100 absolute -left-4 -top-4 rounded-xl"></div>
              <div className="w-full h-full bg-pink-100 absolute -right-4 -bottom-4 rounded-xl"></div>
              <img 
                src='/images/cachorro.jpg'
                alt="Cachorro feliz sendo cuidado" 
                className="w-full rounded-xl relative z-10 shadow-lg"
              />
              <div className="absolute -right-6 -bottom-6 bg-white shadow-lg rounded-lg p-3 z-20 animate-bounce">
                <div className="flex items-center">
                  <div className="bg-yellow-400 text-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-800 font-bold">5.0</p>
                    <p className="text-xs text-gray-500">+2000 clientes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;