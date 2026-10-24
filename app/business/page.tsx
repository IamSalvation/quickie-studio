"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 bg-navy text-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

            {/* Logos */}
            <motion.div variants={fadeUp} className="mb-8 flex justify-center items-center gap-6">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 p-2 backdrop-blur-md">
                <Image src="/logos/pinkas.png" alt="Pinkas" fill className="object-contain p-1" />
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 p-2 backdrop-blur-md">
                <Image src="/logos/clockit.png" alt="ClockIt" fill className="object-contain p-1" />
              </div>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Enterprise Attendance <br className="hidden md:block" /> & Payroll.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Offline-capable kiosks, Face AI verification, and automated Paystack billing. From classrooms to factories, we track who is actually there.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-10">
              <span className="px-4 py-2 rounded-full bg-white/10 text-sm font-semibold border border-white/10">📶 Offline-First</span>
              <span className="px-4 py-2 rounded-full bg-white/10 text-sm font-semibold border border-white/10">🛡️ Face AI</span>
              <span className="px-4 py-2 rounded-full bg-white/10 text-sm font-semibold border border-white/10">💳 Paystack Billing</span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#pinkas" className="rounded-full bg-quickie-gradient px-8 py-4 text-base font-bold text-navy shadow-lg transition-transform hover:scale-105">
                Explore Pinkas
              </Link>
              <Link href="#clockit" className="rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/20">
                Explore ClockIt
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* KILLER FEATURES */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-4">Built for the real world.</h2>
            <p className="text-lg text-gray-600">We solved the hardest problems in African workforce management.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="text-4xl mb-4">📶</div>
              <h3 className="text-xl font-bold text-navy mb-2">Offline-First Kiosks</h3>
              <p className="text-gray-600">Internet drops? The kiosk keeps scanning using IndexedDB queues and syncs to the cloud when the connection returns.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-navy mb-2">Anti-Buddy-Punching</h3>
              <p className="text-gray-600">128-dim Face AI embeddings with NDPR consent. Flags anomalies for review without blocking legitimate workers.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-navy mb-2">Flexible Pay Multipliers</h3>
              <p className="text-gray-600">Weekend pay, holiday rates, and custom overtime rules cascaded automatically. No more spreadsheet math.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-bold text-navy mb-2">Automated Billing</h3>
              <p className="text-gray-600">Paystack subscriptions with instant webhooks. Self-service upgrades from V1 to V2 with zero admin friction.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PINKAS SECTION */}
      <section id="pinkas" className="py-24 bg-gray-50/50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1 order-2 lg:order-1">
              <div className="inline-flex items-center rounded-full bg-navy/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy mb-6">
                The Session Engine
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
                Pinkas: For Schools, Events & Stays.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                A multi-tenant SaaS for session-based tracking. Attendees scan a QR badge at a kiosk. Custom presets adapt to your environment (Classes/Terms for schools, Rooms/Stays for hotels).
              </p>
              <ul className="space-y-3 mb-8 text-gray-700 font-medium">
                <li className="flex items-center gap-3"><span className="text-cyan font-bold text-xl">✓</span> Recurring Sessions (Week 1-15)</li>
                <li className="flex items-center gap-3"><span className="text-cyan font-bold text-xl">✓</span> Manual Master Sheets & Custom Reports</li>
                <li className="flex items-center gap-3"><span className="text-cyan font-bold text-xl">✓</span> Public Parent/Worker Portal</li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/suites/learn" className="rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy/90 transition-colors">
                  See Education Use Case ↗
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1 order-1 lg:order-2 flex justify-center w-full">
              <div className="relative w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl">
                <Image src="/screenshots/pinkas-dashboard.png" alt="Pinkas Dashboard" width={1200} height={800} className="rounded-xl w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLOCKIT SECTION */}
      <section id="clockit" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1 w-full">
              <div className="relative w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl mx-auto">
                <Image src="/screenshots/clockit-workers.png" alt="ClockIt Workers" width={1200} height={800} className="rounded-xl w-full h-auto" />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1">
              <div className="inline-flex items-center rounded-full bg-navy/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy mb-6">
                The Workforce Engine
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
                ClockIt: For Farms, Factories & Teams.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                A complete HR and Payroll platform. Workers clock in via QR and selfie. Admins manage departments, pay streams, and generate one-click payroll exports.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700 font-medium">
                <li className="flex items-center gap-3"><span className="text-green font-bold text-xl">✓</span> Shift Routing & Department Filters</li>
                <li className="flex items-center gap-3"><span className="text-green font-bold text-xl">✓</span> GPS & Geo-location Logging</li>
                <li className="flex items-center gap-3"><span className="text-green font-bold text-xl">✓</span> One-click Payroll CSV Export</li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/suites/money" className="rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy/90 transition-colors">
                  See Business Use Case ↗
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRICING & TRIAL */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Transparent Enterprise Pricing.</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Paystack billing. No hidden fees. Built for scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pinkas Pricing */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">Pinkas</h3>
              <p className="text-gray-400 mb-6 text-sm">Presence tracking for sessions.</p>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span>V1 Basic</span>
                  <span className="font-bold">₦35,000/mo</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span>V2 Premium (Face AI)</span>
                  <span className="font-bold">₦40,000/mo</span>
                </div>
              </div>
            </motion.div>

            {/* ClockIt Pricing */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">ClockIt</h3>
              <p className="text-gray-400 mb-6 text-sm">Workforce & payroll OS.</p>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span>V1 Standard</span>
                  <span className="font-bold">₦40,000/mo</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span>V2 Premium (Face AI)</span>
                  <span className="font-bold">₦50,000/mo</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* The Trial Flow & Demo CTA */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Try it risk-free for 7 days.</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Every organization gets a 7-day full-access trial. If you don't subscribe, you'll get another 7 days of read-only access to export your data before your account is paused.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://quickie-pinkas.vercel.app" target="_blank" className="rounded-full bg-quickie-gradient px-8 py-4 text-base font-bold text-navy shadow-lg transition-transform hover:scale-105">
                Start Pinkas Trial ↗
              </Link>
              <Link href="https://quickie-clockit.vercel.app" target="_blank" className="rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/20">
                Start ClockIt Trial ↗
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              No credit card required to start.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}