"use client";

import { motion } from "framer-motion";
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
  CheckCircle2
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
      "Offline-first architectures"
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

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 bg-navy text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <span className="px-4 py-1.5 rounded-full bg-white/10 text-sm font-semibold border border-white/20">
                🚀 Enterprise Software Agency
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              We build software that <br className="hidden md:block"/> survives the real world.
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
                      {industry.proofName} ↗
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}

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
