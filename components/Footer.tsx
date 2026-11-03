import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, MessageCircle, Calendar } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/logo-full.png"
                alt="Quickie Studio"
                width={160}
                height={45}
                className="h-10 w-auto object-contain brightness-0 invert" // Inverts the logo to white for dark background
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              12 tools for schools, businesses, creators, and learners. Built for the real world. Built in Lagos, Nigeria.
            </p>
          </div>

          {/* Column 2: Ecosystem */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-cyan mb-6">The Ecosystem</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/suites/money" className="hover:text-white transition-colors">Money Suite</Link></li>
              <li><Link href="/suites/work" className="hover:text-white transition-colors">Work Suite</Link></li>
              <li><Link href="/suites/create" className="hover:text-white transition-colors">Create Suite</Link></li>
              <li><Link href="/suites/learn" className="hover:text-white transition-colors">Learn Suite</Link></li>
              <li><Link href="/suites/ai" className="hover:text-white transition-colors">AI Suite</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-cyan mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolios" className="hover:text-white transition-colors">Portfolios</Link></li>
              <li><Link href="/business" className="hover:text-white transition-colors">Business Tools</Link></li>
              <li><Link href="/education" className="hover:text-white transition-colors">Education</Link></li>
              <li><Link href="/suites" className="hover:text-white transition-colors">All Apps</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-cyan mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="https://calendar.app.google/EKCqCqgCpuZzuKs58" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Calendar className="w-4 h-4 text-cyan" /> Book a Discovery Call
                </a>
              </li>
              <li>
                <a href="https://wa.me/2347062547022" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4 text-green" /> Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hello@quickie-studio.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-white" /> hello@quickie-studio.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Quickie Studio. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built in Lagos, Nigeria 🇳🇬
          </p>

          {/* Back to Top Button */}
          <a
            href="#"
            className="w-10 h-10 bg-white/10 hover:bg-cyan hover:text-navy rounded-full flex items-center justify-center transition-colors group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

      </div>
    </footer>
  );
}