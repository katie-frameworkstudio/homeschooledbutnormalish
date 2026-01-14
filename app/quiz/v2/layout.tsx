import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Homeschool? Find Your Path | Michael Ramey",
  description:
    "Take this quick quiz to discover your biggest homeschooling concern and get clear, practical answers.",
  robots: "noindex, nofollow", // Hidden from search engines during A/B test
};

export default function QuizV2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
