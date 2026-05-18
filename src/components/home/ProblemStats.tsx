"use client";

import { motion } from "framer-motion";

const stats = [
    {
        id: 1,
        value: "95%",
        label: "Accuracy in predicting consumer behavior using Neuromarketing",
    },
    {
        id: 2,
        value: "80%",
        label: "Of purchasing decisions are made subconsciously",
    },
    {
        id: 3,
        value: "3x",
        label: "Higher engagement when emotionally connected to a brand",
    }
];

export default function ProblemStats() {
    return (
        <section className="py-24 bg-black relative border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sparkitt-cyan/5 via-black to-black pointer-events-none" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        The Problem With Traditional Research
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Traditional surveys and focus groups rely on what people say, not what they actually feel. 
                        We bypass the conscious filters to measure true emotional responses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="glass-panel p-8 rounded-2xl text-center group hover:border-sparkitt-cyan/30 transition-colors"
                        >
                            <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-sparkitt-cyan mb-4 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </div>
                            <p className="text-gray-300 text-sm md:text-base">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
