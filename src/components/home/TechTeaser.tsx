"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Activity, Eye, Cpu } from "lucide-react";

export default function TechTeaser() {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Side */}
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 glass-panel flex items-center justify-center group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-sparkitt-cyan/20 to-transparent opacity-50" />
                        
                        {/* Abstract Tech Representation (Can be replaced with an actual image/video) */}
                        <div className="relative w-64 h-64">
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-dashed border-sparkitt-cyan/50"
                            />
                            <motion.div 
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 rounded-full border border-primary/50"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Activity className="w-16 h-16 text-white text-glow-cyan" />
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <span className="text-primary uppercase tracking-widest text-sm font-bold mb-2 block">Our Technology</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                            Precision Beyond <br className="hidden md:block" /> Human Perception
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            We deploy state-of-the-art neurological tracking to capture subconscious reactions in real-time, providing actionable data you can trust.
                        </p>

                        <div className="space-y-6 mb-10">
                            {[
                                { title: "EEG (Electroencephalogram)", desc: "Measuring electrical brain activity to gauge attention and emotional engagement.", icon: <Activity className="w-6 h-6 text-sparkitt-cyan" /> },
                                { title: "AI Eye-Tracking", desc: "Pinpointing visual focus to optimize design and ad placement.", icon: <Eye className="w-6 h-6 text-primary" /> },
                                { title: "Predictive fMRI", desc: "Advanced modeling of deep brain responses to predict market success.", icon: <Cpu className="w-6 h-6 text-white" /> }
                            ].map((tech, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1 bg-white/5 p-2 rounded-lg">
                                        {tech.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">{tech.title}</h4>
                                        <p className="text-sm text-gray-500">{tech.desc}</p>
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
