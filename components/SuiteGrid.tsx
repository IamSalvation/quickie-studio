"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { apps, Suite } from "@/lib/apps";

const suiteDetails: Record<Suite, { title: string, description: string }> = {
  money: { title: "Money", description: "Enterprise Attendance, HR & Payroll. Offline kiosks, Face AI, and Paystack billing." },
  work: { title: "Work", description: "Write, talk, and call — privately, in your browser." },
  create: { title: "Create", description: "Record, convert, and play — nothing uploaded." },
  learn: { title: "Learn", description: "Study and read — offline where it counts." },
  ai: { title: "AI", description: "One assistant across the Studio." },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export function SuiteGrid() {
  const suiteOrder: Suite[] = ["money", "work", "create", "learn", "ai"];

  return (
    <section id="suites" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy tracking-tight mb-4">
            Five suites. One ecosystem.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the tools built for the way you actually work, create, and learn.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suiteOrder.map((suiteKey) => {
            const suiteApps = apps.filter(a => a.suite === suiteKey);
            const suiteInfo = suiteDetails[suiteKey];
            const hasPaid = suiteApps.some(a => a.pricing === "paid");

            return (
              <motion.div key={suiteKey} variants={fadeUp} className="group relative flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-cyan/40 hover:-translate-y-1">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-navy">{suiteInfo.title}</h3>
                  {hasPaid && (
                    <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">Contains Paid Apps</span>
                  )}
                </div>
                
                <p className="text-gray-500 mb-8 flex-grow">{suiteInfo.description}</p>

                <div className="space-y-4">
                  {suiteApps.map(app => (
                    <div key={app.slug} className="flex items-center justify-between border-t border-gray-50 pt-4">
                      <div className="flex items-center gap-3">
                        <Image src={`/logos/${app.slug}.png`} alt={app.name} width={24} height={24} className="rounded transition-transform duration-300 group-hover:scale-110" />
                        <div>
                          <p className="font-semibold text-navy text-sm flex items-center gap-2">
                            {app.name}
                            {app.status === "coming-soon" && (
                              <span className="text-[10px] uppercase tracking-wider bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Soon</span>
                            )}
                          </p>
                          <p className="text-xs text-gray-400 mt-1 line-clamp-1">{app.tagline}</p>
                        </div>
                      </div>
                      {app.status === "live" ? (
                        <Link href={app.url ? app.url : "#"} target="_blank" rel="noreferrer" className="text-sm font-medium text-cyan hover:text-navy transition-colors">Open ↗</Link>
                      ) : (
                        <span className="text-sm font-medium text-gray-300 cursor-not-allowed">Soon</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link href={`/suites/${suiteKey}`} className="text-sm font-bold text-navy group-hover:text-cyan transition-colors flex items-center gap-1">
                    Explore {suiteInfo.title} <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
