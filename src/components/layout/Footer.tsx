import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, Globe, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 bg-black pt-20 pb-10 border-t border-white/10 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Section 1: About */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white relative inline-block">
                            About Sparkitt
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            We are a leading technology company committed to delivering innovative solutions and exceptional services to our clients worldwide.
                        </p>
                    </div>

                    {/* Section 2: Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Services", href: "/services" },
                                { name: "Case Study", href: "/case-study" },
                                { name: "Company Profile", href: "/profile" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center text-gray-400 hover:text-primary transition-colors group"
                                    >
                                        <ArrowRight size={16} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Section 3: Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-gray-400">
                                <Phone size={20} className="text-primary mt-1 shrink-0" />
                                <span>+962 789719248</span>
                            </li>
                            <li className="flex items-start gap-4 text-gray-400">
                                <Mail size={20} className="text-primary mt-1 shrink-0" />
                                <span>growth@sparkitt.info</span>
                            </li>
                            <li className="flex items-start gap-4 text-gray-400">
                                <Globe size={20} className="text-primary mt-1 shrink-0" />
                                <span>www.sparkitt.info</span>
                            </li>
                            <li className="flex items-start gap-4 text-gray-400">
                                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                                <span>Jordan, Amman</span>
                            </li>
                        </ul>
                    </div>

                    {/* Section 4: Social & Book */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white">Social Media</h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { icon: Facebook, href: "https://web.facebook.com/profile.php?id=61567060547596", label: "Facebook" },
                                    { icon: Twitter, href: "https://twitter.com/Sparkittjo", label: "Twitter" },
                                    { icon: Linkedin, href: "https://www.linkedin.com/company/sparkitt", label: "LinkedIn" },
                                    { icon: Instagram, href: "https://www.instagram.com/sparkitt.jo/", label: "Instagram" }
                                ].map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-primary/20 hover:border-primary hover:text-primary transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={16} />
                                        <span>{social.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                            <h4 className="text-white font-semibold mb-3">Ready to start?</h4>
                            <Link
                                href="/book-demo"
                                className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-primary to-[#ff6b35] text-white rounded-lg font-bold transition-all hover:shadow-[0_0_20px_rgba(255,65,0,0.4)] hover:-translate-y-1"
                            >
                                Book Free Demo
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                    <p>&copy; {currentYear} Sparkitt. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
