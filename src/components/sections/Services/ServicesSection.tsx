import React from 'react';
import { Code, DraftingCompass, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Engineering Software Development",
      description: "Custom CAD automation tools, BIM solutions, and engineering software tailored to your specific needs.",
      icon: <Code className="w-8 h-8" />,
      color: "bg-blue-500",
      features: [
        "CAD Automation",
        "BIM Integration",
        "Cloud Solutions",
        "Mobile Applications"
      ],
      link: "/services#engineering"
    },
    {
      id: 2,
      title: "Design, Drafting & Detail Engineering",
      description: "Complete engineering design services from concept to detailed drawings and documentation.",
      icon: <DraftingCompass className="w-8 h-8" />,
      color: "bg-purple-500",
      features: [
        "2D/3D Modeling",
        "Structural Design",
        "MEP Coordination",
        "As-built Drawings"
      ],
      link: "/services#design"
    },
    {
      id: 3,
      title: "Manpower Outsourcing",
      description: "Skilled engineering professionals available for project-based or long-term engagements.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-green-500",
      features: [
        "CAD Experts",
        "Structural Engineers",
        "MEP Designers",
        "Project Managers"
      ],
      link: "/services#manpower"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-instacad-blue/10 text-instacad-blue rounded-full text-sm font-semibold mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Engineering
            <span className="block text-instacad-blue">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            End-to-end engineering solutions that bridge the gap between concept and execution
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-instacad-blue/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Icon Badge */}
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 transform group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-instacad-blue rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to={service.link}
                className="inline-flex items-center text-instacad-blue font-semibold hover:text-instacad-blue/80 transition-colors"
              >
                Explore Service
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-20 bg-white rounded-2xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Proven Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Consultation", desc: "Requirements Analysis" },
              { step: "02", title: "Planning", desc: "Solution Design" },
              { step: "03", title: "Development", desc: "Agile Execution" },
              { step: "04", title: "Testing", desc: "Quality Assurance" },
              { step: "05", title: "Delivery", desc: "Support & Maintenance" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-instacad-blue/10 text-instacad-blue rounded-xl flex items-center justify-center mx-auto mb-4 font-bold">
                  {item.step}
                </div>
                <div className="font-semibold text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-200 -ml-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;