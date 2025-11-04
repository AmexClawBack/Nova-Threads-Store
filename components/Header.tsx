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
        "rounded-xl px-3 py-2 text-sm font-medium hover:bg-white/10 " +
        (active ? "bg-white/15 text-white" : "text-white/90")
      }
    >
      {children}
    </Link>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-ink/95 backdrop-blur supports-[backdrop-filter]:bg-brand-ink/80 shadow">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-white">
          <div className="h-7 w-7 rounded-lg bg-brand-mint" />
          <span className="text-base font-extrabold tracking-tight">Nova Threads</span>
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