import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../lib/sanity";

export default async function HomePage() {
  const products = await getProducts();
  const featured = products.slice(0, 6);

  return (
    <>
      <Hero />
      <div className="container py-12 md:py-16">
        <section>
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-extrabold text-brand-ink">Featured</h2>
            <a href="/catalog" className="text-sm font-semibold text-brand-ink underline underline-offset-2">View all</a>
          </div>
          {featured.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-600">
              Add products in the CMS to see them here.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((p) => (
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

        <section id="faq" className="mt-16">
          <h3 className="text-xl font-bold text-brand-ink">FAQ</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold text-brand-ink">Shipping</p>
              <p className="mt-1 text-sm text-slate-600">Orders ship in 2–4 business days. Free shipping over $75.</p>
            </div>
            <div id="returns" className="rounded-2xl bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold text-brand-ink">Returns</p>
              <p className="mt-1 text-sm text-slate-600">30-day returns on unworn items. Start a return from your order email.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold text-brand-ink">Sizing</p>
              <p className="mt-1 text-sm text-slate-600">True-to-size modern fit. Size up for a looser silhouette.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}