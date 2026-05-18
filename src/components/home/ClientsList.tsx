"use client";

import { motion } from "framer-motion";

const clients = [
    "TOEFL", "Dunkin", "Nike", "Converse", "Spinneys", "Malak Al Tawouk"
];

export default function ClientsList() {
    return (
        <section className="py-20 bg-[#050505] border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 mb-10 text-center">
                <h3 className="text-xl md:text-2xl font-bold font-heading text-gray-500 tracking-widest uppercase">
                    Trusted by Global Innovators
                </h3>
            </div>

            {/* Infinite Marquee */}
            <div className="relative w-full flex overflow-x-hidden">
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10" />
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10" />
                
                <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    className="flex whitespace-nowrap gap-16 md:gap-32 items-center px-8"
                >
                    {/* Duplicate list for seamless loop */}
                    {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
                        <div key={i} className="text-2xl md:text-4xl font-bold text-white/20 hover:text-white/80 transition-colors font-heading tracking-wider">
                            {client}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
