import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = [
        {
            id: 1,
            title: 'AI Portfolio Website',
            description: 'A modern portfolio website built with React, Tailwind CSS, and Three.js for 3D elements.',
            tech: ['React', 'Tailwind', 'Three.js'],
            category: 'frontend',
            src: 'https://via.placeholder.com/400x300',
            github: 'https://github.com',
            demo: 'https://demo.com',
            featured: true,
        },
        {
            id: 2,
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce application with payment gateway integration and admin dashboard.',
            tech: ['Next.js', 'MongoDB', 'Stripe'],
            category: 'fullstack',
            src: 'https://via.placeholder.com/400x300',
            github: 'https://github.com',
            demo: 'https://demo.com',
            featured: true,
        },
        {
            id: 3,
            title: 'Chat Application',
            description: 'Real-time chat app using Socket.io and MERN stack with authentication.',
            tech: ['React', 'Node.js', 'Socket.io'],
            category: 'fullstack',
            src: 'https://via.placeholder.com/400x300',
            github: 'https://github.com',
            demo: 'https://demo.com',
            featured: false,
        },
        {
            id: 4,
            title: 'Task Management Tool',
            description: 'Kanban-style task manager with drag-and-drop functionality.',
            tech: ['React', 'Redux', 'Firebase'],
            category: 'frontend',
            src: 'https://via.placeholder.com/400x300',
            github: 'https://github.com',
            demo: 'https://demo.com',
            featured: false,
        },
        {
            id: 5,
            title: 'Weather Dashboard',
            description: 'Interactive weather dashboard with real-time data and beautiful visualizations.',
            tech: ['React', 'API', 'Charts.js'],
            category: 'frontend',
            src: 'https://via.placeholder.com/400x300',
            github: 'https://github.com',
            demo: 'https://demo.com',
            featured: false,
        },
        {
            id: 6,
            title: 'REST API Backend',
            description: 'Scalable REST API with authentication, authorization, and database integration.',
            tech: ['Node.js', 'Express', 'PostgreSQL'],
            category: 'backend',
            src: 'https://via.placeholder.com/400x300',
            github: 'https://github.com',
            demo: 'https://demo.com',
            featured: false,
        },
    ];

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'featured', label: 'Featured' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'fullstack', label: 'Full Stack' },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : filter === 'featured'
            ? projects.filter(p => p.featured)
            : projects.filter(p => p.category === filter);

    return (
        <div id="projects" className="w-full bg-black/20 backdrop-blur-sm text-white py-20">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="text-4xl font-bold inline border-b-4 border-gray-500"
                    >
                        Projects
                    </motion.p>
                    <p className="py-6">Check out some of my recent work</p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-3 mb-8" ref={ref}>
                    {filters.map((f) => (
                        <motion.button
                            key={f.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setFilter(f.id)}
                            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${filter === f.id
                                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-accent/50'
                                : 'bg-secondary text-gray-400 hover:text-white border border-gray-600'
                                }`}
                        >
                            <FaFilter size={12} />
                            {f.label}
                        </motion.button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card Container with 3D Effect */}
                            <motion.div
                                whileHover={{
                                    rotateY: 5,
                                    rotateX: 5,
                                    scale: 1.05,
                                }}
                                transition={{ duration: 0.3 }}
                                className="relative rounded-xl overflow-hidden shadow-lg shadow-gray-900 bg-secondary/50 backdrop-blur-sm border border-gray-700 hover:border-accent/50 h-full"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        ⭐ Featured
                                    </div>
                                )}

                                {/* Image */}
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={project.src}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((item, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/30 font-medium"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex justify-between items-center text-gray-300 pt-4 border-t border-gray-700">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, color: '#38bdf8' }}
                                            className="flex items-center gap-2 hover:text-accent duration-200"
                                        >
                                            <FaGithub size={18} />
                                            <span className="text-sm font-medium">Code</span>
                                        </motion.a>
                                        <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, color: '#38bdf8' }}
                                            className="flex items-center gap-2 hover:text-accent duration-200"
                                        >
                                            <FaExternalLinkAlt size={16} />
                                            <span className="text-sm font-medium">Live Demo</span>
                                        </motion.a>
                                    </div>
                                </div>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-xl" />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* No Results Message */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12 text-gray-400"
                    >
                        <p className="text-xl">No projects found in this category.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Projects;
