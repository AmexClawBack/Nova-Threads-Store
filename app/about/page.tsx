export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <section className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight">About Nova</h1>
        <p className="mt-4 text-slate-700">
          Nova is a small, design-led merch label focused on limited-run drops. We value clean design,
          durable garments, and a smooth buying experience.
        </p>
        <p className="mt-4 text-slate-700">
          This site is built on Next.js, Sanity CMS, and Stripe Checkout so we can ship fast without
          sacrificing quality.
        </p>
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-bold">Quality</h3>
          <p className="mt-2 text-sm text-slate-700">Premium blanks, detailed prints, and fit you actually want to wear.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-bold">Limited drops</h3>
          <p className="mt-2 text-sm text-slate-700">When it’s gone, it’s gone. Join the list to catch the next release.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-bold">Secure & fast</h3>
          <p className="mt-2 text-sm text-slate-700">Stripe powers checkout. No card data is stored on our servers.</p>
        </div>
      </section>
    </main>
  );
}
