"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-4">
              Changelog
            </h1>
            <p className="text-lg text-gray-600">
              See what's new in the Quickie Studio ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-12">
            
            {/* Update 1 */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-start gap-8">
                <div className="hidden md:block w-32 flex-shrink-0 text-right pt-1">
                  <span className="text-sm font-bold text-gray-400">Oct 23, 2026</span>
                </div>
                <div className="flex-1 pb-12 border-l border-gray-200 pl-8 md:pl-8 relative">
                  <div className="absolute w-4 h-4 bg-cyan rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Business & AI Pages Launch</h3>
                  <p className="text-gray-600 mb-4">We introduced two dedicated enterprise pages for our paid tools.</p>
                  <ul className="list-disc pl-5 text-gray-500 space-y-1 text-sm">
                    <li>New <strong>/business</strong> page showcasing Pinkas and ClockIt.</li>
                    <li>New <strong>/ai</strong> page introducing Omni with a live waitlist.</li>
                    <li>Added premium Framer Motion animations across the site.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Update 2 */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-start gap-8">
                <div className="hidden md:block w-32 flex-shrink-0 text-right pt-1">
                  <span className="text-sm font-bold text-gray-400">Oct 20, 2026</span>
                </div>
                <div className="flex-1 pb-12 border-l border-gray-200 pl-8 md:pl-8 relative">
                  <div className="absolute w-4 h-4 bg-navy rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Education Page & Updated Branding</h3>
                  <p className="text-gray-600 mb-4">Focusing on students and schools.</p>
                  <ul className="list-disc pl-5 text-gray-500 space-y-1 text-sm">
                    <li>Launched the new <strong>/education</strong> page.</li>
                    <li>Updated the Navbar to include Business, Education, and AI.</li>
                    <li>Fixed the Omni logo visibility on dark mode.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Update 3 */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-start gap-8">
                <div className="hidden md:block w-32 flex-shrink-0 text-right pt-1">
                  <span className="text-sm font-bold text-gray-400">Oct 13, 2026</span>
                </div>
                <div className="flex-1 pb-12 border-l border-gray-200 pl-8 md:pl-8 relative">
                  <div className="absolute w-4 h-4 bg-green rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Initial Quickie Studio Launch</h3>
                  <p className="text-gray-600">
                    The Quickie Studio hub officially went live with the Suite Grid, Pricing, and About pages.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
