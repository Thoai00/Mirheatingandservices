import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0e2a45] text-white pt-20 pb-12 border-t border-white/5">
            <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                
                {/* --- LOGO & DESCRIPTION --- */}
                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div className="relative w-40 h-16">
                        <Link href="/">
                            <Image src="/log.png" alt="MIR Logo" fill className="object-contain brightness-0 invert cursor-pointer" />
                        </Link>
                    </div>
                    <p className="text-blue-200/50 max-w-sm leading-relaxed">
                        Setting the gold standard in heating, drainage, and plumbing services across the region. Gas Safe registered and fully insured UK company.
                    </p>
                </div>

                {/* --- SERVICES NAVIGATION --- */}
                <div>
                    <h4 className="text-[#F2CF51] font-bold uppercase tracking-widest mb-6">Services</h4>
                    <ul className="space-y-4 text-blue-200/70">
                        <li>
                            <Link href="/services/gas-services" className="hover:text-white cursor-pointer transition-colors">
                                Gas Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/plumbing-services" className="hover:text-white cursor-pointer transition-colors">
                                Plumbing Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/heating-services" className="hover:text-white cursor-pointer transition-colors">
                                Heating Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/home-improvement" className="hover:text-white cursor-pointer transition-colors">
                                Home Improvement
                            </Link>
                        </li>
                        <li>
                            <Link href="/our-work" className="hover:text-white cursor-pointer transition-colors">
                                Our Portfolio
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* --- CONTACT INFO --- */}
                <div>
                    <h4 className="text-[#F2CF51] font-bold uppercase tracking-widest mb-6">Contact</h4>
                    <ul className="space-y-4 text-blue-200/70">
                        {/* Location Icon Removed */}
                        <li className="flex items-start gap-3">
                            123 Industrial Park, Essex, UK
                        </li>
                        <li className="flex items-start gap-3">
                            
                            <a href="tel:07771119401" className="hover:text-white">0777 111 9401</a>
                        </li>
                        <li className="flex items-start gap-3">
                            
                            <a href="mailto:info@mirplumbing.com" className="hover:text-white">info@mirplumbing.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* --- COPYRIGHT & CREDIT --- */}
            <div className="border-t border-white/5 pt-8 mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200/40 gap-4">
                <p>&copy; {new Date().getFullYear()} MIR Plumbing & Heating Ltd. All rights reserved.</p>
                
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                    <p>UK Registered Company.</p>
                    <span className="hidden md:block w-1 h-1 rounded-full bg-white/20"></span>
                    <p>
                        Designed by <span className="text-[#F2CF51] font-bold">Aefoniq</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}