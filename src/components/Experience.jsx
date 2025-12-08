import React from 'react';
import { FaBriefcase, FaShieldAlt } from 'react-icons/fa';

export default function Experience() {
	return (
		<section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
			<div className="max-w-6xl mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Experience & Internship
					</h2>
					<div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
						<div className="flex items-start gap-4">
							<div className="bg-blue-100 p-4 rounded-lg">
								<FaShieldAlt className="w-8 h-8 text-blue-600" />
							</div>

							<div className="flex-1">
								<div className="flex flex-wrap justify-between items-start mb-2">
									<h3 className="text-2xl font-bold text-gray-900">
										Intern – A Secure Searchable Encryption Framework
									</h3>
									<span className="text-blue-600 font-semibold">
										Nov–Dec 2024
									</span>
								</div>

								<ul className="space-y-3 mt-4">
									<li className="flex items-start gap-3">
										<span className="text-blue-600 mt-1">▸</span>
										<span className="text-gray-700">
											Built a secure web-based system for encrypted file storage and searchable data access.
										</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-blue-600 mt-1">▸</span>
										<span className="text-gray-700">
											Implemented AES encryption, user authentication, and error handling.
										</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-blue-600 mt-1">▸</span>
										<span className="text-gray-700">
											Strengthened debugging, security concepts, and backend understanding.
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Achievements Section */}
					<div className="mt-12">
						<h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
							Achievements & Leadership
						</h3>

						<div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-600">
							<div className="flex items-start gap-4">
								<div className="bg-green-100 p-4 rounded-lg">
									<FaBriefcase className="w-8 h-8 text-green-600" />
								</div>

								<div className="flex-1">
									<div className="flex flex-wrap justify-between items-start mb-2">
										<h4 className="text-2xl font-bold text-gray-900">
											Student Branch Coordinator – CSI
										</h4>
										<span className="text-green-600 font-semibold">
											2024–2025
										</span>
									</div>

									<ul className="space-y-3 mt-4">
										<li className="flex items-start gap-3">
											<span className="text-green-600 mt-1">▸</span>
											<span className="text-gray-700">
												Organised technical events, coordinated student activities, and supported planning & outreach programs.
											</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-green-600 mt-1">▸</span>
											<span className="text-gray-700">
												Managed multiple campus initiatives and contributed to community engagement.
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
