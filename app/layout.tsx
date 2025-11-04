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
      <body className="bg-brand-sand text-slate-800">
        <Header />
        <main className="pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}