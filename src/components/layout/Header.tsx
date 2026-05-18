"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Pillars", href: "/pillars" },
        { name: "Technology", href: "/technology" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Process", href: "/process" },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "py-2 bg-black/80 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-black/50"
                        : "py-6 bg-transparent"
                )}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 group">
                        <div className="relative h-20 w-48 md:h-28 md:w-72 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/media/images/logo.avif"
                                alt="Sparkitt Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-white font-medium text-sm lg:text-base transition-colors hover:text-primary group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}

                        <Link
                            href="/book-demo"
                            className="px-6 py-2.5 bg-primary text-white rounded-full font-bold text-sm transition-all duration-300 hover:bg-white hover:text-primary shadow-[0_0_20px_rgba(255,65,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:-translate-y-0.5"
                        >
                            Book For Free Demo
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden relative z-50 p-2 text-white hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col justify-center items-center"
                    >
                        <nav className="flex flex-col items-center gap-8 w-full px-4">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-2xl font-bold text-white hover:text-primary transition-colors block py-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="w-full max-w-xs mt-4"
                            >
                                <Link
                                    href="/book-demo"
                                    className="block w-full py-4 bg-primary text-white text-center rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-[0_0_20px_rgba(255,65,0,0.4)]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Book For Free Demo
                                </Link>
                            </motion.div>
                        </nav>

                        {/* Background decorative elements */}
                        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-sparkitt-cyan/10 rounded-full blur-[100px] pointer-events-none" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
