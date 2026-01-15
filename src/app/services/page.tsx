"use client";

import { motion } from "framer-motion";
import {
    BrainCircuit, Eye, Video, Package, Utensils, Smartphone, Store,
    Search, Users, Activity, Telescope,
    Compass, Briefcase, TrendingUp, Megaphone, ShieldCheck,
    MonitorPlay, AudioLines, Heart
} from "lucide-react";

export default function Services() {
    const categories = [
        {
            title: "Neuromarketing Services",
            description: "Using biometric tools (EEG, Eye-tracking, GSR) to uncover subconscious consumer drivers.",
            icon: BrainCircuit,
            items: [
                {
                    title: "Visual Identity Testing",
                    content: "Testing logos, colors, and design elements using AI-based eye-tracking to see what captures attention first.",
                    benefit: "Ensures the brand is seen clearly and in the right order.",
                    icon: Eye
                },
                {
                    title: "AI-Generated Videos Testing",
                    content: "Evaluating engagement and emotional intensity of AI-produced content before launch.",
                    benefit: "Optimizes marketing spend by knowing which video version performs best.",
                    icon: Video
                },
                {
                    title: "Blind Taste Testing",
                    content: "Measuring authentic sensory judgment by stripping away brand bias.",
                    benefit: "Validates if the product experience matches the brand's emotional power.",
                    icon: Utensils
                },
                {
                    title: "Packaging Effectiveness Testing",
                    content: "Using EEG and eye-tracking to evaluate if packaging triggers the right psychological response.",
                    benefit: "Identifies sensory triggers that lead to purchase.",
                    icon: Package
                },
                {
                    title: "UI/UX Testing",
                    content: "Tracking brain activity (EEG) and emotional arousal (GSR) while users navigate digital interfaces.",
                    benefit: "Reduces cognitive load and friction in the user journey.",
                    icon: Smartphone
                },
                {
                    title: "Advertising Campaign Testing",
                    content: "Pre-testing digital and traditional ads to assess clarity and emotional resonance.",
                    benefit: "Eliminates guesswork and boosts conversion potential.",
                    icon: MonitorPlay
                },
                {
                    title: "In-Store Communication Testing",
                    content: "Mapping shopper navigation and attention within physical environments.",
                    benefit: "Optimizes store layout and shelf logic to maximize sales.",
                    icon: Store
                },
                {
                    title: "Sonic Branding Testing",
                    content: "Measuring emotional resonance and memory recall of music, voiceovers, and jingles.",
                    benefit: "Creates a consistent sensory thread across all touchpoints.",
                    icon: AudioLines
                }
            ]
        },
        {
            title: "Research Services",
            description: "A data-literate approach to understanding the market landscape and audience.",
            icon: Search,
            items: [
                {
                    title: "Market Research",
                    content: "Deep dives into market needs and competitive landscape assessments (Exploratory, Descriptive, Causal).",
                    benefit: "Provides intelligence-based strategies instead of assumptions.",
                    icon: Search
                },
                {
                    title: "Consumer Behavior & Perception",
                    content: "Mapping unspoken motivations and emotional drivers through psychological interviews.",
                    benefit: "Delivers a clear 'road map' of the audience's emotional dashboard.",
                    icon: Users
                }
            ]
        },
        {
            title: "Strategic Services",
            description: "Developing science-backed roadmaps for business growth and communication.",
            icon: Compass,
            items: [
                {
                    title: "Business & Brand Strategy",
                    content: "Diagnosing 'Brand Disorders' using the proprietary BranDisorders Wheel.",
                    benefit: "Leads to strategies that are emotionally intelligent and scientifically sound.",
                    icon: Briefcase
                },
                {
                    title: "Growth & Go-to-Market Strategy",
                    content: "Building scalable models rooted in behavioral intelligence and data accuracy.",
                    benefit: "Enables businesses to make confident decisions and reduce strategic errors.",
                    icon: TrendingUp
                },
                {
                    title: "Digital Marketing & Social Strategy",
                    content: "Developing data-informed personalization strategies that adapt in real-time.",
                    benefit: "Transforms raw data into clear strategic direction.",
                    icon: Megaphone
                },
                {
                    title: "Customer Loyalty & Program Impact",
                    content: "Testing the emotional impact of rewards and habit-loop mechanics.",
                    benefit: "Builds loyalty that is not just transactional, but deeply felt.",
                    icon: Heart
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
