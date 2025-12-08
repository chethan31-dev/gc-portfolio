import React from 'react';

export default function Education() {
    const education = [
        {
            degree: 'MCA (Master of Computer Applications)',
            institution: 'Aurora PG College, Osmania University',
            period: '2023–2025',
            grade: '',
            color: 'blue',
        },
        {
            degree: 'B.Com (Hons.)',
            institution: 'Keshav Memorial College',
            period: '2020–2023',
            grade: 'CGPA: 7.89',
            color: 'purple',
        },
        {
            degree: 'Intermediate',
            institution: 'New Eera Junior College',
            period: '2018–2020',
            grade: '86.9%',
            color: 'green',
        },
        {
            degree: 'SSC',
            institution: 'Pragati Vidyanikethan High School',
            period: '2017–2018',
            grade: 'GPA: 7.7',
            color: 'orange',
        },
    ];

    const colorClasses = {
        blue: 'border-blue-600 bg-blue-50',
        purple: 'border-purple-600 bg-purple-50',
        green: 'border-green-600 bg-green-50',
        orange: 'border-orange-600 bg-orange-50',
    };

    const dotColors = {
        blue: 'bg-blue-600',
        purple: 'bg-purple-600',
        green: 'bg-green-600',
        orange: 'bg-orange-600',
    };

    return (
        <section id="education" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Education
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>

                        {education.map((edu, idx) => (
                            <div key={idx} className="relative mb-8 md:ml-20">
                                {/* Timeline Dot */}
                                <div className={`absolute -left-12 top-6 w-4 h-4 rounded-full ${dotColors[edu.color]} hidden md:block`}></div>

                                {/* Content Card */}
                                <div className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-l-4 ${colorClasses[edu.color]}`}>
                                    <div className="flex flex-wrap justify-between items-start mb-2">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                            {edu.degree}
                                        </h3>
                                        <span className="text-gray-600 font-semibold">
                                            {edu.period}
                                        </span>
                                    </div>

                                    <p className="text-gray-700 font-medium mb-1">
                                        {edu.institution}
                                    </p>

                                    {edu.grade && (
                                        <p className="text-blue-600 font-semibold">
                                            {edu.grade}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
