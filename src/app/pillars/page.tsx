"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Layers, Activity, Sparkles } from "lucide-react";
import Image from "next/image";

const pillarsData = [
    {
        id: "neuromarketing",
        title: "Neuromarketing",
        subtitle: "Unlocking the Subconscious",
        description: "The science of understanding how consumers truly feel, think, and decide beyond what they say. By decoding brain activity using EEG, visual fixation maps, and cognitive load algorithms, we measure attention, engagement, and emotional responses to uncover what truly influences decision-making.",
        icon: <Brain className="w-12 h-12 text-sparkitt-cyan" />,
        color: "from-sparkitt-cyan/20 to-transparent",
        image: "/media/images/pillar_neuromarketing.png",
        features: [
            "EEG-Emotion Subconscious Mapping",
            "Cognitive Workload & Arousal Analysis",
            "Attention & Fixation Path Tracking",
            "Emotional Intensity Diagnostics"
        ]
    },
    {
        id: "brand-psychology",
        title: "Brand Psychology",
        subtitle: "Brands on the Therapy Couch",
        description: "An approach to brand thinking through the lens of psychology, not just marketing. This pillar utilizes our proprietary BranDisorders Wheel, diagnosing 20 distinct brand ailments (e.g. Identity Confusion, Audience Misalignment, Emotional Disconnection) and applying the AntiBrandiotics framework to reverse, treat, or prevent core brand struggles.",
        icon: <Heart className="w-12 h-12 text-primary" />,
        color: "from-primary/20 to-transparent",
        image: "/media/images/pillar_psychology.png",
        features: [
            "20-Point BranDisorders Diagnostics",
            "AntiBrandiotics Action Frameworks",
            "Subconscious Motivator Alignment",
            "Identity Archetyping & Personality Design"
        ]
    },
    {
        id: "multisensory",
        title: "Multisensory Experience",
        subtitle: "Engaging All Senses",
        description: "A way of creating brand experiences through sound, texture, rhythm, color, and touchpoints that people can truly feel. Because the brain is wired for multisensory integration, we design cognitive harmony across all touchpoints (sonic branding, tactile package cues, visual tempos) to make brands deeply memorable and immersive.",
        icon: <Layers className="w-12 h-12 text-white" />,
        color: "from-white/20 to-transparent",
        image: "/media/images/pillar_sensory.png",
        features: [
            "Sonic Branding & Voiceover Resonance",
            "Tactile & Haptic Product Evaluation",
            "Visual Tempo & Rhythm Pacing",
            "Shopper Sensory Mapping"
        ]
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
                            <Image 
                                src={pillar.image}
                                alt={pillar.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            {/* Subtle overlay gradient to keep design system cohesive */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-30 mix-blend-overlay z-10`} />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                            
                            {/* Small floating icon badge in the corner */}
                            <div className="absolute top-6 left-6 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 z-20">
                                {pillar.icon}
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
