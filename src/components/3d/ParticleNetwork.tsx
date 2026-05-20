"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ConnectedParticles({ count = 100, connectionDistance = 3.5 }) {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const linesGeometry = useRef<THREE.BufferGeometry>(null);

    // Initialize particles with different colors
    const particles = useMemo(() => {
        const temp = [];
        const colors = ["#ff4100", "#00f0ff", "#ffffff"];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 25;
            const y = (Math.random() - 0.5) * 25;
            const z = (Math.random() - 0.5) * 10;
            const colorStr = colors[Math.floor(Math.random() * colors.length)];
            temp.push({
                position: new THREE.Vector3(x, y, z),
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02
                ),
                color: new THREE.Color(colorStr)
            });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Set instance colors on mount
    useEffect(() => {
        if (mesh.current) {
            particles.forEach((particle, i) => {
                mesh.current!.setColorAt(i, particle.color);
            });
            if (mesh.current.instanceColor) {
                mesh.current.instanceColor.needsUpdate = true;
            }
        }
    }, [particles]);

    // Prepare line geometry buffers (max connections approximation)
    const linePositions = useMemo(() => new Float32Array(count * count * 3), [count]);


    useFrame((state) => {
        if (!mesh.current || !linesGeometry.current) return;

        const mouseX = (state.mouse.x * state.viewport.width) / 2;
        const mouseY = (state.mouse.y * state.viewport.height) / 2;
        const mousePos = new THREE.Vector3(mouseX, mouseY, 0);

        let vertexIndex = 0;

        // Update particles
        particles.forEach((particle, i) => {
            // 1. Move
            particle.position.add(particle.velocity);

            // 2. Bounce walls
            if (Math.abs(particle.position.x) > 15) particle.velocity.x *= -1;
            if (Math.abs(particle.position.y) > 15) particle.velocity.y *= -1;
            if (Math.abs(particle.position.z) > 8) particle.velocity.z *= -1;

            // 3. Mouse Interaction (Attraction/Repulsion)
            const distToMouse = particle.position.distanceTo(mousePos);
            if (distToMouse < 4) {
                const dir = new THREE.Vector3().subVectors(mousePos, particle.position).normalize();
                // Subtle attraction
                particle.velocity.add(dir.multiplyScalar(0.0005));
            }
            // Damping
            particle.velocity.clampLength(0, 0.05);

            // 4. Update Instanced Mesh
            dummy.position.copy(particle.position);
            // Scale dot up if near mouse
            const s = distToMouse < 4 ? 1.5 : 1;
            dummy.scale.set(s, s, s);
            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);

            // 5. Check connections to other particles (O(n^2) but n=80 is tiny)
            for (let j = i + 1; j < count; j++) {
                const p2 = particles[j];
                const dist = particle.position.distanceTo(p2.position);

                if (dist < connectionDistance) {
                    // Add line segment
                    linePositions[vertexIndex++] = particle.position.x;
                    linePositions[vertexIndex++] = particle.position.y;
                    linePositions[vertexIndex++] = particle.position.z;

                    linePositions[vertexIndex++] = p2.position.x;
                    linePositions[vertexIndex++] = p2.position.y;
                    linePositions[vertexIndex++] = p2.position.z;

                    // Opacity based on distance? (Hard to do with single attribute, use color fade)
                    // If we want alpha, we need transparent material. 
                    // Let's just use simple lines for now.
                }
            }
        });

        mesh.current.instanceMatrix.needsUpdate = true;

        // Update lines
        linesGeometry.current.setAttribute(
            'position',
            new THREE.BufferAttribute(linePositions.slice(0, vertexIndex), 3)
        );
    });

    return (
        <>
            {/* Dots */}
            <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
                <sphereGeometry args={[0.04, 16, 16]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
            </instancedMesh>

            {/* Lines */}
            <lineSegments>
                <bufferGeometry ref={linesGeometry} />
                <lineBasicMaterial color="#ffffff" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
            </lineSegments>
        </>
    );
}

export default function ParticleNetwork() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]} // Support high-dpi
            >
                <ConnectedParticles />
            </Canvas>
        </div>
    );
}
