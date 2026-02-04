import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Hide scrollbar during loading
        document.body.style.overflow = 'hidden';

        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setLoading(false);
                        // Restore scrollbar after loading
                        document.body.style.overflow = 'auto';
                    }, 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 200);

        return () => {
            clearInterval(interval);
            // Ensure scrollbar is restored on cleanup
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[200] bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center"
                >
                    <div className="text-center">
                        {/* Animated Logo/Icon */}
                        <motion.div
                            animate={{
                                rotate: 360,
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
                                scale: { duration: 1, repeat: Infinity },
                            }}
                            className="w-20 h-20 mx-auto mb-8 border-4 border-accent border-t-transparent rounded-full"
                        />

                        {/* Loading Text */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl font-bold text-white mb-4 font-poppins"
                        >
                            Loading Portfolio
                        </motion.h2>

                        {/* Progress Bar */}
                        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto mb-4">
                            <motion.div
                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        {/* Progress Percentage */}
                        <p className="text-gray-400 text-sm">
                            {Math.round(progress)}%
                        </p>

                        {/* Floating Particles */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-accent rounded-full"
                                    initial={{
                                        x: Math.random() * window.innerWidth,
                                        y: window.innerHeight + 10,
                                    }}
                                    animate={{
                                        y: -10,
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: Math.random() * 3 + 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
