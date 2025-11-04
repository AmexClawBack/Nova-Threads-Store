import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nova | Premium Merch",
  description: "Premium, limited-run apparel with fast Stripe Checkout.",
  openGraph: {
    title: "Nova | Premium Merch",
    description: "Premium, limited-run apparel with fast Stripe Checkout.",
    url: "http://localhost:3000",
    siteName: "Nova",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Nova Merch" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Nova | Premium Merch", images: ["/og.jpg"] },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-slate-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
