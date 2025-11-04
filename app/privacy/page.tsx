export default function Privacy(){
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-slate-700">We collect only what we need to process orders and improve the site. Payments are handled by Stripe; we never store card data.</p>
      <h2 className="mt-8 text-xl font-semibold">What we collect</h2>
      <ul className="mt-2 list-disc pl-6 text-slate-700">
        <li>Name, email, shipping address</li>
        <li>Order details (items, totals)</li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-slate-700">Questions? Email support@novamerch.example</p>
    </main>
  );
}
