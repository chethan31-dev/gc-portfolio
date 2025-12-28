import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
    const education = [
        {
            degree: 'MCA (Master of Computer Applications)',
            institution: 'Aurora PG College, Osmania University',
            period: '2023–2025',
            grade: '',
            gradient: 'from-neon-purple-600 to-neon-pink-600',
            icon: '🎓',
        },
        {
            degree: 'B.Com (Hons.)',
            institution: 'Keshav Memorial College',
            period: '2020–2023',
            grade: 'CGPA: 7.89',
            gradient: 'from-neon-cyan-500 to-neon-blue-500',
            icon: '📚',
        },
        {
            degree: 'Intermediate',
            institution: 'New Eera Junior College',
            period: '2018–2020',
            grade: '86.9%',
            gradient: 'from-green-500 to-emerald-600',
            icon: '📖',
        },
        {
            degree: 'SSC',
            institution: 'Pragati Vidyanikethan High School',
            period: '2017–2018',
            grade: 'GPA: 7.7',
            gradient: 'from-neon-pink-500 to-neon-purple-600',
            icon: '🏫',
        },
    ];

    return (
        <section id="education" className="py-20 bg-cyber-dark relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-neon-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-neon-cyan-500/10 rounded-full blur-3xl animate-float delay-1000"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-neon-purple-500/30 bg-neon-purple-500/10 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-neon-purple-500 rounded-full animate-pulse"></span>
                        <span className="text-sm font-orbitron text-neon-purple-400 tracking-wider">ACADEMIC BACKGROUND</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold font-orbitron mb-4">
                        <span className="text-gradient">Education</span>
                    </h2>

                    <div className="w-32 h-1 bg-gradient-to-r from-neon-purple-500 via-neon-pink-500 to-neon-cyan-400 mx-auto rounded-full shadow-neon-purple"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Neon Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-purple-500 via-neon-pink-500 to-neon-cyan-400 hidden md:block rounded-full shadow-neon-purple"></div>

                        {education.map((edu, idx) => (
                            <div
                                key={idx}
                                className="relative mb-8 md:ml-20 animate-fade-in"
                                style={{ animationDelay: `${idx * 150}ms` }}
                            >
                                {/* Timeline Dot with Icon */}
                                <div className="absolute -left-12 top-6 w-8 h-8 rounded-full bg-cyber-dark border-2 border-neon-purple-500 flex items-center justify-center hidden md:flex shadow-neon-purple group-hover:scale-125 transition-transform duration-300">
                                    <span className="text-lg">{edu.icon}</span>
                                </div>

                                {/* Content Card */}
                                <div className="group holographic-card rounded-2xl p-6 hover:shadow-glow-xl transition-all duration-500 transform hover:-translate-y-2">
                                    <div className="flex flex-wrap justify-between items-start mb-3">
                                        <h3 className="text-xl md:text-2xl font-bold font-orbitron text-white group-hover:text-neon-purple-400 transition-colors duration-300">
                                            {edu.degree}
                                        </h3>
                                        <span className={`text-sm md:text-base font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                                            {edu.period}
                                        </span>
                                    </div>

                                    <p className="text-gray-400 font-medium mb-2">
                                        {edu.institution}
                                    </p>

                                    {edu.grade && (
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-purple-500/10 border border-neon-purple-500/30 mt-2">
                                            <FaGraduationCap className="w-4 h-4 text-neon-purple-400" />
                                            <span className="text-neon-purple-400 font-semibold text-sm">
                                                {edu.grade}
                                            </span>
                                        </div>
                                    )}

                                    {/* Bottom Accent Line */}
                                    <div className={`h-1 mt-4 bg-gradient-to-r ${edu.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
