import React from 'react';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "SafeRide",
      description: "A cloud-centric school transport management mobile ecosystem featuring an AI-driven driver drowsiness detection engine and real-time GPS tracking.",
      technologies: ["Flutter", "Python", "Firebase", "Dlib"],
      githubLink: "https://github.com/manikkavi49-glitch/SafeRideProject",
    },
    {
      id: 2,
      title: "KMC Event Hub",
      description: "A decoupled, service-oriented event management platform with a centralized RESTful Web API backend, utilizing Entity Framework Core.",
      technologies: ["C#", "ASP.NET Core API", "Entity Framework"],
      githubLink: "https://github.com/manikkavi49-glitch/SOC",
    },
    {
      id: 3,
      title: "TechCare",
      description: "An on-demand tech services Android app featuring dynamic custom adapters to manage real-time booking lists via Firebase.",
      technologies: ["Java", "Android Studio", "Firebase"],
      githubLink: "https://github.com/manikkavi49-glitch/Tech-Care-Services-",
    },
    {
      id: 4,
      title: "MedicarePlus",
      description: "A dynamic healthcare portal utilizing PHP and MySQL with secure user authentication, session management, and role-based dashboards.",
      technologies: ["PHP", "MySQL", "XAMPP"],
      githubLink: "https://github.com/manikkavi49-glitch/Medicare-Plus-",
    }
  ];

  return (
    <div id="projects" className="py-20 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500 px-4" >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 
          data-aos="fade-down"
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          My <span className="text-blue-500 dark:text-blue-400">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectList.map((project) => (
            <div 
              key={project.id} 
              data-aos="fade-up" 
              data-aos-delay={project.id * 150}
              className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(37,99,235,0.1)] dark:hover:shadow-[0_10px_30px_rgba(37,99,235,0.2)] transition-all duration-300 flex flex-col"
            >
              {/* Project Title & Desc */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                {project.description}
              </p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Code Button */}
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-medium transition-colors mt-auto w-fit"
              >
                View Code <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;