"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NeuroSphere from "@/components/3d/NeuroSphere";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black">
            {/* 3D Interactive NeuroSphere */}
            <NeuroSphere />

            {/* Overlay Layer for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black z-10 pointer-events-none" />

            {/* Content Layer */}
            <div className="relative z-20 container mx-auto px-4 text-center text-white pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium tracking-widest text-gray-300 uppercase inline-block mb-4">
                            Sparkitt — Research & Communication Lab
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight font-heading tracking-tight">
                        Where Science Meets <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sparkitt-cyan filter drop-shadow-[0_0_15px_rgba(255,65,0,0.5)]">
                            Emotion
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mt-6">
                        Where Data Creates Desire. Predict customer behavior with neuro-scientific precision.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <Link
                            href="/book-demo"
                            className="relative px-8 py-4 bg-primary text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,65,0,0.4)] hover:shadow-[0_0_40px_rgba(255,65,0,0.6)]"
                        >
                            Book For Free Demo
                        </Link>
                        <Link
                            href="/technology"
                            className="relative px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg transition-all hover:bg-white/10 hover:border-sparkitt-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                        >
                            Explore Technology
                        </Link>
                    </div>
                </motion.div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-xs tracking-widest uppercase">Scroll to Explore</span>
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"
                />
            </motion.div>
        </section>
    );
}
