"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export function FlagshipBlocks() {
  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        {/* PINKAS - Flagship 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1 text-left">
            <div className="inline-flex items-center rounded-full bg-navy/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy mb-6">
              The Session Engine
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
              Presence tracking for the real world.
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Pinkas handles schools, symposiums, bootcamps, and hotels. Recurring sessions, custom master sheets, and QR badge scanning. The most flexible tool in the Studio.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/business" className="inline-flex items-center gap-2 rounded-full bg-quickie-gradient px-6 py-3 text-sm font-bold text-navy shadow-md transition-transform hover:scale-105">
                Explore Pinkas <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="text-sm font-semibold text-gray-400">From ₦35,000/mo</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1 w-full">
            <div className="relative rounded-2xl border border-gray-200 bg-gray-50 p-2 shadow-2xl">
              <Image src="/screenshots/pinkas-desktop.png" alt="Pinkas Dashboard" width={1200} height={800} className="rounded-xl w-full h-auto" />
            </div>
          </motion.div>
        </div>

        {/* CLOCKIT - Flagship 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1 text-left">
            <div className="inline-flex items-center rounded-full bg-navy/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy mb-6">
              The Workforce Engine
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
              Workforce attendance and payroll.
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              The twin to Pinkas, built for farms, factories, and hospitals. Shift routing, Face AI anti-buddy-punching, and automated Paystack billing.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/business" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white shadow-md transition-transform hover:scale-105">
                Explore ClockIt <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="text-sm font-semibold text-gray-400">From ₦40,000/mo</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1 w-full">
            <div className="relative rounded-2xl border border-gray-200 bg-gray-50 p-2 shadow-2xl">
              <Image src="/screenshots/clockit-desktop.png" alt="ClockIt Dashboard" width={1200} height={800} className="rounded-xl w-full h-auto" />
            </div>
          </motion.div>
        </div>

        {/* QUICKIE CHAT - Flagship 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1 text-left flex flex-col justify-center">
            <div className="inline-flex items-center rounded-full bg-navy/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy mb-6 w-fit">
              The Communication Engine
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
              Instant, private messaging.
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              No emails. No spam. Just your phone number and a secure PIN. Send voice notes, media, and real-time messages with a stunning UI.
            </p>

            <div className="flex items-center gap-4 mb-12">
              <Link href="/chat" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white shadow-md transition-transform hover:scale-105">
                Explore Quickie Chat <ArrowUpRight className="w-4 h-4" />
              </Link>
              <span className="text-sm font-semibold text-gray-400">Free forever</span>
            </div>

            <div className="hidden lg:flex flex-col items-start gap-4">
              <p className="text-sm font-bold text-navy uppercase tracking-wider">
                No sign-up forms. Just your phone number and a PIN.
              </p>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="relative w-[260px] h-[520px] bg-white rounded-[2.5rem] border-[8px] border-gray-200 shadow-2xl overflow-hidden">
                <Image src="/screenshots/signup-mobile-light.png" alt="Quickie Chat Login" fill className="object-cover" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden">
              <Image src="/screenshots/chat-mobile-dark.png" alt="Quickie Chat" fill className="object-cover" />
            </div>
          </motion.div>

        </div>

        {/* OMNI AI - Flagship 4 (Dark Mode Banner) */}
        <div className="relative rounded-[3rem] bg-[#050B14] text-white p-8 md:p-16 overflow-hidden">
          {/* Aurora Gradient Background */}
          <div className="absolute inset-0 animate-aurora opacity-20 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1 text-left">
              <div className="inline-flex items-center rounded-full bg-cyan/10 border border-cyan/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan mb-6">
                The AI Engine
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
                Meet Omni. The AI built into your Studio.
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                A general-purpose AI assistant for writing, planning, and explaining. Fast, private, and right where you work. No app store required.
              </p>

              <div className="flex items-center gap-4">
                <Link href="https://omni-ai.up.railway.app" target="_blank" className="inline-flex items-center gap-2 rounded-full bg-quickie-gradient px-6 py-3 text-sm font-bold text-navy shadow-md transition-transform hover:scale-105">
                  Launch Omni <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/ai" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
                  Learn more →
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, type: "spring", bounce: 0.2 }} className="flex-1 w-full flex justify-center lg:justify-end">
              <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-[0_0_40px_rgba(0,229,255,0.2)] overflow-hidden">
                <Image src="/screenshots/omni-chat-mobile.png" alt="Omni AI Chat" fill className="object-cover" />
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}