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
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 bg-navy text-white overflow-hidden">
        {/* Ambient Background Glow */}
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
              Run your school or team <br className="hidden md:block" /> on autopilot.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              The all-in-one presence tracking and payroll suite. Built for the realities of running a school, event, or business in Nigeria.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#pinkas" className="rounded-full bg-quickie-gradient px-8 py-4 text-base font-bold text-navy shadow-lg transition-transform hover:scale-105">
                Explore Pinkas (Schools)
              </Link>
              <Link href="#clockit" className="rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/20">
                Explore ClockIt (Workforce)
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PINKAS SECTION */}
      <section id="pinkas" className="py-24 bg-gray-50/50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="flex-1 order-2 lg:order-1"
            >
              <div className="inline-flex items-center rounded-full bg-navy/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy mb-6">
                For Schools & Events
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
                Attendance that takes seconds.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Pinkas turns any tablet into a powerful check-in kiosk. No expensive hardware. Just point the camera at a badge and let it scan.
              </p>
              <ul className="space-y-4 mb-8 text-gray-700 font-medium">
                <li className="flex items-center gap-3"><span className="text-cyan font-bold text-xl">✓</span> Turn any tablet into a kiosk</li>
                <li className="flex items-center gap-3"><span className="text-cyan font-bold text-xl">✓</span> Automated badge scanning</li>
                <li className="flex items-center gap-3"><span className="text-cyan font-bold text-xl">✓</span> Master sheets & instant reports</li>
              </ul>
              <div className="flex items-center gap-4">
                <Link href="https://quickie-pinkas.vercel.app" target="_blank" className="rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy/90 transition-colors">
                  Open Pinkas App ↗
                </Link>
                <span className="text-sm font-semibold text-gray-500">From ₦35,000/mo</span>
              </div>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="flex-1 order-1 lg:order-2 flex justify-center"
            >
              <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden">
                <Image src="/screenshots/pinkas-clockin-mobile.PNG" alt="Pinkas Kiosk" fill className="object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Desktop Dashboard */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mt-20 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl overflow-hidden"
          >
            <Image src="/screenshots/pinkas-dashboard.png" alt="Pinkas Dashboard" width={1200} height={800} className="rounded-xl w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* CLOCKIT SECTION */}
      <section id="clockit" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden">
                <Image src="/screenshots/clockit-clockin-mobile.PNG" alt="ClockIt Kiosk" fill className="object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="flex-1"
            >
              <div className="inline-flex items-center rounded-full bg-navy/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy mb-6">
                For Businesses & Teams
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
                Workforce payroll, simplified.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                ClockIt is the workforce twin to Pinkas. Manage departments, track pay streams, and handle payroll without the spreadsheets.
              </p>
              <ul className="space-y-4 mb-8 text-gray-700 font-medium">
                <li className="flex items-center gap-3"><span className="text-green font-bold text-xl">✓</span> Facial recognition kiosks</li>
                <li className="flex items-center gap-3"><span className="text-green font-bold text-xl">✓</span> Department & staff management</li>
                <li className="flex items-center gap-3"><span className="text-green font-bold text-xl">✓</span> Automated payroll exports</li>
              </ul>
              <div className="flex items-center gap-4">
                <Link href="https://quickie-clockit.vercel.app" target="_blank" className="rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy/90 transition-colors">
                  Open ClockIt App ↗
                </Link>
                <span className="text-sm font-semibold text-gray-500">From ₦40,000/mo</span>
              </div>
            </motion.div>
          </div>

          {/* Desktop Dashboard */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mt-20 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl overflow-hidden"
          >
            <Image src="/screenshots/clockit-workers.png" alt="ClockIt Workers" width={1200} height={800} className="rounded-xl w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* PRICING TRANSPARENCY */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Simple, transparent pricing.</h2>
            <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto">
              No hidden fees. All prices in Nigerian Naira. Payments secured by Paystack.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Pinkas Pricing */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">Pinkas</h3>
              <p className="text-gray-400 mb-6">Presence tracking for schools.</p>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span>V1 Basic (50 participants)</span>
                  <span className="font-bold">₦35,000/mo</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span>V2 Recommended (Unlimited)</span>
                  <span className="font-bold">₦40,000/mo</span>
                </div>
              </div>
            </motion.div>

            {/* ClockIt Pricing */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-2">ClockIt</h3>
              <p className="text-gray-400 mb-6">Workforce & payroll management.</p>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span>V1 Basic (50 workers)</span>
                  <span className="font-bold">₦40,000/mo</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span>V2 Premium (Unlimited)</span>
                  <span className="font-bold">₦50,000/mo</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}