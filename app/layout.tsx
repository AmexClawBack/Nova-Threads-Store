import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Nova Threads",
  description: "Everyday pieces with a fresh finish.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-sand text-slate-800">
        <Header />
        <main className="pt-6 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}