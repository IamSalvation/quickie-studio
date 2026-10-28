// lib/apps.ts

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
  // MONEY (Paid)
  { slug: "pinkas", name: "Quickie Pinkas", suite: "money", tagline: "Session tracking for schools, events, and stays. Recurring sessions, master sheets, and Face AI.", url: "https://pinkas.quickie-studio.com", status: "live", pricing: "paid", flagship: true },
  { slug: "clockit", name: "Quickie ClockIt", suite: "money", tagline: "Workforce HR and payroll. Shift routing, face verification, and one-click CSV exports.", url: "https://clockit.quickie-studio.com", status: "live", pricing: "paid", flagship: true },

  // WORK (Free)
  { slug: "docs", name: "Quickie Docs", suite: "work", tagline: "A full-featured editor that works offline.", url: "https://iamsalvation.github.io/quickie_docs/", status: "live", pricing: "free" },
  { slug: "chat", name: "Quickie Chat", suite: "work", tagline: "Real-time private messaging. No email required. Voice notes & media sharing.", url: "https://chat.quickie-studio.com", status: "live", pricing: "free", flagship: true },
  { slug: "kaleo", name: "Kaleo", suite: "work", tagline: "Data-saving voice & video calls. Crystal clear, even on limited mobile data.", url: "https://kaleo-o4es.onrender.com", status: "live", pricing: "free" },

  // CREATE (Free)
  { slug: "eye", name: "Quickie Eye", suite: "create", tagline: "Teleprompter and camera for creators.", url: "https://iamsalvation.github.io/quickie-eye/", status: "live", pricing: "free" },
  { slug: "swap", name: "Quickie Swap", suite: "create", tagline: "Swap anything. Nothing uploaded. Ever.", url: "https://quickie-swap.netlify.app", status: "live", pricing: "free" },
  { slug: "aidao", name: "Aidao Player", suite: "create", tagline: "A premium, offline-capable media player with an audio visualizer and 3-band EQ.", url: "https://iamsalvation.github.io/aidao-player/", status: "live", pricing: "free" },

  // LEARN (Free)
  { slug: "prep", name: "Quickie Prep", suite: "learn", tagline: "10,000+ verified JAMB questions. 100% offline.", url: "https://quickie-prep.netlify.app", status: "live", pricing: "free" },
  { slug: "bible", name: "Oneness Bible", suite: "learn", tagline: "One with The Word. Offline, in four languages.", url: "https://iamsalvation.github.io/bible-site/", status: "live", pricing: "free" },

  // AI (Free / Live)
  { slug: "omni", name: "Omni", suite: "ai", tagline: "Your general-purpose AI assistant for writing, planning, and analyzing.", url: "https://omni.quickie-studio.com", status: "live", pricing: "free" },
];

export const totalApps = apps.length;
export const liveApps = apps.filter(a => a.status === "live").length;
export const comingSoonApps = apps.filter(a => a.status === "coming-soon").length;
export const paidApps = apps.filter(a => a.pricing === "paid").length;