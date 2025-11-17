export default async function st({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <> hi page id: {id}</>;
}
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
