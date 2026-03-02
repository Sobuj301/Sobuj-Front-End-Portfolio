import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="mb-6">Have a project in mind? Let's collaborate!</p>
      <a
        href="mailto:mrgreen@example.com"
        className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Contact;