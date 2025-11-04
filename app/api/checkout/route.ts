import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const { priceId, quantity = 1 } = await req.json();

    if (!priceId) {
      return new Response(JSON.stringify({ error: "Missing priceId" }), { status: 400 });
    }
    if (!process.env.NEXT_PUBLIC_BASE_URL) {
      return new Response(JSON.stringify({ error: "Missing NEXT_PUBLIC_BASE_URL" }), { status: 500 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity }],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      // Optional: collect shipping/address/email if you want
      // shipping_address_collection: { allowed_countries: ["US", "CA"] },
    });

    return Response.json({ url: session.url });
  } catch (err: any) {
    console.error("Checkout error:", err);
    return new Response(JSON.stringify({ error: err.message || "Checkout failed" }), { status: 500 });
  }
}
