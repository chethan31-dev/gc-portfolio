import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
	return (
		<section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 relative overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
				<div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-20 right-10 animate-pulse delay-1000"></div>
				<div className="absolute w-64 h-64 bg-pink-500/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
			</div>

			<div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
				<div className="animate-fade-in">
					{/* Name */}
					<h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
						Gangadhari Chethan
					</h1>

					{/* Role Title */}
					<h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white">
						Full-Stack Developer <span className="text-cyan-400">(MERN Stack)</span>
					</h2>

					{/* Sub-Title */}
					<p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
						MCA Graduate | <span className="text-cyan-400">React.js</span> • <span className="text-purple-400">Express.js</span> • <span className="text-pink-400">MongoDB</span> • <span className="text-blue-400">Tailwind CSS</span>
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-wrap gap-6 justify-center mb-16">
						<a
							href="#projects"
							className="group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
						>
							<span className="flex items-center gap-2">
								View Projects
								<span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
							</span>
						</a>
						<a
							href="#contact"
							className="group px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
						>
							<span className="flex items-center gap-2">
								Get in Touch
								<span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
							</span>
						</a>
					</div>

					{/* Social Links */}
					<div className="flex gap-6 justify-center">
						<a
							href="https://github.com/chethan31-dev"
							target="_blank"
							rel="noopener noreferrer"
							className="group bg-slate-800/50 backdrop-blur-xl p-4 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1"
							aria-label="GitHub"
						>
							<FaGithub className="w-8 h-8 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
						</a>
						<a
							href="https://linkedin.com/in/chethanmca2025"
							target="_blank"
							rel="noopener noreferrer"
							className="group bg-slate-800/50 backdrop-blur-xl p-4 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
							aria-label="LinkedIn"
						>
							<FaLinkedin className="w-8 h-8 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
						</a>
						<a
							href="mailto:chethanmudhiraj3102@gmail.com"
							className="group bg-slate-800/50 backdrop-blur-xl p-4 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1"
							aria-label="Email"
						>
							<FaEnvelope className="w-8 h-8 text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
						</a>
					</div>

					{/* Scroll Indicator */}
					<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
						<div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
							<div className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
