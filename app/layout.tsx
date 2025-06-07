import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PhishGuardAI - AI-Based Phishing Detection Research Project',
  description: 'Advanced AI-powered ensemble system for real-time phishing detection. A research project by Group 46, Faculty of Technology, University of Sri Jayewardenepura.',
  keywords: 'phishing detection, AI, machine learning, cybersecurity, ensemble methods, research project',
  authors: [{ name: 'Group 46 - University of Sri Jayewardenepura' }],
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