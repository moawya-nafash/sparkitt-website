"use client";

import { motion } from "framer-motion";

const processSteps = [
    { title: "Discovery Workshop", desc: "Understand the client's objectives, business challenge, target audience, and object of testing." },
    { title: "Test Design", desc: "Build the neurotesting protocol, stimulus structure, testing flow, and measurement framework." },
    { title: "Neuro-Sampling", desc: "Define and recruit the right participants based on the client's target audience and customer segments." },
    { title: "Implementation Setup", desc: "Choose between two execution models: SparKitt field deployment or remote client-led testing with SparKitt supervision." },
    { title: "Neurotechnology Testing", desc: "Collect data using EEG, Meta glasses, neuro-mobile platforms, eye-tracking, and predictive fMRI." },
    { title: "Data Cleaning", desc: "Validate, clean, synchronize, and prepare all neuro, visual, and behavioral data." },
    { title: "Data Modeling", desc: "Use AI, machine learning, and statistical analysis to detect attention, emotion, friction, and engagement patterns." },
    { title: "Neuroscientific Explanation", desc: "Explain the results through neuroscience, psychology, and behavioral science." },
    { title: "Recommendations", desc: "Translate insights into strategic, creative, communication, and experience improvements." },
    { title: "Final Report & Presentation", desc: "Deliver and present the final report with clear findings, implications, and action-oriented recommendations." },
];

export default function ProcessPage() {
    return (
        <div className="pt-32 pb-32 min-h-screen bg-[#0A0A0A]">
            <div className="container mx-auto px-4 text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-sparkitt-cyan uppercase tracking-widest text-sm font-bold mb-4 block">Our Methodology</span>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
                        The 10-Step <span className="text-primary text-glow">Process</span>
                    </h1>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative">
                {/* Central Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-sparkitt-cyan to-primary opacity-20 transform md:-translate-x-1/2" />

                {processSteps.map((step, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className={`relative flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                    >
                        {/* Dot */}
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-sparkitt-cyan transform -translate-x-[7px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_#00F0FF]" />

                        {/* Content Card */}
                        <div className={`w-full pl-12 md:pl-0 md:w-[45%] ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                            <div className="glass-panel p-8 rounded-2xl border-white/5 hover:border-primary/30 transition-colors">
                                <span className="text-primary font-black text-2xl mb-2 block">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3 className="text-2xl font-bold font-heading mb-3">{step.title}</h3>
                                <p className="text-gray-400">{step.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
