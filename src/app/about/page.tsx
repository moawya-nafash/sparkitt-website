"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

function EmotionOrb() {
    return (
        <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 2]} intensity={2} color="#ff4100" />
            <directionalLight position={[-2, -2, -2]} intensity={2} color="#00F0FF" />
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <Sphere args={[1.5, 64, 64]}>
                    <MeshDistortMaterial 
                        color="#0A0A0A" 
                        distort={0.4} 
                        speed={3} 
                        roughness={0.2} 
                        metalness={0.8}
                    />
                </Sphere>
            </Float>
        </Canvas>
    );
}

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sparkitt-cyan uppercase tracking-widest text-sm font-bold mb-4 block">About SparKitt</span>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 leading-tight">
                            Where Science Meets <span className="text-primary text-glow">Emotion</span>
                        </h1>
                        <div className="space-y-6 text-gray-400 text-lg">
                            <p>
                                At SparKitt, we are not just researchers; we are behavioral architects. We bridge the gap between raw data and human desire by decoding the subconscious drivers that dictate consumer behavior.
                            </p>
                            <p>
                                Our mission is to transform abstract feelings into measurable metrics. By combining state-of-the-art neuro-technology with deep psychological insights, we empower brands to forge unbreakable emotional connections with their audiences.
                            </p>
                            <p>
                                Welcome to the NeuroSphere—where every click, glance, and heartbeat is a data point waiting to be understood.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[600px] w-full rounded-3xl glass-panel overflow-hidden border-white/5"
                    >
                        <div className="absolute inset-0 z-0">
                            <EmotionOrb />
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 z-10 glass-panel p-6 rounded-2xl">
                            <h3 className="text-xl font-bold mb-2">The Emotion Orb</h3>
                            <p className="text-sm text-gray-400">A real-time 3D representation of dynamic human emotion, driven by distortion algorithms.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
