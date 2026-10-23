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

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-24 pb-32 bg-navy text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="mb-6 flex justify-center gap-4">
               <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 p-2"><Image src="/logos/prep.png" alt="Prep" fill className="object-contain p-1" /></div>
               <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 p-2"><Image src="/logos/pinkas.png" alt="Pinkas" fill className="object-contain p-1" /></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              From the classroom to the exam hall.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Whether you are a school managing attendance or a student preparing for JAMB, we build tools that work offline and never get in the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PREP SECTION */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1">
              <div className="inline-flex items-center rounded-full bg-navy/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy mb-6">
                For Students
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
                Pass JAMB on the first try.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Quickie Prep gives you access to over 10,000 verified JAMB questions across 16 subjects. Take real mock exams, track your scores, and study offline—perfect for when data is scarce.
              </p>
              <ul className="space-y-4 mb-8 text-gray-700 font-medium">
                <li className="flex items-center gap-3"><span className="text-cyan font-bold text-xl">✓</span> 10,000+ Verified Questions</li>
                <li className="flex items-center gap-3"><span className="text-cyan font-bold text-xl">✓</span> 100% Offline Capable</li>
                <li className="flex items-center gap-3"><span className="text-cyan font-bold text-xl">✓</span> Real 2-hour timed mocks</li>
              </ul>
              <Link href="https://quickie-prep.netlify.app" target="_blank" className="rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy/90 transition-colors">
                Start Practicing Free ↗
              </Link>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1 w-full">
              <div className="relative rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl">
                <Image src="/screenshots/prep-desktop.png" alt="Quickie Prep" width={1200} height={800} className="rounded-xl w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PINKAS SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1">
              <div className="inline-flex items-center rounded-full bg-navy/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy mb-6">
                For Schools
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
                Never mark attendance again.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Turn any tablet into a check-in kiosk with Quickie Pinkas. Automate your school's attendance, manage terms, and generate master sheets instantly.
              </p>
              <Link href="/business" className="rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy/90 transition-colors">
                See how Pinkas works ↗
              </Link>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1 w-full">
              <div className="relative rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl">
                <Image src="/screenshots/pinkas-students.png" alt="Pinkas Students" width={1200} height={800} className="rounded-xl w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
