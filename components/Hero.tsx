import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand-sky/20 via-white to-brand-mint/10">
      <div className="container grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
        <div>
          <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-ink shadow">
            New Drop
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-brand-ink md:text-5xl">
            Everyday pieces with a <span className="text-brand-mint">fresh</span> finish
          </h1>
          <p className="mt-3 max-w-prose text-slate-700">
            Soft fabrics, clean lines, and limited-run colorways. Designed to be worn hard and look effortless.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/catalog"
              className="rounded-xl bg-brand-ink px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Shop the collection
            </Link>
            <Link
              href="/about"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-ink shadow hover:bg-white/90"
            >
              Our story
            </Link>
          </div>
        </div>

        <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow md:h-96">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop"
            alt="Lookbook teaser"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}