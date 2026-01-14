import { Metadata } from "next";
import ResultLayout from "@/components/quiz/ResultLayout";

export const metadata: Metadata = {
  title: "Cost - Quiz Results | Michael Ramey",
  description: "Learn what homeschooling actually costs and how to do it on any budget.",
  robots: "noindex, nofollow",
};

export default function CostResultPage() {
  return (
    <ResultLayout
      title="Cost"
      subtitle="Your biggest question: 'Can we actually afford this?'"
      body={[
        "Money is real talk. You're not overthinking this—budget matters. But here's what most people don't know:",
        "You most likely already have most of what you need.",
        "A notebook. A library card. Your kitchen table. Internet access. That's enough to start. Really.",
        "The homeschool industry wants you to believe you need $2,000 boxed curriculum sets, fancy manipulatives, and specialized equipment. But some of the best homeschoolers I know spend less than $500 per year—and their kids are thriving.",
        "Here's the truth: Homeschooling isn't about how much money you spend—it's about the time, energy, and intentionality you put into it.",
        "Yes, there are costs. Curriculum, activities, field trips, co-op fees—it adds up. But you have way more control than you think. You can start with free resources, see what works, and invest strategically from there.",
      ]}
      keyPoints={[
        "You can start homeschooling with what you already have at home",
        "Many families homeschool successfully on $300-$500 per year per child",
        "Your local library is your secret weapon (books, programs, museum passes—often free)",
        "Free online resources: Khan Academy, YouTube, PBS LearningMedia, and more",
        "The 'watch and learn' approach: See what your kid actually uses before buying more",
        "Co-ops and swaps let you share resources and split costs with other families",
        "Budget-conscious doesn't mean low-quality—creativity often beats expensive curriculum",
      ]}
    />
  );
}
