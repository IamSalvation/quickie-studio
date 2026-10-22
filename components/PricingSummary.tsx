import Link from "next/link";

export function PricingSummary() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4">
          Simple, honest pricing.
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Start with the free tools. Upgrade when you need the heavy hitters.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
          
          {/* Free Tier */}
          <div className="rounded-2xl bg-white p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-navy mb-2">The Studio</h3>
            <p className="text-3xl font-extrabold text-navy mb-4">Free today</p>
            <p className="text-sm text-gray-500 mb-6">
              Access Docs, Eye, Swap, Prep, and Bible. Chat is free when it launches.
            </p>
            <ul className="space-y-3 mb-8 text-sm text-gray-600">
              <li className="flex items-center gap-2">✓ No credit card required</li>
              <li className="flex items-center gap-2">✓ Works instantly in browser</li>
              <li className="flex items-center gap-2">✓ Offline where supported</li>
            </ul>
            <Link href="/suites" className="block w-full rounded-lg bg-gray-100 py-3 text-center text-sm font-bold text-navy hover:bg-gray-200 transition-colors">
              Explore free apps
            </Link>
          </div>

          {/* Paid Tier */}
          <div className="rounded-2xl bg-navy p-8 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-quickie-gradient text-navy text-xs font-bold px-3 py-1 rounded-bl-lg">
              The Pro Tools
            </div>
            <h3 className="text-xl font-bold text-white mb-2">The Heavy Hitters</h3>
            <p className="text-3xl font-extrabold text-white mb-4">Paid</p>
            <p className="text-sm text-gray-300 mb-6">
              Pinkas, ClockIt, and Omni. Serious tools for schools, teams, and AI.
            </p>
            <ul className="space-y-3 mb-8 text-sm text-gray-300">
              <li className="flex items-center gap-2">✓ Pinkas from ₦35,000/month</li>
              <li className="flex items-center gap-2">✓ ClockIt pricing on request</li>
              <li className="flex items-center gap-2">✓ Omni launching soon</li>
            </ul>
            <Link href="/pricing" className="block w-full rounded-lg bg-quickie-gradient py-3 text-center text-sm font-bold text-navy hover:opacity-90 transition-opacity">
              See full pricing
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
