import React, { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { FaHome, FaUser, FaCode, FaBriefcase, FaClock, FaEnvelope, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';

const CommandPalette = () => {
    const [open, setOpen] = useState(false);

    // Toggle with Cmd+K or Ctrl+K
    useEffect(() => {
        const down = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const commands = [
        { icon: <FaHome />, label: 'Home', action: 'home', type: 'navigation' },
        { icon: <FaUser />, label: 'About Me', action: 'about', type: 'navigation' },
        { icon: <FaCode />, label: 'Skills', action: 'skills', type: 'navigation' },
        { icon: <FaBriefcase />, label: 'Projects', action: 'projects', type: 'navigation' },
        { icon: <FaClock />, label: 'Experience', action: 'experience', type: 'navigation' },
        { icon: <FaEnvelope />, label: 'Contact', action: 'contact', type: 'navigation' },
        { icon: <FaGithub />, label: 'GitHub Profile', action: 'https://github.com', type: 'link' },
        { icon: <FaLinkedin />, label: 'LinkedIn Profile', action: 'https://linkedin.com', type: 'link' },
        { icon: <FaDownload />, label: 'Download Resume', action: '/resume.pdf', type: 'download' },
    ];

    const handleSelect = (cmd) => {
        if (cmd.type === 'navigation') {
            // Scroll to section
            const element = document.getElementById(cmd.action);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (cmd.type === 'link') {
            window.open(cmd.action, '_blank');
        } else if (cmd.type === 'download') {
            const link = document.createElement('a');
            link.href = cmd.action;
            link.download = 'Resume.pdf';
            link.click();
        }
        setOpen(false);
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[20vh] animate-in fade-in">
            <Command className="w-full max-w-2xl mx-4 bg-secondary/95 backdrop-blur-md border border-accent/30 rounded-xl shadow-2xl shadow-accent/20 overflow-hidden">
                <div className="flex items-center border-b border-accent/20 px-4">
                    <svg
                        className="w-5 h-5 text-gray-400 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <Command.Input
                        placeholder="Type a command or search..."
                        className="w-full bg-transparent border-none outline-none py-4 text-white placeholder-gray-400"
                        autoFocus
                    />
                    <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-semibold text-gray-400 bg-gray-700 border border-gray-600 rounded">
                        ESC
                    </kbd>
                </div>

                <Command.List className="max-h-96 overflow-y-auto p-2">
                    <Command.Empty className="py-6 text-center text-sm text-gray-400">
                        No results found.
                    </Command.Empty>

                    <Command.Group heading="Navigation" className="text-gray-400 text-xs font-semibold px-2 py-2">
                        {commands.filter(cmd => cmd.type === 'navigation').map((cmd, index) => (
                            <Command.Item
                                key={index}
                                onSelect={() => handleSelect(cmd)}
                                className="flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer text-gray-300 hover:bg-accent/20 hover:text-white transition-colors mb-1"
                            >
                                <span className="text-accent">{cmd.icon}</span>
                                <span>{cmd.label}</span>
                            </Command.Item>
                        ))}
                    </Command.Group>

                    <Command.Group heading="Links" className="text-gray-400 text-xs font-semibold px-2 py-2 mt-2">
                        {commands.filter(cmd => cmd.type === 'link').map((cmd, index) => (
                            <Command.Item
                                key={index}
                                onSelect={() => handleSelect(cmd)}
                                className="flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer text-gray-300 hover:bg-accent/20 hover:text-white transition-colors mb-1"
                            >
                                <span className="text-accent">{cmd.icon}</span>
                                <span>{cmd.label}</span>
                            </Command.Item>
                        ))}
                    </Command.Group>

                    <Command.Group heading="Actions" className="text-gray-400 text-xs font-semibold px-2 py-2 mt-2">
                        {commands.filter(cmd => cmd.type === 'download').map((cmd, index) => (
                            <Command.Item
                                key={index}
                                onSelect={() => handleSelect(cmd)}
                                className="flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer text-gray-300 hover:bg-accent/20 hover:text-white transition-colors mb-1"
                            >
                                <span className="text-accent">{cmd.icon}</span>
                                <span>{cmd.label}</span>
                            </Command.Item>
                        ))}
                    </Command.Group>
                </Command.List>

                <div className="border-t border-accent/20 px-4 py-3 text-xs text-gray-400 flex items-center justify-between">
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1">
                            <kbd className="px-2 py-1 bg-gray-700 border border-gray-600 rounded">↑↓</kbd>
                            Navigate
                        </span>
                        <span className="flex items-center gap-1">
                            <kbd className="px-2 py-1 bg-gray-700 border border-gray-600 rounded">↵</kbd>
                            Select
                        </span>
                    </div>
                    <span>Press ESC to close</span>
                </div>
            </Command>

            {/* Backdrop click to close */}
            <div
                className="fixed inset-0 -z-10"
                onClick={() => setOpen(false)}
            />
        </div>
    );
};

export default CommandPalette;
