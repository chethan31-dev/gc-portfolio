import React from 'react';
import { FaBriefcase, FaShieldAlt } from 'react-icons/fa';

export default function Experience() {
	const experiences = [
		{
			icon: <FaShieldAlt className="w-8 h-8" />,
			title: 'Intern – A Secure Searchable Encryption Framework',
			period: 'Nov–Dec 2024',
			gradient: 'from-neon-purple-600 to-neon-pink-600',
			points: [
				'Built a secure web-based system for encrypted file storage and searchable data access.',
				'Implemented AES encryption, user authentication, and error handling.',
				'Strengthened debugging, security concepts, and backend understanding.',
			],
		},
		{
			icon: <FaBriefcase className="w-8 h-8" />,
			title: 'Student Branch Coordinator – CSI',
			period: '2024–2025',
			gradient: 'from-green-500 to-emerald-600',
			points: [
				'Organised technical events, coordinated student activities, and supported planning & outreach programs.',
				'Managed multiple campus initiatives and contributed to community engagement.',
			],
		},
	];

	return (
		<section id="experience" className="py-20 bg-cyber-dark relative overflow-hidden">
			{/* Animated Background */}
			<div className="absolute top-10 left-10 w-96 h-96 bg-neon-pink-500/10 rounded-full blur-3xl animate-float"></div>
			<div className="absolute bottom-10 right-10 w-80 h-80 bg-neon-cyan-500/10 rounded-full blur-3xl animate-float delay-1000"></div>

			<div className="max-w-6xl mx-auto px-6 relative z-10">
				{/* Header */}
				<div className="text-center mb-16 animate-fade-in">
					<div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-neon-purple-500/30 bg-neon-purple-500/10 backdrop-blur-sm">
						<span className="w-2 h-2 bg-neon-purple-500 rounded-full animate-pulse"></span>
						<span className="text-sm font-orbitron text-neon-purple-400 tracking-wider">MY JOURNEY</span>
					</div>

					<h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-4">
						<span className="text-gradient">Experience & Leadership</span>
					</h2>

					<div className="w-32 h-1 bg-gradient-to-r from-neon-purple-500 via-neon-pink-500 to-neon-cyan-400 mx-auto rounded-full shadow-neon-purple"></div>
				</div>

				{/* Experience Cards */}
				<div className="max-w-4xl mx-auto space-y-8">
					{experiences.map((exp, idx) => (
						<div
							key={idx}
							className="holographic-card rounded-2xl p-8 hover:shadow-glow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in group"
							style={{ animationDelay: `${idx * 200}ms` }}
						>
							<div className="flex items-start gap-4">
								{/* Icon */}
								<div className={`bg-gradient-to-br ${exp.gradient} p-4 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg flex-shrink-0`}>
									<div className="text-white">
										{exp.icon}
									</div>
								</div>

								{/* Content */}
								<div className="flex-1">
									<div className="flex flex-wrap justify-between items-start mb-4">
										<h3 className="text-xl md:text-2xl font-bold font-orbitron text-white group-hover:text-neon-purple-400 transition-colors duration-300">
											{exp.title}
										</h3>
										<span className={`text-sm md:text-base font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
											{exp.period}
										</span>
									</div>

									{/* Points */}
									<ul className="space-y-3">
										{exp.points.map((point, pointIdx) => (
											<li key={pointIdx} className="flex items-start gap-3">
												<span className="text-neon-purple-500 mt-1 flex-shrink-0">▸</span>
												<span className="text-gray-400 leading-relaxed">
													{point}
												</span>
											</li>
										))}
									</ul>
								</div>
							</div>

							{/* Bottom Accent Line */}
							<div className={`h-1 mt-6 bg-gradient-to-r ${exp.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
