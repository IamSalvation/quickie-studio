import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2.5">
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
          <Link href="/business" className="text-sm font-medium text-gray-500 hover:text-navy transition-colors">
            Business
          </Link>
          <Link href="/suites" className="text-sm font-medium text-gray-500 hover:text-navy transition-colors">
            Apps
          </Link>
          <Link href="/ai" className="text-sm font-medium text-gray-500 hover:text-navy transition-colors">
            AI
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-500 hover:text-navy transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-500 hover:text-navy transition-colors">
            About
          </Link>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4">
          <Link href="/suites" className="hidden md:block text-sm font-medium text-navy hover:text-cyan transition-colors">
            View All Apps
          </Link>
          <Link href="/suites" className="rounded-full bg-quickie-gradient px-5 py-2 text-sm font-semibold text-navy shadow-sm transition-transform hover:scale-105 active:scale-95">
            Explore Studio
          </Link>
        </div>
      </div>
    </nav>
  );
}
