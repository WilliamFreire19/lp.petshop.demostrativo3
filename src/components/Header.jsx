import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-blue-600">
              <span className="text-blue-600">Pet</span>
              <span className="text-pink-500">Amigo</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Início
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Serviços
            </a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Produtos
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Depoimentos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <ShoppingCart size={24} />
            </button>
            <a 
              href="#contact" 
              className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Agendar Visita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col py-4 px-4 space-y-3">
            <a 
              href="#" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
            <a 
              href="#services" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#products" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <div className="flex items-center pt-2">
              <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
                <ShoppingCart size={24} />
              </button>
              <a 
                href="#contact" 
                className="ml-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Agendar Visita
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;