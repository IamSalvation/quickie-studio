import { Lock, Zap, X } from "lucide-react";

export function StudioStandard() {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            No bloat. Just tools that work.
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We strip away the unnecessary to give you software that gets straight to the point.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Pillar 1 */}
          <div className="text-center md:text-left">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 mb-6 mx-auto md:mx-0">
              <Lock className="w-6 h-6 text-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">100% Yours</h3>
            <p className="text-gray-400">
              Docs and Bible keep your data on your device. No forced cloud syncs, no hidden telemetry. Your work is yours.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="text-center md:text-left">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 mb-6 mx-auto md:mx-0">
              <Zap className="w-6 h-6 text-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Instant Access</h3>
            <p className="text-gray-400">
              Built without heavy frameworks where it counts. Zero wait times, instant loads, and a UI that stays out of your way.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="text-center md:text-left">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 mb-6 mx-auto md:mx-0">
              <X className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">No Friction</h3>
            <p className="text-gray-400">
              No forced sign-ups. No credit card walls. For our free apps, just open the link and start working immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
