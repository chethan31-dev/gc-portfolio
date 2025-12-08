import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
	return (
		<section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
			{/* Animated Background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
				<div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse"></div>
			</div>

			<div className="max-w-6xl mx-auto px-6 relative z-10">
				<div className="text-center mb-16">
					<h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
						Get In Touch
					</h2>
					<div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
					<p className="text-gray-300 mt-6 text-lg">
						Let's connect and discuss opportunities
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Email */}
						<a
							href="mailto:chethanmudhiraj3102@gmail.com"
							className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2 flex items-center gap-4"
						>
							<div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
								<FaEnvelope className="w-6 h-6 text-white" />
							</div>
							<div>
								<h3 className="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">Email</h3>
								<p className="text-gray-400 text-sm">chethanmudhiraj3102@gmail.com</p>
							</div>
						</a>

						{/* Phone */}
						<a
							href="tel:7032395245"
							className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 transform hover:-translate-y-2 flex items-center gap-4"
						>
							<div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
								<FaPhone className="w-6 h-6 text-white" />
							</div>
							<div>
								<h3 className="font-semibold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">Phone</h3>
								<p className="text-gray-400 text-sm">7032395245</p>
							</div>
						</a>

						{/* LinkedIn */}
						<a
							href="https://linkedin.com/in/chethanmca2025"
							target="_blank"
							rel="noopener noreferrer"
							className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2 flex items-center gap-4"
						>
							<div className="bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
								<FaLinkedin className="w-6 h-6 text-white" />
							</div>
							<div>
								<h3 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">LinkedIn</h3>
								<p className="text-gray-400 text-sm">linkedin.com/in/chethanmca2025</p>
							</div>
						</a>

						{/* GitHub */}
						<a
							href="https://github.com/chethan31-dev"
							target="_blank"
							rel="noopener noreferrer"
							className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 flex items-center gap-4"
						>
							<div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
								<FaGithub className="w-6 h-6 text-white" />
							</div>
							<div>
								<h3 className="font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">GitHub</h3>
								<p className="text-gray-400 text-sm">github.com/chethan31-dev</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
