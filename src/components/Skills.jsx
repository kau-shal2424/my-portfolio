import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFilter } from 'react-icons/fa';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // ... (keep skillCategories and other logic same, just updating styles in return)

    const skillCategories = {
        languages: [
            { name: 'Python', level: 70, icon: '🐍' },
            { name: 'C', level: 70, icon: '©️' },
            { name: 'C++', level: 70, icon: '➕' },
            { name: 'JavaScript', level: 60, icon: '📜' },
            { name: 'Java', level: 65, icon: '☕' },
        ],
        frontend: [
            { name: 'React.js', level: 85, icon: '⚛️' },
            { name: 'Next.js', level: 75, icon: '▲' },
            { name: 'Three.js', level: 65, icon: '🎮' },
            { name: 'Tailwind CSS', level: 90, icon: '💨' },
            { name: 'Bootstrap', level: 80, icon: '🅱️' },
            { name: 'HTML', level: 95, icon: '🌐' },
            { name: 'CSS', level: 90, icon: '🎨' },
        ],
        backend: [
            { name: 'Node.js', level: 85, icon: '🟢' },
            { name: 'Express.js', level: 80, icon: '🚂' },
            { name: 'Flask', level: 75, icon: '🧪' },
            { name: 'MongoDB', level: 80, icon: '🍃' },
            { name: 'MySQL', level: 75, icon: '🐬' },
            { name: 'Firebase', level: 70, icon: '🔥' },
        ],
        analytics: [
            { name: 'Tableau', level: 75, icon: '📊' },
            { name: 'Power BI', level: 80, icon: '📈' },
            { name: 'MS Excel', level: 85, icon: '📑' },
            { name: 'NumPy', level: 70, icon: '🔢' },
            { name: 'Pandas', level: 75, icon: '🐼' },
            { name: 'Matplotlib', level: 75, icon: '📉' },
            { name: 'scikit-learn', level: 70, icon: '🤖' },
            { name: 'TensorFlow', level: 65, icon: '🧠' },
        ],
        devops: [
            { name: 'GitHub', level: 90, icon: '🐙' },
            { name: 'VS Code', level: 95, icon: '💻' },
            { name: 'Jupyter Notebook', level: 80, icon: '📓' },
            { name: 'Vercel', level: 75, icon: '▲' },
            { name: 'Netlify', level: 75, icon: '🌐' },
            { name: 'AWS', level: 70, icon: '☁️' },
            { name: 'Render', level: 70, icon: '🚀' },
            { name: 'Google Cloud', level: 65, icon: '☁️' },
            { name: 'Linux', level: 70, icon: '🐧' },
        ],
    };

    const filters = [
        { id: 'all', label: 'All Skills' },
        { id: 'languages', label: 'Languages' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend & DB' },
        { id: 'analytics', label: 'Data & Analytics' },
        { id: 'devops', label: 'DevOps & Tools' },
    ];

    const allSkills = [
        ...skillCategories.languages,
        ...skillCategories.frontend,
        ...skillCategories.backend,
        ...skillCategories.analytics,
        ...skillCategories.devops,
    ];

    const getFilteredSkills = () => {
        if (activeCategory === 'all') return allSkills;
        return skillCategories[activeCategory] || [];
    };

    return (
        <div id="skills" className="w-full min-h-screen relative z-10 py-20">
            {/* Background elements to enhance universe feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0 pointer-events-none" />

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative z-20">
                {/* Section Header */}
                {/* Section Header */}
                <div className="pb-8">
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="text-4xl font-bold inline border-b-4 border-gray-500"
                    >
                        Skills
                    </motion.p>
                    <p className="py-6">Technologies I work with</p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start" ref={ref}>
                    {filters.map((f) => (
                        <motion.button
                            key={f.id}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(56, 189, 248, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(f.id)}
                            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-md border ${activeCategory === f.id
                                ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/30'
                                : 'bg-slate-900/40 text-gray-400 hover:text-white border-white/10 hover:border-cyan-500/50 hover:bg-slate-800/60'
                                }`}
                        >
                            <FaFilter size={12} />
                            {f.label}
                        </motion.button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-0">
                    {getFilteredSkills().map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.05 }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <motion.div
                                whileHover={{
                                    y: -5,
                                    scale: 1.02,
                                    boxShadow: "0 0 25px rgba(139, 92, 246, 0.3)"
                                }}
                                className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-md border border-white/10 group-hover:border-purple-500/50 transition-all duration-300 h-full p-4 flex flex-col items-center justify-center gap-3 text-center"
                            >
                                {/* Cosmic Glow Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Skill Icon */}
                                <div className="relative z-10 text-4xl group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                                    {skill.icon}
                                </div>

                                {/* Skill Name */}
                                <h3 className="relative z-10 text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
                                    {skill.name}
                                </h3>

                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 rounded-tl-lg group-hover:border-cyan-400/50 transition-colors" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 rounded-br-lg group-hover:border-purple-400/50 transition-colors" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* No Results Message */}
                {getFilteredSkills().length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12 text-gray-400"
                    >
                        <p className="text-xl">No skills found in this constellation.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Skills;
