import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "Nova AI Chat",
      tech: ["React.js", "AI Integration", "Netlify"],
      description:
        "An intelligent AI-powered chat application with modern UI/UX, real-time responses, and seamless user experience. Built with cutting-edge AI technology for natural conversations.",
      liveLink: "https://nova-aichat.netlify.app/",
      githubLink: "https://github.com/chethan31-dev/nova-ai-chat",
      image: "/assets/nova.png",
      gradient: "from-neon-purple-600 to-neon-pink-600"
    },

    {
      name: "Weather App",
      tech: ["React.js", "Fetch API", "CSS"],
      description:
        "Built a responsive weather dashboard using real-time API integration. Displays temperature, humidity, wind speed, and weather conditions with a clean UI.",
      liveLink: "https://clever-gnome-a30ff7.netlify.app/",
      githubLink: "https://github.com/chethan31-dev",
      image: "/assets/weatherapp.png.jpeg",
      gradient: "from-neon-cyan-500 to-neon-blue-500"
    },

    {
      name: "Wanderlust Listings App",
      tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary"],
      description:
        "A full-stack travel listings platform with MVC architecture, authentication, CRUD features, sessions, and image uploads.",
      liveLink: "https://majorproject-p9zy.onrender.com/listings",
      githubLink: "https://github.com/chethan31-dev",
      image: "/assets/wanderlust.png.jpeg",
      gradient: "from-neon-pink-500 to-neon-purple-600"
    },

    {
      name: "SmileCraft – Tailwind CSS Website",
      tech: ["HTML", "Tailwind CSS"],
      description:
        "A modern responsive website built using Tailwind CSS, focusing on clean layout, optimized components, and mobile-first design.",
      liveLink: "https://69347b01cefb0b3eb629e4d1--smilecraf.netlify.app/",
      githubLink: "https://github.com/chethan31-dev",
      image: "/assets/smilecraft.png.jpeg",
      gradient: "from-neon-purple-500 to-neon-cyan-500"
    },

    {
      name: "Portfolio Website",
      tech: ["React.js", "Next.js", "Tailwind CSS"],
      description:
        "A personal portfolio highlighting skills, projects, resume, and achievements with a corporate-professional design language.",
      liveLink: "#",
      githubLink: "https://github.com/chethan31-dev",
      image: "/assets/portfolio.png.jpeg",
      gradient: "from-neon-cyan-400 to-neon-purple-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-cyber-dark relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-neon-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-neon-pink-500/10 rounded-full blur-3xl animate-float delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-neon-purple-500/30 bg-neon-purple-500/10 backdrop-blur-sm">
            <span className="w-2 h-2 bg-neon-purple-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-orbitron text-neon-purple-400 tracking-wider">MY WORK</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-neon-purple-500 via-neon-pink-500 to-neon-cyan-400 mx-auto rounded-full shadow-neon-purple"></div>

          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Showcasing my best full-stack development work with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group holographic-card rounded-2xl overflow-hidden hover:shadow-glow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Project Image with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>

                {/* Cyber Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-neon-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 bg-cyber-purple/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold font-orbitron text-white mb-3 group-hover:text-neon-purple-400 transition-colors duration-300">
                  {project.name}
                </h3>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-neon-purple-500/10 border border-neon-purple-500/30 text-neon-purple-400 rounded-full text-xs font-medium backdrop-blur-sm hover:bg-neon-purple-500/20 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-neon-purple-600 to-neon-pink-600 text-white rounded-lg font-medium btn-neon shadow-neon-purple hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-transparent border-2 border-neon-purple-500/50 text-neon-purple-400 rounded-lg font-medium hover:bg-neon-purple-500/10 hover:border-neon-purple-500 hover:shadow-neon-purple transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              {/* Bottom Neon Line */}
              <div className="h-1 bg-gradient-to-r from-transparent via-neon-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
