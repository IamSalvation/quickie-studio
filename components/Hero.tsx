import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
        
        {/* Eyebrow Badge */}
        <div className="mb-8 inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-600">
          <span className="flex h-2 w-2 rounded-full bg-green mr-2 animate-pulse"></span>
          7 Live today. 2 shipping soon.
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl font-extrabold tracking-tight text-navy md:text-6xl lg:text-7xl mb-6 text-balance">
          One Studio. Nine tools. For schools, businesses, creators and everyday work.
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto text-balance">
          Whether you're running a school, a team, a business or a solo project — Quickie Studio has a tool for it. 
          <span className="font-semibold text-navy"> Three are paid. The rest are free today.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#suites" 
            className="w-full sm:w-auto rounded-full bg-navy px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            Explore the Studio ↓
          </Link>
          <Link 
            href="/suites" 
            className="w-full sm:w-auto rounded-full border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-navy transition-colors hover:bg-gray-50"
          >
            View all apps
          </Link>
        </div>

        {/* Built in Lagos Note */}
        <p className="mt-8 text-sm font-medium text-gray-400">
          Built in Lagos, Nigeria 🇳🇬
        </p>
      </div>
    </section>
  );
}
