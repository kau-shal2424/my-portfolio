import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Particle System Component
const ParticleField = () => {
    const particlesRef = useRef();
    const mousePosition = useRef({ x: 0, y: 0 });

    // Create particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < 1500; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 20;
            temp.push(x, y, z);
        }
        return new Float32Array(temp);
    }, []);

    // Mouse move handler
    React.useEffect(() => {
        const handleMouseMove = (event) => {
            mousePosition.current = {
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1,
            };
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Animation
    useFrame(({ clock }) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
            particlesRef.current.rotation.x = mousePosition.current.y * 0.1;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#38bdf8"
                transparent
                opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

// Animated Geometric Shapes
const FloatingShapes = () => {
    const icosahedronRef = useRef();
    const torusRef = useRef();
    const octahedronRef = useRef();

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();

        if (icosahedronRef.current) {
            icosahedronRef.current.rotation.x = t * 0.3;
            icosahedronRef.current.rotation.y = t * 0.2;
            icosahedronRef.current.position.y = Math.sin(t * 0.5) * 0.5;
        }

        if (torusRef.current) {
            torusRef.current.rotation.x = t * 0.2;
            torusRef.current.rotation.z = t * 0.3;
            torusRef.current.position.y = Math.cos(t * 0.7) * 0.3;
        }

        if (octahedronRef.current) {
            octahedronRef.current.rotation.y = t * 0.4;
            octahedronRef.current.rotation.z = t * 0.1;
            octahedronRef.current.position.y = Math.sin(t * 0.6) * 0.4;
        }
    });

    return (
        <group>
            {/* Icosahedron */}
            <mesh ref={icosahedronRef} position={[-3, 0, -2]}>
                <icosahedronGeometry args={[0.8, 0]} />
                <meshStandardMaterial
                    color="#38bdf8"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>

            {/* Torus */}
            <mesh ref={torusRef} position={[3, 0, -3]}>
                <torusGeometry args={[0.6, 0.2, 16, 100]} />
                <meshStandardMaterial
                    color="#06b6d4"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>

            {/* Octahedron */}
            <mesh ref={octahedronRef} position={[0, 2, -4]}>
                <octahedronGeometry args={[0.7, 0]} />
                <meshStandardMaterial
                    color="#0ea5e9"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </group>
    );
};

// Main Animated Sphere
const AnimatedSphere = () => {
    const sphereRef = useRef();

    useFrame(({ clock }) => {
        sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
        sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    });

    return (
        <Sphere visible args={[1, 100, 200]} scale={2.5} ref={sphereRef}>
            <MeshDistortMaterial
                color="#38bdf8"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.2}
                metalness={0.8}
            />
        </Sphere>
    );
};

const Hero3D = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} intensity={1} />
            <pointLight position={[-3, -2, -1]} intensity={0.5} color="#38bdf8" />

            <ParticleField />
            <FloatingShapes />
            <AnimatedSphere />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
            />
        </Canvas>
    );
};

export default Hero3D;
