import React from 'react';
import {
	FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaGitAlt, FaGithub, FaDocker
} from 'react-icons/fa';
import {
	SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiKubernetes, SiMysql
} from 'react-icons/si';

export default function Skills() {
	const skillCategories = [
		{
			title: 'Programming',
			skills: [
				{ name: 'JavaScript', icon: <SiJavascript className="w-12 h-12" />, color: 'group-hover:text-yellow-400' },
				{ name: 'Java', icon: <FaJava className="w-12 h-12" />, color: 'group-hover:text-red-500' },
			],
			gradient: 'from-neon-purple-600 to-neon-pink-600'
		},
		{
			title: 'Frontend',
			skills: [
				{ name: 'React.js', icon: <FaReact className="w-12 h-12" />, color: 'group-hover:text-neon-cyan-400' },
				{ name: 'HTML5', icon: <FaHtml5 className="w-12 h-12" />, color: 'group-hover:text-orange-500' },
				{ name: 'CSS3', icon: <FaCss3Alt className="w-12 h-12" />, color: 'group-hover:text-blue-500' },
				{ name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12" />, color: 'group-hover:text-neon-cyan-400' },
				{ name: 'Redux', icon: <SiRedux className="w-12 h-12" />, color: 'group-hover:text-neon-purple-500' },
			],
			gradient: 'from-neon-cyan-500 to-neon-blue-500'
		},
		{
			title: 'Backend',
			skills: [
				{ name: 'Node.js', icon: <FaNodeJs className="w-12 h-12" />, color: 'group-hover:text-green-500' },
				{ name: 'Express.js', icon: <SiExpress className="w-12 h-12" />, color: 'group-hover:text-gray-400' },
			],
			gradient: 'from-neon-pink-500 to-neon-purple-600'
		},
		{
			title: 'Database',
			skills: [
				{ name: 'MongoDB', icon: <SiMongodb className="w-12 h-12" />, color: 'group-hover:text-green-500' },
				{ name: 'MySQL', icon: <SiMysql className="w-12 h-12" />, color: 'group-hover:text-blue-600' },
			],
			gradient: 'from-neon-purple-500 to-neon-cyan-500'
		},
		{
			title: 'DevOps / Tools',
			skills: [
				{ name: 'Docker', icon: <FaDocker className="w-12 h-12" />, color: 'group-hover:text-blue-500' },
				{ name: 'Kubernetes', icon: <SiKubernetes className="w-12 h-12" />, color: 'group-hover:text-blue-600' },
				{ name: 'Git', icon: <FaGitAlt className="w-12 h-12" />, color: 'group-hover:text-orange-500' },
				{ name: 'GitHub', icon: <FaGithub className="w-12 h-12" />, color: 'group-hover:text-gray-400' },
			],
			gradient: 'from-neon-cyan-400 to-neon-purple-600'
		},
		{
			title: 'Soft Skills',
			skills: [
				{ name: 'Communication', icon: <span className="text-4xl">💬</span>, color: 'group-hover:text-neon-blue-400' },
				{ name: 'Problem-Solving', icon: <span className="text-4xl">🧩</span>, color: 'group-hover:text-neon-purple-400' },
				{ name: 'Team Collaboration', icon: <span className="text-4xl">🤝</span>, color: 'group-hover:text-green-400' },
			],
			gradient: 'from-neon-pink-500 to-neon-cyan-500'
		},
		{
			title: 'Languages',
			skills: [
				{ name: 'English', icon: <span className="text-4xl">🇬🇧</span>, color: 'group-hover:text-gray-300' },
				{ name: 'Hindi', icon: <span className="text-4xl">🇮🇳</span>, color: 'group-hover:text-orange-400' },
				{ name: 'Telugu', icon: <span className="text-4xl">🗣️</span>, color: 'group-hover:text-blue-400' },
			],
			gradient: 'from-neon-purple-600 to-neon-pink-500'
		},
	];

	return (
		<section id="skills" className="py-20 bg-cyber-dark relative overflow-hidden">
			{/* Animated Background */}
			<div className="absolute top-10 left-10 w-96 h-96 bg-neon-cyan-500/10 rounded-full blur-3xl animate-float"></div>
			<div className="absolute bottom-10 right-10 w-80 h-80 bg-neon-pink-500/10 rounded-full blur-3xl animate-float delay-1000"></div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* Header */}
				<div className="text-center mb-16 animate-fade-in">
					<div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-neon-purple-500/30 bg-neon-purple-500/10 backdrop-blur-sm">
						<span className="w-2 h-2 bg-neon-purple-500 rounded-full animate-pulse"></span>
						<span className="text-sm font-orbitron text-neon-purple-400 tracking-wider">EXPERTISE</span>
					</div>

					<h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-4">
						<span className="text-gradient">Technical Skills</span>
					</h2>

					<div className="w-32 h-1 bg-gradient-to-r from-neon-purple-500 via-neon-pink-500 to-neon-cyan-400 mx-auto rounded-full shadow-neon-purple"></div>
				</div>

				{/* Skills Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skillCategories.map((category, idx) => (
						<div
							key={idx}
							className="holographic-card rounded-2xl p-6 hover:shadow-glow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in group"
							style={{ animationDelay: `${idx * 100}ms` }}
						>
							{/* Category Header */}
							<div className="relative mb-6">
								<h3 className={`text-2xl font-bold font-orbitron text-center pb-3 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
									{category.title}
								</h3>
								<div className={`h-1 bg-gradient-to-r ${category.gradient} rounded-full mx-auto w-16 group-hover:w-full transition-all duration-500`}></div>
							</div>

							{/* Skills Grid */}
							<div className="grid grid-cols-2 gap-4">
								{category.skills.map((skill, skillIdx) => (
									<div
										key={skillIdx}
										className="group/skill flex flex-col items-center justify-center p-4 rounded-xl bg-cyber-purple/20 border border-neon-purple-500/20 hover:border-neon-purple-500/50 hover:bg-neon-purple-500/10 transition-all duration-300 hover:scale-110 hover:shadow-neon-purple"
									>
										<div className={`text-gray-400 mb-2 transition-colors duration-300 ${skill.color}`}>
											{skill.icon}
										</div>
										<p className="text-xs font-medium text-gray-400 text-center group-hover/skill:text-neon-purple-400 transition-colors duration-300">
											{skill.name}
										</p>
									</div>
								))}
							</div>

							{/* Corner Accent */}
							<div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-neon-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-2xl"></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
