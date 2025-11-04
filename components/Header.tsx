"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={
        "rounded-xl px-3 py-2 text-sm font-medium hover:bg-white/60 " +
        (active ? "bg-white text-brand-ink" : "text-white/90")
      }
    >
      {children}
    </Link>
  );
};

export default function Header() {
  return (
    <header className="bg-brand-ink text-white">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-brand-mint" />
          <span className="text-lg font-extrabold tracking-tight">Nova Threads</span>
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/catalog">Catalog</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}