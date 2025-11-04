import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import { getCategories, getProductsFiltered } from "../../lib/sanity";

type SearchParams = {
  cat?: string | string[];
  q?: string | string[];
  sort?: string | string[];
};

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;

  const activeCat = Array.isArray(sp.cat) ? sp.cat[0] : sp.cat || undefined;
  const query     = Array.isArray(sp.q)   ? sp.q[0]   : sp.q   || "";
  const sort      = Array.isArray(sp.sort)? sp.sort[0]: sp.sort|| "newest";

  const [categories, productsRaw] = await Promise.all([
    getCategories(),
    getProductsFiltered(activeCat, query || undefined),
  ]);

  // Sort client-side for reliability across GROQ versions
  const products = [...productsRaw].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    // "newest" (default) – assume _id creation order already desc-ish from GROQ,
    // but keep stable:
    return 0;
  });

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight">Catalog</h1>
        <p className="mt-2 text-slate-600">Browse all products. Filter by category, search, and sort.</p>
      </header>

      {/* Controls: Category chips */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <FilterChip label="All" href="/catalog" active={!activeCat} />
        {categories.map((c) => (
          <FilterChip
            key={c._id}
            label={c.title}
            href={`/catalog?cat=${encodeURIComponent(c.slug)}${query ? `&q=${encodeURIComponent(query)}` : ""}${sort ? `&sort=${encodeURIComponent(sort)}` : ""}`}
            active={activeCat === c.slug}
          />
        ))}
      </div>

      {/* Controls: Search + Sort form (GET) */}
      <form method="GET" action="/catalog" className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Preserve category if active */}
        {activeCat && <input type="hidden" name="cat" value={activeCat} />}

        <input
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Search products..."
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-amber-400 sm:max-w-sm"
        />

        <select
          name="sort"
          defaultValue={sort}
          className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400"
        >
          <option value="newest">Newest</option>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
        </select>

        <div className="flex gap-2">
          <button className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
            Apply
          </button>
          <Link
            href="/catalog"
            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Clear
          </Link>
        </div>
      </form>

      {/* Results */}
      {products.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-slate-600">
          No products match your filters.
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
    </main>
  );
}

function FilterChip({ label, href, active }: { label: string; href: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={
        "rounded-full border px-4 py-2 text-sm transition " +
        (active
          ? "border-black bg-black font-semibold text-white"
          : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50")
      }
    >
      {label}
    </Link>
  );
}
