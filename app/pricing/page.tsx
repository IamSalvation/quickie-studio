"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-navy tracking-tight mb-4">
              Simple, honest pricing.
            </h1>
            <p className="text-xl text-gray-600">
              Start with the free tools. Upgrade when you need the heavy hitters.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            
            {/* Free Tier */}
            <motion.div variants={fadeUp} className="rounded-3xl bg-white p-10 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-navy mb-2">The Studio</h2>
              <p className="text-4xl font-extrabold text-navy mb-6">Free today</p>
              <p className="text-gray-500 mb-8">
                Access the everyday tools. No credit card required.
              </p>
              
              <ul className="space-y-4 mb-10 text-gray-600">
                <li className="flex items-center gap-3"><span className="text-cyan font-bold">✓</span> Docs (Offline Editor)</li>
                <li className="flex items-center gap-3"><span className="text-cyan font-bold">✓</span> Eye (Teleprompter)</li>
                <li className="flex items-center gap-3"><span className="text-cyan font-bold">✓</span> Swap (File Converter)</li>
                <li className="flex items-center gap-3"><span className="text-cyan font-bold">✓</span> Prep (JAMB Practice)</li>
                <li className="flex items-center gap-3"><span className="text-cyan font-bold">✓</span> Bible (Offline Reading)</li>
                <li className="flex items-center gap-3 text-gray-400"><span className="text-gray-300 font-bold">+</span> Chat (Free when it launches)</li>
              </ul>

              <Link href="/suites" className="block w-full rounded-xl bg-gray-100 py-4 text-center font-bold text-navy hover:bg-gray-200 transition-colors">
                Explore free apps
              </Link>
            </motion.div>

            {/* Paid Tier */}
            <motion.div variants={fadeUp} className="rounded-3xl bg-navy p-10 shadow-xl relative overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="absolute top-0 right-0 bg-quickie-gradient text-navy text-xs font-bold px-4 py-2 rounded-bl-xl">
                Pro Tools
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">The Heavy Hitters</h2>
              <p className="text-4xl font-extrabold text-white mb-6">Paid</p>
              <p className="text-gray-300 mb-8">
                Serious tools for schools, teams, and AI. Built to scale.
              </p>
              
              <ul className="space-y-4 mb-10 text-gray-300">
                <li className="flex items-center gap-3"><span className="text-green font-bold">✓</span> Pinkas from ₦35,000/mo</li>
                <li className="flex items-center gap-3"><span className="text-green font-bold">✓</span> ClockIt from ₦40,000/mo</li>
                <li className="flex items-center gap-3"><span className="text-green font-bold">✓</span> Omni (Launching soon)</li>
              </ul>

              <Link href="/business" className="block w-full rounded-xl bg-quickie-gradient py-4 text-center font-bold text-navy hover:opacity-90 transition-opacity">
                See Business Plans
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-2xl font-bold text-navy mb-8 text-center">
            Frequently Asked Questions
          </motion.h3>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl border border-gray-200">
              <h4 className="font-bold text-navy mb-2">Will the free apps stay free?</h4>
              <p className="text-gray-600 text-sm">Yes. If any free app moves to a paid tier later, existing users will be notified first and keep their current access.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl border border-gray-200">
              <h4 className="font-bold text-navy mb-2">Do I need an account?</h4>
              <p className="text-gray-600 text-sm">Not for the free apps. Just open the link and start working. No sign-up required.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-6 rounded-2xl border border-gray-200">
              <h4 className="font-bold text-navy mb-2">How does billing work?</h4>
              <p className="text-gray-600 text-sm">Billing is handled securely via Paystack. All prices are in Nigerian Naira (₦).</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
