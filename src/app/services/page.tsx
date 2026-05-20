"use client";

import { motion } from "framer-motion";
import {
    BrainCircuit, Eye, Video, Package, Utensils, Smartphone, Store,
    Search, Users, Activity, Telescope, Layers,
    Compass, Briefcase, TrendingUp, Megaphone, ShieldCheck,
    MonitorPlay, AudioLines, Heart
} from "lucide-react";

export default function Services() {
    const categories = [
        {
            title: "Neuromarketing: Neurotests & Research",
            description: "Advanced biometric testing to capture subconscious consumer responses, attention, and sensory feedback.",
            icon: BrainCircuit,
            items: [
                {
                    title: "Market & Consumer Behavior Analysis",
                    content: "Deep qualitative and quantitative analysis of consumer habits and subconscious drivers.",
                    benefit: "Bypasses conscious bias to reveal true purchasing triggers.",
                    icon: Search
                },
                {
                    title: "Product Testing",
                    content: "Evaluating real-time customer reactions and interaction flow with physical products.",
                    benefit: "Provides objective metrics on product usability and satisfaction.",
                    icon: Package
                },
                {
                    title: "Blind Taste Testing",
                    content: "Triple-blind product evaluation to isolate pure sensory flavor and texture perception.",
                    benefit: "Verifies if the physical product matches the brand's premium positioning.",
                    icon: Utensils
                },
                {
                    title: "Packaging Effectiveness Testing",
                    content: "Using eye-tracking and EEG to assess design contrast, brand hierarchy, and shelf standout.",
                    benefit: "Maximizes point-of-sale attention and purchase conversion.",
                    icon: Package
                },
                {
                    title: "In-Store Communication Testing",
                    content: "Mapping shopper pathways, visual navigation, and shelf interaction patterns.",
                    benefit: "Optimizes store layouts and signage to reduce shopper friction.",
                    icon: Store
                },
                {
                    title: "Visual Identity & Campaign Testing",
                    content: "Evaluating posters, ads, and digital creatives for brand recall, emotional intensity, and focus order.",
                    benefit: "Ensures key messages and CTAs are seen in the first 3 seconds.",
                    icon: Eye
                },
                {
                    title: "Sonic Branding Testing",
                    content: "Measuring the psychological resonance, emotional fit, and memory recall of voiceovers and music.",
                    benefit: "Builds a cohesive auditory identity that reinforces brand trust.",
                    icon: AudioLines
                },
                {
                    title: "UI/UX Interface Testing",
                    content: "EEG and biometric tracking during digital onboarding and interface navigation.",
                    benefit: "Pinpoints exactly where users experience confusion or cognitive overload.",
                    icon: Smartphone
                }
            ]
        },
        {
            title: "Strategies Based on Neuro and Psychology",
            description: "Psychologically grounded growth strategies, brand diagnosis, and behaviorally aligned positioning frameworks.",
            icon: Compass,
            items: [
                {
                    title: "Brand Strategy & Diagnosis",
                    content: "Diagnosing emotional alignment and identity ailments using the BranDisorders Wheel framework.",
                    benefit: "Resolves underlying identity confusion to build emotional equity.",
                    icon: Briefcase
                },
                {
                    title: "Multisensory Strategy",
                    content: "Designing integrated sensory profiles, including signature scents (olfactory), sounds, and textures.",
                    benefit: "Creates a deeply immersive, multi-dimensional brand memory.",
                    icon: Layers
                },
                {
                    title: "360 MarCom Strategy",
                    content: "Behavioral-science-aligned marketing communication frameworks across all customer touchpoints.",
                    benefit: "Ensures message consistency and psychological resonance.",
                    icon: Megaphone
                },
                {
                    title: "Go-To-Market Strategy",
                    content: "Data-backed commercialization models based on objective neuromarketing test insights.",
                    benefit: "Reduces market entry risks and optimizes advertising budgets.",
                    icon: TrendingUp
                },
                {
                    title: "Digital Marketing Strategy",
                    content: "Conversion rate optimization (CRO) and hyper-personalized digital journeys.",
                    benefit: "Turns raw digital traffic into highly engaged, loyal customers.",
                    icon: Heart
                },
                {
                    title: "Social Media Strategy",
                    content: "Content and engagement protocols mapped directly to the target demographic's emotional dashboard.",
                    benefit: "Amplifies brand trust, community size, and viral potential.",
                    icon: Users
                },
                {
                    title: "Audience Mapping & Analysis",
                    content: "Building deep psychographic personas using psychological archetypes and neuro-segmentation.",
                    benefit: "Allows precise personalization of messaging and product features.",
                    icon: BrainCircuit
                },
                {
                    title: "Positioning Strategy",
                    content: "Identifying perceptual white spaces and establishing a unique psychological niche.",
                    benefit: "Positions the brand as the obvious, emotionally preferred choice.",
                    icon: Telescope
                }
            ]
        }
    ];

    return (
        <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen">
            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Comprehensive solutions designed to elevate your business through technology, behavioral science, and strategic precision.
                </p>
            </motion.div>

            {/* Categories Loop */}
            <div className="space-y-32">
                {categories.map((category, catIndex) => (
                    <div key={catIndex} className="relative">
                        {/* Category Header */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="mb-12 flex flex-col md:flex-row items-start md:items-center gap-6"
                        >
                            <div className="p-4 bg-primary/10 rounded-2xl border border-primary/20">
                                <category.icon className="w-10 h-10 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                                    {category.title}
                                </h2>
                                <p className="text-gray-400 text-lg max-w-2xl">
                                    {category.description}
                                </p>
                            </div>
                        </motion.div>

                        {/* Services Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.items.map((item, itemIndex) => (
                                <motion.div
                                    key={itemIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: itemIndex * 0.1, duration: 0.5 }}
                                    className="group relative p-1 rounded-3xl bg-gradient-to-br from-white/5 to-transparent hover:from-primary/50 hover:to-primary/10 transition-all duration-500 flex flex-col h-full"
                                >
                                    <div className="h-full bg-[#0a0a0a] border border-white/5 p-8 rounded-[1.4rem] relative z-10 hover:border-transparent transition-colors flex flex-col">

                                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shrink-0">
                                            <item.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>

                                        <div className="flex-grow space-y-4">
                                            <div>
                                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">Content</span>
                                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                                    {item.content}
                                                </p>
                                            </div>

                                            <div className="pt-4 border-t border-white/5">
                                                <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1">Benefit</span>
                                                <p className="text-gray-300 text-sm font-medium leading-relaxed">
                                                    {item.benefit}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
