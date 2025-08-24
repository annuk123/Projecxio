import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { MobileBottomNav } from "@/components/navbar/mobileView/MobileBottomNav";
import { ConvexClientProvider } from "@/components/provider/provider";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Projexio | Annu Kumari",

  description: "Portfolio of Annu Kumari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" richColors />
        <ConvexClientProvider>
        {children}
        </ConvexClientProvider>
        <Analytics />
        <SpeedInsights />
        <MobileBottomNav />
      </body>
    </html>
  );
}
