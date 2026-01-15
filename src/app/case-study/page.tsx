"use client";

import { createPortal } from "react-dom";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ArrowUpRight, Cpu, Lightbulb } from "lucide-react";

interface CaseStudy {
    id: number;
    title: string;
    category: string;
    summary: string;
    thumb: string;
    images: string[];
    tech: string[];
    recommendations: string[];
}

const caseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "Malak Al Tawouk",
        category: "Neuro-Taste Testing",
        summary:
            "A triple-blind neuro taste test measuring emotional responses to signature products, stripped of branding influence.",
        thumb: "/media/images/logos-with-colors/Malak Al Tawouk.svg",
        images: ["/media/images/Card/CS1/photo1.svg", "/media/images/Card/CS1/photo2.svg"],
        tech: [
            "Triple-blind competitor comparison",
            "EEG for emotional intensity tracking",
            "Brand equity vs. Product reality analysis"
        ],
        recommendations: [
            "Competitor product ranked higher in blind tests",
            "Identified gap between brand equity and product experience",
            "R&D focused on flavor and texture optimization"
        ],
    },
    {
        id: 2,
        title: "Cheese on Top",
        category: "Customer Experience",
        summary:
            "Optimizing the 'Open Wings' dining experience by mapping emotional peaks and drops during the meal.",
        thumb: "/media/images/logos-with-colors/Cheese on Top.svg",
        images: [
            "/media/images/Card/CS2/photo1.svg",
            "/media/images/Card/CS2/photo2.svg",
            "/media/images/Card/CS2/photo3.svg",
        ],
        tech: [
            "Real-time emotional mapping via EEG",
            "Sensory flow analysis",
        ],
        recommendations: [
            "High overall satisfaction scores",
            "Critical emotional drops during waiting times",
            "Strategy: Improved pacing and sustained excitement"
        ],
    },
    {
        id: 3,
        title: "Burgerizz",
        category: "Emotional Journey",
        summary:
            "Mapping the fast-food customer journey to understand stress, comfort, and enjoyment levels.",
        thumb: "/media/images/logos-with-colors/Burgerizz.png",
        images: ["/media/images/logos-with-colors/Burgerizz.png"],
        tech: [
            "Indices: Comfort, Enjoyment, Memory, Valence, Intensity",
            "Stress vs. Engagement analysis"
        ],
        recommendations: [
            "Short stress spikes indicative of curiosity",
            "Strong memory encoding but brief enjoyment peaks",
            "Strategy: Extend comfort phases in service flow"
        ],
    },
    {
        id: 4,
        title: "Exit to Nature",
        category: "Adventure Tech",
        summary:
            "Analyzing real-time emotional data during paragliding to enhance safety and customer thrill.",
        thumb: "/media/images/logos-with-colors/Exit to Nature.png",
        images: ["/media/images/logos-with-colors/Exit to Nature.png"],
        tech: [
            " In-flight EEG monitoring",
            "Stress & Adrenaline correlation"
        ],
        recommendations: [
            "Peak arousal at takeoff; mid-air calmness",
            "Identified specific stress fluctuation points",
            "Strategy: Structured pre-flight relaxation"
        ],
    },
    {
        id: 5,
        title: "Spinneys",
        category: "Retail Optimization",
        summary:
            "Uncovering friction points in store layout and navigation through neuro-behavioral tracking.",
        thumb: "/media/images/logos-with-colors/Spinneys.png",
        images: ["/media/images/logos-with-colors/Spinneys.png"],
        tech: [
            "Comparative shopper tracking",
            "Navigation time & stress indicators"
        ],
        recommendations: [
            "Significant variance in shopping completion time",
            "Signage logic identified as primary friction",
            "Strategy: Simplified layout flow and visual cues"
        ],
    },
    {
        id: 6,
        title: "Saiid Kobeisy",
        category: "Organizational Health",
        summary:
            "Enhancing internal team productivity and communication through neuro-emotional evaluation.",
        thumb: "/media/images/logos-with-colors/Saiid Kobeisy.png",
        images: ["/media/images/logos-with-colors/Saiid Kobeisy.png"],
        tech: [
            "Emotional fatigue measurement",
            "Communication clarity assessment"
        ],
        recommendations: [
            "Creative teams showed high engagement",
            "High-stress depts showed emotional fatigue",
            "Strategy: Resilience support and role clarification"
        ],
    },
    {
        id: 7,
        title: "SIIRA",
        category: "UX/UI Design",
        summary:
            "Refining app onboarding by identifying emotional friction points during the sign-up process.",
        thumb: "/media/images/logos-with-colors/SiiRA.svg",
        images: ["/media/images/logos-with-colors/SiiRA.svg"],
        tech: [
            "Cognitive load assessment",
            "Content tone analysis"
        ],
        recommendations: [
            "Data entry caused user hesitation",
            "Tone misalignment detected",
            "Strategy: Gamified feedback and simplified forms"
        ],
    },
    {
        id: 8,
        title: "Lime Lab",
        category: "Experimental R&D",
        summary:
            "Investigating the impact of binaural beats on focus, relaxation, and stress reduction.",
        thumb: "/media/images/logos-with-colors/LimLAB.png",
        images: ["/media/images/logos-with-colors/LimLAB.png"],
        tech: [
            "Brain connectivity analysis (Brodmann areas)",
            "Neural activity tracking"
        ],
        recommendations: [
            "Activated emotional regulation (BA32)",
            "Low stress, high engagement results",
            "Strategy: Binaural beats for focus enhancement"
        ],
    },
];

