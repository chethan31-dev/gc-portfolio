import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaRocket } from 'react-icons/fa';

export default function Hero() {
	return (
		<section id="home" className="min-h-screen flex items-center justify-center bg-cyber-dark pt-20 relative overflow-hidden">
			{/* Animated Neon Orbs */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute w-96 h-96 bg-neon-purple-500/20 rounded-full blur-3xl top-20 left-10 animate-float"></div>
				<div className="absolute w-96 h-96 bg-neon-pink-500/20 rounded-full blur-3xl bottom-20 right-10 animate-float delay-1000"></div>
				<div className="absolute w-80 h-80 bg-neon-cyan-400/15 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float delay-500"></div>
			</div>

			{/* Cyber Grid Overlay */}
			<div className="absolute inset-0 bg-cyber-grid bg-grid opacity-30 pointer-events-none"></div>

			{/* Main Content */}
			<div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
				<div className="animate-fade-in">
					{/* Cyber Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-neon-purple-500/30 bg-neon-purple-500/10 backdrop-blur-sm animate-glow-pulse">
						<span className="w-2 h-2 bg-neon-purple-500 rounded-full animate-pulse"></span>
						<span className="text-sm font-orbitron text-neon-purple-400 tracking-wider">AVAILABLE FOR WORK</span>
					</div>

					{/* Name with Neon Effect */}
					<h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight font-orbitron">
						<span className="text-gradient animate-gradient-shift">
							Gangadhari Chethan
						</span>
					</h1>

					{/* Role Title with Glitch Effect */}
					<h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white font-orbitron">
						Full-Stack Developer{' '}
						<span className="text-neon-purple inline-block animate-neon-flicker">(MERN Stack)</span>
					</h2>

					{/* Tech Stack Pills */}
					<div className="flex flex-wrap gap-3 justify-center mb-12 max-w-3xl mx-auto">
						<span className="px-4 py-2 rounded-full bg-neon-cyan-400/10 border border-neon-cyan-400/30 text-neon-cyan-400 text-sm font-medium backdrop-blur-sm hover:bg-neon-cyan-400/20 transition-all duration-300 hover:scale-105 hover:shadow-neon-cyan">
							React.js
						</span>
						<span className="px-4 py-2 rounded-full bg-neon-purple-500/10 border border-neon-purple-500/30 text-neon-purple-400 text-sm font-medium backdrop-blur-sm hover:bg-neon-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-neon-purple">
							Express.js
						</span>
						<span className="px-4 py-2 rounded-full bg-neon-pink-500/10 border border-neon-pink-500/30 text-neon-pink-400 text-sm font-medium backdrop-blur-sm hover:bg-neon-pink-500/20 transition-all duration-300 hover:scale-105 hover:shadow-neon-pink">
							MongoDB
						</span>
						<span className="px-4 py-2 rounded-full bg-neon-blue-400/10 border border-neon-blue-400/30 text-neon-blue-400 text-sm font-medium backdrop-blur-sm hover:bg-neon-blue-400/20 transition-all duration-300 hover:scale-105 hover:shadow-neon-blue">
							Tailwind CSS
						</span>
						<span className="px-4 py-2 rounded-full bg-neon-purple-500/10 border border-neon-purple-500/30 text-neon-purple-400 text-sm font-medium backdrop-blur-sm hover:bg-neon-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-neon-purple">
							MCA Graduate
						</span>
					</div>

					{/* CTA Buttons with Neon Effects */}
					<div className="flex flex-wrap gap-6 justify-center mb-16">
						<a
							href="#projects"
							className="group relative px-10 py-4 bg-gradient-to-r from-neon-purple-600 to-neon-pink-600 text-white rounded-xl font-semibold overflow-hidden btn-neon shadow-neon-purple hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
						>
							<span className="relative z-10 flex items-center gap-2">
								<FaRocket className="w-5 h-5" />
								View Projects
								<span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
							</span>
						</a>
						<a
							href="#contact"
							className="group relative px-10 py-4 bg-transparent border-2 border-neon-purple-500 text-neon-purple-400 rounded-xl font-semibold hover:bg-neon-purple-500/10 hover:shadow-neon-purple transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
						>
							<span className="flex items-center gap-2">
								Get in Touch
								<span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
							</span>
						</a>
					</div>

					{/* Social Links with Holographic Cards */}
					<div className="flex gap-6 justify-center">
						<a
							href="https://github.com/chethan31-dev"
							target="_blank"
							rel="noopener noreferrer"
							className="group holographic-card p-4 rounded-xl hover:shadow-neon-purple transition-all duration-500 transform hover:-translate-y-2 hover:scale-110"
							aria-label="GitHub"
						>
							<FaGithub className="w-8 h-8 text-gray-300 group-hover:text-neon-purple-400 transition-colors duration-300" />
						</a>
						<a
							href="https://linkedin.com/in/chethanmca2025"
							target="_blank"
							rel="noopener noreferrer"
							className="group holographic-card p-4 rounded-xl hover:shadow-neon-cyan transition-all duration-500 transform hover:-translate-y-2 hover:scale-110"
							aria-label="LinkedIn"
						>
							<FaLinkedin className="w-8 h-8 text-gray-300 group-hover:text-neon-cyan-400 transition-colors duration-300" />
						</a>
						<a
							href="mailto:chethanmudhiraj3102@gmail.com"
							className="group holographic-card p-4 rounded-xl hover:shadow-neon-pink transition-all duration-500 transform hover:-translate-y-2 hover:scale-110"
							aria-label="Email"
						>
							<FaEnvelope className="w-8 h-8 text-gray-300 group-hover:text-neon-pink-400 transition-colors duration-300" />
						</a>
					</div>

					{/* Animated Scroll Indicator */}
					<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
						<div className="w-6 h-10 border-2 border-neon-purple-500/50 rounded-full flex justify-center shadow-neon-purple">
							<div className="w-1.5 h-3 bg-neon-purple-500 rounded-full mt-2 animate-glow-pulse"></div>
						</div>
					</div>
				</div>
			</div>

			{/* Corner Accents */}
			<div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-neon-purple-500/30 rounded-tl-3xl"></div>
			<div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-neon-pink-500/30 rounded-br-3xl"></div>
		</section>
	);
}
