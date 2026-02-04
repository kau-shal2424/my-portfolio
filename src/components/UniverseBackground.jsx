import React, { useEffect, useRef } from 'react';

const UniverseBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];
        let shootingStars = [];

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Create stars
        class Star {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2;
                this.speedY = Math.random() * 0.05;
                this.opacity = Math.random();
                this.twinkleSpeed = Math.random() * 0.02;
            }

            update() {
                this.opacity += this.twinkleSpeed;
                if (this.opacity > 1 || this.opacity < 0) {
                    this.twinkleSpeed = -this.twinkleSpeed;
                }
            }

            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create shooting stars
        class ShootingStar {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height / 2;
                this.length = Math.random() * 80 + 20;
                this.speed = Math.random() * 10 + 5;
                this.opacity = 1;
                this.angle = Math.PI / 4;
            }

            update() {
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                this.opacity -= 0.01;

                if (this.opacity <= 0 || this.x > canvas.width || this.y > canvas.height) {
                    this.reset();
                }
            }

            draw() {
                ctx.save();
                ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(
                    this.x - Math.cos(this.angle) * this.length,
                    this.y - Math.sin(this.angle) * this.length
                );
                ctx.stroke();
                ctx.restore();
            }
        }

        // Initialize stars
        for (let i = 0; i < 200; i++) {
            stars.push(new Star());
        }

        // Initialize shooting stars
        for (let i = 0; i < 3; i++) {
            shootingStars.push(new ShootingStar());
        }

        // Draw nebula effect
        const drawNebula = () => {
            const gradient1 = ctx.createRadialGradient(
                canvas.width * 0.2,
                canvas.height * 0.3,
                0,
                canvas.width * 0.2,
                canvas.height * 0.3,
                canvas.width * 0.5
            );
            gradient1.addColorStop(0, 'rgba(138, 43, 226, 0.1)'); // Purple
            gradient1.addColorStop(0.5, 'rgba(75, 0, 130, 0.05)');
            gradient1.addColorStop(1, 'rgba(0, 0, 0, 0)');

            const gradient2 = ctx.createRadialGradient(
                canvas.width * 0.8,
                canvas.height * 0.6,
                0,
                canvas.width * 0.8,
                canvas.height * 0.6,
                canvas.width * 0.4
            );
            gradient2.addColorStop(0, 'rgba(0, 100, 200, 0.1)'); // Blue
            gradient2.addColorStop(0.5, 'rgba(0, 50, 150, 0.05)');
            gradient2.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = gradient1;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = gradient2;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        // Animation loop
        const animate = () => {
            // Clear canvas with dark space background
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw nebula
            drawNebula();

            // Update and draw stars
            stars.forEach(star => {
                star.update();
                star.draw();
            });

            // Update and draw shooting stars
            shootingStars.forEach(star => {
                star.update();
                star.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
            style={{ background: '#000000' }}
        />
    );
};

export default UniverseBackground;
