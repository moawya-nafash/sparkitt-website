"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, BrainCircuit, Target, Sparkles } from "lucide-react";

interface CaseStudy {
    id: number;
    name: string;
    title: string;
    category: string;
    color: string;
    methodology: string;
    insight: string;
    outcome: string;
}

const cases: CaseStudy[] = [
    {
        id: 1,
        name: "You Speak World",
        title: "Official Song Clip Neuro-Evaluation",
        category: "Video & Music Engagement",
        color: "from-[#ff4100]/20 to-transparent",
        methodology: "We conducted a comprehensive neuro-evaluation of the official song clip. This included testing at the editing stage, on-location eye-tracking during video exposure, and a final-cut visual attention analysis. Biometrics tracked included brainwave activity (EEG) to measure emotional engagement, visual fixation paths, frame-by-frame visual similarity, and predictive fMRI modeling to translate neural reactions.",
        insight: "The study showed that visual pacing and rhythm directly impacted cortical arousal. The brain balance analysis indicated high attention, cognitive interest, and memory encoding peaks during transition frames. Eye-tracking confirmed that visual focal points successfully directed viewer focus toward the core narrative, preventing cognitive distraction.",
        outcome: "We provided the creative team with frame-by-frame video editing and audio-sync guidelines, resulting in optimized pacing, higher emotional retention, and stronger audience resonance for the final launch."
    },
    {
        id: 2,
        name: "TOEFL (Future Me Calling)",
        title: "Study Album Neuropsychological Evaluation",
        category: "Brand Trust & Audio Psychology",
        color: "from-[#00F0FF]/20 to-transparent",
        methodology: "Evaluating a custom study support album designed to boost cognitive focus and lower anxiety. The methodology incorporated Lacan's 'desire gap' theory (the pull of the future self), testing tempos, predictive transitions, and musical texture. Biometric baselines evaluated stress-regulation responses.",
        insight: "We identified that specific auditory tempos (60-70 BPM) and repetitive, low-novelty acoustic patterns biased the brain towards relaxation and retention. The future-self narrative created an emotional 'pull' that bypassed typical study-related stress and cognitive fatigue.",
        outcome: "Delivered a structured auditory study-ritual framework that helps students regulate stress, construct a positive academic identity, and build long-term study habits."
    },
    {
        id: 3,
        name: "MawjApp",
        title: "Functional Audio Channels Evaluation",
        category: "Mobile App Cognitive States",
        color: "from-purple-500/20 to-transparent",
        methodology: "Testing 6 distinct functional audio channels with participants using high-resolution EEG and predictive fMRI brain mapping to determine cognitive states.",
        insight: "The neural data revealed clear and statistically significant differentiation between the channels. The audio patterns successfully triggered target mental states: Emotional Recovery, Cognitive Focus, Sleep Readiness, Flow State, Motivation, and Power Napping.",
        outcome: "We defined MawjApp's product portfolio and core feature map based on neurological efficacy, validating each channel's functional claim with hard brain data."
    },
    {
        id: 4,
        name: "Dunkin'",
        title: "Holiday Cup Design & Tasting Experience",
        category: "Sensory Packaging & Tasting",
        color: "from-pink-500/20 to-transparent",
        methodology: "12 participants were exposed to 4 cup conditions (plain, regular Dunkin', holiday red, holiday green) across a 2-minute sensory sequence involving visual observation, olfactory aroma, and tasting.",
        insight: "The cup design significantly altered the perceived taste of the coffee. Festive visual cues and contrast levels heightened emotional intensity, excitement, and taste satisfaction, demonstrating that visual hierarchy directly shapes taste perception.",
        outcome: "Provided actionable packaging guidelines for design contrast, visual hierarchy, and sensory cues to maximize seasonal product engagement and customer satisfaction."
    },
    {
        id: 5,
        name: "Malak Al Tawouk",
        title: "Neuro Blind Taste Test",
        category: "Sensory Food R&D",
        color: "from-amber-500/20 to-transparent",
        methodology: "A triple-blind taste test comparing Malak Al Tawouk's signature sandwich with major local competitors. Participants wore biometric sensors to track immediate gut/physiological responses.",
        insight: "While brand equity for Malak Al Tawouk was exceptionally high in surveys, the competitors scored higher in raw blind taste preference. This mismatch highlighted a gap where the physical product experience did not match the brand's psychological promise.",
        outcome: "Provided clear product innovation direction for Malak Al Tawouk's R&D team, focusing on adjusting sauce acidity and protein texture to align the physical taste with brand expectations."
    },
    {
        id: 6,
        name: "Cheese on Top",
        title: "Crave Factor & Open Wings Experience",
        category: "In-Store Experience & Service Flow",
        color: "from-yellow-500/20 to-transparent",
        methodology: "On-site sensory evaluation combining customer behavioral observation, service timing, and taste satisfaction surveys during dining.",
        insight: "Taste satisfaction peaks immediately upon food arrival but undergoes sharp emotional drop-offs during waiting times and mid-meal service lags. The visual/smell cues from the open kitchen design were strong positive triggers.",
        outcome: "Recommended service layout adjustments to sustain emotional engagement, reduce wait friction, and optimize the sensory flow of the kitchen."
    },
    {
        id: 7,
        name: "Spinneys",
        title: "In-Store Communication & Layout Navigation",
        category: "Retail Shopper Navigation",
        color: "from-green-500/20 to-transparent",
        methodology: "Shopper navigation tracking. Participants grocery shopped with a standardized list while wearing eye-tracking glasses, recording search times, visual fixations, and pathway choices.",
        insight: "We found major friction points in store layout navigation. While one shopper completed the list in 14 minutes, another took 25 minutes due to confusing signage, scattered product categories, and weak visual standouts at eye level.",
        outcome: "Delivered layout restructuring and shelf communication recommendations to streamline navigation, improve category grouping, and increase impulse buy conversions."
    },
    {
        id: 8,
        name: "Exit to Nature",
        title: "Paragliding Flight Emotional Journey",
        category: "Service Design & Extreme Sports",
        color: "from-emerald-500/20 to-transparent",
        methodology: "We deployed mobile, wireless EEG sensors on paragliding pilots and passengers during live flights to record raw brain activity from pre-flight prep to landing.",
        insight: "Identified distinct emotional phases: extreme stress and high cognitive load during takeoff, followed by a sudden shift to intense calm, flow state, and visual awe mid-flight. Pilots showed high, stable focus, while passengers experienced sharp emotional swings.",
        outcome: "Redesigned the customer onboarding flow, aligning staff communication and pre-flight pacing with the passenger's emotional waves to maximize reassurance and delight."
    },
    {
        id: 9,
        name: "Saiid Kobeisy",
        title: "Employee Performance & Well-Being Map",
        category: "Organizational Neuro-Mapping",
        color: "from-blue-500/20 to-transparent",
        methodology: "Internal organizational mapping combining structured surveys, emotional exhaustion diagnostics, role ambiguity scales, and communication flow analysis.",
        insight: "The study mapped high professional pride but identified critical fatigue spots, role overlaps, and communication bottlenecks. These factors directly caused stress and decreased collective productivity.",
        outcome: "Created an internal restructuring guide, establishing clear communication protocols and cognitive well-being initiatives to improve performance and retention."
    },
    {
        id: 10,
        name: "SIIRA",
        title: "App Onboarding Usability & Cognitive Flow",
        category: "Digital App UX/UI",
        color: "from-[#ff4100]/20 to-transparent",
        methodology: "Tested users navigating the SIIRA app onboarding process while recording cognitive load, visual fixation tracks, and emotional hesitation.",
        insight: "Identified a severe friction gap during manual personal data input. High cognitive load and emotional drop-off occurred when the tone of the questions felt overly clinical compared to the app's warm positioning.",
        outcome: "Recommended content rewrites, field simplification, and interactive feedback indicators, transforming the onboarding into a seamless, welcoming conversation."
    }
];

