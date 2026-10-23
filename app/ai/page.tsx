"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// Typing Effect Component
function TypingEffect() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [text, setText] = useState("");
  const fullText = "Help me draft a 3-page lesson plan for Grade 4 Mathematics, focusing on fractions.";

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div ref={ref} className="bg-black/50 border border-white/10 rounded-2xl p-6 backdrop-blur-md w-full max-w-lg mx-auto shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-gray-300 font-mono text-sm leading-relaxed min-h-[4rem]">
        <span className="text-cyan">{"> "}</span>
        {text}
        {text.length < fullText.length && <span className="animate-pulse">|</span>}
      </div>
    </div>
  );
}

export default function AIPage() {
  return (
    <main className="min-h-screen bg-[#050B14] text-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION WITH MOVING GRADIENT */}
      <section className="relative pt-32 pb-32 overflow-hidden border-b border-white/5">
        {/* Animated Aurora Background */}
        <div className="absolute inset-0 animate-aurora opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

            {/* Omni Logo */}
            <motion.div variants={fadeUp} className="mb-8 flex justify-center">
              <div className="relative w-24 h-24 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.4)] bg-black/50 p-2 border border-white/10">
                <Image src="/logos/omni.png" alt="Omni AI" fill className="object-contain p-2" />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8 flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-semibold tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
                </span>
                Launching Soon
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-balance">
              Meet <span className="text-quickie-gradient">Omni</span>. <br />
              The AI built into your Studio.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              A general-purpose AI assistant for writing, planning, and explaining. Fast, private, and right where you work.
            </motion.p>

            <motion.div variants={fadeUp} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email for early access"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan transition-colors"
              />
              <button className="rounded-full bg-quickie-gradient px-8 py-4 text-base font-bold text-navy shadow-lg transition-transform hover:scale-105">
                Join Waitlist
              </button>
            </motion.div>
            <motion.p variants={fadeUp} className="text-xs text-gray-500 mt-4">
              No spam. We'll only email you when Omni is ready.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* THE FOUR CAPABILITIES */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Four ways to use Omni.</h2>
            <p className="text-gray-400 text-lg">From a blank page to a finished thought in seconds.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { title: "Explain", desc: "Break down complex topics into simple terms.", icon: "📖" },
              { title: "Write", desc: "Draft emails, reports, and lesson plans effortlessly.", icon: "✍️" },
              { title: "Plan", desc: "Structure your day, your project, or your curriculum.", icon: "📅" },
              { title: "Compare", desc: "Weigh two ideas against each other to make a choice.", icon: "⚖️" }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeUp} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-cyan/30 transition-all cursor-default">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TYPING MOCKUP SECTION */}
      <section className="py-24 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Just type. Omni does the rest.</h2>
            <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
              No complex prompts. Just tell Omni what you need in plain English.
            </p>
          </motion.div>

          <TypingEffect />

        </div>
      </section>

      {/* PRIVACY SECTION */}
      <section className="py-24 border-t border-white/5 bg-[#020408]">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="w-16 h-16 mx-auto bg-cyan/10 rounded-2xl flex items-center justify-center text-3xl mb-8">🔒</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Your data is yours. Period.</h2>
            <p className="text-gray-400 text-lg">
              We do not train Omni on your personal documents, chats, or business data. It is a tool that works for you, not a data harvester that works for us.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}