import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quickie-studio.vercel.app"), // Change if your domain is different
  title: "Quickie Studio | One Studio. Nine tools.",
  description: "A hub of nine apps for schools, businesses, creators and learners. Built in Lagos, Nigeria.",

  // PWA & iOS Configuration
  manifest: "/logos/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Quickie Studio",
  },
  icons: {
    icon: [
      { url: "/logos/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logos/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logos/favicon.ico" },
    ],
    apple: [
      { url: "/logos/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  openGraph: {
    title: "Quickie Studio | One Studio. Nine tools.",
    description: "A hub of nine apps for schools, businesses, creators and learners. Built in Lagos, Nigeria.",
    url: "https://quickie-studio.vercel.app",
    siteName: "Quickie Studio",
    images: [
      {
        url: "/logos/quickie-studio.png",
        width: 800,
        height: 600,
        alt: "Quickie Studio Logo",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quickie Studio | One Studio. Nine tools.",
    description: "A hub of nine apps for schools, businesses, creators and learners.",
    images: ["/logos/quickie-studio.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1C3A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}