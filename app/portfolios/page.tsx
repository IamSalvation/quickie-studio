"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Globe, Smartphone, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Your 9 Actual Portfolios Mapped Exactly
const portfolios = [
  { title: "Virtual Assistant", img: "/screenshots/portfolio-va.png", url: "https://iamsalvation.github.io/tiwa-adedeji-portfolio/" },
  { title: "Nursing Professional (Lilian)", img: "/screenshots/portfolio-nursing.png", url: "https://nurse-lilian.github.io/portfolio/" },
  { title: "Nursing Professional (Ochonma)", img: "/screenshots/portfolio-nursing-2.png", url: "https://ochonmac-portfolio.netlify.app/" },
  { title: "Social Media Manager", img: "/screenshots/portfolio-social.png", url: "https://olayinka-ogundeji.github.io/portfolio/" },
  { title: "Medical Virtual Assistant (Bankesola)", img: "/screenshots/portfolio-medical-2.png", url: "https://iamsalvation.github.io/bankesola_portfolio/" },
  { title: "Medical Virtual Assistant (Blessing)", img: "/screenshots/portfolio-medical.png", url: "https://borganics.github.io/blessing_portfolio/" },
  { title: "Executive Assistant", img: "/screenshots/portfolio-executive.png", url: "https://janet-uwakwe.github.io/portfolio/" },
  { title: "HR Executive", img: "/screenshots/portfolio-hr.png", url: "https://esther-okoro-portfolio.netlify.app/" },
  { title: "Digital Marketer", img: "/screenshots/portfolio-marketer.png", url: "https://favourodum81.github.io/portfolio/" }
];

export default function PortfoliosPage() {
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
                Premium Web Design
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Premium web portfolios <br className="hidden md:block" /> for professionals.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              We build high-end personal websites for Lawyers, Doctors, Consultants, and Creatives. We also specialize in portfolios for Virtual Assistants, Nurses, Social Media Managers, Executive Assistants, HR Executives, and Digital Marketers.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="rounded-full bg-quickie-gradient px-8 py-4 text-base font-bold text-navy shadow-lg transition-transform hover:scale-105">
                Get Your Portfolio
              </a>
              <Link href="#work" className="rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/20">
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section id="work" className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-4">Built for your profession.</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We don't do generic templates. We build custom portfolios tailored to the exact skills hiring managers are looking for.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {portfolios.map((portfolio, index) => (
              <motion.div key={index} variants={fadeUp} className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">

                <a href={portfolio.url} target="_blank" rel="noreferrer" className="flex flex-col h-full">
                  <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                    <Image
                      src={portfolio.img}
                      alt={portfolio.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white text-navy font-bold px-4 py-2 rounded-full flex items-center gap-2">
                        View Live Site <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between border-t border-gray-100 mt-auto">
                    <h3 className="text-xl font-bold text-navy group-hover:text-cyan transition-colors">{portfolio.title}</h3>
                    <ArrowUpRight className="w-5 h-5 text-cyan" />
                  </div>
                </a>

              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* WHY A PORTFOLIO */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-6">Why you need a custom portfolio.</h2>
            <p className="text-lg text-gray-600 mb-12">A resume gets you an interview. A portfolio gets you the job.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <motion.div variants={fadeUp} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <Globe className="w-8 h-8 text-cyan mb-4" />
              <h4 className="font-bold text-navy mb-2">Your Own Domain</h4>
              <p className="text-sm text-gray-600">Stop using free links. Get yourname.com to look like a top-tier professional.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <Smartphone className="w-8 h-8 text-cyan mb-4" />
              <h4 className="font-bold text-navy mb-2">Mobile Responsive</h4>
              <p className="text-sm text-gray-600">Hiring managers check profiles on their phones. Our sites are perfect on every screen.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <Zap className="w-8 h-8 text-cyan mb-4" />
              <h4 className="font-bold text-navy mb-2">Lightning Fast</h4>
              <p className="text-sm text-gray-600">Built with the same tech as Quickie Studio. Instant load times, zero lag.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-24 bg-navy text-white text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Ready to stand out?</h2>
            <p className="text-xl text-gray-300 mb-12">Contact for a quote. We build portfolios that get you hired.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://calendar.app.google/EKCqCqgCpuZzuKs58" target="_blank" rel="noreferrer" className="w-full sm:w-auto rounded-full bg-quickie-gradient px-8 py-4 text-base font-bold text-navy shadow-lg transition-transform hover:scale-105">
                Book a Discovery Call
              </a>
              <a href="https://wa.me/2347062547022" target="_blank" rel="noreferrer" className="w-full sm:w-auto rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/20">
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}