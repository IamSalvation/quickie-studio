"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

          {/* Eyebrow Badge */}
          <motion.div variants={fadeUp} className="mb-8 inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-600">
            <span className="flex h-2 w-2 rounded-full bg-green mr-2 animate-pulse"></span>
            7 Live today. 2 shipping soon.
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={fadeUp} className="text-4xl font-extrabold tracking-tight text-navy md:text-6xl lg:text-7xl mb-6 text-balance">
            One Studio. Nine tools. Built for the way you work.
          </motion.h1>

          {/* Subhead */}
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto text-balance">
            From enterprise attendance kiosks and payroll for your school or business, to private AI and everyday tools. Start with a 7-day free trial.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/business"
              className="w-full sm:w-auto rounded-full bg-quickie-gradient px-8 py-4 text-base font-bold text-navy shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Business Tools
            </Link>
            <Link
              href="/suites"
              className="w-full sm:w-auto rounded-full border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-navy transition-colors hover:bg-gray-50"
            >
              View all apps
            </Link>
          </motion.div>

          {/* Built in Lagos Note */}
          <motion.p variants={fadeUp} className="mt-8 text-sm font-medium text-gray-400">
            Built in Lagos, Nigeria 🇳🇬
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
}