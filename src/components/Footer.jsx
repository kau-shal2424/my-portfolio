import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-black/30 backdrop-blur-md border-t border-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                <div className="flex space-x-6 mb-4">
                    <a href="https://github.com/kau-shal2424" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition duration-300">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/kaushal-thakur2424" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition duration-300">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/Kau_shal2424" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition duration-300">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/kau_shal2004" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent transition duration-300">
                        <FaInstagram />
                    </a>
                    <a href="mailto:thakurkaushal2424@gmail.com" className="text-2xl hover:text-accent transition duration-300">
                        <FaEnvelope />
                    </a>
                </div>
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Kaushal Thakur. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-2">
                    Built with React, Tailwind CSS & Framer Motion
                </p>
            </div>
        </div>
    );
};

export default Footer;
