import Link from "next/link";

type CardProps = {
  id: string;
  slug: string;
  title: string;
  price: number; // cents
  image?: string;
  description?: string;
};

export default function ProductCard({ id, slug, title, price, image, description }: CardProps) {
  return (
    <Link
      key={id}
      href={`/product/${slug}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={title}
          className="mb-3 aspect-square w-full rounded-xl object-cover transition group-hover:scale-[1.01]"
        />
      )}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold tracking-tight">{title}</h3>
        <span className="font-semibold">${(price / 100).toFixed(2)}</span>
      </div>
      {description && (
        <p className="mt-1 line-clamp-2 text-sm text-slate-600">{description}</p>
      )}
    </Link>
  );
}
