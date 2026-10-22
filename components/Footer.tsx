import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Image src="/logos/quickie-studio.png" alt="Quickie Studio" width={24} height={24} className="rounded" />
            <span className="text-lg font-bold text-navy">Quickie Studio</span>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm font-medium text-gray-500">
            <Link href="/suites" className="hover:text-navy transition-colors">Apps</Link>
            <Link href="/pricing" className="hover:text-navy transition-colors">Pricing</Link>
            <Link href="/about" className="hover:text-navy transition-colors">About</Link>
            <Link href="/changelog" className="hover:text-navy transition-colors">Changelog</Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            Built in Lagos, Nigeria 🇳🇬
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
          © 2026 Quickie Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

