import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiArrowNarrowDown } from 'react-icons/hi';
import Hero3D from './Hero3D';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div id="home" className="min-h-screen md:h-screen w-full bg-transparent text-white relative overflow-hidden pt-20 md:pt-0">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen px-4 sm:px-6 py-10 md:py-0">

                {/* Text Section */}
                <div className="flex flex-col justify-center w-full md:w-1/2 z-10">
                    {/* Name Introduction */}
                    <motion.p
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-lg sm:text-xl text-gray-400 mb-2"
                    >
                        Hi, I'm
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl sm:text-6xl font-bold text-white font-poppins mb-4"
                    >
                        Kaushal Thakur
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-2xl sm:text-4xl font-bold text-white font-poppins"
                    >
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                            <Typewriter
                                words={['Full Stack Developer', 'Data Analyst', 'Tech Enthusiast', 'Problem Solver']}
                                loop={true}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-gray-400 py-4 max-w-md text-lg leading-relaxed"
                    >
                        Designing and developing <span className="text-accent font-semibold">innovative digital experiences</span> that integrate modern web engineering, data intelligence, and AI-driven solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex gap-4 mt-6"
                    >
                        <Link
                            to="projects"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1"
                        >
                            View Portfolio
                            <span className="group-hover:translate-y-3 transition-transform duration-300 ml-2">
                                <HiArrowNarrowDown size={20} />
                            </span>
                        </Link>

                        <Link
                            to="contact"
                            smooth
                            duration={500}
                            className="text-white w-fit px-6 py-2 flex items-center rounded-md border-2 border-cyan-500 cursor-pointer font-semibold transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1"
                        >
                            Get in Touch
                            <span className="ml-2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-[10px] text-green-400 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Open to Work
                            </span>
                        </Link>
                    </motion.div>

                    <div className="flex mt-8 gap-6 z-20 items-center">
                        <motion.a
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            href="https://github.com/kau-shal2424"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl hover:text-accent transition duration-300"
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            href="https://www.linkedin.com/in/kaushal-thakur2424"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl hover:text-accent transition duration-300"
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            href="https://www.instagram.com/kau_shal2004"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl hover:text-accent transition duration-300"
                        >
                            <FaInstagram />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://drive.google.com/file/d/1xczIe0rKt1P6GLR9sA74Nk8lfIDDbUjb/view?usp=sharing"
                            download="Resume.pdf"
                            className="ml-4 px-6 py-2 bg-secondary border-2 border-accent text-accent rounded-md hover:bg-accent hover:text-white transition duration-300 font-semibold shadow-lg shadow-accent/30"
                        >
                            Download Resume
                        </motion.a>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none hidden md:block"
                    >
                        <div className="flex flex-col items-center gap-2 text-gray-400">
                            <span className="text-sm">Scroll Down</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </motion.div>
                </div>

                {/* 3D Visual Section */}
                <div className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-30 md:opacity-100 md:relative pointer-events-none md:pointer-events-auto z-0">
                    <Hero3D />
                </div>
            </div>
        </div>
    );
};

export default Hero;

