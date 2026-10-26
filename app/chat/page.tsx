"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Zap, Image as ImageIcon, MessageSquare, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 bg-navy text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#8B5CF6]/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <span className="px-4 py-1.5 rounded-full bg-white/10 text-sm font-semibold border border-white/20">
                Quickie Chat is Live
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              Instant, private messaging. <br className="hidden md:block"/> No email required.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Say goodbye to sign-up forms and spam. Quickie Chat uses your phone number and a secure PIN to connect you instantly. Real-time, dark-mode ready, and built for speed.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://quickie-chattie.onrender.com" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8B5CF6] px-8 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#7C3AED]">
                Open Quickie Chat <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-4">Built for privacy and speed.</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need from a modern chat app, without the bloat.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <ShieldCheck className="w-10 h-10 text-[#8B5CF6] mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Trusted Devices</h3>
              <p className="text-gray-600 text-sm">Log in on the same device without a password. Log in on a new device, and we'll kick the old one out instantly for your security.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <Zap className="w-10 h-10 text-[#8B5CF6] mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Real-time Delivery</h3>
              <p className="text-gray-600 text-sm">Powered by Socket.IO and WebSockets. Messages deliver instantly with single, double, and blue tick read receipts.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <ImageIcon className="w-10 h-10 text-[#8B5CF6] mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Rich Media Sharing</h3>
              <p className="text-gray-600 text-sm">Send images, PDFs, and Word documents up to 5MB. Or record and send voice notes directly from the app.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SCREENSHOTS SECTION */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex-1">
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
                A chat experience you'll love.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Switch between Dark Mode and Light Mode with a single tap. Built with a distraction-free UI and professional Lucide icons.
              </p>
              <ul className="space-y-4 mb-8 text-gray-700 font-medium">
                <li className="flex items-center gap-3"><span className="text-[#8B5CF6] font-bold text-xl">✓</span> Emoji picker with 330+ emojis</li>
                <li className="flex items-center gap-3"><span className="text-[#8B5CF6] font-bold text-xl">✓</span> Reply to specific messages</li>
                <li className="flex items-center gap-3"><span className="text-[#8B5CF6] font-bold text-xl">✓</span> Delete for everyone</li>
                <li className="flex items-center gap-3"><span className="text-[#8B5CF6] font-bold text-xl">✓</span> Typing indicators & online status</li>
              </ul>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex-1 flex justify-center w-full">
              <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden">
                <Image src="/screenshots/chat-mobile-dark.png" alt="Quickie Chat Dark Mode" fill className="object-cover" />
              </div>
            </motion.div>

          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-24">
            <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl overflow-hidden">
              <Image src="/screenshots/chat-desktop-light.png" alt="Quickie Chat Light Mode" width={1200} height={800} className="rounded-xl w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
