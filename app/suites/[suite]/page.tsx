import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { apps, Suite } from "@/lib/apps";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const suiteDetails: Record<Suite, { title: string, description: string }> = {
    money: { title: "Money", description: "Presence, attendance and payroll — for schools, events and teams." },
    work: { title: "Work", description: "Write and talk — privately, in your browser." },
    create: { title: "Create", description: "Record and convert — nothing uploaded." },
    learn: { title: "Learn", description: "Study and read — offline where it counts." },
    ai: { title: "AI", description: "One assistant across the Studio." },
};

// This tells Next.js exactly which pages to build ahead of time.
export async function generateStaticParams() {
    return [
        { suite: "money" },
        { suite: "work" },
        { suite: "create" },
        { suite: "learn" },
        { suite: "ai" },
    ];
}

export default async function SuitePage({ params }: { params: Promise<{ suite: string }> }) {
    const resolvedParams = await params;
    const suiteKey = resolvedParams.suite as Suite;

    if (!suiteDetails[suiteKey]) {
        notFound();
    }

    const suiteInfo = suiteDetails[suiteKey];
    const suiteApps = apps.filter((a) => a.suite === suiteKey);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-24 pb-16 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <Link href="/" className="text-sm font-medium text-gray-500 hover:text-navy mb-6 inline-block">
                        ← Back to Studio
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-navy tracking-tight mb-4">
                        {suiteInfo.title}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl">{suiteInfo.description}</p>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {suiteApps.map((app) => (
                            <div key={app.slug} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <Image src={`/logos/${app.slug}.png`} alt={app.name} width={48} height={48} className="rounded-xl" />
                                    <div>
                                        <h2 className="text-2xl font-bold text-navy flex items-center gap-2">
                                            {app.name}
                                            {app.status === "coming-soon" && (
                                                <span className="text-xs uppercase bg-gray-100 text-gray-500 px-2 py-1 rounded-md">Soon</span>
                                            )}
                                        </h2>
                                        <p className="text-sm font-medium text-gray-500">
                                            {app.pricing === "paid" ? "Paid" : "Free today"}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-8 flex-grow">{app.tagline}</p>

                                {app.status === "live" ? (
                                    <Link
                                        href={app.url || "#"}
                                        target="_blank"
                                        className="inline-block rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy/90 transition-colors w-fit"
                                    >
                                        Open {app.name} ↗
                                    </Link>
                                ) : (
                                    <span className="inline-block rounded-full bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-400 cursor-not-allowed w-fit">
                                        {app.launchNote || "Coming Soon"}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}