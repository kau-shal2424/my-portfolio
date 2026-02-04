import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const codeSnippet = `const developer = {
  name: "Kaushal Thakur",
  role: "Full Stack Developer","Data Analyst",
  location: "Munger, Bihar, India",
  
skills: [
  "React", "Next.js", "Tailwind CSS",
  "Node.js", "Express.js", "MongoDB",
  "SQL", "Python", "Power BI",
  "Microsoft Excel", "Data Analysis"
],
  
  passions: [
    "Building Intelligent Solutions",
    "Problem Solving",
    "Continuous Learning",
    "Analytical Thinking"
  ],
  
  currentFocus: "Scalable Web Applications & AI-Driven Solutions",
  
  lifePhilosophy: () => {
    return "Code with purpose, learn with passion";
  }
};`;

    const funFacts = [
        { emoji: '☕', text: 'Coffee enthusiast - Debug fuel!' },
        { emoji: '🎮', text: 'Gamer - Strategy & problem-solving' },
        { emoji: '📚', text: 'Continuous learner - Always exploring' },
        { emoji: '🚀', text: 'Tech explorer - Love new frameworks' },
    ];

    return (
        <div id="about" className="w-full min-h-screen bg-black/20 backdrop-blur-sm text-white py-20">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="pb-8"
                    ref={ref}
                >
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    {/* Left Side - Text Content */}
                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="text-xl leading-relaxed"
                        >
                            I am a  <span className="text-accent font-semibold">technology-focused developer</span> who enjoys building
                            <span className="text-accent font-semibold"> intelligent and scalable digital solutions</span> that create real-world impact.
                            My work centers on performance, usability, and clean architecture, ensuring that products are both efficient and user-centric.

                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.4 }}
                            className="text-xl leading-relaxed"
                        >
                            I continuously explore <span className="text-accent font-semibold">emerging technologies</span> and innovative tools to refine my workflow and deliver scalable, high-quality solutions.
                            I focus on strengthening <span className="text-accent font-semibold">analytical thinking and problem-solving</span> to build efficient and future-ready digital products.

                        </motion.p>

                        {/* Fun Facts */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 }}
                            className="mt-8"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-accent">Fun Facts</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {funFacts.map((fact, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.7 + index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg border border-gray-700 hover:border-accent/50 transition-all"
                                    >
                                        <span className="text-2xl">{fact.emoji}</span>
                                        <span className="text-sm text-gray-300">{fact.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Code Editor */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="relative w-full max-w-full"
                    >
                        {/* Code Editor Window */}
                        <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-700 bg-[#1e1e1e] w-full max-w-full">
                            {/* Window Header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-gray-700">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <span className="text-sm text-gray-400 ml-4">developer.js</span>
                            </div>

                            {/* Code Content */}
                            <div className="relative overflow-x-auto max-w-full custom-scrollbar">
                                <SyntaxHighlighter
                                    language="javascript"
                                    style={vscDarkPlus}
                                    customStyle={{
                                        margin: 0,
                                        padding: '1.5rem',
                                        fontSize: '0.875rem',
                                        background: '#1e1e1e',
                                        maxWidth: '100%',
                                    }}
                                    showLineNumbers
                                >
                                    {codeSnippet}
                                </SyntaxHighlighter>

                                {/* Typing Indicator */}
                                <motion.div
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="absolute bottom-4 right-4 flex items-center gap-2 bg-accent/20 px-3 py-1 rounded-full"
                                >
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    <span className="text-xs text-accent">Always coding...</span>
                                </motion.div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm z-10"
                        >
                            💻 Clean Code Advocate
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
