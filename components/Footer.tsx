import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container grid gap-8 py-10 md:grid-cols-4">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-brand-mint" />
            <span className="font-extrabold text-brand-ink">Nova Threads</span>
          </div>
          <p className="text-sm text-slate-600">
            Contemporary basics, limited drops, and seasonal color stories.
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-brand-ink">Shop</h3>
          <ul className="space-y-1 text-sm text-slate-600">
            <li><Link href="/catalog?cat=hoodies">Hoodies</Link></li>
            <li><Link href="/catalog?cat=tees">Tees</Link></li>
            <li><Link href="/catalog?cat=accessories">Accessories</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-brand-ink">Company</h3>
          <ul className="space-y-1 text-sm text-slate-600">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><Link href="/#returns">Returns</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold text-brand-ink">Get updates</h3>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-sky"
            />
            <button className="rounded-xl bg-brand-ink px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4">
        <div className="container flex items-center justify-between text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Nova Threads</span>
          <span>Powered by Next.js · Sanity · Stripe</span>
        </div>
      </div>
    </footer>
  );
}