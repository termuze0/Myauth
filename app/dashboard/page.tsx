// app/dashboard/page.tsx
export default async function DashboardPage() {
  // simulate async data fetching
  const data = await new Promise((resolve) => setTimeout(() => resolve("Loaded!"), 2000));

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{data}</h1>
    </div>
  );
}
