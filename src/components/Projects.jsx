import React from "react";

const Projects = () => {
  const projects = [
    { title: "Portfolio Website", description: "My personal website built with React and Tailwind.", link: "#" },
    { title: "E-commerce UI", description: "Responsive e-commerce interface with React.", link: "#" },
    { title: "Todo App", description: "Simple todo app using React hooks.", link: "#" },
  ];

  return (
    <section id="projects" className="py-20 px-8 max-w-6xl mx-auto text-center text-black">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.title} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 font-semibold hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;