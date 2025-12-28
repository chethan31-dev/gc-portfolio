'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navLinks = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Experience', href: '#experience' },
		{ name: 'Education', href: '#education' },
		{ name: 'Certifications', href: '#certifications' },
		{ name: 'Contact', href: '#contact' },
	];

	const scrollToSection = (e, href) => {
		e.preventDefault();
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setIsOpen(false);
		}
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
					? 'bg-cyber-dark/95 backdrop-blur-xl shadow-glow-lg border-b border-neon-purple-500/30'
					: 'bg-transparent'
				}`}
		>
			{/* Neon Border Animation */}
			{scrolled && (
				<div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-purple-500 to-transparent animate-gradient-shift"></div>
			)}

			<div className="max-w-7xl mx-auto px-6">
				<div className="flex justify-between items-center py-4">
					{/* Logo with Neon Effect */}
					<a
						href="#home"
						onClick={(e) => scrollToSection(e, '#home')}
						className="relative group"
					>
						<span className="text-3xl font-bold font-orbitron text-gradient hover:scale-110 transition-transform duration-300 inline-block">
							GC<span className="text-neon-pink-500 animate-neon-flicker">.</span>
						</span>
						<div className="absolute -inset-2 bg-neon-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-1">
						{navLinks.map((link, index) => (
							<a
								key={link.name}
								href={link.href}
								onClick={(e) => scrollToSection(e, link.href)}
								className="relative px-4 py-2 text-gray-300 hover:text-neon-purple-400 font-medium transition-all duration-300 group overflow-hidden"
								style={{ animationDelay: `${index * 50}ms` }}
							>
								<span className="relative z-10">{link.name}</span>

								{/* Hover Background */}
								<div className="absolute inset-0 bg-neon-purple-500/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>

								{/* Underline Animation */}
								<span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-neon-purple-500 via-neon-pink-500 to-neon-cyan-400 group-hover:w-full transition-all duration-300"></span>

								{/* Glow Effect */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<div className="absolute inset-0 bg-neon-purple-500/5 blur-sm"></div>
								</div>
							</a>
						))}
					</div>

					{/* Mobile Menu Button with Cyber Effect */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden relative text-gray-300 hover:text-neon-purple-400 transition-colors duration-300 p-3 rounded-lg border border-neon-purple-500/30 bg-cyber-purple/30 backdrop-blur-sm hover:bg-neon-purple-500/10 hover:shadow-neon-purple group"
						aria-label="Toggle menu"
					>
						<div className="relative z-10">
							{isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
						</div>
						<div className="absolute inset-0 bg-neon-purple-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
					</button>
				</div>

				{/* Mobile Navigation with Slide Animation */}
				{isOpen && (
					<div className="md:hidden mb-4 animate-slide-in">
						<div className="holographic-card rounded-xl shadow-glow-lg p-2 space-y-1">
							{navLinks.map((link, index) => (
								<a
									key={link.name}
									href={link.href}
									onClick={(e) => scrollToSection(e, link.href)}
									className="block py-3 px-4 text-gray-300 hover:text-neon-purple-400 hover:bg-neon-purple-500/10 rounded-lg font-medium transition-all duration-300 relative group overflow-hidden"
									style={{ animationDelay: `${index * 50}ms` }}
								>
									<span className="relative z-10 flex items-center gap-2">
										<span className="w-1.5 h-1.5 bg-neon-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
										{link.name}
									</span>
									<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-purple-500 to-neon-pink-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
								</a>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
