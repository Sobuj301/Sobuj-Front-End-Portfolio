import React from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "Alice", feedback: "Amazing developer! Highly recommended." },
    { name: "Bob", feedback: "Delivered project on time with great quality." },
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-50 px-8 text-center text-black">
      <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {testimonials.map(t => (
          <div key={t.name} className="bg-white p-6 rounded-lg shadow max-w-sm mx-auto">
            <p className="mb-4">"{t.feedback}"</p>
            <h4 className="font-bold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;