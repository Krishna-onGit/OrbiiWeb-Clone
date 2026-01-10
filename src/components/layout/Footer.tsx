"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin, ShieldCheck } from "lucide-react";
import { ROUTES } from "@/config/routes";

const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/5 bg-black">
            <div className="section-container">
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 border-b border-white/5 pb-20">
                    {/* Brand */}
                    <div className="col-span-2 space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-brand rounded-sm flex items-center justify-center">
                                <ShieldCheck className="text-black" size={16} strokeWidth={3} />
                            </div>
                            <span className="text-white font-bold text-xl tracking-tighter uppercase">Vioratech</span>
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs font-thin">
                            Vioratech is at the forefront of insurance innovation, leveraging AI to simplify the insurance journey for millions.
                        </p>
                    </div>

                    {/* Columns */}
                    <div className="space-y-6">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white">Products</h4>
                        <ul className="space-y-2 text-sm text-white/40 font-thin">
                            <li><Link href={ROUTES.insurance.health} className="hover:text-brand transition-colors">Health Insurance</Link></li>
                            <li><Link href={ROUTES.insurance.term} className="hover:text-brand transition-colors">Life Insurance</Link></li>
                            <li><Link href={ROUTES.insurance.car} className="hover:text-brand transition-colors">Motor Insurance</Link></li>
                            <li><Link href={ROUTES.insurance.investment} className="hover:text-brand transition-colors">Investment Plans</Link></li>
                            <li><Link href={ROUTES.insurance.other} className="hover:text-brand transition-colors">Home Insurance</Link></li>
                            <li><Link href={ROUTES.insurance.other} className="hover:text-brand transition-colors">Pet Insurance</Link></li>
                            <li><Link href={ROUTES.insurance.other} className="hover:text-brand transition-colors">Cyber Insurance</Link></li>
                            <li><Link href={ROUTES.insurance.other} className="hover:text-brand transition-colors">Travel Insurance</Link></li>
                            <li><Link href={ROUTES.business.insurers} className="hover:text-brand transition-colors">Commercial Insurance</Link></li>
                            <li><Link href={ROUTES.business.insurers} className="hover:text-brand transition-colors">For Insurers</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white">Calculators</h4>
                        <ul className="space-y-2 text-sm text-white/40 font-thin">
                            <li><Link href={ROUTES.calculators.hub} className="hover:text-brand transition-colors">All Calculators</Link></li>
                            <li><Link href={ROUTES.calculators.premium} className="hover:text-brand transition-colors">Premium Calculator</Link></li>
                            <li><Link href={ROUTES.insurance.oneCroreTerm} className="hover:text-brand transition-colors">1 Crore Term Plan</Link></li>
                            <li><Link href={ROUTES.tools.dynamicPricing} className="hover:text-brand transition-colors">Dynamic Pricing</Link></li>
                            <li><Link href={ROUTES.insurance.investment} className="hover:text-brand transition-colors">SIP Calculator</Link></li>
                            <li><Link href={ROUTES.calculators.hub} className="hover:text-brand transition-colors">Income Tax</Link></li>
                            <li><Link href={ROUTES.calculators.hub} className="hover:text-brand transition-colors">Retirement Planner</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white">Support</h4>
                        <ul className="space-y-2 text-sm text-white/40 font-thin">
                            <li><Link href={ROUTES.insurance.health} className="hover:text-brand transition-colors">Claim Assistance</Link></li>
                            <li><Link href={ROUTES.business.insurers} className="hover:text-brand transition-colors">Partner with Us</Link></li>
                            <li><Link href={ROUTES.insurance.health} className="hover:text-brand transition-colors">Network Hospitals</Link></li>
                            <li><Link href={ROUTES.tech.actuarial} className="hover:text-brand transition-colors">Tech Support</Link></li>
                            <li><Link href="#" className="hover:text-brand transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-brand transition-colors">Downloads</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white">Legal</h4>
                        <ul className="space-y-2 text-sm text-white/40 font-thin">
                            <li><Link href="#" className="hover:text-brand transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-brand transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-brand transition-colors">Cookie Policy</Link></li>
                            <li><Link href="#" className="hover:text-brand transition-colors">Fraud Disclaimer</Link></li>
                            <li><Link href="#" className="hover:text-brand transition-colors">IRDAI License</Link></li>
                            <li><Link href="#" className="hover:text-brand transition-colors">Public Disclosures</Link></li>
                            <li><Link href="#" className="hover:text-brand transition-colors">Cyber Security</Link></li>
                            <li><Link href="#" className="hover:text-brand transition-colors">Sitemap</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white/20">
                    <div>© 2026 Vioratech Inc. All rights reserved. Registered IRDAI Agent.</div>
                    <div className="flex gap-4">
                        <Link href="#" className="text-white/20 hover:text-brand transition-colors"><Twitter size={18} /></Link>
                        <Link href="#" className="text-white/20 hover:text-brand transition-colors"><Github size={18} /></Link>
                        <Link href="#" className="text-white/20 hover:text-brand transition-colors"><Linkedin size={18} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
