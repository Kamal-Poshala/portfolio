"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Inbox, Send, Linkedin, User, MessageSquare } from "lucide-react";
import { TiltCard } from "./Education";

export default function ContactSection() {
    return (
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 pb-12">

            {/* Left Side: Contact Info */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <div>
                    <h3 className="text-2xl font-light text-slate-900 mb-4 tracking-wide uppercase">
                        Let's Connect
                    </h3>
                    <p className="text-slate-600 font-light leading-relaxed">
                        I am currently open to new opportunities, collaborations, and discussions regarding scalable systems and multilingual AI.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    <TiltCard className="flex items-start gap-4 p-4 border border-[#0ea5e9]/20 bg-white/50/80 backdrop-blur-sm rounded-md hover:border-[#0ea5e9]/50 transition-colors">
                        <div className="p-3 bg-slate-50/80 text-[#0ea5e9] rounded-sm">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Email</p>
                            <a href="mailto:kamalposhala.cs@gmail.com" className="text-slate-900 font-medium hover:text-[#0ea5e9] transition-colors truncate block">
                                kamalposhala.cs@gmail.com
                            </a>
                        </div>
                    </TiltCard>

                    <TiltCard className="flex items-start gap-4 p-4 border border-[#0ea5e9]/20 bg-white/50/80 backdrop-blur-sm rounded-md hover:border-[#0ea5e9]/50 transition-colors">
                        <div className="p-3 bg-slate-50/80 text-[#0ea5e9] rounded-sm">
                            <Linkedin className="w-5 h-5" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">LinkedIn</p>
                            <a href="https://www.linkedin.com/in/kamal-poshala-6431611a7/" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-medium hover:text-[#0ea5e9] transition-colors truncate block">
                                kamal-poshala-6431611a7
                            </a>
                        </div>
                    </TiltCard>

                    <TiltCard className="flex items-start gap-4 p-4 border border-[#0ea5e9]/20 bg-white/50/80 backdrop-blur-sm rounded-md hover:border-[#0ea5e9]/50 transition-colors">
                        <div className="p-3 bg-slate-50/80 text-[#0ea5e9] rounded-sm">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Location</p>
                            <p className="text-slate-900 font-medium">Norman, OK</p>
                        </div>
                    </TiltCard>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-2/3">
                <form className="bg-white/50/80 backdrop-blur-sm border border-[#0ea5e9]/20 p-8 shadow-[0_4px_30px_rgba(14,165,233,0.05)] rounded-md flex flex-col gap-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50/80 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-700" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-xs font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <User className="w-3 h-3 text-[#0ea5e9]" /> Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-slate-50/80 border border-[#0ea5e9]/20 px-4 py-3 text-slate-900 font-light focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]/30 transition-all rounded-sm"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-xs font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <Mail className="w-3 h-3 text-[#0ea5e9]" /> Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-slate-50/80 border border-[#0ea5e9]/20 px-4 py-3 text-slate-900 font-light focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]/30 transition-all rounded-sm"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 relative z-10">
                        <label htmlFor="subject" className="text-xs font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                            <Inbox className="w-3 h-3 text-[#0ea5e9]" /> Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full bg-slate-50/80 border border-[#0ea5e9]/20 px-4 py-3 text-slate-900 font-light focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]/30 transition-all rounded-sm"
                            placeholder="Opportunity inquiry"
                        />
                    </div>

                    <div className="flex flex-col gap-2 relative z-10">
                        <label htmlFor="message" className="text-xs font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                            <MessageSquare className="w-3 h-3 text-[#0ea5e9]" /> Message
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full bg-slate-50/80 border border-[#0ea5e9]/20 px-4 py-3 text-slate-900 font-light focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]/30 transition-all resize-none rounded-sm"
                            placeholder="Hello, I would like to discuss..."
                        ></textarea>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative z-10 w-full md:w-auto self-start mt-2 px-8 py-3 bg-[#0ea5e9] text-white font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#0284c7] transition-colors rounded-sm shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                    >
                        <span>Send Transmission</span>
                        <Send className="w-4 h-4" />
                    </motion.button>
                </form>
            </div>

        </div>
    );
}
