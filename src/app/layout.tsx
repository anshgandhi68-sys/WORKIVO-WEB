import type { Metadata } from "next";
import { Comfortaa, Marcellus } from "next/font/google";
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
  title: "Workivo: Small task, Big relief",
  description: "Your home needs a hand. We've got you. Workivo connects customers who need everyday household services with workers who provide those services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.variable} ${marcellus.variable}`}>
        {children}
      </body>
    </html>
  );
}
