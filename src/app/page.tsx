"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import ProblemStats from "@/components/home/ProblemStats";
import PillarsPreview from "@/components/home/PillarsPreview";
import TechTeaser from "@/components/home/TechTeaser";
import ClientsList from "@/components/home/ClientsList";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ProblemStats />
      <PillarsPreview />
      <TechTeaser />
      <ClientsList />
      
      {/* Premium CTA Section at the bottom */}
      <section className="py-40 bg-[#050505] text-center relative overflow-hidden border-t border-white/5">
          {/* Animated Background Lights */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,65,0,0.12)_0%,rgba(0,240,255,0.02)_50%,transparent_100%)] pointer-events-none" />
          
          {/* Breathing Glow Orbs */}
          <motion.div 
              animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"
          />

          <div className="container mx-auto px-4 relative z-10">
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl mx-auto space-y-8"
              >
                  <span className="text-sparkitt-cyan uppercase tracking-[0.25em] text-sm font-bold block">Get Started</span>
                  <h2 className="text-5xl md:text-7xl font-black font-heading text-white tracking-tight leading-none">
                      Ready to Decode the <br/> 
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-sparkitt-cyan">Subconscious?</span>
                  </h2>
                  <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto font-sans leading-relaxed">
                      Schedule a custom, data-backed demonstration of our neuromarketing and psychological research lab capabilities.
                  </p>
                  
                  <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-block pt-4"
                  >
                      <Link href="/book-demo" className="inline-block px-12 py-5 bg-gradient-to-r from-primary to-[#ff6000] text-white rounded-full font-bold text-lg tracking-wider uppercase transition-all shadow-[0_0_30px_rgba(255,65,0,0.3)] hover:shadow-[0_0_50px_rgba(255,65,0,0.5)]">
                          Book Your Free Demo
                      </Link>
                  </motion.div>
              </motion.div>
          </div>
      </section>
    </div>
  );
}
