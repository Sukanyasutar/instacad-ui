import React from 'react';
import { Code, Layout, Database, Cpu, Shield, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsSection: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Insta_TRAY",
      description: "Advanced cable tray design automation with AI-powered optimization",
      icon: <Layout className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Auto Routing", "Material Optimization", "3D Visualization"],
      link: "/products/insta-tray"
    },
    {
      id: 2,
      name: "Insta_INTERNALS",
      description: "Complete panel internal design solution with component library",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Component Library", "Auto Wiring", "BOM Generation"],
      link: "/products/insta-internals"
    },
    {
      id: 3,
      name: "Insta_TRANS.TOWER",
      description: "Transformer substation design and detailing software",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["3D Modeling", "Structural Design", "Foundation Planning"],
      link: "/products/insta-transtower"
    },
    {
      id: 4,
      name: "Insta_LT+HT",
      description: "Low & high tension panel design automation",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Safety Compliance", "Load Calculation", "Layout Generation"],
      link: "/products/insta-lt-ht"
    },
    {
      id: 5,
      name: "Insta_PID",
      description: "Process instrumentation diagram creation tool",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: ["Auto P&ID", "Instrument List", "Loop Diagrams"],
      link: "/products/insta-pid"
    },
    {
      id: 6,
      name: "Other Solutions",
      description: "Custom engineering software development",
      icon: <Code className="w-8 h-8" />,
      color: "from-gray-600 to-gray-800",
      features: ["Custom Tools", "API Integration", "Legacy Migration"],
      link: "/products/others"
    },
  ];

  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-instacad-blue/10 text-instacad-blue rounded-full text-sm font-semibold mb-4">
            OUR PRODUCTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Innovative Engineering
            <span className="block text-instacad-blue">Software Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cutting-edge automation tools designed to streamline your engineering workflow
            and boost productivity by 70%
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:border-instacad-blue/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`absolute -top-4 left-8 w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white shadow-lg`}>
                {product.icon}
              </div>

              <div className="pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-instacad-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={product.link}
                  className="inline-flex items-center text-instacad-blue font-semibold group-hover:text-instacad-blue/80 transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-instacad-blue to-instacad-dark text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;