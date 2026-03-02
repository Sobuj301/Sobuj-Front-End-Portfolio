import React from "react";

const testimonials = [
  {
    name: "Yakub Prodhan",
    role: "Owner, Mouikuli Streetfast Saree Shop",
    feedback:
      "Green Dev designed a clean and responsive website for my saree shop. It’s easy to navigate and looks very professional!",
    image: "https://ln.run/dMTwY", // replace with client/demo image
  },
  {
    name: "Anjel Morol",
    role: "Digital Marketer",
    feedback:
      "I asked Green Dev to build a portfolio website for me. The design is modern and fully responsive, exactly what I needed.",
    image: "https://ln.run/ivkS-",
  },
  {
    name: "Hossain Michael",
    role: "Local Client",
    feedback:
      "Amazing work! The UI is clean and professional. I can see the experience of 1.5 years clearly in this work.",
    image: "https://ln.run/s4wu6",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            What <span className="text-blue-500">Clients Say</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Feedback from my clients and demo projects
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Client Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />

              {/* Feedback */}
              <p className="text-gray-300 italic mb-4">"{testimonial.feedback}"</p>

              {/* Name & Role */}
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;