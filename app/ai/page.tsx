"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, PenTool, Calendar, Scale, Sparkles, ArrowUp, Lock, ArrowUpRight } from "lucide-react";
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

// Typing Effect Component for Hero
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

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 animate-aurora opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

            {/* Omni Logo */}
            <motion.div variants={fadeUp} className="mb-8 flex justify-center">
              <div className="relative w-28 h-28 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan to-green opacity-30 blur-2xl rounded-full"></div>
                <div className="relative w-full h-full drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]">
                  <Image src="/logos/omni.png" alt="Omni AI" fill className="object-contain" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8 flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-semibold tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
                </span>
                Omni is Live
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-balance">
              Meet <span className="text-quickie-gradient">Omni</span>. <br />
              The AI built into your Studio.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              A general-purpose AI assistant for writing, planning, and explaining. Fast, private, and right where you work.
            </motion.p>

            <motion.div variants={fadeUp} className="flex justify-center">
              <Link href="https://omni.quickie-studio.com" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-full bg-quickie-gradient px-10 py-4 text-lg font-bold text-navy shadow-lg transition-transform hover:scale-105">
                Launch Omni <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TYPING MOCKUP SECTION */}
      <section className="py-24 relative overflow-hidden">
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

      {/* NEW: MOBILE SCREENSHOTS SECTION */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Omni in your pocket.</h2>
            <p className="text-gray-400 text-lg">A fast, private AI assistant that lives right in your browser. No app store required.</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Left Phone */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-[0_0_40px_rgba(0,229,255,0.15)] overflow-hidden"
            >
              <Image src="/screenshots/omni-home-mobile.png" alt="Omni Home Screen" fill className="object-cover" />
            </motion.div>

            {/* Right Phone */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.2 }}
              className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-[0_0_40px_rgba(0,229,255,0.15)] overflow-hidden"
            >
              <Image src="/screenshots/omni-chat-mobile.png" alt="Omni Chat Screen" fill className="object-cover" />
            </motion.div>
          </div>
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
              { title: "Explain", desc: "Break down complex topics into simple terms.", icon: <BookOpen className="w-8 h-8 text-cyan" /> },
              { title: "Write", desc: "Draft emails, reports, and lesson plans effortlessly.", icon: <PenTool className="w-8 h-8 text-cyan" /> },
              { title: "Plan", desc: "Structure your day, your project, or your curriculum.", icon: <Calendar className="w-8 h-8 text-cyan" /> },
              { title: "Compare", desc: "Weigh two ideas against each other to make a choice.", icon: <Scale className="w-8 h-8 text-cyan" /> }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeUp} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-cyan/30 transition-all cursor-default">
                <div className="mb-4 group-hover:scale-110 transition-transform origin-left">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PRIVACY SECTION */}
      <section className="py-24 border-t border-white/5 bg-[#020408]">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="w-16 h-16 mx-auto bg-cyan/10 rounded-2xl flex items-center justify-center mb-8">
              <Lock className="w-8 h-8 text-cyan" />
            </div>
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