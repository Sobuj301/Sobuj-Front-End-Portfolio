import React from 'react';

const Skills = () => {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js", "Firebase"];

    return (
        <section id="skills" className="h-screen bg-gray-300 flex flex-col items-center justify-center px-5">
            <h2 className="text-4xl font-bold mb-10">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-white text-black px-4 py-2 rounded-lg shadow-sm hover:scale-105 transform transition">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;