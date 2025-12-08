import React from 'react';

export default function About() {
	return (
		<section id="about" className="py-20 bg-white">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						About Me
					</h2>
					<div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-2xl shadow-lg border border-blue-100">
						<p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
							MCA student with hands-on experience in building full-stack applications using React, Node.js, and MongoDB.
							Strong understanding of frontend development, modern UI design, and API integration.
							Passionate about building scalable applications, solving problems, and continuously improving technical skills.
							Looking for a Full-Stack / React Developer fresher role to apply my knowledge and grow with a high-performing engineering team.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
