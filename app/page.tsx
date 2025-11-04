import ProductCard from "../components/ProductCard";
import { getProducts } from "../lib/sanity";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      {/* HERO */}
      <section className="relative border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
              New drop live
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Limited-run merch made to last.
            </h1>
            <p className="mt-4 max-w-prose text-slate-700">
              Premium tees, hoodies, and caps. Clean design, fast checkout, and drops that sell out.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#catalog" className="rounded-xl bg-black px-5 py-3 font-semibold text-white hover:opacity-90">
                Shop now
              </a>
              <a href="http://localhost:3333" className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50">
                Open CMS
              </a>
            </div>

            {/* Trust bar */}
            <div className="mt-10 flex items-center gap-8 text-slate-500">
              <div className="h-6 w-20 rounded bg-slate-200" />
              <div className="h-6 w-20 rounded bg-slate-200" />
              <div className="h-6 w-20 rounded bg-slate-200" />
              <div className="h-6 w-20 rounded bg-slate-200" />
            </div>
          </div>

          {/* hero image */}
          <div className="flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hero.jpg" alt="Nova Merch" className="rounded-2xl border border-slate-200 shadow-sm" />
          </div>
        </div>
      </section>

      {/* FEATURED GRID */}
      <section id="catalog" className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Featured</h2>
          <p className="text-sm text-slate-600">{products.length} products</p>
        </div>

        {products.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-slate-600">
            No products yet. Add one in the CMS → publish → refresh this page.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard
                key={p._id}
                id={p._id}
                slug={p.slug}
                title={p.title}
                price={p.price}
                image={p.images?.[0]?.url}
                description={p.description}
              />
            ))}
          </div>
        )}
      </section>

      {/* BENEFITS */}
      <section id="about" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">Built for speed</h3>
            <p className="mt-2 text-slate-700">Next.js + SSR for SEO and fast loads. Stripe Checkout for instant, secure payments.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Easy to manage</h3>
            <p className="mt-2 text-slate-700">Add or edit products in Sanity CMS without touching code.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Designed to convert</h3>
            <p className="mt-2 text-slate-700">Minimal layout, strong CTAs, hover-lift cards, and trust signals like top merch stores.</p>
          </div>
        </div>
      </section>
    </>
  );
}
