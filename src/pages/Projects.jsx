import React from 'react';

const Projects = () => {

    const projectList = [
        { title: "Portfolio Website", tech: "React, Tailwind", link: "#" },
        { title: "E-commerce App", tech: "React, Node.js", link: "#" },
        { title: "Blog Platform", tech: "React, Firebase", link: "#" },
    ];
    return (
        <section id="projects" className="h-screen bg-gray-200 flex flex-col items-center justify-center px-5">
            <h2 className="text-4xl font-bold mb-10">Projects</h2>
            <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
                {projectList.map((project, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.tech}</p>
                        <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;