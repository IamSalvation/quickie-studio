"use client";

import Image from "next/image";
import Link from "next/link";
import { apps } from "@/lib/apps";

export function LogoCarousel() {
  // Triple the array to ensure the track is wide enough to cover the screen without gaps
  const duplicatedApps = [...apps, ...apps, ...apps];

  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-10 text-center">
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
              className="mx-10 md:mx-16 flex items-center justify-center"
            >
              <Link
                href={app.url || "#"}
                target="_blank"
                className="transition-transform duration-300 hover:scale-110 flex-shrink-0"
              >
                <Image
                  src={`/logos/${app.slug}.png`}
                  alt={app.name}
                  width={72}
                  height={72}
                  className="rounded-xl w-14 h-14 md:w-20 md:h-20 object-contain"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}