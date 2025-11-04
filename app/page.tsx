import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../lib/sanity";

export default async function HomePage() {
  const products = await getProducts();
  const featured = products.slice(0, 6);

  return (
    <>
      <Hero />
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-10 md:py-14">
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
      </div>
    </>
  );
}