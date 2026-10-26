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
        <div className="flex flex-col lg:flex-row items-center gap-16">

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

            {/* New Caption + Light Mode Phone below main text */}
            <div className="hidden lg:flex flex-col items-start gap-4">
              <p className="text-sm font-bold text-navy uppercase tracking-wider">
                No sign-up forms. Just your phone number and a PIN.
              </p>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="relative w-[260px] h-[520px] bg-white rounded-[2.5rem] border-[8px] border-gray-200 shadow-2xl overflow-hidden">
                <Image src="/screenshots/chat-mobile-light.png" alt="Quickie Chat Login" fill className="object-cover" />
              </motion.div>
            </div>
          </motion.div>

          {/* Dark Mode Phone on the right */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden">
              <Image src="/screenshots/chat-mobile-dark.png" alt="Quickie Chat" fill className="object-cover" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}