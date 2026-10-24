"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
              <Link href="/business" className="rounded-full bg-quickie-gradient px-6 py-3 text-sm font-bold text-navy shadow-md transition-transform hover:scale-105">
                Explore Pinkas ↗
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
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
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
              <Link href="/business" className="rounded-full bg-navy px-6 py-3 text-sm font-bold text-white shadow-md transition-transform hover:scale-105">
                Explore ClockIt ↗
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

      </div>
    </section>
  );
}