export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl font-extrabold text-brand-ink">About Nova Threads</h1>
      <p className="mt-4 max-w-prose text-slate-700">
        We started Nova Threads to create everyday pieces that feel good the second you put them on, and look even better with time.
        We release small, considered drops so we can obsess over fabric, fit, and finish. No big-box inventory. No trendy noise. Just
        garments you reach for without thinking.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold text-brand-ink">Responsible Materials</p>
          <p className="mt-2 text-sm text-slate-600">We favor cotton blends and recycled fibers that balance handfeel, durability, and impact.</p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold text-brand-ink">Small-Batch Production</p>
          <p className="mt-2 text-sm text-slate-600">Limited runs keep quality high and waste low. When a colorway is gone, it&apos;s gone.</p>
        </div>
      </div>
    </div>
  );
}