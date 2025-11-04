import { redirect } from "next/navigation";
import { getProductBySlug } from "../../../lib/sanity";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const p = await getProductBySlug(slug);

  if (!p) {
    return <main className="mx-auto max-w-6xl px-4 py-16">Not found</main>;
  }

  async function buy() {
    "use server";
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId: p.stripePriceId, quantity: 1 }),
    });
    const { url } = await res.json();
    if (!url) throw new Error("Checkout failed");
    redirect(url);
  }

  const images = p.images?.map((i) => i.url).filter(Boolean) ?? [];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-2">
        {/* Gallery */}
        <div>
          {images[0] && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={images[0] as string}
              alt={p.title}
              className="aspect-square w-full rounded-2xl border border-slate-200 object-cover shadow-sm"
            />
          )}
          {images.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-3">
              {images.slice(1, 5).map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={src as string} alt="" className="aspect-square w-full rounded-xl border border-slate-200 object-cover" />
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{p.title}</h1>
          <p className="mt-2 text-slate-700">{p.description}</p>
          <p className="mt-4 text-2xl font-semibold">${(p.price / 100).toFixed(2)}</p>

          <form action={buy} className="mt-6">
            <button className="rounded-xl bg-black px-5 py-3 font-semibold text-white hover:opacity-90">
              Buy now
            </button>
          </form>

          <ul className="mt-6 grid gap-2 text-sm text-slate-600">
            <li>✔ Secure Stripe Checkout</li>
            <li>✔ Fast delivery on all orders</li>
            <li>✔ 30-day returns</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
