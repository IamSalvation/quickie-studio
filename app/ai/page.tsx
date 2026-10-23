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

      {/* HERO SECTION WITH MOVING GRADIENT */}
      <section className="relative pt-32 pb-32 overflow-hidden border-b border-white/5">
        {/* Animated Aurora Background */}
        <div className="absolute inset-0 animate-aurora opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

            {/* Omni Logo - Glowing, No Background Container */}
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

            <motion.div variants={fadeUp} className="max-w-md mx-auto">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="flex flex-col sm:flex-row gap-3"
              >
                {/* REPLACE YOUR_ACCESS_KEY_HERE WITH YOUR ACTUAL WEB3FORMS KEY */}
                <input type="hidden" name="access_key" value="3b38af5f-b00b-44e0-aa7b-d06c284c5fa8" />
                <input type="hidden" name="subject" value="New Omni Waitlist Signup!" />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email for early access"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan transition-colors"
                />
                <button
                  type="submit"
                  className="rounded-full bg-quickie-gradient px-8 py-4 text-base font-bold text-navy shadow-lg transition-transform hover:scale-105"
                >
                  Join Waitlist
                </button>
              </form>
            </motion.div>
            <motion.p variants={fadeUp} className="text-xs text-gray-500 mt-4">
              No spam. We'll only email you when Omni is ready.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* GENERAL AI CHAT MOCKUP SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">A conversation with Omni.</h2>
            <p className="text-gray-400 text-lg">Here is how it feels to work with an AI that understands exactly what you need.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-[#0A101D] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl"
          >
            {/* User Message */}
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0 text-white font-bold border border-white/10">
                JO
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-4 text-gray-200 text-sm">
                I need to launch a new product next month. Can you outline a 3-step marketing plan and draft a short email announcing it to my customers?
              </div>
            </div>

            {/* Omni Message */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-quickie-gradient flex items-center justify-center flex-shrink-0 text-navy font-bold">
                ✨
              </div>
              <div className="bg-cyan/10 border border-cyan/20 rounded-2xl rounded-tl-sm p-4 text-gray-200 text-sm w-full">
                <p className="mb-4 text-white font-semibold">Here is your 3-step launch plan:</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <strong className="text-cyan">1. Teaser Phase (Week 1-2)</strong>
                    <p className="text-gray-400 text-xs mt-1">Build anticipation. Post behind-the-scenes content and collect emails for early access.</p>
                  </div>
                  <div>
                    <strong className="text-cyan">2. Launch Day (Week 3)</strong>
                    <p className="text-gray-400 text-xs mt-1">Release the product, host a live Q&A, and offer a 48-hour launch discount.</p>
                  </div>
                  <div>
                    <strong className="text-cyan">3. Follow-up (Week 4)</strong>
                    <p className="text-gray-400 text-xs mt-1">Share user testimonials and address common objections to push late adopters.</p>
                  </div>
                </div>

                <div className="bg-black/30 rounded-lg p-3 border border-white/5 mt-4">
                  <p className="text-white font-semibold text-xs mb-1">Drafted Email:</p>
                  <p className="text-gray-400 text-xs italic">
                    "Subject: Something big is coming...<br /><br />
                    Hi [Name], we've been working on something special and couldn't wait to share it with you. Introducing [Product Name], the fastest way to [solve problem]..."
                  </p>
                </div>
              </div>
            </div>

            {/* Fake Input */}
            <div className="mt-8 flex items-center gap-3 bg-black/50 border border-white/10 rounded-full p-2 pl-6">
              <span className="text-gray-500 text-sm flex-grow">Ask Omni to write, plan, or analyze...</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white cursor-pointer hover:bg-white/20 transition-colors">
                ↑
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE FOUR CAPABILITIES */}
      <section className="py-24 relative bg-gradient-to-b from-transparent to-black/20">
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