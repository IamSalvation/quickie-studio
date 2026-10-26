"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 bg-navy text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <span className="px-4 py-1.5 rounded-full bg-white/10 text-sm font-semibold border border-white/20">
                Enterprise Software Agency
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              We build software that <br className="hidden md:block" /> survives the real world.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Offline-first kiosks, AI integrations, and data-saving PWAs. We don't just write code—we solve operational bottlenecks for schools, factories, and startups.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#contact" className="rounded-full bg-quickie-gradient px-8 py-4 text-base font-bold text-navy shadow-lg transition-transform hover:scale-105">
                Start a Project
              </Link>
              <Link href="/business" className="rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/20">
                See Our Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BENTO GRID: INDUSTRIES */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-4">Software for your industry.</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We don't do generic templates. We build tools tailored to the exact realities of your operation.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Education */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-cyan/40 transition-all flex flex-col">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-xl font-bold text-navy mb-2">Education & Schools</h3>
              <p className="text-gray-600 text-sm flex-grow mb-6">Offline exam prep, automated report cards, and Face AI kiosks for tracking student attendance.</p>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan">
                <span>See Proof:</span>
                <Link href="/suites/learn" className="hover:underline">Quickie Prep ↗</Link>
              </div>
            </motion.div>

            {/* Factories */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-cyan/40 transition-all flex flex-col">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-navy mb-2">Factories & Agribusiness</h3>
              <p className="text-gray-600 text-sm flex-grow mb-6">Shift routing, offline biometric clock-ins, payroll multipliers, and union timesheet exports.</p>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan">
                <span>See Proof:</span>
                <Link href="/business#clockit" className="hover:underline">Quickie ClockIt ↗</Link>
              </div>
            </motion.div>

            {/* Healthcare */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-cyan/40 transition-all flex flex-col">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-navy mb-2">Healthcare & Clinics</h3>
              <p className="text-gray-600 text-sm flex-grow mb-6">Doctor shift rotations, patient check-in kiosks, and secure internal messaging platforms.</p>
            </motion.div>

            {/* Hospitality */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-cyan/40 transition-all flex flex-col">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-bold text-navy mb-2">Hospitality & Events</h3>
              <p className="text-gray-600 text-sm flex-grow mb-6">Guest check-in kiosks, room tracking, and high-speed QR badge scanning for symposia.</p>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan">
                <span>See Proof:</span>
                <Link href="/business#pinkas" className="hover:underline">Quickie Pinkas ↗</Link>
              </div>
            </motion.div>

            {/* Startups */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-cyan/40 transition-all flex flex-col">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-navy mb-2">Startups & Tech</h3>
              <p className="text-gray-600 text-sm flex-grow mb-6">Data-saving WebRTC calling, high-performance PWAs, and custom media players.</p>
            </motion.div>

            {/* HR & Enterprise */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-cyan/40 transition-all flex flex-col">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-navy mb-2">Enterprise & HR</h3>
              <p className="text-gray-600 text-sm flex-grow mb-6">Multi-tenant SaaS dashboards, automated payroll exports, and Paystack billing webhooks.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* THE TECH EDGE */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-6">The Aidao/Pinkas Standard.</h2>
            <p className="text-lg text-gray-600 mb-12">When we build for you, we use the exact same tech stack that powers our own products.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <motion.div variants={fadeUp} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-2xl mb-3">📶</div>
              <h4 className="font-bold text-navy mb-2">Offline-First Architecture</h4>
              <p className="text-sm text-gray-600">IndexedDB and Service Workers ensure your app never crashes when the internet drops.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-2xl mb-3">💳</div>
              <h4 className="font-bold text-navy mb-2">Naira-Native Billing</h4>
              <p className="text-sm text-gray-600">Paystack integration with automated webhooks for instant subscription upgrades.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-2xl mb-3">🛡️</div>
              <h4 className="font-bold text-navy mb-2">Face AI & Security</h4>
              <p className="text-sm text-gray-600">128-dimension facial embeddings and NDPR-compliant data handling for kiosks.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-24 bg-navy text-white text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Let's build your next system.</h2>
            <p className="text-xl text-gray-300 mb-12">Contact for a quote. We respond within 24 hours.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://calendar.app.google/EKCqCqgCpuZzuKs58" target="_blank" rel="noreferrer" className="w-full sm:w-auto rounded-full bg-quickie-gradient px-8 py-4 text-base font-bold text-navy shadow-lg transition-transform hover:scale-105">
                Book a Discovery Call
              </a>
              <a href="https://wa.me/2347062547022" target="_blank" rel="noreferrer" className="w-full sm:w-auto rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/20">
                Chat on WhatsApp
              </a>
              <a href="mailto:obiorajoshua@gmail.com" className="w-full sm:w-auto rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/20">
                Send an Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}