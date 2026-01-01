import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Homeschool? Find Your Path | Michael Ramey",
  description:
    "Take this 2-minute quiz to discover your biggest homeschooling concern and get personalized resources, free chapters, and a custom action plan.",
  robots: "noindex, nofollow", // Hidden from search engines until ready to launch
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

