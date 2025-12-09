import React from 'react';
import HeroSection from '../components/sections/Hero/HeroSection';
import ProductsSection from '../components/sections/Products/ProductsSection';
import ServicesSection from '../components/sections/Services/ServicesSection';
import AboutSection from '../components/sections/About/AboutSection';
import ContactSection from '../components/sections/Contact/ContactSection';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <ContactSection />
      
      {/* Stats Section */}
      <div className="bg-gradient-to-r from-instacad-blue to-instacad-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold font-heading">30+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold font-heading">500+</div>
              <div className="text-sm opacity-90">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold font-heading">50+</div>
              <div className="text-sm opacity-90">Software Solutions</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold font-heading">100%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;