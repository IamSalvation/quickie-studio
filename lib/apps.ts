export type Suite = "money" | "work" | "create" | "learn" | "ai";
export type AppStatus = "live" | "coming-soon";

export type App = {
  slug: string;
  name: string;
  suite: Suite;
  tagline: string;
  url: string | null;
  status: AppStatus;
  pricing: "paid" | "free";
  flagship?: boolean;
  launchNote?: string;
};

export const apps: App[] = [
  { slug: "pinkas", name: "Quickie Pinkas", suite: "money", tagline: "Presence tracking for schools, events and bootcamps.", url: "https://quickie-pinkas.vercel.app", status: "live", pricing: "paid", flagship: true },
  { slug: "clockit", name: "Quickie ClockIt", suite: "money", tagline: "Workforce attendance and payroll, built for teams.", url: "https://quickie-clockit.vercel.app", status: "live", pricing: "paid", flagship: true },
  { slug: "docs", name: "Quickie Docs", suite: "work", tagline: "A full-featured editor that works offline.", url: "https://iamsalvation.github.io/quickie_docs/", status: "live", pricing: "free" },
  { slug: "chat", name: "Quickie Chat", suite: "work", tagline: "Instant private chat. No sign-up required.", url: null, status: "coming-soon", pricing: "free", launchNote: "Shipping soon" },
  { slug: "eye", name: "Quickie Eye", suite: "create", tagline: "Teleprompter and camera for creators.", url: "https://iamsalvation.github.io/quickie_eye/", status: "live", pricing: "free" },
  { slug: "swap", name: "Quickie Swap", suite: "create", tagline: "Swap anything. Nothing uploaded. Ever.", url: "https://quickie-swap.netlify.app", status: "live", pricing: "free" },
  { slug: "prep", name: "Quickie Prep", suite: "learn", tagline: "10,000+ verified JAMB questions. 100% offline.", url: "https://quickie-prep.netlify.app", status: "live", pricing: "free" },
  { slug: "bible", name: "Oneness Bible", suite: "learn", tagline: "One with The Word. Offline, in four languages.", url: "https://iamsalvation.github.io/bible-site/", status: "live", pricing: "free" },
  { slug: "omni", name: "Omni", suite: "ai", tagline: "Your AI assistant across the Studio.", url: null, status: "coming-soon", pricing: "paid", launchNote: "Launching soon" },
];

export const totalApps = apps.length;
export const liveApps = apps.filter(a => a.status === "live").length;
export const comingSoonApps = apps.filter(a => a.status === "coming-soon").length;
