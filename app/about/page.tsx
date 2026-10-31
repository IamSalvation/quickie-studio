"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION WITH FULL WIDTH IMAGE */}
      <section className="relative pt-32 pb-32 bg-navy text-white overflow-hidden min-h-[85vh] flex items-center">

        {/* Background Image Wrapper */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/screenshots/about-hero.jpg"
            alt="Quickie Studio Brand Ambassador"
            fill
            className="object-cover object-[70%_center] md:object-center"
            priority
          />
          {/* The Gradient Overlays */}
          {/* Mobile: Solid Navy on top fading to transparent at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-transparent md:hidden"></div>
          {/* Desktop: Solid Navy on left fading to transparent on right */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>
        </div>

        {/* Text Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl text-left">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white text-balance">
              Software shouldn't be complicated.
            </h1>

            <p className="text-xl text-gray-200 max-w-xl mb-10 text-balance">
              We built Quickie Studio because the enterprise tools we needed didn't exist. So we made them ourselves.
            </p>

            <a href="#story" className="inline-flex items-center justify-center rounded-full bg-quickie-gradient px-8 py-4 text-base font-bold text-navy shadow-lg transition-transform hover:scale-105">
              Read Our Story ↓
            </a>

          </motion.div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section id="story" className="py-24 bg-white">
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