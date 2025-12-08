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
				{ name: 'JavaScript', icon: <SiJavascript className="w-12 h-12" />, color: 'text-yellow-500' },
				{ name: 'Java', icon: <FaJava className="w-12 h-12" />, color: 'text-red-600' },
			]
		},
		{
			title: 'Frontend',
			skills: [
				{ name: 'React.js', icon: <FaReact className="w-12 h-12" />, color: 'text-cyan-500' },
				{ name: 'HTML5', icon: <FaHtml5 className="w-12 h-12" />, color: 'text-orange-600' },
				{ name: 'CSS3', icon: <FaCss3Alt className="w-12 h-12" />, color: 'text-blue-600' },
				{ name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12" />, color: 'text-cyan-400' },
				{ name: 'Redux', icon: <SiRedux className="w-12 h-12" />, color: 'text-purple-600' },
			]
		},
		{
			title: 'Backend',
			skills: [
				{ name: 'Node.js', icon: <FaNodeJs className="w-12 h-12" />, color: 'text-green-600' },
				{ name: 'Express.js', icon: <SiExpress className="w-12 h-12" />, color: 'text-gray-700' },
			]
		},
		{
			title: 'Database',
			skills: [
				{ name: 'MongoDB', icon: <SiMongodb className="w-12 h-12" />, color: 'text-green-500' },
				{ name: 'MySQL', icon: <SiMysql className="w-12 h-12" />, color: 'text-blue-700' },
			]
		},
		{
			title: 'DevOps / Tools',
			skills: [
				{ name: 'Docker', icon: <FaDocker className="w-12 h-12" />, color: 'text-blue-500' },
				{ name: 'Kubernetes', icon: <SiKubernetes className="w-12 h-12" />, color: 'text-blue-600' },
				{ name: 'Git', icon: <FaGitAlt className="w-12 h-12" />, color: 'text-orange-600' },
				{ name: 'GitHub', icon: <FaGithub className="w-12 h-12" />, color: 'text-gray-800' },
			]
		},
		{
			title: 'Soft Skills',
			skills: [
				{ name: 'Communication', icon: <span className="text-4xl">💬</span>, color: 'text-blue-600' },
				{ name: 'Problem-Solving', icon: <span className="text-4xl">🧩</span>, color: 'text-purple-600' },
				{ name: 'Team Collaboration', icon: <span className="text-4xl">🤝</span>, color: 'text-green-600' },
			]
		},
		{
			title: 'Languages',
			skills: [
				{ name: 'English', icon: <span className="text-4xl">🇬🇧</span>, color: 'text-gray-700' },
				{ name: 'Hindi', icon: <span className="text-4xl">🇮🇳</span>, color: 'text-orange-600' },
				{ name: 'Telugu', icon: <span className="text-4xl">🗣️</span>, color: 'text-blue-600' },
			]
		},
	];

	return (
		<section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Technical Skills
					</h2>
					<div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skillCategories.map((category, idx) => (
						<div
							key={idx}
							className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
						>
							<h3 className="text-2xl font-bold text-gray-900 mb-6 text-center border-b-2 border-blue-600 pb-3">
								{category.title}
							</h3>
							<div className="grid grid-cols-2 gap-4">
								{category.skills.map((skill, skillIdx) => (
									<div
										key={skillIdx}
										className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300"
									>
										<div className={`${skill.color} mb-2`}>
											{skill.icon}
										</div>
										<p className="text-sm font-medium text-gray-700 text-center">
											{skill.name}
										</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
