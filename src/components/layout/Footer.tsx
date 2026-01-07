"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/5">
            <div className="section-container">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12 border-b border-white/5 pb-20">
                    {/* Brand */}
                    <div className="col-span-2 space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-brand rounded-sm flex items-center justify-center">
                                <span className="text-black font-black text-xs leading-none">O</span>
                            </div>
                            <span className="text-white font-bold text-xl tracking-tighter uppercase">Orbii</span>
                        </Link>
                        <p className="text-secondary/60 text-sm leading-relaxed max-w-xs">
                            Orbii is building the unified infrastructure to launch, manage, and scale the next generation of credit products.
                        </p>
                    </div>

                    {/* Columns */}
                    <div className="space-y-6">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground">Platform</h4>
                        <ul className="space-y-4 text-sm text-secondary hover:text-white">
                            <li><Link href="#" className="hover:text-brand transition-colors">Infrastructure</Link></li>
                            <li><Link href="#" className="hover:text-brand transition-colors">Intelligence</Link></li>
                            <li><Link href="#" className="hover:text-brand transition-colors">Decisioning</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground">Company</h4>
                        <ul className="space-y-4 text-sm text-secondary">
                            <li><Link href="#" className="hover:text-brand transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-brand transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-brand transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground">Social</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="text-secondary hover:text-brand transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="text-secondary hover:text-brand transition-colors"><Github size={20} /></Link>
                            <Link href="#" className="text-secondary hover:text-brand transition-colors"><Linkedin size={20} /></Link>
                        </div>
                    </div>
                </div>

                <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/40">
                    <div>© 2026 Orbii Inc. All rights reserved.</div>
                    <div className="flex gap-10">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
