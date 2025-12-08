'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';


export default function Certifications() {
	const [selectedCert, setSelectedCert] = useState(null);

	const certifications = [
		{
			name: 'Full Stack Web Development',
			issuer: 'APNA College',
			course: 'Delta (Full Stack Web Development)',
			year: '2024',
			image: '/certificates/web-development.jpg',
			color: 'from-cyan-500 to-blue-600',
			icon: '🌐',
		},
		{
			name: 'Data Structures & Algorithms',
			issuer: 'APNA College',
			course: 'Alpha (DSA with Java)',
			year: '2024',
			image: '/certificates/dsa.jpg',
			color: 'from-purple-500 to-pink-600',
			icon: '💻',
		},
	];

	return (
		<section id="certifications" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
				<div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"></div>
				<div className="absolute w-64 h-64 bg-pink-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
			</div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
						Certifications
					</h2>
					<div className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
					<p className="text-gray-300 mt-6 text-lg">
						Professional certifications validating my technical expertise
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
					{certifications.map((cert, idx) => (
						<motion.div
							key={cert.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: idx * 0.2 }}
							className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer transform hover:-translate-y-2"
							onClick={() => setSelectedCert(cert)}
						>
							{/* Glow Effect */}
							<div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>

							{/* Icon */}
							<div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
								{cert.icon}
							</div>

							{/* Content */}
							<h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
								{cert.name}
							</h3>
							<p className="text-gray-400 mb-1">
								<span className="text-purple-400 font-semibold">Issuer:</span> {cert.issuer}
							</p>
							<p className="text-gray-400 mb-1">
								<span className="text-cyan-400 font-semibold">Course:</span> {cert.course}
							</p>
							<p className="text-gray-400 mb-4">
								<span className="text-pink-400 font-semibold">Year:</span> {cert.year}
							</p>

							{/* View Certificate Button */}
							<button className={`w-full py-3 rounded-lg bg-gradient-to-r ${cert.color} text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform group-hover:scale-105`}>
								View Certificate
							</button>

							{/* Decorative Corners */}
							<div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-2xl group-hover:border-cyan-500/60 transition-colors duration-300"></div>
							<div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-purple-500/30 rounded-bl-2xl group-hover:border-purple-500/60 transition-colors duration-300"></div>
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
					className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
					onClick={() => setSelectedCert(null)}
				>
					<div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
						<button
							onClick={() => setSelectedCert(null)}
							className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors duration-300 bg-slate-800/50 p-2 rounded-full"
						>
							<FaTimes className="w-6 h-6" />
						</button>
						<motion.div
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							className="bg-white rounded-xl overflow-hidden shadow-2xl"
						>
							<img
								src={selectedCert.image}
								alt={selectedCert.name}
								width={1200}
								height={800}
								className="w-full h-auto"
							/>
						</motion.div>
					</div>
				</motion.div>
			)}
		</section>
	);
}
