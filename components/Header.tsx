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
        "rounded-xl px-3 py-2 text-sm font-medium hover:bg-brand-ink/5 " +
        (active ? "text-brand-ink" : "text-slate-700")
      }
    >
      {children}
    </Link>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 md:px-8 flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-brand-ink">
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