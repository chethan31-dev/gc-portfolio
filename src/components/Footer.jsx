import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaRocket } from 'react-icons/fa';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const quickLinks = [
		{ name: 'About', href: '#about' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'Certifications', href: '#certifications' },
		{ name: 'Contact', href: '#contact' },
	];

	const socialLinks = [
		{
			icon: <FaGithub className="w-6 h-6" />,
			href: 'https://github.com/chethan31-dev',
			label: 'GitHub',
			gradient: 'from-neon-purple-500 to-neon-pink-500',
		},
		{
			icon: <FaLinkedin className="w-6 h-6" />,
			href: 'https://linkedin.com/in/chethanmca2025',
			label: 'LinkedIn',
			gradient: 'from-neon-blue-500 to-neon-cyan-500',
		},
		{
			icon: <FaEnvelope className="w-6 h-6" />,
			href: 'mailto:chethanmudhiraj3102@gmail.com',
			label: 'Email',
			gradient: 'from-neon-pink-500 to-neon-purple-600',
		},
	];

	return (
		<footer className="bg-cyber-dark text-white py-12 border-t border-neon-purple-500/20 relative overflow-hidden">
			{/* Animated Background */}
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple-500 to-transparent animate-gradient-shift"></div>
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple-500/5 rounded-full blur-3xl"></div>

			<div className="max-w-6xl mx-auto px-6 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* About */}
					<div className="animate-fade-in">
						<h3 className="text-2xl font-bold font-orbitron mb-4">
							<span className="text-gradient">Gangadhari Chethan</span>
						</h3>
						<p className="text-gray-400 leading-relaxed">
							Full-Stack Developer passionate about building scalable web applications with modern technologies.
						</p>
						<div className="mt-4 flex items-center gap-2 text-neon-purple-400">
							<FaRocket className="w-4 h-4 animate-float" />
							<span className="text-sm">Available for opportunities</span>
						</div>
					</div>

					{/* Quick Links */}
					<div className="animate-fade-in delay-200">
						<h4 className="text-lg font-semibold font-orbitron mb-4 text-neon-cyan-400">Quick Links</h4>
						<ul className="space-y-2">
							{quickLinks.map((link, idx) => (
								<li key={idx}>
									<a
										href={link.href}
										className="text-gray-400 hover:text-neon-purple-400 transition-all duration-300 inline-flex items-center gap-2 group"
									>
										<span className="w-1.5 h-1.5 bg-neon-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Connect */}
					<div className="animate-fade-in delay-300">
						<h4 className="text-lg font-semibold font-orbitron mb-4 text-neon-pink-400">Connect With Me</h4>
						<div className="flex gap-4">
							{socialLinks.map((social, idx) => (
								<a
									key={idx}
									href={social.href}
									target={social.href.startsWith('http') ? '_blank' : undefined}
									rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
									className={`group holographic-card p-3 rounded-lg hover:shadow-neon-purple transition-all duration-300 transform hover:-translate-y-1 hover:scale-110`}
									aria-label={social.label}
								>
									<div className="text-gray-400 group-hover:text-neon-purple-400 transition-colors duration-300">
										{social.icon}
									</div>
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-neon-purple-500/20 pt-8 text-center">
					<p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
						<span>© {currentYear} Gangadhari Chethan.</span>
						<span className="flex items-center gap-2">
							Built with
							<FaHeart className="text-neon-pink-500 animate-pulse" />
							using
							<span className="text-neon-cyan-400 font-semibold">React</span>
							&
							<span className="text-neon-purple-400 font-semibold">Vite</span>
						</span>
					</p>
					<p className="text-gray-500 text-sm mt-2">
						<span className="text-neon-purple-400 animate-neon-flicker">●</span> Designed with a futuristic cyber aesthetic
					</p>
				</div>
			</div>
		</footer>
	);
}
