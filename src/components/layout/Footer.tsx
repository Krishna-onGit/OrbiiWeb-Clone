import { Twitter, Github, Linkedin, ShieldCheck } from "lucide-react";
import InertLink from "@/components/ui/InertLink";

const columns = [
    {
        title: "Products",
        links: [
            "Health Insurance",
            "Life Insurance",
            "Motor Insurance",
            "Investment Plans",
            "Home Insurance",
            "Pet Insurance",
            "Cyber Insurance",
            "Travel Insurance",
            "Commercial Insurance",
            "For Insurers",
        ],
    },
    {
        title: "Calculators",
        links: [
            "All Calculators",
            "Premium Calculator",
            "1 Crore Term Plan",
            "Dynamic Pricing",
            "SIP Calculator",
            "Income Tax",
            "Retirement Planner",
        ],
    },
    {
        title: "Support",
        links: [
            "Claim Assistance",
            "Partner with Us",
            "Network Hospitals",
            "Tech Support",
            "Help Center",
            "Downloads",
        ],
    },
    {
        title: "Legal",
        links: [
            "Privacy Policy",
            "Terms of Service",
            "Cookie Policy",
            "Fraud Disclaimer",
            "IRDAI License",
            "Public Disclosures",
            "Cyber Security",
            "Sitemap",
        ],
    },
];

const socials = [
    { icon: Twitter, label: "Twitter" },
    { icon: Github, label: "GitHub" },
    { icon: Linkedin, label: "LinkedIn" },
];

const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/5 bg-black">
            <div className="section-container">
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 border-b border-white/5 pb-20">
                    {/* Brand */}
                    <div className="col-span-2 space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-brand rounded-sm flex items-center justify-center">
                                <ShieldCheck className="text-black" size={16} strokeWidth={3} />
                            </div>
                            <span className="text-white font-bold text-xl tracking-tighter uppercase">Insurely</span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs font-light">
                            Insurely is at the forefront of insurance innovation, leveraging AI to simplify the
                            insurance journey for millions.
                        </p>
                    </div>

                    {/* Columns */}
                    {columns.map((column) => (
                        <div key={column.title} className="space-y-6">
                            {/* `!` beats the global `h1-h6 { font-weight: 100 !important }`,
                                which would otherwise render these headings hairline-thin. */}
                            <h4 className="text-[11px] !font-black uppercase tracking-[0.2em] text-white">
                                {column.title}
                            </h4>
                            <ul className="space-y-2.5 text-sm text-white/70 font-light">
                                {column.links.map((link) => (
                                    <li key={link}>
                                        <InertLink className="hover:text-brand transition-colors cursor-pointer">
                                            {link}
                                        </InertLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
                    <div>© 2026 Insurely Inc. All rights reserved. Registered IRDAI Agent.</div>
                    <div className="flex gap-4">
                        {socials.map((social) => (
                            <InertLink
                                key={social.label}
                                aria-label={social.label}
                                className="text-white/45 hover:text-brand transition-colors cursor-pointer"
                            >
                                <social.icon size={18} />
                            </InertLink>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
