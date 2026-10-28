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
      
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedApps.map((app, index) => (
            <Link 
              key={`${app.slug}-${index}`} 
              href={app.url || "#"} 
              target="_blank"
              className="mx-8 md:mx-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image 
                src={`/logos/${app.slug}.png`} 
                alt={app.name} 
                width={48} 
                height={48} 
                className="rounded-xl w-12 h-12 md:w-16 md:h-16 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
