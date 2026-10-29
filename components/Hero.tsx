"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { totalApps, liveApps, comingSoonApps } from "@/lib/apps";

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
    <section className="relative overflow-hidden bg-navy pt-24 pb-32 min-h-[85vh] flex items-center">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/screenshots/hero-background.jpg"
          alt="Quickie Studio User"
          fill
          className="object-cover object-right md:object-center"
          priority
        />
        {/* The Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>
      </div>

      {/* Text Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl text-left">

          {/* Eyebrow Badge */}
          <motion.div variants={fadeUp} className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-white">
            <span className="flex h-2 w-2 rounded-full bg-green mr-2 animate-pulse"></span>
            {liveApps} Live today. {comingSoonApps} shipping soon.
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={fadeUp} className="text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl mb-6 text-balance">
            One Studio. {totalApps} tools. Built for the way you work.
          </motion.h1>

          {/* Subhead */}
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 mb-10 text-balance">
            From enterprise attendance kiosks and payroll for your school or business, to private AI and everyday tools. Start with a 7-day free trial.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/business"
              className="w-full sm:w-auto rounded-full bg-quickie-gradient px-8 py-4 text-base font-bold text-navy shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              Explore Business Tools
            </Link>
            <Link
              href="/suites"
              className="w-full sm:w-auto rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/20"
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