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

            {/* Update 1 - Quickie Chat Launch */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-start gap-8">
                <div className="hidden md:block w-32 flex-shrink-0 text-right pt-1">
                  <span className="text-sm font-bold text-gray-400">Today</span>
                </div>
                <div className="flex-1 pb-12 border-l border-gray-200 pl-8 md:pl-8 relative">
                  <div className="absolute w-4 h-4 bg-[#8B5CF6] rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Quickie Chat is Officially Live</h3>
                  <p className="text-gray-600 mb-4">Our real-time messaging platform is now out of beta and available to everyone.</p>
                  <ul className="list-disc pl-5 text-gray-500 space-y-1 text-sm">
                    <li>Added <strong>Quickie Chat</strong> to the Navbar and Homepage Flagship blocks.</li>
                    <li>No email required. Secure login via Phone Number and PIN.</li>
                    <li>Real-time WebSockets, media sharing, voice notes, and read receipts.</li>
                    <li>Explore the new <strong>/chat</strong> page.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Update 2 - Lucide Icons */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-start gap-8">
                <div className="hidden md:block w-32 flex-shrink-0 text-right pt-1">
                  <span className="text-sm font-bold text-gray-400">Yesterday</span>
                </div>
                <div className="flex-1 pb-12 border-l border-gray-200 pl-8 md:pl-8 relative">
                  <div className="absolute w-4 h-4 bg-cyan rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Premium Design Polish: 100% Lucide Icons</h3>
                  <p className="text-gray-600 mb-4">We replaced every emoji and text character with clean, scalable SVG icons across the entire site.</p>
                  <ul className="list-disc pl-5 text-gray-500 space-y-1 text-sm">
                    <li>Added <strong>Lucide React</strong> SVG icons to Services, AI, Business, and Education pages.</li>
                    <li>Replaced text arrows with proper <code>&lt;ArrowUpRight /&gt;</code> components.</li>
                    <li>Updated the Homepage Suite Grid to use dynamic SVG icons.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Update 3 - Business & AI Pages */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-start gap-8">
                <div className="hidden md:block w-32 flex-shrink-0 text-right pt-1">
                  <span className="text-sm font-bold text-gray-400">Oct 23, 2026</span>
                </div>
                <div className="flex-1 pb-12 border-l border-gray-200 pl-8 md:pl-8 relative">
                  <div className="absolute w-4 h-4 bg-navy rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
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

            {/* Update 4 - Education & Services */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-start gap-8">
                <div className="hidden md:block w-32 flex-shrink-0 text-right pt-1">
                  <span className="text-sm font-bold text-gray-400">Oct 20, 2026</span>
                </div>
                <div className="flex-1 pb-12 border-l border-gray-200 pl-8 md:pl-8 relative">
                  <div className="absolute w-4 h-4 bg-green rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Education & Services Pages</h3>
                  <p className="text-gray-600 mb-4">Expanding the Studio to serve schools and custom software clients.</p>
                  <ul className="list-disc pl-5 text-gray-500 space-y-1 text-sm">
                    <li>Launched the new <strong>/education</strong> page focusing on JAMB Prep.</li>
                    <li>Launched the <strong>/services</strong> agency page with 6 industry Bento cards.</li>
                    <li>Updated the Navbar to include Services, Business, and Education.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Update 5 - Initial Launch */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-start gap-8">
                <div className="hidden md:block w-32 flex-shrink-0 text-right pt-1">
                  <span className="text-sm font-bold text-gray-400">Oct 13, 2026</span>
                </div>
                <div className="flex-1 pb-12 border-l border-gray-200 pl-8 md:pl-8 relative">
                  <div className="absolute w-4 h-4 bg-navy rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
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