"use client";

import { motion } from "framer-motion";

const processSteps = [
    { title: "Discovery & Briefing", desc: "Understanding your brand challenges and setting precise objectives." },
    { title: "Neuro-Research Design", desc: "Crafting a custom methodology combining EEG, Eye-Tracking, and psychological surveys." },
    { title: "Participant Recruitment", desc: "Selecting a highly targeted demographic sample for accurate insights." },
    { title: "Baseline Calibration", desc: "Establishing individual emotional baselines to ensure precise data measurement." },
    { title: "Stimuli Exposure", desc: "Testing your ads, products, or UX while recording real-time biometric data." },
    { title: "Data Collection", desc: "Gathering massive amounts of subconscious and physiological data points." },
    { title: "AI Processing", desc: "Running the raw data through our proprietary AI models to filter noise." },
    { title: "Insight Generation", desc: "Translating complex brainwaves into actionable marketing insights." },
    { title: "Strategy Formulation", desc: "Developing a strategic plan based on the 'Brands on the Therapy Couch' framework." },
    { title: "Performance Tracking", desc: "Monitoring the implementation and measuring the real-world ROI." },
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
