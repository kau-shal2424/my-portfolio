import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Navbar background
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Reading progress
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'skills' },
        { id: 4, link: 'projects' },
        { id: 5, link: 'experience' },
        { id: 6, link: 'contact' },
    ];

    return (
        <div className={`fixed w-full h-20 z-50 transition-all duration-300 overflow-x-hidden ${scrolled ? 'glass' : 'bg-transparent'}`}>
            <div className="flex justify-between items-center w-full h-full px-4 text-white max-w-7xl mx-auto">
                <div className="flex items-center gap-4">
                    <h1 className="text-4xl font-bold font-signature ml-2 cursor-pointer hover:text-accent transition duration-300">
                        Portfolio
                    </h1>

                    {/* Command Palette Hint */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="hidden lg:flex items-center gap-2 text-xs text-gray-400 bg-secondary/50 px-3 py-1 rounded-full border border-gray-700"
                    >
                        <span>Press</span>
                        <kbd className="px-2 py-1 bg-gray-700 border border-gray-600 rounded text-accent font-semibold">
                            Ctrl+K
                        </kbd>
                        <span>for quick navigation</span>
                    </motion.div>
                </div>

                <ul className="hidden md:flex">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200 hover:text-accent"
                        >
                            <Link to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

                {nav && (
                    <motion.ul
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300"
                    >
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-accent transition-colors"
                            >
                                <Link
                                    onClick={() => setNav(!nav)}
                                    to={link}
                                    smooth
                                    duration={500}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;

