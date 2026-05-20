"use client";

import { motion } from "framer-motion";
import { Activity, Eye, Cpu, BrainCircuit } from "lucide-react";

const techStack = [
    {
        name: "EEG-Emotion Maps (Electroencephalogram)",
        desc: "EEG captures real-time brainwave activity to measure attention, engagement, emotional intensity, and cognitive load as consumers interact with ads, packaging, products, and digital experiences without needing them to say a word. This helps discover what triggers emotion or causes mental effort, giving brands a window into the subconscious mind.",
        icon: <Activity className="w-10 h-10 text-sparkitt-cyan" />
    },
    {
        name: "Eye-Tracking Attention Maps (AI-Based)",
        desc: "AI-based Eye-tracking predicts where people will look first in any visual design within 3 to 5 seconds. Trained on over 5.5 million real eye movements to simulate human vision with up to 96% accuracy, it shows exactly which parts of a post, ad, or UI draw attention and which get ignored, allowing pre-publishing optimization.",
        icon: <Eye className="w-10 h-10 text-primary" />
    },
    {
        name: "Predictive fMRI Mapping",
        desc: "An advanced neuroscience modeling tool that estimates how the brain responds at the cortical level, based on measured neural and physiological signals. Using AI-driven modeling, it translates collected neuro-data into probable brain-response maps to reveal deep neural patterns (immersive flow, cognitive readiness, recovery-oriented states).",
        icon: <Cpu className="w-10 h-10 text-white" />
    }
];

export default function TechnologyPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-[#050505] relative overflow-hidden">
            {/* Background Net */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
                            Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-sparkitt-cyan to-primary text-glow-cyan">Technology</span>
                        </h1>
                        <p className="text-gray-400 text-xl">
                            We don't guess. We measure. Our lab is equipped with medical-grade neuro-technology tailored for commercial insight.
                        </p>
                    </motion.div>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass-panel p-10 rounded-3xl group hover:border-sparkitt-cyan/30 transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-500">
                                {tech.icon}
                            </div>
                            
                            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-sparkitt-cyan/50 transition-colors">
                                {tech.icon}
                            </div>
                            
                            <h3 className="text-2xl font-bold font-heading mb-4">{tech.name}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {tech.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Demo Teaser */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-1 relative rounded-3xl bg-gradient-to-r from-primary/50 via-sparkitt-cyan/50 to-primary/50"
                >
                    <div className="bg-black p-12 md:p-20 rounded-[22px] text-center">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready to see it in action?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Experience a live demonstration of our Eye-Tracking and EEG analysis tools.</p>
                        <a href="/book-demo" className="inline-block px-8 py-4 bg-primary text-white rounded-full font-bold btn-glow hover:scale-105 transition-transform">
                            Request Live Demo
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
