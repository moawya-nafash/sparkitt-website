"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, ShieldCheck } from "lucide-react";

export default function About() {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen">
            {/* Header Section */}
            <motion.div
                initial="initial"
                animate="animate"
                variants={fadeIn}
                className="text-center mb-20 space-y-6"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-primary">About Us</h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                    We combine neuroscience and technology to create smarter marketing and
                    strategic consulting solutions that truly connect with people.
                </p>
            </motion.div>

            {/* Vision & Mission Grid */}
            <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
                className="grid md:grid-cols-2 gap-12 mb-24 items-center"
            >
                <motion.div
                    variants={fadeIn}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors duration-300"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Shaping the Future of Business with Smart Solutions. We envision a
                        world where technology acts as a bridge between human needs and
                        business goals.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeIn}
                    className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors duration-300"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Delivering reliable and innovative technological solutions that
                        empower our clients to achieve their business goals efficiently and
                        effectively.
                    </p>
                </motion.div>
            </motion.div>

            {/* Core Values / Features */}
            <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={stagger}
                className="grid md:grid-cols-3 gap-8"
            >
                {[
                    {
                        title: "Expertise",
                        desc: "A team of specialized experts in various technological fields with years of practical experience.",
                        icon: Users,
                    },
                    {
                        title: "Innovation",
                        desc: "We use the latest technologies and innovative methods to provide exceptional and advanced solutions.",
                        icon: Lightbulb,
                    },
                    {
                        title: "Quality",
                        desc: "We adhere to the highest quality standards in all our projects and services that we provide to clients.",
                        icon: ShieldCheck,
                    },
                ].map((feature, i) => (
                    <motion.div
                        key={i}
                        variants={fadeIn}
                        className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                            <feature.icon className="text-primary w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                            {feature.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
