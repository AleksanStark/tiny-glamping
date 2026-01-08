// src/app/houses/[id]/page.tsx

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

export default function HousePage({ params }: { params: { id: string } }) {
  return (
    <>
      <pre>{JSON.stringify(params, null, 2)}</pre>
      <h1>{params.id}</h1>
    </>
  );
}
