import React from 'react';
import { FaRocket, FaCode, FaLightbulb, FaUsers } from 'react-icons/fa';

export default function About() {
	const highlights = [
		{ icon: <FaCode className="w-8 h-8" />, title: 'Full-Stack Developer', color: 'neon-purple' },
		{ icon: <FaRocket className="w-8 h-8" />, title: 'MERN Stack Expert', color: 'neon-pink' },
		{ icon: <FaLightbulb className="w-8 h-8" />, title: 'Problem Solver', color: 'neon-cyan' },
		{ icon: <FaUsers className="w-8 h-8" />, title: 'Team Player', color: 'neon-blue' },
	];

	return (
		<section id="about" className="py-20 bg-cyber-dark relative overflow-hidden">
			{/* Animated Background */}
			<div className="absolute top-20 right-20 w-96 h-96 bg-neon-purple-500/10 rounded-full blur-3xl animate-float"></div>
			<div className="absolute bottom-20 left-20 w-80 h-80 bg-neon-cyan-500/10 rounded-full blur-3xl animate-float delay-1000"></div>

			<div className="max-w-6xl mx-auto px-6 relative z-10">
				{/* Header */}
				<div className="text-center mb-16 animate-fade-in">
					<div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-neon-purple-500/30 bg-neon-purple-500/10 backdrop-blur-sm">
						<span className="w-2 h-2 bg-neon-purple-500 rounded-full animate-pulse"></span>
						<span className="text-sm font-orbitron text-neon-purple-400 tracking-wider">WHO I AM</span>
					</div>

					<h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-4">
						<span className="text-gradient">About Me</span>
					</h2>

					<div className="w-32 h-1 bg-gradient-to-r from-neon-purple-500 via-neon-pink-500 to-neon-cyan-400 mx-auto rounded-full shadow-neon-purple"></div>
				</div>

				<div className="max-w-4xl mx-auto">
					{/* Main Content Card */}
					<div className="holographic-card rounded-3xl p-8 md:p-12 hover:shadow-glow-xl transition-all duration-500 mb-12 animate-fade-in delay-200">
						<p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-6">
							<span className="text-neon-purple-400 font-semibold">MCA student</span> with hands-on experience in building{' '}
							<span className="text-neon-cyan-400 font-semibold">full-stack applications</span> using React, Node.js, and MongoDB.
						</p>
						<p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-6">
							Strong understanding of <span className="text-neon-pink-400 font-semibold">frontend development</span>, modern UI design, and API integration.
						</p>
						<p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
							Passionate about building <span className="text-neon-purple-400 font-semibold">scalable applications</span>, solving problems, and continuously improving technical skills.
							Looking for a <span className="text-gradient font-semibold">Full-Stack / React Developer</span> fresher role to apply my knowledge and grow with a high-performing engineering team.
						</p>
					</div>

					{/* Highlights Grid */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in delay-300">
						{highlights.map((item, idx) => (
							<div
								key={idx}
								className="holographic-card rounded-xl p-6 text-center hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group"
								style={{ animationDelay: `${(idx + 3) * 100}ms` }}
							>
								<div className={`text-${item.color}-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
									{item.icon}
								</div>
								<p className={`text-sm font-medium text-gray-400 group-hover:text-${item.color}-400 transition-colors duration-300`}>
									{item.title}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
