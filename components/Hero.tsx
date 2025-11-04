import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand-sky/20 via-white to-brand-mint/10">
      <div className="container grid items-center gap-8 py-14 md:grid-cols-2 md:py-20">
        <div>
          <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-ink shadow-soft">
            New Drop
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-brand-ink md:text-5xl">
            Everyday pieces with a <span className="text-brand-mint">fresh</span> finish
          </h1>
          <p className="mt-3 max-w-prose text-slate-600">
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
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-ink shadow-soft hover:bg-white/90"
            >
              Our story
            </Link>
          </div>
        </div>
        <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-soft md:h-96">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-lookbook.jpg"
            alt="Lookbook teaser"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}