export default function CaseStudyPage() {
    const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
    const [activeImage, setActiveImage] = useState<string>("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="pt-24 pb-20 container mx-auto px-4 min-h-screen relative z-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 md:mb-20"
            >
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                    Proven Results
                </span>
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                    Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Studies</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    Deep dives into how neuroscience and data-driven strategies have transformed our clients&apos; businesses.
                </p>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {caseStudies.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 cursor-pointer flex flex-col h-full active:scale-95"
                        onClick={() => {
                            setSelectedCase(item);
                            setActiveImage(item.thumb);
                        }}
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 group-hover:via-primary/10 transition-all duration-500 opacity-0 group-hover:opacity-100" />

                        {/* Thumbnail Section - Fixed Aspect Ratio */}
                        <div className="relative aspect-video w-full bg-white/5 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out">
                                <Image
                                    src={item.thumb}
                                    alt={item.title}
                                    fill
                                    className="object-contain drop-shadow-2xl p-4"
                                />
                            </div>
                            {/* Category Tag */}
                            <div className="absolute top-3 left-3 md:top-4 md:left-4 py-1 px-2 md:px-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] md:text-xs text-white font-medium">
                                {item.category}
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 md:p-8 flex-grow flex flex-col relative z-10">
                            <div className="flex justify-between items-start mb-3 md:mb-4">
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <div className="p-1.5 md:p-2 rounded-full bg-white/5 group-hover:bg-primary group-hover:text-white text-gray-400 transition-colors duration-300">
                                    <ArrowUpRight size={16} className="md:w-[18px] md:h-[18px]" />
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-4 md:mb-6 flex-grow line-clamp-3">
                                {item.summary}
                            </p>

                            <div className="pt-4 md:pt-6 border-t border-white/5 flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider font-semibold group-hover:text-gray-300 transition-colors">
                                Read Case Study
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal Overlay - Portal to Body to escape Stacking Context */}
            {mounted && createPortal(
                <AnimatePresence>
                    {selectedCase && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                            onClick={() => setSelectedCase(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="bg-[#0f0f0f] border border-white/10 rounded-2xl md:rounded-3xl w-full max-w-5xl h-auto max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button - Sticky Mobile */}
                                <div className="sticky top-0 right-0 z-30 flex justify-end p-4 bg-gradient-to-b from-[#0f0f0f] to-transparent pointer-events-none">
                                    <button
                                        onClick={() => setSelectedCase(null)}
                                        className="pointer-events-auto p-2 rounded-full bg-white/10 text-white hover:bg-primary hover:text-white transition-all duration-300 backdrop-blur-md border border-white/10"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Modal Content */}
                                <div className="grid lg:grid-cols-2 gap-0">

                                    {/* Visuals - Moved to top for mobile context */}
                                    <div className="order-1 lg:order-1 bg-[#1a1a1a] p-6 md:p-10 flex flex-col items-center justify-center relative min-h-[200px]">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent pointer-events-none" />

                                        <div className="relative w-full h-32 md:h-48 mb-6">
                                            <Image
                                                src={activeImage || selectedCase.thumb}
                                                alt={selectedCase.title}
                                                fill
                                                className="object-contain transition-all duration-300"
                                            />
                                        </div>

                                        {/* Gallery logic - Scrollable on mobile */}
                                        {selectedCase.images.length > 0 && (
                                            <div className="w-full flex gap-3 overflow-x-auto pb-4 snap-x lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
                                                {selectedCase.images.slice(0, 3).map((img, i) => (
                                                    <div
                                                        key={i}
                                                        className={`relative w-24 h-20 shrink-0 rounded-lg overflow-hidden border ${activeImage === img ? 'border-primary' : 'border-white/10'} bg-black/20 snap-center cursor-pointer hover:opacity-80 transition-all`}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setActiveImage(img);
                                                        }}
                                                    >
                                                        <Image src={img} alt="" fill className="object-contain p-2" />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Text Content */}
                                    <div className="order-2 lg:order-2 p-6 md:p-12 space-y-8 bg-[#0f0f0f]">
                                        <div>
                                            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">{selectedCase.category}</span>
                                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{selectedCase.title}</h2>
                                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">{selectedCase.summary}</p>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="bg-white/5 rounded-2xl p-5 md:p-6 border border-white/5">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <Cpu className="text-primary" size={20} />
                                                    <h3 className="text-lg md:text-xl font-bold text-white">Techniques Used</h3>
                                                </div>
                                                <ul className="space-y-3">
                                                    {selectedCase.tech.map((t, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                            {t}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-5 md:p-6 border border-primary/20">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <Lightbulb className="text-primary" size={20} />
                                                    <h3 className="text-lg md:text-xl font-bold text-white">Key Insights</h3>
                                                </div>
                                                <ul className="space-y-3">
                                                    {selectedCase.recommendations.map((r, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                                            <span className="text-primary font-bold shrink-0">✓</span>
                                                            {r}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
}
