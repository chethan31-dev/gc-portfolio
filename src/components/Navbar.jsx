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
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
					? 'bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-cyan-500/10 border-b border-cyan-500/20'
					: 'bg-transparent'
				}`}
		>
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex justify-between items-center py-4">
					{/* Logo */}
					<a
						href="#home"
						onClick={(e) => scrollToSection(e, '#home')}
						className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-300 transition-all duration-300"
					>
						GC<span className="text-pink-400">.</span>
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								onClick={(e) => scrollToSection(e, link.href)}
								className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-300 relative group"
							>
								{link.name}
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
							</a>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300 bg-slate-800/50 p-2 rounded-lg"
						aria-label="Toggle menu"
					>
						{isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden bg-slate-900/95 backdrop-blur-xl rounded-lg shadow-lg border border-cyan-500/20 p-4 mb-4">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								onClick={(e) => scrollToSection(e, link.href)}
								className="block py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg px-4 font-medium transition-all duration-300"
							>
								{link.name}
							</a>
						))}
					</div>
				)}
			</div>
		</nav>
	);
}
