"use client";

import Image from "next/image";
import Link from "next/link";
import { apps } from "@/lib/apps";

export function LogoCarousel() {
  // Duplicate the array for seamless looping
  const duplicatedApps = [...apps, ...apps];

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
          Powering 12 tools for the modern workforce
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group w-full">
        {/* The Moving Track */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedApps.map((app, index) => (
            <div
              key={`${app.slug}-${index}`}
              className="mx-6 md:mx-10 flex items-center justify-center"
            >
              <Link
                href={app.url || "#"}
                target="_blank"
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex-shrink-0"
              >
                <Image
                  src={`/logos/${app.slug}.png`}
                  alt={app.name}
                  width={64}
                  height={64}
                  className="rounded-xl w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}