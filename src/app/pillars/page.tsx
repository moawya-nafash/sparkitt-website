"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Layers, Activity, Sparkles } from "lucide-react";
import Image from "next/image";

const pillarsData = [
    {
        id: "neuromarketing",
        title: "Neuromarketing",
        subtitle: "Unlocking the Subconscious",
        description: "We use advanced neuro-scientific tools to measure the biological and neural responses to marketing stimuli. Forget what consumers say—we uncover what they actually feel.",
        icon: <Brain className="w-12 h-12 text-sparkitt-cyan" />,
        color: "from-sparkitt-cyan/20 to-transparent",
        features: ["Subconscious Emotional Measurement", "Cognitive Load Analysis", "Attention Tracking"]
    },
    {
        id: "brand-psychology",
        title: "Brand Psychology",
        subtitle: "Brands on the Therapy Couch",
        description: "Based on our psychological frameworks, we treat brands like human personalities. We dive deep into the psyche to build emotional connections that turn casual buyers into loyal advocates.",
        icon: <Heart className="w-12 h-12 text-primary" />,
        color: "from-primary/20 to-transparent",
        features: ["Personality Archetyping", "Emotional Resonance", "Behavioral Triggers"]
    },
    {
        id: "multisensory",
        title: "Multisensory Experience",
        subtitle: "Engaging All Senses",
        description: "A brand is more than just a logo. We design holistic experiences that trigger multiple human senses simultaneously, creating deeply embedded memories and driving action.",
        icon: <Layers className="w-12 h-12 text-white" />,
        color: "from-white/20 to-transparent",
        features: ["Sonic Branding Validation", "Haptic Feedback Analysis", "Sensory Integration"]
    }
];

export default function PillarsPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-black">
            {/* Header */}
            <div className="container mx-auto px-4 text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary uppercase tracking-widest text-sm font-bold mb-4 block">Our Foundation</span>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
                        The Three <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sparkitt-cyan">Pillars</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Our methodology is built on a trifecta of science, psychology, and sensory design. 
                    </p>
                </motion.div>
            </div>

            {/* Pillars Detail */}
            <div className="container mx-auto px-4 space-y-32">
                {pillarsData.map((pillar, index) => (
                    <motion.div 
                        key={pillar.id}
                        id={pillar.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                    >
                        {/* Visual */}
                        <div className="w-full md:w-1/2 relative h-[400px] rounded-3xl glass-panel overflow-hidden group">
                            <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div 
                                    animate={{ y: [0, -10, 0] }} 
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="p-8 rounded-full bg-black/50 backdrop-blur-xl border border-white/10"
                                >
                                    {pillar.icon}
                                </motion.div>
                            </div>
                            
                            {/* Decorative Particles */}
                            <div className="absolute inset-0 pointer-events-none opacity-30">
                                {[...Array(20)].map((_, i) => (
                                    <div 
                                        key={i} 
                                        className="absolute w-1 h-1 bg-white rounded-full"
                                        style={{
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                            animation: `pulse ${2 + Math.random() * 3}s infinite`
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-6xl font-black text-white/5 font-heading">0{index + 1}</span>
                                <h2 className="text-4xl font-bold font-heading">{pillar.title}</h2>
                            </div>
                            <h3 className="text-xl text-primary mb-6 font-bold">{pillar.subtitle}</h3>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                {pillar.description}
                            </p>
                            
                            <ul className="space-y-4">
                                {pillar.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <Sparkles className="w-5 h-5 text-sparkitt-cyan" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
