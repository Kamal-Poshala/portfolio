"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full text-center"
      >
        <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium inline-block mb-6">
          Get in Touch
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Let's Build Something <span className="text-primary">Scalable</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          I am currently open to full-time Software Engineering roles (Backend / Full-Stack / ML Systems).
          Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Email Card */}
          <a
            href="mailto:kamalposhala.cs@gmail.com"
            className="group p-8 rounded-2xl bg-card border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col items-center gap-4"
          >
            <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-white">Email Me</h3>
            <p className="text-gray-400 group-hover:text-primary transition-colors">kamalposhala.cs@gmail.com</p>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/kamal-poshala-6431611a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl bg-card border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col items-center gap-4"
          >
            <div className="p-4 rounded-full bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Linkedin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-white">Connect on LinkedIn</h3>
            <p className="text-gray-400 group-hover:text-blue-500 transition-colors">Kamal Poshala</p>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/Kamal-Poshala"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl bg-card border border-white/10 hover:border-gray-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-500/10 flex flex-col items-center gap-4 md:col-span-2"
          >
            <div className="p-4 rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-colors">
              <Github className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-white">Check my Code</h3>
            <p className="text-gray-400">github.com/Kamal-Poshala</p>
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-2 text-gray-500">
          <MapPin className="w-4 h-4" />
          <span>Based in Norman, Oklahoma • Open to Relocation</span>
        </div>
      </motion.div>
    </section>
  );
}
