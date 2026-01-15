"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


export default function Hero() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center">
            {/* 1. Background Video Layer */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/media/videos/background.mp4" type="video/mp4" />
                {/* Fallback image if video fails or loads slowly */}
                <Image
                    src="/media/images/logo.webp"
                    alt="Background Fallback"
                    fill
                    className="object-cover opacity-20"
                />
            </video>

            {/* 2. Overlay Layer for readability */}
            <div className="absolute inset-0 bg-black/40 z-10 backdrop-blur-[2px]" />

            {/* 3. Content Layer */}
            <div className="relative z-20 container mx-auto px-4 text-center text-white pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                        Ready to understand your customers <br />
                        with <span className="text-primary text-glow">95%+ accuracy</span> ?
                    </h1>

                    {/* CTA Buttons with Neon Pulse */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                        <Link
                            href="/book-demo"
                            className="relative px-8 py-4 bg-primary text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_#ff4100] hover:shadow-[0_0_40px_#ff4100]"
                        >
                            Start Your Journey
                        </Link>
                        <Link
                            href="/case-study"
                            className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg transition-all hover:bg-white/5 hover:border-primary/50"
                        >
                            View Case Studies
                        </Link>
                    </div>



                    {/* Partner Section - Moved down */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="pt-20 pb-32"
                    >
                        <h2 className="text-xl md:text-2xl font-bold tracking-widest mb-6 text-gray-500">
                            TRUSTED PARTNER
                        </h2>

                        <a
                            href="https://www.instagram.com/limebuzz.marketing/?hl=en"
                            target="_blank"
                            rel="noopener"
                            className="inline-block transition-transform hover:scale-110 duration-300 grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                        >
                            <div className="relative w-32 h-16 md:w-48 md:h-24 mx-auto">
                                <Image
                                    src="/media/images/LimLAB.webp"
                                    alt="OUR PARTNER - LimLAB"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
