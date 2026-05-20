"use client";

import { motion } from "framer-motion";

const clients = [
    "TOEFL", "Dunkin'", "Nike", "Converse", "TotalEnergies", "Spinneys", "Malak Al Tawouk", "Cheese on Top", "Exit to Nature", "Saiid Kobeisy", "SIIRA", "Crêmondo", "MawjApp", "You Speak World"
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
            <div 
                className="relative w-full flex overflow-x-hidden"
                style={{
                    WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.2) 100%)",
                    maskImage: "linear-gradient(to right, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.2) 100%)"
                }}
            >
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10" />
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10" />
                
                <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 45, repeat: Infinity }}
                    className="flex whitespace-nowrap gap-16 md:gap-32 items-center px-8"
                >
                    {/* Duplicate list for seamless loop */}
                    {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
                        <div 
                            key={i} 
                            className="text-2xl md:text-4xl font-bold text-white transition-all font-heading tracking-wider"
                            style={{
                                textShadow: "0 0 15px rgba(255, 255, 255, 0.6), 0 0 5px rgba(255, 255, 255, 0.3)"
                            }}
                        >
                            {client}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
