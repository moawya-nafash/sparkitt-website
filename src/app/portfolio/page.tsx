"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cases = [
    { name: "TOEFL", category: "Brand Trust Analysis", color: "from-primary/20" },
    { name: "Dunkin'", category: "Sensory Packaging Optimization", color: "from-sparkitt-cyan/20" },
    { name: "Nike", category: "Ad Engagement Tracking", color: "from-white/20" },
    { name: "Converse", category: "Youth Emotion Mapping", color: "from-gray-500/20" },
    { name: "Spinneys", category: "In-store Neuromarketing", color: "from-primary/20" },
    { name: "Malak Al Tawouk", category: "Menu Psychology", color: "from-sparkitt-cyan/20" }
];

export default function PortfolioPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-black">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
                        Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Results</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        We have transformed the way global brands understand their audiences.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((c, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative h-80 rounded-3xl overflow-hidden glass-panel border border-white/5 cursor-pointer"
                        >
                            {/* Gradient Background tied to brand (abstractly) */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${c.color} to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                            
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-sparkitt-cyan text-sm font-bold tracking-wider uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {c.category}
                                    </span>
                                    <h3 className="text-3xl font-bold font-heading text-white">{c.name}</h3>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 z-20">
                                <span className="px-6 py-2 rounded-full border border-white text-white font-medium">View Case Study</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
