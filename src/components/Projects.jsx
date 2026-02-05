import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = [
        {
            id: 1,
            title: 'E-Portfolio Website',
            description: 'A modern portfolio website built with React, Tailwind CSS, and Three.js for 3D elements.',
            tech: ['React', 'Tailwind', 'VITE', 'Three.js', 'Framer Motion'],
            src: '/e-portfolio.png',
            github: 'https://github.com/kau-shal2424/my-portfolio',
            demo: 'https://kaushals-portfolio2424.vercel.app/',
        },
        {
            id: 2,
            title: 'E-KART',
            description: 'A full-stack e-commerce web application with user shopping features and an admin analytics dashboard built using React and Flask.',
            tech: ['React', 'Tailwind', 'FLASK', 'MYSQL'],
            src: '/e-kart.png',
            github: 'https://github.com/kau-shal2424/E-Kart',
        },
        {
            id: 3,
            title: 'Braille Bridge',
            description: 'BrailleBridge is an AI-powered accessibility platform that converts documents and images into Braille and speech using OCR and multi-language translation.',
            tech: ['React.js', 'FAST API', 'FLASK', 'OCR (Tesseract)', 'Braille Translation (Louis)', 'Text-to-Speech APIs (gTTS / pyttsx3)'],
            src: '/braille-bridge.png',
            github: 'https://github.com/kau-shal2424/BrailleBridge',
        },
        {
            id: 4,
            title: 'Smart Weather Predictor',
            description: 'A machine learning–based web application that predicts temperature, humidity, and wind speed using real-time data from the OpenWeatherMap API.',
            tech: ['Flask', 'Python', 'OPENWEATHERMAP API', 'SCIKIT-LEARN', 'PANDAS', 'NUMPY'],
            src: '/weather-predictor.png',
            github: 'https://github.com/kau-shal2424/Smart_weather_predicitor',
            demo: 'https://weather-vision.onrender.com/',
        },
        {
            id: 5,
            title: 'Flight Seat Allocator',
            description: 'A responsive web application built using React that provides an interactive user interface and optimized production build for deployment.',
            tech: ['React.js', 'CRA', 'GREEDY ALGORYTHM', 'FIREBASE', 'CSS'],
            src: '/flight-seat-allocator.png',
            github: 'https://github.com/kau-shal2424/Flight-Seat-Allocator',
        },
        {
            id: 6,
            title: 'Distributed Mini File System',
            description: 'A distributed file system implementation with a React frontend, similar to Google File System (GFS) and Hadoop Distributed File System (HDFS).',
            tech: ['React', 'Python', 'Flask(REST API)', 'SOCKET PROGRAMMING'],
            src: '/dmfs.png',
            github: 'https://github.com/kau-shal2424/Distributed-Mini-File-System',
        },
    ];

    return (
        <div id="projects" className="w-full bg-black/20 backdrop-blur-sm text-white py-20">
            <div className="max-w-screen-lg px-4 sm:px-6 mx-auto flex flex-col justify-center w-full">
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

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0" ref={ref}>
                    {projects.map((project, index) => (
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


            </div>
        </div>
    );
};

export default Projects;
