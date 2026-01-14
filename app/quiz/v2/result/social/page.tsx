import { Metadata } from "next";
import ResultLayout from "@/components/quiz/ResultLayout";

export const metadata: Metadata = {
  title: "Socialization - Quiz Results | Michael Ramey",
  description: "The truth about homeschool socialization and raising socially confident kids.",
  robots: "noindex, nofollow",
};

export default function SocialResultPage() {
  return (
    <ResultLayout
      title="Socialization"
      subtitle="Your biggest question: 'Will my kid be weird and friendless?'"
      body={[
        "Let's address this head-on: 'What about socialization?' is THE question everyone asks. It's the big one. The scary one.",
        "So here's a story: Between my junior and senior years of high school, I went to 10 different homecoming dances, 8 different proms, a Cotillion (I still don't know what that was), and I never had a weekend off from parties.",
        "I never set foot in a traditional high school.",
        "I had at least 5 different friend groups—all from different walks of life. Sports friends. Dance friends. Theater friends. Some poor, some rich, some in between. To me, they were different worlds I could jump between whenever I wanted.",
        "If anything, I was way more socialized than my traditionally schooled peers—because I practiced socializing in the real world, with people of all ages, not just 30 kids born the same year as me.",
        "Here's what people get wrong about socialization: It's not about quantity. It's about quality. Your kid won't be weird. They won't be friendless. They won't struggle to 'fit in' later. In fact, they'll probably be more comfortable in diverse social situations than their peers.",
        "The secret? One simple thing: put your kid on teams. Sports leagues, dance classes, theater groups, co-ops, clubs. These aren't just 'activities'—they're social foundations where real friendships form.",
      ]}
      keyPoints={[
        "Homeschoolers aren't socially stunted—many are more socially confident than their peers",
        "Real-world socialization (all ages) builds better social skills than age-segregated classrooms",
        "The secret: regular team activities (sports, theater, dance, co-ops) create lasting friendships",
        "Your kid will have opportunities to socialize—you just need to create them intentionally",
        "Quality matters more than quantity: deep friendships beat superficial classroom acquaintances",
        "Homeschoolers often navigate diverse social situations better because they practice with varied groups",
        "You're not condemning your kid to weirdness—you're giving them tools to thrive socially",
      ]}
    />
  );
}
