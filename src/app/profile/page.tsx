"use client";

import { motion } from "framer-motion";
import Gallery from "@/components/Gallery";

export default function CompanyProfile() {
    return (
        <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Our <span className="text-primary">Journey</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    A glimpse into our team, our culture, and the moments that define Sparkitt.
                </p>
            </motion.div>

            <Gallery />
        </div>
    );
}
