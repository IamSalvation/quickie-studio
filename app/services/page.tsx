"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  GraduationCap,
  Factory,
  HeartPulse,
  Hotel,
  Rocket,
  Building2,
  CheckCircle2,
  Wifi,
  CreditCard,
  ShieldCheck,
  ArrowUpRight,
  Monitor,
  Globe
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const industries = [
  {
    title: "Education & Schools",
    icon: <GraduationCap className="w-8 h-8 text-cyan mb-4" />,
    capabilities: [
      "Custom school portals & parent dashboards",
      "Automated report cards & exam portals",
      "Election portals for student unions",
      "Offline exam prep (JAMB/WAEC)",
      "Face AI attendance tracking"
    ],
    proofName: "Quickie Prep & Pinkas",
    proofLink: "/business"
  },
  {
    title: "Factories & Agribusiness",
    icon: <Factory className="w-8 h-8 text-cyan mb-4" />,
    capabilities: [
      "Shift scheduling & routing",
      "Payroll multipliers (weekends/holidays)",
      "Offline biometric kiosks (no internet)",
      "Union timesheet exports",
      "Bulk worker onboarding via CSV"
    ],
    proofName: "Quickie ClockIt",
    proofLink: "/business#clockit"
  },
  {
    title: "Healthcare & Hospitals",
    icon: <HeartPulse className="w-8 h-8 text-cyan mb-4" />,
    capabilities: [
      "Doctor/nurse shift rotations",
      "Patient check-in kiosks",
      "Secure internal messaging",
      "Ward security & Face AI verification"
    ],
    proofName: "Quickie ClockIt",
    proofLink: "/business#clockit"
  },
  {
    title: "Hospitality & Events",
    icon: <Hotel className="w-8 h-8 text-cyan mb-4" />,
    capabilities: [
      "Guest check-in kiosks",
      "Room tracking & stays",
      "Event badge scanning",
      "Multi-track symposium check-ins"
    ],
    proofName: "Quickie Pinkas",
    proofLink: "/business#pinkas"
  },
  {
    title: "Startups & Tech",
    icon: <Rocket className="w-8 h-8 text-cyan mb-4" />,
    capabilities: [
      "Data-saving WebRTC calling",
      "High-performance PWAs",
      "Custom media players & visualizers",
      "Offline-first architectures",
      "Custom AI integrations (Omni)"
    ],
    proofName: "Kaleo & Aidao Player",
    proofLink: "/suites"
  },
  {
    title: "Enterprise & HR",
    icon: <Building2 className="w-8 h-8 text-cyan mb-4" />,
    capabilities: [
      "Multi-tenant SaaS dashboards",
      "Automated payroll exports",
      "Paystack subscription billing",
      "Role-based access control (RBAC)"
    ],
    proofName: "Quickie ClockIt",
    proofLink: "/business#clockit"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION WITH SPLIT IMAGE (Left Image, Right Text) */}
      <section className="relative pt-24 pb-32 bg-navy text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Image Side (Left) */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 w-full order-2 lg:order-1">
              <div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,229,255,0.15)]">
                <Image
                  src="/screenshots/services-hero.jpg"
                  alt="Quickie Studio Developer"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient to blend the image into the navy background */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            {/* Text Side (Right) */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex-1 text-left order-1 lg:order-2">
              <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sm font-semibold border border-white/20">
                <Rocket className="w-4 h-4 text-cyan" /> Enterprise Software Agency
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                We build software that <br className="hidden md:block" /> survives the real world.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-gray-300 max-w-xl mb-10">
                Offline-first kiosks, AI integrations, and data-saving PWAs. We don't just write code—we solve operational bottlenecks for schools, factories, and startups.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="rounded-full bg-quickie-gradient px-8 py-4 text-base font-bold text-navy shadow-lg transition-transform hover:scale-105 text-center">
                  Start a Project
                </Link>
                <Link href="/business" className="rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/20 text-center">
                  See Our Products
                </Link>
              </motion.div>
            </motion.div>

          </div>
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

            {industries.map((industry, index) => (
              <motion.div key={index} variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-cyan/40 transition-all flex flex-col">
                {industry.icon}
                <h3 className="text-xl font-bold text-navy mb-4">{industry.title}</h3>

                <ul className="space-y-3 mb-8 flex-grow">
                  {industry.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-green mt-0.5 flex-shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <div className="flex items-center gap-2 text-xs font-bold text-navy">
                    <span className="text-gray-400">Proof:</span>
                    <Link href={industry.proofLink} className="text-cyan hover:underline flex items-center gap-1">
                      {industry.proofName} <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* PROFESSIONAL PORTFOLIOS SERVICE */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1">
              <div className="inline-flex items-center rounded-full bg-navy/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy mb-6">
                Web Design Service
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
                Premium portfolios for professionals.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Stand out to recruiters and high-paying clients. We build custom, high-performance personal websites for Virtual Assistants, Medical Professionals, HR Executives, Digital Marketers, and more.
              </p>
              <ul className="space-y-3 mb-8 text-gray-700 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan" /> Your own custom domain (e.g., yourname.com)</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan" /> Mobile-responsive design</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-cyan" /> Lightning-fast Next.js architecture</li>
              </ul>
              <Link href="/portfolios" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy/90 transition-colors">
                View Portfolio Examples <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                <Monitor className="w-8 h-8 text-cyan mb-3" />
                <h4 className="font-bold text-navy text-sm">Custom UI</h4>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                <Globe className="w-8 h-8 text-cyan mb-3" />
                <h4 className="font-bold text-navy text-sm">Personal Domain</h4>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center col-span-2">
                <CheckCircle2 className="w-8 h-8 text-green mb-3" />
                <h4 className="font-bold text-navy text-sm">Get Hired Faster</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE TECH EDGE */}
      <section className="py-24 bg-gray-50/50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-6">The Aidao/Pinkas Standard.</h2>
            <p className="text-lg text-gray-600 mb-12">When we build for you, we use the exact same tech stack that powers our own products.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <motion.div variants={fadeUp} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="mb-4"><Wifi className="w-8 h-8 text-cyan" /></div>
              <h4 className="font-bold text-navy mb-2">Offline-First Architecture</h4>
              <p className="text-sm text-gray-600">IndexedDB and Service Workers ensure your app never crashes when the internet drops.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="mb-4"><CreditCard className="w-8 h-8 text-cyan" /></div>
              <h4 className="font-bold text-navy mb-2">Naira-Native Billing</h4>
              <p className="text-sm text-gray-600">Paystack integration with automated webhooks for instant subscription upgrades.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="mb-4"><ShieldCheck className="w-8 h-8 text-cyan" /></div>
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