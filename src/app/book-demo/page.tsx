"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2 } from "lucide-react";
import BookingSystem from "@/components/BookingSystem";

export default function BookDemo() {
    return (
        <div className="pt-32 pb-20 container mx-auto px-4 min-h-screen">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

                {/* Left Column: Information */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        See Sparkitt in <span className="text-primary">Action</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Book a personalized demo with our experts to explore how our specialized solutions can accelerate your growth with 95% accuracy.
                    </p>

                    <ul className="space-y-6">
                        {[
                            "Live walkthrough of our platform",
                            "Customized strategy session",
                            "Q&A with our technical team",
                            "No commitment required"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-4 text-white">
                                <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                                <span className="text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Trust badge / Testimony placeholder */}
                    <div className="p-6 bg-white/5 border-l-4 border-primary rounded-r-xl mt-8">
                        <p className="text-gray-300 italic">&quot;Sparkitt transformed our marketing approach. The insights we gained were invaluable.&quot;</p>
                        <div className="mt-4 flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                            <div>
                                <p className="font-bold text-sm">Marketing Director</p>
                                <p className="text-xs text-gray-400">Leading Retail Brand</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Calendar/Form Embed Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-[800px] w-full"
                >
                    <BookingSystem />
                </motion.div>

            </div>
        </div>
    );
}
