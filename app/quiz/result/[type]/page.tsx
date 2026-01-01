import ResultPageClient from "./ResultPageClient";

// Generate static pages for all three result types
export async function generateStaticParams() {
  return [
    { type: 'newbie' },
    { type: 'social' },
    { type: 'budget' },
  ];
}

export default function ResultPage({ params }: { params: { type: string } }) {
  return <ResultPageClient type={params.type} />;
}
