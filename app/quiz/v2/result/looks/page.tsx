import { Metadata } from "next";
import ResultLayout from "@/components/quiz/ResultLayout";

export const metadata: Metadata = {
  title: "What It Looks Like - Quiz Results | Michael Ramey",
  description: "Discover what a typical homeschool day actually looks like.",
  robots: "noindex, nofollow",
};

export default function LooksResultPage() {
  return (
    <ResultLayout
      title="What It Looks Like"
      subtitle="Your biggest question: 'What does a homeschool day actually look like?'"
      body={[
        "You're not alone in wondering this. The truth is, there's no single 'right way' to homeschool—and that's both liberating and terrifying.",
        "Some families start at 8am with a structured schedule. Others sleep in and learn in their pajamas until noon. Some follow a traditional school-year calendar. Others homeschool year-round with frequent breaks.",
        "Here's what most homeschool days have in common: flexibility, interruptions, and a lot less 'desk time' than you'd expect. A typical elementary homeschooler might spend 2-3 hours on formal lessons, then the rest of the day playing, reading, exploring, or pursuing interests.",
        "Older kids might spend 4-5 hours on academics—but without the transitions, announcements, and busy-work of traditional school, that's often more productive than a 7-hour school day.",
        "The secret isn't finding the perfect schedule. It's finding what works for YOUR family, then adjusting as you go. Your homeschool will look different from everyone else's—and that's exactly how it should be.",
      ]}
      keyPoints={[
        "There's no single 'right' homeschool schedule—it varies by family, age, and learning style",
        "Most homeschoolers spend far less time on formal lessons than traditional school hours",
        "Flexibility is your friend: you can adjust your routine as needs change",
        "Focus on quality learning time, not matching a traditional school day",
        "Real homeschool days include mess, interruptions, and lots of non-academic learning",
        "You'll find your rhythm after a few weeks—give yourself permission to experiment",
      ]}
      resultType="looks"
      kitFormUid="f42ab6bdb2"
      resourceTitle1='First Chapter of "Homeschooling 101"'
      resourceDesc1="Michael's practical, no-BS guide to getting started without losing your mind"
      resourceTitle2='PDF: "Your First 30 Days of Homeschooling: A Simple Checklist"'
      resourceDesc2="The exact steps to take in your first month (nothing overwhelming, just the essentials)"
    />
  );
}
