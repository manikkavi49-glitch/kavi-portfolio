import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "R", "SQL", "C#", "PHP"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Flutter", "Firebase", "OpenCV", "Dlib", "ASP.NET Core", "Entity Framework"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Android Studio", "Visual Studio", "VS Code", "Git & GitHub", "XAMPP"]
    },
    {
      title: "Core Concepts",
      skills: ["OOP", "MVC Architecture", "Database Design", "Agile", "Statistical Analysis"]
    }
  ];

  return (
    <div id="skills" className="py-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500 px-4">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 
          data-aos="fade-down"
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white transition-colors duration-500"
        >
          My <span className="text-blue-500 dark:text-blue-400">Technical Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-gray-50 dark:bg-gray-800/40 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500/50 transition-colors duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-6 text-center border-b border-gray-200 dark:border-gray-700 pb-4 transition-colors duration-500">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3 mt-auto">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700 hover:text-blue-600 hover:border-blue-400 dark:hover:text-white dark:hover:border-blue-400 hover:shadow-[0_0_10px_rgba(59,130,246,0.1)] dark:hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] cursor-default transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;