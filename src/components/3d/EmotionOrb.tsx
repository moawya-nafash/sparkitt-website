"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function EmotionOrb() {
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
