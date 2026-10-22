import Link from "next/link";
import Image from "next/image";
import { apps } from "@/lib/apps";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AllAppsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-4">
            The Studio Directory
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every app in the Quickie Studio, all in one place.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <div
                key={app.slug}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={`/logos/${app.slug}.png`}
                    alt={app.name}
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                  <h2 className="text-lg font-bold text-navy">{app.name}</h2>
                </div>
                <p className="text-sm text-gray-500 mb-6 line-clamp-2 flex-grow">{app.tagline}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-md ${
                      app.pricing === "paid"
                        ? "bg-navy/5 text-navy"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {app.pricing === "paid" ? "Paid" : "Free"}
                  </span>
                  {app.status === "live" ? (
                    <Link
                      href={app.url || "#"}
                      target="_blank"
                      className="text-sm font-medium text-cyan hover:text-navy"
                    >
                      Open ↗
                    </Link>
                  ) : (
                    <span className="text-xs font-medium text-gray-400">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
