"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION WITH SPLIT IMAGE */}
      <section className="relative pt-24 pb-32 bg-navy text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Image Side (Left) */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 w-full order-2 lg:order-1">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,229,255,0.15)]">
                <Image
                  src="/screenshots/education-hero.jpg"
                  alt="Nigerian Student Studying"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient to blend the image into the navy background at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            {/* Text Side (Right) */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex-1 text-left order-1 lg:order-2">

              <motion.div variants={fadeUp} className="mb-6 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 p-2 border border-white/20">
                  <Image src="/logos/prep.png" alt="Prep" fill className="object-contain p-1" />
                </div>
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white/10 p-2 border border-white/20">
                  <Image src="/logos/pinkas.png" alt="Pinkas" fill className="object-contain p-1" />
                </div>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                From the classroom to the exam hall.
              </motion.h1>

              <motion.p variants={fadeUp} className="text-xl text-gray-300 mb-10 max-w-xl">
                Whether you are a school managing attendance or a student preparing for JAMB, we build tools that work offline and never get in the way.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="#prep" className="rounded-full bg-quickie-gradient px-8 py-4 text-base font-bold text-navy shadow-lg transition-transform hover:scale-105 text-center">
                  Explore Quickie Prep
                </Link>
                <Link href="/business" className="rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/20 text-center">
                  Explore Pinkas for Schools
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PREP SECTION */}
      <section id="prep" className="py-24 bg-gray-50/50">
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
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan" /> 10,000+ Verified Questions</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan" /> 100% Offline Capable</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan" /> Real 2-hour timed mocks</li>
              </ul>
              <Link href="https://prep.quickie-studio.com" target="_blank" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy/90 transition-colors">
                Start Practicing Free <ArrowUpRight className="w-4 h-4" />
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
              <Link href="/business" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy/90 transition-colors">
                See how Pinkas works <ArrowUpRight className="w-4 h-4" />
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