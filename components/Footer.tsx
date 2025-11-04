export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-amber-400" />
            <span className="font-semibold">Nova</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Limited-run apparel. Built with Next.js, Sanity, and Stripe.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="/#about" className="hover:text-black">About</a></li>
            <li><a href="/terms" className="hover:text-black">Terms</a></li>
            <li><a href="/privacy" className="hover:text-black">Privacy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Get updates</h4>
          <form className="mt-3 flex items-center gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-amber-400"
            />
            <button className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nova. All rights reserved.</p>
          <p>Powered by Next.js · Sanity · Stripe</p>
        </div>
      </div>
    </footer>
  );
}
