import React from 'react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Data Science Intern',
            company: 'Alpha Innovation Private Limited',
            duration: 'October 2025 - January 2026',
            description: 'Completed an online internship in Data Science, performing data cleaning, visualization, dashboard creation, and predictive modeling to analyze trends and patterns'
        },
        {
            id: 2,
            role: 'Computer Science Student',
            company: 'Graphic Era Hill University',
            duration: '2023 - 2027',
            description: 'Pursuing a Bachelor\'s degree in Computer Science with specialization in AI & DS, coursework includes Data Structures, Algorithms, Web Development, and Database Management.'
        },
        {
            id: 3,
            role: 'Freelance Web Developer',
            company: 'Self-Employed',
            duration: 'Jan 2024 - Present',
            description: 'Developed custom websites for small businesses,advertisemet websites and portfolio sites for clients using modern tools, framer motion and React.'
        }
    ];

    return (
        <div id="experience" className="w-full bg-transparent text-white py-20">
            <div className="max-w-screen-lg mx-auto px-4 sm:px-6 flex flex-col justify-center w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience
                    </p>
                </div>

                <div className="flex flex-col gap-8 mt-10">
                    {experiences.map(({ id, role, company, duration, description }) => (
                        <div key={id} className="flex flex-col md:flex-row gap-4 border-l-4 border-accent pl-6 relative">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-accent"></div>
                            <div className="w-full md:w-1/4">
                                <h3 className="font-bold text-lg">{company}</h3>
                                <p className="text-gray-400 text-sm">{duration}</p>
                            </div>
                            <div className="w-full md:w-3/4">
                                <h4 className="text-xl font-semibold text-accent">{role}</h4>
                                <p className="text-gray-300 mt-2">{description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
