import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white py-12 border-t border-cyan-500/20">
			<div className="max-w-6xl mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* About */}
					<div>
						<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
							Gangadhari Chethan
						</h3>
						<p className="text-gray-400">
							Full-Stack Developer passionate about building scalable web applications with modern technologies.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
						<ul className="space-y-2">
							<li>
								<a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
									About
								</a>
							</li>
							<li>
								<a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
									Projects
								</a>
							</li>
							<li>
								<a href="#certifications" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
									Certifications
								</a>
							</li>
							<li>
								<a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Connect */}
					<div>
						<h4 className="text-lg font-semibold mb-4 text-purple-400">Connect With Me</h4>
						<div className="flex gap-4">
							<a
								href="https://github.com/chethan31-dev"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-slate-800/50 p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
								aria-label="GitHub"
							>
								<FaGithub className="w-6 h-6" />
							</a>
							<a
								href="https://linkedin.com/in/chethanmca2025"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-slate-800/50 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
								aria-label="LinkedIn"
							>
								<FaLinkedin className="w-6 h-6" />
							</a>
							<a
								href="mailto:chethanmudhiraj3102@gmail.com"
								className="bg-slate-800/50 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
								aria-label="Email"
							>
								<FaEnvelope className="w-6 h-6" />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-slate-800 pt-8 text-center">
					<p className="text-gray-400 flex items-center justify-center gap-2">
						© {currentYear} Gangadhari Chethan. Built with
						<FaHeart className="text-pink-500 animate-pulse" />
						using <span className="text-cyan-400">React</span> & <span className="text-purple-400">Next.js</span>
					</p>
				</div>
			</div>
		</footer>
	);
}
