import type { Metadata } from "next";
import { Comfortaa, Marcellus } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-comfortaa",
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.workivo.in"),
  title: "WORKIVO — Cooperative Service Marketplace",
  description: "Your home needs a hand. We've got you. Workivo connects customers who need everyday household services with verified local workers.",
  keywords: ["workivo", "home services", "electrician", "plumbing", "cleaning", "beautician", "cooking", "handyman", "appliance repair"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "WORKIVO — Cooperative Service Marketplace",
    description: "Audited living wages, cooperative guaranteed pricing, zero surge fees, and transparent peer escrow protection.",
    url: "https://www.workivo.in",
    siteName: "WORKIVO",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WORKIVO Logo & Brand",
      },
      {
        url: "/workivo-logo.png",
        width: 1024,
        height: 1024,
        alt: "WORKIVO Official Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WORKIVO — Cooperative Service Marketplace",
    description: "Audited living wages, cooperative guaranteed pricing, zero surge fees, and transparent peer escrow protection.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.workivo.in/#organization",
        "name": "WORKIVO",
        "alternateName": "Workivo Cooperative Marketplace",
        "url": "https://www.workivo.in",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.workivo.in/#logo",
          "url": "https://www.workivo.in/workivo-logo.png",
          "contentUrl": "https://www.workivo.in/workivo-logo.png",
          "caption": "WORKIVO Logo",
          "width": "1024",
          "height": "1024"
        },
        "image": {
          "@id": "https://www.workivo.in/#logo"
        },
        "sameAs": [
          "https://www.workivo.in"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.workivo.in/#website",
        "url": "https://www.workivo.in",
        "name": "WORKIVO",
        "publisher": {
          "@id": "https://www.workivo.in/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${comfortaa.variable} ${marcellus.variable}`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}

