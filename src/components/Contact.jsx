import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petType: 'cachorro',
    service: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio para um servidor
    console.log('Form data submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission (for demo)
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        petType: 'cachorro',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Endereço",
      details: "Av. dos Pets, 1234, Jardim Animal - São Paulo, SP"
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Telefone",
      details: "(11) 9876-5432"
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      details: "contato@petamigo.com.br"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Horário",
      details: "Segunda - Sábado: 8h às 20h\nDomingo: 9h às 16h"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div 
            className={`w-full lg:w-1/2 px-4 mb-12 lg:mb-0 transition-all duration-700 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-blue-50 rounded-xl p-8 h-full">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Fale Conosco
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Agende uma visita ou tire suas dúvidas
              </h2>
              <p className="text-gray-600 mb-10">
                Estamos sempre prontos para atender você e seu pet com toda atenção e carinho que eles merecem. Entre em contato ou visite nossa loja.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-white p-3 rounded-full shadow-md mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex space-x-4">
                <a href="https://www.facebook.com/" className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/" className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://x.com/" className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="https://br.linkedin.com/" className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div 
            className={`w-full lg:w-1/2 px-4 transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie uma mensagem</h3>
              
              {formSubmitted ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 animate-pulse">
                  <p className="font-medium">Mensagem enviada com sucesso!</p>
                  <p>Entraremos em contato em breve.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="petType" className="block text-gray-700 font-medium mb-2">Tipo de pet</label>
                    <select
                      id="petType"
                      name="petType"
                      value={formData.petType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="cachorro">Cachorro</option>
                      <option value="gato">Gato</option>
                      <option value="passaro">Pássaro</option>
                      <option value="roedor">Roedor</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Serviço desejado</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="banhoTosa">Banho e Tosa</option>
                      <option value="veterinario">Veterinário</option>
                      <option value="creche">Creche</option>
                      <option value="spa">Spa de Luxo</option>
                      <option value="adestramento">Adestramento</option>
                      <option value="petTaxi">Pet Taxi</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Como podemos ajudar você e seu pet?"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;