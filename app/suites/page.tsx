"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { apps } from "@/lib/apps";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

export default function AllAppsPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION WITH FULL WIDTH IMAGE */}
      <section className="relative pt-32 pb-32 bg-navy text-white overflow-hidden min-h-[70vh] flex items-center">

        {/* Background Image Wrapper */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/screenshots/apps-hero.jpg"
            alt="Quickie Studio Creator"
            fill
            className="object-cover object-[70%_center] md:object-center"
            priority
          />
          {/* The Gradient Overlays */}
          {/* Mobile: Solid Navy on top fading to transparent at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-transparent md:hidden"></div>
          {/* Desktop: Solid Navy on left fading to transparent on right */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>
        </div>

        {/* Text Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl text-left">

            <motion.div variants={fadeUp} className="mb-6 md:mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-white">
              <span className="flex h-2 w-2 rounded-full bg-cyan mr-2 animate-pulse"></span>
              The Studio Directory
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 text-balance">
              One Studio. Endless Possibilities.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 mb-10 text-balance">
              From checking in students to recording your next big video, explore the 12 tools that power your work. Built for creators, schools, and teams.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="#directory"
                className="w-full sm:w-auto rounded-full bg-quickie-gradient px-8 py-4 text-base font-bold text-navy shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl text-center"
              >
                Explore All Apps ↓
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* APP DIRECTORY GRID */}
      <section id="directory" className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-4">Every app in the Studio.</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Click any app to open it instantly. Free tools and enterprise solutions all in one place.</p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {apps.map((app) => (
              <motion.div
                key={app.slug}
                variants={fadeUp}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-cyan/40 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={`/logos/${app.slug}.png`}
                    alt={app.name}
                    width={40}
                    height={40}
                    className="rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-navy">{app.name}</h2>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{app.suite}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2 flex-grow">{app.tagline}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-md ${app.pricing === "paid"
                        ? "bg-navy/5 text-navy"
                        : "bg-green-100 text-green-700"
                      }`}
                  >
                    {app.pricing === "paid" ? "Paid" : "Free"}
                  </span>
                  {app.status === "live" ? (
                    <Link
                      href={app.url || "#"}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-sm font-medium text-cyan hover:text-navy transition-colors"
                    >
                      Open App <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span className="text-xs font-medium text-gray-400">
                      Coming Soon
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}