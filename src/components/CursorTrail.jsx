import React, { useEffect, useState } from 'react';

const CursorTrail = () => {
    const [trail, setTrail] = useState([]);
    const [cursorVariant, setCursorVariant] = useState('default');

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let trailX = 0;
        let trailY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleMouseEnter = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                setCursorVariant('hover');
            }
        };

        const handleMouseLeave = () => {
            setCursorVariant('default');
        };

        // Smooth trail animation
        const animateTrail = () => {
            trailX += (mouseX - trailX) * 0.1;
            trailY += (mouseY - trailY) * 0.1;

            setTrail(prev => {
                const newTrail = [{ x: trailX, y: trailY }, ...prev.slice(0, 20)];
                return newTrail;
            });

            requestAnimationFrame(animateTrail);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        animateTrail();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.querySelectorAll('a, button').forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-50 hidden md:block">
            {/* Main cursor */}
            {trail[0] && (
                <div
                    className={`absolute w-4 h-4 rounded-full border-2 border-accent transition-transform duration-100 ${cursorVariant === 'hover' ? 'scale-150' : 'scale-100'
                        }`}
                    style={{
                        left: `${trail[0].x}px`,
                        top: `${trail[0].y}px`,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            )}

            {/* Trail effect */}
            {trail.slice(1).map((point, index) => (
                <div
                    key={index}
                    className="absolute w-2 h-2 rounded-full bg-accent"
                    style={{
                        left: `${point.x}px`,
                        top: `${point.y}px`,
                        transform: 'translate(-50%, -50%)',
                        opacity: 1 - index / 20,
                        scale: 1 - index / 30,
                    }}
                />
            ))}
        </div>
    );
};

export default CursorTrail;
