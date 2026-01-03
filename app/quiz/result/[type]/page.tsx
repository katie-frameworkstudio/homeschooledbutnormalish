import ResultPageClient from "./ResultPageClient";

// Generate static pages for all three result types
export async function generateStaticParams() {
  return [
    { type: 'newbie' },
    { type: 'social' },
    { type: 'budget' },
  ];
}

export default async function ResultPage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  return <ResultPageClient type={type} />;
}
