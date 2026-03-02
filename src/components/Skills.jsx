import React from "react";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React JS", level: 75 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Git & GitHub", level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-5">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            I have 1.5 years of hands-on experience building modern and responsive web interfaces.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {skills.map((skill, index) => (
            <div key={index}>
              
              {/* Skill Name & Percentage */}
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-blue-400">{skill.level}%</span>
              </div>

              {/* Progress Bar Background */}
              <div className="w-full bg-gray-800 rounded-full h-3">
                
                {/* Progress Fill */}
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;