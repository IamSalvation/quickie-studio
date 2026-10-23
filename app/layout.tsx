import type { Metadata } from "next";
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
  metadataBase: new URL("https://quickie-studio.vercel.app"), // Change this if your URL is different
  title: "Quickie Studio | One Studio. Nine tools.",
  description: "A hub of nine apps for schools, businesses, creators and learners. Built in Lagos, Nigeria.",
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