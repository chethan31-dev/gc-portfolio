import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
	const contactMethods = [
		{
			icon: <FaEnvelope className="w-6 h-6" />,
			title: 'Email',
			value: 'chethanmudhiraj3102@gmail.com',
			href: 'mailto:chethanmudhiraj3102@gmail.com',
			gradient: 'from-neon-cyan-500 to-neon-blue-600',
			hoverColor: 'cyan',
		},
		{
			icon: <FaPhone className="w-6 h-6" />,
			title: 'Phone',
			value: '7032395245',
			href: 'tel:7032395245',
			gradient: 'from-green-500 to-emerald-600',
			hoverColor: 'green',
		},
		{
			icon: <FaLinkedin className="w-6 h-6" />,
			title: 'LinkedIn',
			value: 'linkedin.com/in/chethanmca2025',
			href: 'https://linkedin.com/in/chethanmca2025',
			gradient: 'from-neon-blue-500 to-neon-blue-700',
			hoverColor: 'blue',
		},
		{
			icon: <FaGithub className="w-6 h-6" />,
			title: 'GitHub',
			value: 'github.com/chethan31-dev',
			href: 'https://github.com/chethan31-dev',
			gradient: 'from-neon-purple-500 to-neon-pink-600',
			hoverColor: 'purple',
		},
	];

	return (
		<section id="contact" className="py-20 bg-cyber-dark relative overflow-hidden">
			{/* Animated Background Orbs */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute w-96 h-96 bg-neon-cyan-500/10 rounded-full blur-3xl top-0 right-0 animate-float"></div>
				<div className="absolute w-96 h-96 bg-neon-purple-500/10 rounded-full blur-3xl bottom-0 left-0 animate-float delay-1000"></div>
				<div className="absolute w-80 h-80 bg-neon-pink-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float delay-500"></div>
			</div>

			<div className="max-w-6xl mx-auto px-6 relative z-10">
				{/* Header */}
				<div className="text-center mb-16 animate-fade-in">
					<div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-neon-purple-500/30 bg-neon-purple-500/10 backdrop-blur-sm">
						<span className="w-2 h-2 bg-neon-purple-500 rounded-full animate-pulse"></span>
						<span className="text-sm font-orbitron text-neon-purple-400 tracking-wider">LET'S CONNECT</span>
					</div>

					<h2 className="text-5xl md:text-6xl font-bold font-orbitron mb-4">
						<span className="text-gradient">Get In Touch</span>
					</h2>

					<div className="w-32 h-1.5 bg-gradient-to-r from-neon-cyan-500 via-neon-purple-500 to-neon-pink-500 mx-auto rounded-full shadow-neon-purple"></div>

					<p className="text-gray-400 mt-6 text-lg">
						Let's connect and discuss opportunities
					</p>
				</div>

				{/* Contact Cards Grid */}
				<div className="max-w-4xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{contactMethods.map((method, idx) => (
							<a
								key={idx}
								href={method.href}
								target={method.href.startsWith('http') ? '_blank' : undefined}
								rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
								className="group holographic-card rounded-2xl p-6 hover:shadow-glow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] flex items-center gap-4 animate-fade-in"
								style={{ animationDelay: `${idx * 100}ms` }}
							>
								{/* Icon Container */}
								<div className={`bg-gradient-to-br ${method.gradient} p-4 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
									<div className="text-white">
										{method.icon}
									</div>
								</div>

								{/* Content */}
								<div className="flex-1">
									<h3 className={`font-semibold font-orbitron text-white mb-1 group-hover:text-neon-${method.hoverColor}-400 transition-colors duration-300`}>
										{method.title}
									</h3>
									<p className="text-gray-400 text-sm break-all">
										{method.value}
									</p>
								</div>

								{/* Arrow Indicator */}
								<div className="text-gray-600 group-hover:text-neon-purple-400 group-hover:translate-x-1 transition-all duration-300">
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</div>

								{/* Glow Effect on Hover */}
								<div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
							</a>
						))}
					</div>

					{/* Call to Action */}
					<div className="mt-12 text-center holographic-card rounded-2xl p-8 animate-fade-in delay-500">
						<p className="text-xl text-gray-300 mb-4">
							<span className="text-neon-purple-400 font-semibold">Ready to collaborate?</span>
						</p>
						<p className="text-gray-400">
							I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
