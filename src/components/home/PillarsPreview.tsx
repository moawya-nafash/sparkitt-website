"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Heart, Layers } from "lucide-react";

const pillars = [
    {
        id: 1,
        title: "Neuromarketing",
        description: "The science of understanding how consumers truly feel, think, and decide beyond what they say. By decoding brain activity, it measures attention, engagement, and emotional responses to uncover what truly influences decision-making.",
        icon: <Brain className="w-8 h-8 text-sparkitt-cyan" />,
        delay: 0.1
    },
    {
        id: 2,
        title: "Brand Psychology",
        description: "An approach to brand thinking through the lens of psychology, not just marketing. It helps identify what is holding a brand back and builds emotionally intelligent, behaviorally aligned strategies that incorporate neuromarketing insights.",
        icon: <Heart className="w-8 h-8 text-primary" />,
        delay: 0.2
    },
    {
        id: 3,
        title: "Multisensory Experience",
        description: "A way of creating brand experiences through sound, texture, rhythm, color, and touchpoints that people can truly feel. It makes the brand more memorable, immersive, and emotionally connected by applying neurological and psychological insights.",
        icon: <Layers className="w-8 h-8 text-white" />,
        delay: 0.3
    }
];

export default function PillarsPreview() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-sparkitt-cyan/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-sparkitt-cyan uppercase tracking-widest text-sm font-bold mb-2 block">Our Foundation</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading">
                            The Three Pillars of <br/> Neuro-Driven Growth
                        </h2>
                    </div>
                    <Link href="/pillars" className="text-primary hover:text-white transition-colors flex items-center gap-2 group">
                        Explore All Pillars 
                        <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pillars.map((pillar) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: pillar.delay, duration: 0.6 }}
                            className="bg-black/40 border border-white/5 rounded-2xl p-8 hover:bg-white/[0.02] transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            
                            <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {pillar.icon}
                            </div>
                            
                            <h3 className="text-xl font-bold font-heading mb-3">{pillar.title}</h3>
                            <p className="text-gray-400 mb-6">{pillar.description}</p>
                            
                            <div className="mt-auto">
                                <Link href={`/pillars#${pillar.title.toLowerCase().replace(' ', '-')}`} className="text-sm font-bold text-white/50 hover:text-white transition-colors flex items-center gap-2">
                                    Learn More <span className="text-primary">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
