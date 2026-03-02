import React from 'react';

const Skills = () => {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"];
    return (
        <section id="skills" className="py-20 bg-gray-100 px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">My Skills</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {skills.map(skill => (
                    <div key={skill} className="bg-white text-black px-6 py-3 rounded-lg shadow hover:scale-105 transition">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;