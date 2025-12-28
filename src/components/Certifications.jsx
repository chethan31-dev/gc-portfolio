'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTimes, FaCertificate } from 'react-icons/fa';


export default function Certifications() {
	const [selectedCert, setSelectedCert] = useState(null);

	const certifications = [
		{
			name: 'Full Stack Web Development',
			issuer: 'APNA College',
			course: 'Delta (Full Stack Web Development)',
			year: '2024',
			image: '/certificates/web-development.jpg',
			gradient: 'from-neon-cyan-500 to-neon-blue-600',
			icon: '🌐',
		},
		{
			name: 'Data Structures & Algorithms',
			issuer: 'APNA College',
			course: 'Alpha (DSA with Java)',
			year: '2024',
			image: '/certificates/dsa.jpg',
			gradient: 'from-neon-purple-500 to-neon-pink-600',
			icon: '💻',
		},
	];

	return (
		<section id="certifications" className="py-20 bg-cyber-dark relative overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute w-96 h-96 bg-neon-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
				<div className="absolute w-96 h-96 bg-neon-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-float delay-1000"></div>
				<div className="absolute w-64 h-64 bg-neon-pink-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float delay-500"></div>
			</div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-neon-purple-500/30 bg-neon-purple-500/10 backdrop-blur-sm">
						<span className="w-2 h-2 bg-neon-purple-500 rounded-full animate-pulse"></span>
						<span className="text-sm font-orbitron text-neon-purple-400 tracking-wider">ACHIEVEMENTS</span>
					</div>

					<h2 className="text-5xl md:text-6xl font-bold font-orbitron mb-4">
						<span className="text-gradient">Certifications</span>
					</h2>

					<div className="w-32 h-1.5 bg-gradient-to-r from-neon-cyan-500 via-neon-purple-500 to-neon-pink-500 mx-auto rounded-full shadow-neon-purple"></div>

					<p className="text-gray-400 mt-6 text-lg">
						Professional certifications validating my technical expertise
					</p>
				</motion.div>

				{/* Certifications Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					{certifications.map((cert, idx) => (
						<motion.div
							key={cert.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.2 }}
							className="group holographic-card rounded-2xl p-8 hover:shadow-glow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-[1.02]"
							onClick={() => setSelectedCert(cert)}
						>
							{/* Icon */}
							<div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
								{cert.icon}
							</div>

							{/* Content */}
							<h3 className="text-2xl font-bold font-orbitron text-white mb-3 group-hover:text-neon-purple-400 transition-colors duration-300">
								{cert.name}
							</h3>

							<div className="space-y-2 mb-4">
								<p className="text-gray-400">
									<span className="text-neon-purple-400 font-semibold">Issuer:</span> {cert.issuer}
								</p>
								<p className="text-gray-400">
									<span className="text-neon-cyan-400 font-semibold">Course:</span> {cert.course}
								</p>
								<p className="text-gray-400">
									<span className="text-neon-pink-400 font-semibold">Year:</span> {cert.year}
								</p>
							</div>

							{/* View Certificate Button */}
							<button className={`w-full py-3 rounded-lg bg-gradient-to-r ${cert.gradient} text-white font-semibold btn-neon shadow-neon-purple hover:shadow-glow-lg transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2`}>
								<FaCertificate className="w-5 h-5" />
								View Certificate
							</button>

							{/* Decorative Corners */}
							<div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-neon-cyan-500/30 rounded-tr-2xl group-hover:border-neon-cyan-500/60 transition-colors duration-300"></div>
							<div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-neon-purple-500/30 rounded-bl-2xl group-hover:border-neon-purple-500/60 transition-colors duration-300"></div>

							{/* Bottom Accent Line */}
							<div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Modal for Certificate View */}
			{selectedCert && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
					onClick={() => setSelectedCert(null)}
				>
					<div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
						{/* Close Button */}
						<button
							onClick={() => setSelectedCert(null)}
							className="absolute -top-12 right-0 text-white hover:text-neon-cyan-400 transition-colors duration-300 holographic-card p-3 rounded-full hover:shadow-neon-cyan"
						>
							<FaTimes className="w-6 h-6" />
						</button>

						{/* Certificate Image */}
						<motion.div
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							className="holographic-card rounded-2xl overflow-hidden shadow-glow-xl border-2 border-neon-purple-500/50"
						>
							<img
								src={selectedCert.image}
								alt={selectedCert.name}
								className="w-full h-auto"
							/>
						</motion.div>

						{/* Certificate Info */}
						<div className="mt-4 text-center">
							<p className="text-gray-400">
								<span className="text-neon-purple-400 font-semibold">{selectedCert.name}</span> • {selectedCert.issuer} • {selectedCert.year}
							</p>
						</div>
					</div>
				</motion.div>
			)}
		</section>
	);
}
