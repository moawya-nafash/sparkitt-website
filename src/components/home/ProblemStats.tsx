"use client";

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function AnimatedCounter({ value, duration = 1.5 }: { value: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
    
    const numberPart = parseInt(value.replace(/[^0-9]/g, ''), 10);
    const isPercent = value.includes('%');
    const isPlus = value.includes('+');

    useEffect(() => {
        if (!isInView) return;
        let active = true;
        const startTime = performance.now();
        
        const animate = (now: number) => {
            if (!active) return;
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(numberPart * easeProgress);
            
            setCount(current);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
        return () => {
            active = false;
        };
    }, [isInView, numberPart, duration]);

    return (
        <span ref={ref}>
            {isPlus && "+"}
            {count}
            {isPercent && "%"}
        </span>
    );
}

const stats = [
    {
        id: 1,
        value: "95%",
        label: "of new products and services fail",
        desc: "According to Harvard Business Review. No business is immune to this harrowing statistic, which includes misfires from companies like Google and Coca-Cola!",
    },
    {
        id: 2,
        value: "70%",
        label: "of shoppers leave without making a purchase",
        desc: "According to Retail touchpoints research. This indicates that retailers are missing out on a significant number of opportunities.",
    },
    {
        id: 3,
        value: "+95%",
        label: "accuracy in measuring emotional & cognitive metrics",
        desc: "We measure attention, engagement, stress, excitement, relaxation, focus, and cognitive demand using medical-grade biometric EEG technology.",
    }
];

export default function ProblemStats() {
    return (
        <section className="py-24 bg-black relative border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-black to-black pointer-events-none" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        The Problem With Traditional Research
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Traditional surveys and focus groups rely on what people say, not what they actually feel. 
                        We bypass conscious filters to measure true emotional responses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="glass-panel p-8 rounded-2xl text-center group border border-white/5 hover:border-primary/20 hover:bg-white/[0.01] transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-sparkitt-cyan mb-4 group-hover:scale-105 transition-transform duration-300 filter drop-shadow-[0_0_10px_rgba(255,65,0,0.3)]">
                                <AnimatedCounter value={stat.value} />
                            </div>
                            <h4 className="text-white font-bold text-lg mb-3">
                                {stat.label}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {stat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
