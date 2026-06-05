"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

const EmotionOrb = dynamic(() => import("@/components/3d/EmotionOrb"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[#050505]" />
});

export default function AboutPage() {
    return (
        <div className="pt-32 pb-32 min-h-screen bg-[#050505] text-white">
            <div className="container mx-auto px-4">
                {/* Intro Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sparkitt-cyan uppercase tracking-widest text-sm font-bold mb-4 block">About SparKitt</span>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 leading-tight">
                            Where Science Meets <span className="text-primary text-glow">Emotion</span>
                        </h1>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                At SparKitt, we help brands and organizations move from assumption to evidence. 
                                Based in Jordan and Lebanon, we operate as a research and communication lab that 
                                combines neuromarketing, brand psychology, and multisensory approaches to uncover what 
                                truly drives attention, emotion, perception, and choice.
                            </p>
                            <p>
                                We have contributed to work connected to global brands and institutions such as 
                                <strong className="text-white"> TOEFL, Dunkin&apos;, Nike, Converse, and TotalEnergies</strong>, 
                                helping turn deep subconscious insight into sharper strategy, stronger experiences, 
                                and more effective communication.
                            </p>
                            <p>
                                Welcome to the NeuroSphere—where every click, glance, and heartbeat is a data point waiting 
                                to be understood. We don&apos;t just study behavior; we decode human desire.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[500px] w-full rounded-3xl glass-panel overflow-hidden border border-white/5"
                    >
                        <div className="absolute inset-0 z-0">
                            <EmotionOrb />
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 z-10 glass-panel p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md">
                            <h3 className="text-xl font-bold mb-2">The Emotion Orb</h3>
                            <p className="text-sm text-gray-400">A real-time 3D representation of dynamic human emotion, driven by neuro-simulation algorithms.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Book Showcase Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="border-t border-white/10 pt-24"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Book 3D Mockup Container */}
                        <div className="flex justify-center items-center h-[500px] relative">
                            {/* Glow Behind Book */}
                            <div className="absolute w-72 h-96 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
                            
                            {/* Premium CSS 3D Book Layout */}
                            <a 
                                href="https://www.amazon.com/Brands-Therapy-Couch-BranDisorders-AntiBrandiotics/dp/B0DX5R8KJP"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <motion.div 
                                    whileHover={{ rotateY: -15, scale: 1.05 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="relative w-64 h-[380px] rounded-r-xl border-l-4 border-[#121212] shadow-[15px_15px_30px_rgba(0,0,0,0.8),inset_0_0_15px_rgba(255,255,255,0.05)] overflow-hidden cursor-pointer bg-white"
                                    style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                                >
                                    <Image 
                                        src="/media/images/book_front.png"
                                        alt="Brands on the Therapy Couch Front Cover"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Subtle page edge details */}
                                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-black/5 z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none z-10" />
                                </motion.div>
                            </a>
                        </div>

                        {/* Book Content Detail */}
                        <div className="space-y-8">
                            <div>
                                <span className="text-primary uppercase tracking-widest text-sm font-bold mb-2 block">Our Methodology & Book</span>
                                <h2 className="text-4xl font-bold font-heading mb-4">Brands on the Therapy Couch</h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    This methodology approaches branding through the lens of psychology, not just marketing. 
                                    It is designed to treat brands as living personalities, diagnosing subconscious ailments 
                                    and pathological alignment issues that hinder market success.
                                </p>
                                <a 
                                    href="https://www.amazon.com/Brands-Therapy-Couch-BranDisorders-AntiBrandiotics/dp/B0DX5R8KJP" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-[#ff6000] text-white font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,65,0,0.2)] hover:shadow-[0_0_35px_rgba(255,65,0,0.4)]"
                                >
                                    Order on Amazon
                                </a>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
                                    <h4 className="text-lg font-bold text-white mb-2 font-heading">BranDisorders Wheel</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        A powerful diagnostic tool identifying 20 distinct psychological disorders that hold brands back, 
                                        ranging from identity confusion to emotional disconnection and target audience misalignment.
                                    </p>
                                </div>

                                <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
                                    <h4 className="text-lg font-bold text-primary mb-2 font-heading">AntiBrandiotics</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        A structured, behaviorally aligned therapeutic framework designed to prevent, treat, or reverse 
                                        brand disorders through targeted, psychologically grounded action strategies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Testimonials */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-32 border-t border-white/10 pt-24"
                >
                    <div className="text-center mb-16">
                        <span className="text-sparkitt-cyan uppercase tracking-widest text-sm font-bold mb-2 block">Book Testimonials</span>
                        <h2 className="text-4xl font-bold font-heading">What the Industry Says</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/[0.01] relative flex flex-col justify-between">
                            <span className="text-6xl text-primary/10 font-serif absolute top-4 left-6 pointer-events-none">&ldquo;</span>
                            <p className="text-gray-300 italic relative z-10 mb-8 leading-relaxed">
                                &ldquo;You had me at page 1 when you say &apos;...treat brands as if they were humans, each with its own unique struggles ... placing brands on the metaphorical therapy couch to explore their disorders&apos;. Brilliant perspectives that are extremely helpful in diagnosing the issues, and then a clear examination of targeted problem-solving action and tools. I will definitely use these notions in my corporate branding work.&rdquo;
                            </p>
                            <div>
                                <h4 className="font-bold text-white">Quirino Malandrino</h4>
                                <p className="text-xs text-gray-500">Brand counsel at BrandLink, New York</p>
                            </div>
                        </div>

                        <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/[0.01] relative flex flex-col justify-between">
                            <span className="text-6xl text-sparkitt-cyan/10 font-serif absolute top-4 left-6 pointer-events-none">&ldquo;</span>
                            <p className="text-gray-300 italic relative z-10 mb-8 leading-relaxed">
                                &ldquo;An intriguing, thoughtful and entirely original approach to branding, this book requires your full attention. It is not for the faint-hearted, but whether you are consumer or a brand owner, it is a deep voyage into the psyche of brands, the ailments that weaken them – and the solutions that will allow them to thrive.&rdquo;
                            </p>
                            <div>
                                <h4 className="font-bold text-white">Mark Tungate</h4>
                                <p className="text-xs text-gray-500">Editorial Director, The Epica Awards</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
