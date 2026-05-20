"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Activity, Eye, Cpu } from "lucide-react";

const techItems = [
    {
        title: "EEG (Electroencephalogram)",
        desc: "Measuring electrical brain activity to gauge attention and emotional engagement in real-time.",
        icon: <Activity className="w-6 h-6 text-sparkitt-cyan" />,
        image: "/media/images/eeg_real.png",
        glowColor: "rgba(0, 240, 255, 0.4)"
    },
    {
        title: "AI Eye-Tracking",
        desc: "Pinpointing visual focus using predictive deep learning to optimize layouts and ad placement.",
        icon: <Eye className="w-6 h-6 text-primary" />,
        image: "/media/images/eye_tracking_real.png",
        glowColor: "rgba(255, 65, 0, 0.4)"
    },
    {
        title: "Predictive fMRI",
        desc: "Advanced neural modeling to estimate cortical-level responses and map mental states.",
        icon: <Cpu className="w-6 h-6 text-white" />,
        image: "/media/images/fmri_real.png",
        glowColor: "rgba(255, 255, 255, 0.4)"
    }
];

export default function TechTeaser() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background lighting */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sparkitt-cyan/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Side - Dynamic Showcase */}
                    <div className="relative h-[550px] w-full rounded-3xl overflow-hidden border border-white/10 glass-panel flex items-center justify-center p-6 bg-white/[0.01]">
                        {/* Dynamic Scanline/Grid Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none z-10 opacity-40" />
                        
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative w-full h-full rounded-2xl overflow-hidden"
                            >
                                {/* Glowing halo behind the image */}
                                <div 
                                    className="absolute inset-0 w-full h-full blur-[40px] opacity-35 transition-colors duration-500 rounded-full scale-75 pointer-events-none" 
                                    style={{ backgroundColor: techItems[activeIndex].glowColor }}
                                />

                                {/* The Tech Image */}
                                <motion.img 
                                    src={techItems[activeIndex].image}
                                    alt={techItems[activeIndex].title}
                                    className="w-full h-full object-cover object-center rounded-2xl border border-white/5 shadow-2xl"
                                    initial={{ scale: 1.05 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 6, ease: "easeOut" }}
                                />

                                {/* Interactive Tech Tags overlay */}
                                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-white/10 bg-black/60 backdrop-blur-md z-20 flex justify-between items-center">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest text-sparkitt-cyan font-bold block mb-1">Active Neural Capture</span>
                                        <h4 className="text-sm font-bold text-white font-heading uppercase">{techItems[activeIndex].title}</h4>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Content Side */}
                    <div>
                        <span className="text-primary uppercase tracking-widest text-sm font-bold mb-2 block">Our Technology</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">
                            Precision Beyond <br className="hidden md:block" /> Human Perception
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            We deploy state-of-the-art neurotechnology to translate raw physiological reactions into objective, measurable metrics. Move beyond guesswork.
                        </p>

                        <div className="space-y-4 mb-10">
                            {techItems.map((tech, i) => (
                                <motion.div 
                                    key={i}
                                    onMouseEnter={() => setActiveIndex(i)}
                                    onClick={() => setActiveIndex(i)}
                                    className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                                        activeIndex === i 
                                        ? "bg-white/[0.04] border-primary/40 shadow-[0_0_20px_rgba(255,65,0,0.05)]" 
                                        : "bg-transparent border-transparent hover:bg-white/[0.02]"
                                    }`}
                                >
                                    <div className={`mt-1 p-2 rounded-lg transition-colors ${
                                        activeIndex === i ? "bg-primary/20 text-white" : "bg-white/5 text-gray-400"
                                    }`}>
                                        {tech.icon}
                                    </div>
                                    <div>
                                        <h4 className={`text-lg font-bold mb-1 transition-colors ${
                                            activeIndex === i ? "text-white" : "text-gray-300"
                                        }`}>{tech.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{tech.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <Link href="/technology" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:border-sparkitt-cyan/50 rounded-full font-bold transition-all hover:bg-white/10">
                            View Tech Demos
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
