"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
                            Let's Talk <span className="text-primary text-glow">Science</span>
                        </h1>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                            Ready to understand your customers with 95%+ accuracy? Reach out to schedule a demo or consultation.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="glass-panel p-8 rounded-2xl border-white/5 flex items-start gap-6 hover:border-sparkitt-cyan/30 transition-colors group">
                            <div className="p-4 bg-white/5 rounded-xl group-hover:bg-sparkitt-cyan/10 transition-colors">
                                <Phone className="w-8 h-8 text-sparkitt-cyan" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-heading mb-2">Call Us</h3>
                                <p className="text-gray-400 text-lg">+962 789719248</p>
                            </div>
                        </div>

                        <div className="glass-panel p-8 rounded-2xl border-white/5 flex items-start gap-6 hover:border-primary/30 transition-colors group">
                            <div className="p-4 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors">
                                <Mail className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-heading mb-2">Email</h3>
                                <p className="text-gray-400 text-lg">growth@sparkitt.info</p>
                            </div>
                        </div>

                        <div className="glass-panel p-8 rounded-2xl border-white/5 flex items-start gap-6 hover:border-white/30 transition-colors group">
                            <div className="p-4 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold font-heading mb-2">Location</h3>
                                <p className="text-gray-400 text-lg">Amman, Jordan</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="glass-panel p-10 rounded-3xl border-white/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
                        
                        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">First Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Last Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Email Address</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Message</label>
                                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" />
                            </div>
                            <button className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg btn-glow hover:bg-white hover:text-primary transition-colors">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
