"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 pb-16 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan/10 blur-[100px] rounded-full pointer-events-none"></div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Software shouldn't be complicated.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We built Quickie Studio because the tools we needed didn't exist. So we made them ourselves.
          </p>
        </motion.div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="prose prose-lg prose-navy mx-auto text-gray-600">
            <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
            <p className="mb-6">
              Quickie Studio started in Lagos, Nigeria, with a simple frustration: why does software have to be so heavy? Why do you need a dozen subscriptions, a high-end server, and a forced cloud sync just to track attendance, write a document, or study for an exam?
            </p>
            <p className="mb-6">
              We believe in <strong>local-first software</strong>. We believe your data is yours, and that tools should work even when the internet doesn't. That's why our apps like Docs and Bible run entirely on your device.
            </p>
            
            <h2 className="text-3xl font-bold text-navy mt-12 mb-6">The Suites</h2>
            <p className="mb-6">
              We didn't want to build just one app. We wanted to build an ecosystem. That's how the suites were born:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Money:</strong> Pinkas and ClockIt handle attendance and payroll.</li>
              <li><strong>Work:</strong> Docs and Chat keep you writing and talking.</li>
              <li><strong>Create:</strong> Eye and Swap help creators.</li>
              <li><strong>Learn:</strong> Prep and Bible give students offline tools.</li>
              <li><strong>AI:</strong> Omni ties it all together.</li>
            </ul>

            <h2 className="text-3xl font-bold text-navy mt-12 mb-6">No Bloat. Just Tools.</h2>
            <p className="mb-6">
              We don't do endless features. We strip away the clutter to give you tools that just work. No steep learning curves, no unnecessary updates. Just fast, reliable software built for the realities of running a school, a business, or a creative project.
            </p>
            <p>
              Built in Lagos. Used everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
