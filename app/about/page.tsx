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
            We built Quickie Studio because the enterprise tools we needed didn't exist. So we made them ourselves.
          </p>
        </motion.div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="prose prose-lg prose-navy mx-auto text-gray-600">
            <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
            <p className="mb-6">
              Quickie Studio started in Lagos, Nigeria, with a simple frustration: why does workforce and attendance software have to be so heavy? Why do you need a dozen subscriptions, a high-end server, and a forced cloud connection just to track who is in a building, process payroll, or send a message?
            </p>
            <p className="mb-6">
              We believe in <strong>local-first, offline-capable software</strong>. We believe your data is yours, and that tools should work even when the internet doesn't. That's why our apps like Docs and Bible run entirely on your device, and our enterprise kiosks (Pinkas and ClockIt) use IndexedDB to keep scanning even when the network drops.
            </p>
            <p className="mb-6">
              And with the launch of <strong>Quickie Chat</strong>, we've proven that you don't need a massive cloud infrastructure to build a fast, secure, and beautiful real-time messaging platform. Just your phone number, a secure PIN, and zero emails required.
            </p>

            <h2 className="text-3xl font-bold text-navy mt-12 mb-6">The 12-App Ecosystem</h2>
            <p className="mb-6">
              We didn't want to build just one app. We wanted to build an ecosystem. That's how the five suites were born:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Money:</strong> Pinkas and ClockIt handle enterprise session tracking, Face AI, and automated Payroll.</li>
              <li><strong>Work:</strong> Docs for offline editing, Quickie Chat for real-time private messaging, and Kaleo for data-saving video calls.</li>
              <li><strong>Create:</strong> Eye for teleprompting, Swap for file conversion, and Aidao Player for premium offline media playback.</li>
              <li><strong>Learn:</strong> Prep for 10,000+ offline JAMB questions, and Oneness Bible for offline reading.</li>
              <li><strong>AI:</strong> Omni is our general-purpose AI assistant, live and free to use right now.</li>
            </ul>

            <h2 className="text-3xl font-bold text-navy mt-12 mb-6">No Bloat. Just Tools.</h2>
            <p className="mb-6">
              We don't do endless features. We strip away the clutter to give you tools that just work. No steep learning curves, no unnecessary updates. Just fast, reliable software built for the realities of running a school, a factory, a creative project, or a solo hustle.
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