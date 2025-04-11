import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const ProductCard = ({ image, name, category, price, rating, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const productRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (productRef.current) {
      observer.observe(productRef.current);
    }

    return () => {
      if (productRef.current) {
        observer.unobserve(productRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={productRef}
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-700 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-64 object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-3 right-3">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-blue-50 transition-colors">
            <Heart size={20} className="text-gray-500 hover:text-red-500 transition-colors" />
          </button>
        </div>
        <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          {Array(5).fill().map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({rating}.0)</span>
        </div>
        <h3 className="font-bold text-lg text-gray-800 mb-1">{name}</h3>
        <p className="text-blue-600 font-bold mb-3">R$ {price.toFixed(2)}</p>
        <button className="w-full py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
          <ShoppingCart size={18} className="mr-2" />
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  const [activeTab, setActiveTab] = useState("todos");
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

  const products = [
    {
      id: 1,
      name: "Ração Premium Cães Adultos",
      category: "Alimentos",
      price: 129.90,
      rating: 5,
      image: "/images/produto.jpg",
      type: "cachorros"
    },
    {
      id: 2,
      name: "Brinquedo Interativo para Gatos",
      category: "Brinquedos",
      price: 49.90,
      rating: 4,
      image: "/images/produto.jpg",
      type: "gatos"
    },
    {
      id: 3,
      name: "Coleira Antipulgas Avançada",
      category: "Acessórios",
      price: 89.90,
      rating: 5,
      image: "/images/produto.jpg",
      type: "cachorros"
    },
    {
      id: 4,
      name: "Shampoo Hidratante Natural",
      category: "Higiene",
      price: 39.90,
      rating: 4,
      image: "/images/produto.jpg",
      type: "cachorros"
    },
    {
      id: 5,
      name: "Cama Ortopédica Luxo",
      category: "Conforto",
      price: 219.90,
      rating: 5,
      image: "/images/produto.jpg",
      type: "cachorros"
    },
    {
      id: 6,
      name: "Areia Higiênica Premium",
      category: "Higiene",
      price: 59.90,
      rating: 4,
      image: "/images/produto.jpg",
      type: "gatos"
    },
    {
      id: 7,
      name: "Ração Úmida Gourmet",
      category: "Alimentos",
      price: 12.90,
      rating: 5,
      image: "/images/produto.jpg",
      type: "gatos"
    },
    {
      id: 8,
      name: "Escova Removedora de Pelos",
      category: "Higiene",
      price: 45.90,
      rating: 4,
      image: "/images/produto.jpg",
      type: "outros"
    }
  ];

  const filteredProducts = activeTab === "todos" 
    ? products 
    : products.filter(product => product.type === activeTab);

  return (
    <section 
      ref={sectionRef}
      id="products" 
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div 
            className={`inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Nossos Produtos
          </div>
          <h2 
            className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 transition-all duration-700 delay-100 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            O melhor para seu pet
          </h2>
          <p 
            className={`text-gray-600 transition-all duration-700 delay-200 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Selecionamos cuidadosamente produtos de alta qualidade para garantir o bem-estar, saúde e diversão do seu animal de estimação.
          </p>
        </div>

        <div 
          className={`flex flex-wrap justify-center mb-10 transition-all duration-700 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <button 
            onClick={() => setActiveTab("todos")}
            className={`mx-2 mb-2 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "todos" 
                ? "bg-blue-600 text-white shadow-md" 
                : "bg-white text-gray-700 hover:bg-blue-50"
            }`}
          >
            Todos
          </button>
          <button 
            onClick={() => setActiveTab("cachorros")}
            className={`mx-2 mb-2 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "cachorros" 
                ? "bg-blue-600 text-white shadow-md" 
                : "bg-white text-gray-700 hover:bg-blue-50"
            }`}
          >
            Cachorros
          </button>
          <button 
            onClick={() => setActiveTab("gatos")}
            className={`mx-2 mb-2 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "gatos" 
                ? "bg-blue-600 text-white shadow-md" 
                : "bg-white text-gray-700 hover:bg-blue-50"
            }`}
          >
            Gatos
          </button>
          <button 
            onClick={() => setActiveTab("outros")}
            className={`mx-2 mb-2 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "outros" 
                ? "bg-blue-600 text-white shadow-md" 
                : "bg-white text-gray-700 hover:bg-blue-50"
            }`}
          >
            Outros Pets
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              rating={product.rating}
              delay={index * 100}
            />
          ))}
        </div>

        <div 
          className={`mt-12 text-center transition-all duration-700 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <a 
            href="#" 
            className="bg-transparent border-2 border-blue-600 text-blue-600 py-3 px-8 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Ver Todos Produtos
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
          