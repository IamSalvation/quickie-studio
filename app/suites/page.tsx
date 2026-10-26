"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { apps } from "@/lib/apps";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

export default function AllAppsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-100 text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-4">
              The Studio Directory
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every app in the Quickie Studio, all in one place.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {apps.map((app) => (
              <motion.div
                key={app.slug}
                variants={fadeUp}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-cyan/40 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={`/logos/${app.slug}.png`}
                    alt={app.name}
                    width={32}
                    height={32}
                    className="rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  <h2 className="text-lg font-bold text-navy">{app.name}</h2>
                </div>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2 flex-grow">{app.tagline}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-md ${app.pricing === "paid"
                        ? "bg-navy/5 text-navy"
                        : "bg-green-100 text-green-700"
                      }`}
                  >
                    {app.pricing === "paid" ? "Paid" : "Free"}
                  </span>
                  {app.status === "live" ? (
                    <Link
                      href={app.url || "#"}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-sm font-medium text-cyan hover:text-navy transition-colors"
                    >
                      Open <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span className="text-xs font-medium text-gray-400">
                      Coming Soon
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}