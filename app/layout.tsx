export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import "./globals.css";
import { Inter, Urbanist} from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-urbanist'
})

export const metadata: Metadata = {
  title: "Motammo",
  description: "Travel as it should be.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${urbanist.variable}`}>{children}</body>
    </html>
  );
}