export default function PortfolioPage() {
    const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="pt-32 pb-32 min-h-screen bg-[#050505] text-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-primary uppercase tracking-widest text-sm font-bold mb-4 block">Proven Insights</span>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
                        Our Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sparkitt-cyan">Studies</span>
                    </h1>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                        Explore how we translate raw neurological responses into actionable, high-growth strategies for global innovators.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((c, index) => (
                        <motion.div
                            key={c.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            onClick={() => setSelectedCase(c)}
                            className="group relative h-80 rounded-3xl overflow-hidden glass-panel border border-white/5 cursor-pointer hover:border-primary/30 transition-all duration-300 flex flex-col justify-between p-8"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${c.color} to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                            
                            <div className="relative z-10 flex justify-between items-start">
                                <span className="text-xs font-bold text-sparkitt-cyan tracking-widest uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                                    {c.category}
                                </span>
                            </div>

                            <div className="relative z-10 space-y-2">
                                <h3 className="text-3xl font-bold font-heading text-white tracking-tight leading-none group-hover:text-primary transition-colors">
                                    {c.name}
                                </h3>
                                <p className="text-sm text-gray-400 font-sans line-clamp-2">
                                    {c.title}
                                </p>
                            </div>

                            {/* View Button */}
                            <div className="relative z-10 flex items-center gap-2 text-sm font-bold text-white/50 group-hover:text-white transition-colors pt-4 border-t border-white/5">
                                Learn More <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Detail Overlay */}
            {mounted && typeof window !== "undefined" && createPortal(
                <AnimatePresence>
                    {selectedCase && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
                            {/* Backdrop */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedCase(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            />

                            {/* Modal Content */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", duration: 0.5 }}
                                className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-[#0d0d0d] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(255,65,0,0.15)] p-8 md:p-12 z-10 scrollbar-thin text-white"
                            >
                                {/* Close Button */}
                                <button 
                                    onClick={() => setSelectedCase(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 text-white transition-all"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Modal Header */}
                                <div className="mb-10 pr-10">
                                    <span className="text-sparkitt-cyan uppercase tracking-widest text-xs font-bold bg-sparkitt-cyan/10 border border-sparkitt-cyan/20 px-3 py-1 rounded-full inline-block mb-3">
                                        {selectedCase.category}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-black font-heading text-white tracking-tight leading-none">
                                        {selectedCase.name}
                                    </h2>
                                    <p className="text-lg text-gray-400 mt-2 font-sans font-medium">
                                        {selectedCase.title}
                                    </p>
                                </div>

                                {/* Details Grid */}
                                <div className="space-y-8">
                                    {/* Methodology */}
                                    <div className="flex gap-4 items-start">
                                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                                            <Search className="w-6 h-6 text-sparkitt-cyan" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-2 font-heading tracking-wide uppercase text-sm text-sparkitt-cyan">Methodology</h4>
                                            <p className="text-gray-300 leading-relaxed font-sans text-base">
                                                {selectedCase.methodology}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Scientific Insight */}
                                    <div className="flex gap-4 items-start">
                                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                                            <BrainCircuit className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-2 font-heading tracking-wide uppercase text-sm text-primary">Scientific Insight</h4>
                                            <p className="text-gray-300 leading-relaxed font-sans text-base">
                                                {selectedCase.insight}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Strategic Outcome */}
                                    <div className="flex gap-4 items-start">
                                        <div className="p-3 bg-[#ff4100]/10 rounded-xl border border-primary/20 shrink-0">
                                            <Target className="w-6 h-6 text-[#ff4100]" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-2 font-heading tracking-wide uppercase text-sm text-[#ff4100]">Strategic Outcome</h4>
                                            <p className="text-gray-300 leading-relaxed font-sans text-base">
                                                {selectedCase.outcome}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
}
