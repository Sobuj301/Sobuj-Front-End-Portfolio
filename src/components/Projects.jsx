import React from "react";

const projects = [
  {
    title: "Landing Page UI",
    description: "Modern responsive landing page with smooth scroll and clean UI.",
    image: "https://ln.run/n4xPe", // replace with your image
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Professional portfolio site showcasing projects and skills.",
    image: "https://ln.run/MzbN0",
    link: "#",
  },
  {
    title: "Dashboard UI",
    description: "Sample dashboard UI with sidebar, stats cards, and tables.",
    image: "https://ln.run/1ERS-",
    link: "#",
  },
  {
    title: "E-commerce UI",
    description: "Sample e-commerce website with product listing and cart functionality.",
    image: "https://ln.run/FWvws",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Awesome <span className="text-blue-500">Portfolio</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            My Complete Projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Optional Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 font-semibold hover:underline"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;