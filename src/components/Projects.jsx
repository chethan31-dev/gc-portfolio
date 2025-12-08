import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projects() {
	const projects = [
		{
			name: 'Weather App',
			tech: ['React.js', 'Fetch API', 'CSS'],
			description: 'Built a responsive weather dashboard using real-time API integration. Displays temperature, humidity, wind speed, and weather conditions with a clean UI.',
			liveLink: 'https://clever-gnome-a30ff7.netlify.app/',
			githubLink: 'https://github.com/chethan31-dev',
			image: '/projects/weather-app.png',
		},
		{
			name: 'Wanderlust Listings App',
			tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Cloudinary'],
			description: 'A full-stack travel listings platform with MVC architecture, authentication, CRUD features, sessions, and image uploads.',
			liveLink: 'https://majorproject-p9zy.onrender.com/listings',
			githubLink: 'https://github.com/chethan31-dev',
			image: '/projects/wanderlust.png',
		},
		{
			name: 'SmileCraft – Tailwind CSS Website',
			tech: ['HTML', 'Tailwind CSS'],
			description: 'A modern responsive website built using Tailwind CSS, focusing on clean layout, optimized components, and mobile-first design.',
			liveLink: 'https://69347b01cefb0b3eb629e4d1--smilecraf.netlify.app/',
			githubLink: 'https://github.com/chethan31-dev',
			image: '/projects/smilecraft.png',
		},
		{
			name: 'Portfolio Website',
			tech: ['React.js', 'Next.js', 'Tailwind CSS'],
			description: 'A personal portfolio highlighting skills, projects, resume, and achievements with a corporate-professional design language.',
			liveLink: '#',
			githubLink: 'https://github.com/chethan31-dev',
			image: '/projects/portfolio.png',
		},
	];

	return (
		<section id="projects" className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Featured Projects
					</h2>
					<div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
					<p className="text-gray-600 mt-4 text-lg">
						Showcasing my best full-stack development work
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
						>
							{/* Project Image Placeholder */}
							<div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
								<span className="text-white text-6xl font-bold opacity-20">
									{project.name.charAt(0)}
								</span>
							</div>

							{/* Project Content */}
							<div className="p-6">
								<h3 className="text-2xl font-bold text-gray-900 mb-3">
									{project.name}
								</h3>

								{/* Tech Stack */}
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech, techIdx) => (
										<span
											key={techIdx}
											className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Description */}
								<p className="text-gray-600 mb-6 leading-relaxed">
									{project.description}
								</p>

								{/* Links */}
								<div className="flex gap-4">
									<a
										href={project.liveLink}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
									>
										<FaExternalLinkAlt className="w-4 h-4" />
										Live Demo
									</a>
									<a
										href={project.githubLink}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300 font-medium"
									>
										<FaGithub className="w-4 h-4" />
										GitHub
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
