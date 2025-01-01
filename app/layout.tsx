import "./global.css";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";
import Footer from "./components/page-sections/shell/footer";
import Header from "./components/page-sections/shell/header";
import SmoothScrolling from "./components/animations/smooth-scrolling";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Longhorn Design Studio",
    template: "%s | Longhorn Design Studio",
  },
  description: "Austin Texas Web Design & Development",
  openGraph: {
    title: "Longhorn Design Studio",
    description: "Austin Texas Web Design & Development",
    url: baseUrl,
    siteName: "Longhorn Design Studio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lora.variable}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ast7rab.css" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className="antialiased dark bg-stone-950 font-serif text-stone-100 selection:bg-marzipan-200 selection:text-stone-950">
        <SmoothScrolling>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrolling>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
