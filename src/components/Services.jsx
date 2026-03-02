import React from 'react';
import { Monitor, Layout, BarChart3, ShoppingCart } from 'lucide-react';

const services = [
  {
    title: "Landing Page Design",
    features: [
      "Responsive Layout",
      "Hero Section with CTA",
      "Smooth Scroll",
      "Contact Form (UI)"
    ],
    icon: <Monitor size={32} className="text-blue-400" />,
  },
  {
    title: "Portfolio Website",
    features: [
      "About & Skills Section",
      "Project Showcase",
      "Download CV Button",
      "Dark Mode UI"
    ],
    icon: <Layout size={32} className="text-blue-400" />,
  },
  {
    title: "Sample Dashboard UI",
    features: [
      "Sidebar Navigation",
      "Stats Cards",
      "Simple Table",
      "Responsive Layout"
    ],
    icon: <BarChart3 size={32} className="text-blue-400" />,
  },
  {
    title: "Sample E-commerce UI",
    features: [
      "Product Listing",
      "Add to Cart",
      "Cart Page",
      "Quantity Control"
    ],
    icon: <ShoppingCart size={32} className="text-blue-400" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-blue-500">Services</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            I build modern, responsive and user-friendly web interfaces 
            using React and Tailwind CSS.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              <div className="mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <ul className="space-y-2 text-gray-400 text-sm">
                {service.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;