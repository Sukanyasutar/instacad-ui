import React from 'react';
import { Play, ArrowRight, Shield, Zap, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {


  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 pt-8 pb-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <span className="inline-flex items-center px-4 py-2 bg-instacad-blue/10 text-instacad-blue rounded-full text-sm font-semibold mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Since 1990 • Trusted Worldwide
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Engineering
                <span className="block text-instacad-blue mt-2">Excellence</span>
                <span className="block text-gray-700 mt-2">Redefined</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                InstaCAD Solutions delivers cutting-edge engineering software development,
                design services, and automation solutions for industrial projects worldwide.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center px-8 py-4 bg-instacad-blue text-white font-semibold rounded-xl hover:bg-instacad-blue/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                View Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-instacad-blue hover:text-instacad-blue transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-instacad-blue" />
                </div>
                <div className="font-semibold">ISO Certified</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-6 h-6 text-instacad-blue" />
                </div>
                <div className="font-semibold">AI Powered</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-instacad-blue" />
                </div>
                <div className="font-semibold">Fast Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Image/Video */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/assets/images/hero-main.jpg"
                alt="Engineering Software Interface"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-instacad-blue rounded-xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Insta_TRAY v4.0</h3>
                    <p className="text-sm text-gray-600">Latest Release • AI Powered Features</p>
                  </div>
                  <button className="ml-auto px-6 py-2 bg-instacad-blue text-white rounded-lg hover:bg-instacad-blue/90 transition-colors">
                    Try Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;