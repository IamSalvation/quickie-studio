"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Business", href: "/business" },
    { name: "Education", href: "/education" },
    { name: "Apps", href: "/suites" },
    { name: "AI", href: "/ai" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">

          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-2.5 z-50" onClick={() => setIsOpen(false)}>
            <Image
              src="/logos/quickie-studio.png"
              alt="Quickie Studio Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-xl font-bold tracking-tight text-navy">
              Quickie Studio
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-500 hover:text-navy transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/suites" className="text-sm font-medium text-navy hover:text-cyan transition-colors">
              View All Apps
            </Link>
            <Link href="/suites" className="rounded-full bg-quickie-gradient px-5 py-2 text-sm font-semibold text-navy shadow-sm transition-transform hover:scale-105 active:scale-95">
              Explore Studio
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden z-50 p-2 text-navy flex flex-col gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-0.5 bg-navy transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-navy transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-navy transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Moved OUTSIDE the nav tag to fix z-index and background */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col pt-24 px-6 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col gap-6 text-xl font-bold text-navy">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-gray-100 pb-4"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <Link
            href="/suites"
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-quickie-gradient px-5 py-4 text-center text-sm font-bold text-navy shadow-sm"
          >
            Explore Studio
          </Link>
        </div>
      </div>
    </>
  );
}