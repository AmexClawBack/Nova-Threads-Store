import { createClient, groq } from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: !process.env.SANITY_READ_TOKEN,
  token: process.env.SANITY_READ_TOKEN,
  perspective: "published" as const,
};

export const sanityClient = createClient(config);

export type Category = {
  _id: string;
  title: string;
  slug: string;
};

export type Product = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  price: number;
  stripePriceId: string;
  images?: { url: string }[];
  active?: boolean;
  categories?: { _id: string; title: string; slug: string }[];
};

const PRODUCT_FIELDS = groq`{
  _id,
  title,
  "slug": slug.current,
  description,
  price,
  stripePriceId,
  "images": images[]{ "url": asset->url },
  active,
  "categories": categories[]->{
    _id, title, "slug": slug.current
  }
}`;

export async function getCategories(): Promise<Category[]> {
  return sanityClient.fetch(
    groq`*[_type == "category"] | order(title asc) { _id, title, "slug": slug.current }`
  );
}

export async function getProducts(): Promise<Product[]> {
  return sanityClient.fetch(
    groq`*[_type == "product" && (active == true || !defined(active))] | order(_createdAt desc) ${PRODUCT_FIELDS}`
  );
}

export async function getProductsFiltered(cat?: string, q?: string) {
  const pattern = q ? `*${q}*` : undefined;

  // no filters
  if (!cat && !pattern) {
    return sanityClient.fetch(
      groq`*[_type == "product" && (active == true || !defined(active))] | order(_createdAt desc) ${PRODUCT_FIELDS}`
    );
  }

  // only category
  if (cat && !pattern) {
    return sanityClient.fetch(
      groq`*[
        _type == "product" &&
        (active == true || !defined(active)) &&
        $cat in categories[]->slug.current
      ] | order(_createdAt desc) ${PRODUCT_FIELDS}`,
      { cat }
    );
  }

  // only search
  if (!cat && pattern) {
    return sanityClient.fetch(
      groq`*[
        _type == "product" &&
        (active == true || !defined(active)) &&
        (title match $pattern || description match $pattern)
      ] | order(_createdAt desc) ${PRODUCT_FIELDS}`,
      { pattern }
    );
  }

  // both
  return sanityClient.fetch(
    groq`*[
      _type == "product" &&
      (active == true || !defined(active)) &&
      $cat in categories[]->slug.current &&
      (title match $pattern || description match $pattern)
    ] | order(_createdAt desc) ${PRODUCT_FIELDS}`,
    { cat, pattern }
  );
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return sanityClient.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] ${PRODUCT_FIELDS}`,
    { slug }
  );
}
