import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PhishGuardAI - AI-Based Phishing Detection Research Project",
  description:
    "Advanced AI-powered ensemble system for real-time phishing detection. A research project by Group 46, Faculty of Technology, University of Sri Jayewardenepura.",
  keywords:
    "phishing detection, AI, machine learning, cybersecurity, ensemble methods, research project",
  authors: [{ name: "Group 46 - University of Sri Jayewardenepura" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  // Google Site Verification
  verification: {
    google: "-31SSGj4xr8kv_0C44HcR_vToPCRv38BeEiUqpGCh4o",
  },
  // Open Graph metadata for social media sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://phishguardai.com", // Replace with your actual domain
    siteName: "PhishGuardAI",
    title: "PhishGuardAI - AI-Based Phishing Detection Research Project",
    description:
      "Advanced AI-powered ensemble system for real-time phishing detection. Achieving 89.2% accuracy using machine learning algorithms.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PhishGuardAI - AI Phishing Detection System",
        type: "image/png",
      },
    ],
  },
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "PhishGuardAI - AI-Based Phishing Detection",
    description:
      "Advanced AI-powered ensemble system for real-time phishing detection. University research project achieving 89.2% accuracy.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
