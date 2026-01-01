"use client";

import { useState } from "react";
import Link from "next/link";

const resultContent = {
  newbie: {
    title: "You're The Newbie Navigator",
    subtitle: "Your biggest concern: \"Where do I even start?\"",
    body: [
      "You're feeling overwhelmed because there's a LOT of information out there—and most of it's either too vague or too preachy. You need the basics, the real talk, and a clear starting point.",
      "Here's the truth: You don't need to have it all figured out on day one—or even year one. Homeschooling is as much about learning for you as it is for your kids.",
    ],
    needs: [
      "A simple framework for getting started",
      "Permission to experiment and adjust",
      "Real talk about what matters (and what doesn't)",
      "Confidence that you can do this",
    ],
    actionPlan: [
      "This Week: Read your free chapter and identify your \"why\" for homeschooling",
      "Week 2: Research your state's homeschool laws (15 minutes max)",
      "Week 3: Choose ONE subject to start with—don't try to plan everything at once",
      "Week 4: Connect with one local homeschool group (online or in-person)",
    ],
    bookTitle: "Homeschooling 101",
    bookDescription:
      "Michael's practical, no-BS guide to getting started without losing your mind",
    pdfTitle: "Your First 30 Days of Homeschooling: A Simple Checklist",
    pdfDescription:
      "The exact steps to take in your first month (nothing overwhelming, just the essentials)",
  },
  social: {
    title: "You're The Socializer",
    subtitle: "Your biggest concern: \"Will my kid be normal?\"",
    body: [
      "You're not alone. \"What about socialization?\" is THE question everyone asks. It's the big one. The scary one.",
      "So let me tell you a story:",
      "Between my junior and senior years, I went to 10 different homecoming dances, 8 different proms, a Cotillion (I still don't even know what that was!), and I never had a weekend off from high school parties.",
      "I never set foot in a traditional high school.",
      "I had at least 5 different friend groups—all from different walks of life. Sports friends. Dance friends. Theater friends. Some poor, some rich, some in between. To me, they were different oases I could jump to whenever I wanted.",
      "If anything, I was way more socialized than my traditionally schooled peers.",
    ],
    needs: [
      "Proof that homeschoolers aren't socially stunted (exhibit A: me)",
      "Practical strategies for building real friendships",
      "Permission to stop worrying about the stereotype",
      "A roadmap for raising a socially confident kid",
    ],
    actionPlan: [
      "This Week: Read your free chapter and see why \"classroom socialization\" isn't what you think",
      "Week 2: Identify your kid's interests (sports, art, music, theater, coding)",
      "Week 3: Research local co-ops, activity groups, or teams",
      "Week 4: Sign up for ONE regular team activity—this is the secret",
    ],
    bookTitle: "Homeschooled But Normal...ish",
    bookDescription:
      "\"Social Skills: Myths and Realities\" from someone who actually lived it",
    pdfTitle:
      "5 Myths About Homeschool Socialization (Debunked by Someone Who Went to 10 Proms)",
    pdfDescription: "The truth about how homeschoolers build friendships",
  },
  budget: {
    title: "You're The Budget Boss",
    subtitle: "Your biggest concern: \"Can we actually afford this?\"",
    body: [
      "Money is real talk. You're not overthinking this—budget matters. But here's what most people don't know:",
      "You most likely already have most of what you need.",
      "A notebook. A library card. Your kitchen table. Internet access. That's enough to start.",
      "When my mom started homeschooling us, she didn't have thousands to drop on fancy curriculum boxes. She had creativity, resourcefulness, and a library card. And somehow, I turned out... relatively normal.",
      "Here's the truth: Homeschooling isn't about how much money you spend—it's about the time, energy, and love you put into it.",
      "Some of my favorite learning experiences cost next to nothing—field trips to local parks, dissecting cow eyeballs from the farm supply store ($7 for 6!), creating art with supplies we already had at home.",
    ],
    needs: [
      "Proof that you don't need $3,000 to start",
      "A realistic look at what homeschooling actually costs",
      "Free resources you can access TODAY",
      "Smart strategies so you're not guessing (because guessing gets expensive)",
    ],
    actionPlan: [
      "This Week: Read your free chapter \"Start Smart\" and audit what you already own",
      "Week 2: Get a library card if you don't have one (seriously—this is your secret weapon)",
      "Week 3: Watch what actually works in your first few weeks before buying anything else",
      "Week 4: Join a homeschool co-op or swap group to share resources",
    ],
    bookTitle: "Homeschooling on a Budget (Or At Least Trying To)",
    bookDescription:
      "\"Start Smart\" shows you exactly what you need (spoiler: it's way less than you think)",
    pdfTitle: "The $0 Homeschool Start: Everything You Need Already in Your Home",
    pdfDescription:
      "A complete starter kit using only what's in your house right now",
  },
};

export default function ResultPageClient({ type }: { type: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const result = resultContent[type as keyof typeof resultContent];

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-light text-gray-800 mb-4">
            Invalid Result
          </h1>
          <Link href="/quiz" className="text-gray-600 hover:text-gray-800">
            ← Take the quiz again
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with ConvertKit or email service
    console.log("Email submitted:", email, "Type:", type);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen px-4 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="text-gray-600 hover:text-gray-800 mb-8 inline-block"
        >
          ← Back to Home
        </Link>

        {/* Result Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-800 mb-4">
            {result.title}
          </h1>
          <p className="text-2xl text-gray-600 italic">{result.subtitle}</p>
        </div>

        {/* Result Body */}
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-12">
          {result.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* What You Need */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-800 mb-6">
            What you need right now:
          </h2>
          <ul className="space-y-3">
            {result.needs.map((need, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <span className="mr-3 text-gray-800">•</span>
                <span>{need}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Plan */}
        <div className="bg-gray-50 p-8 mb-12">
          <h2 className="text-2xl font-light text-gray-800 mb-6">
            Your Personalized Action Plan:
          </h2>
          <ul className="space-y-4">
            {result.actionPlan.map((step, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <span className="mr-3 text-gray-800">✓</span>
                <span className="font-medium">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Free Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-800 mb-6">
            Free Resources You're Getting:
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                📖 First Chapter of "{result.bookTitle}"
              </h3>
              <p className="text-gray-700">{result.bookDescription}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                📄 PDF: "{result.pdfTitle}"
              </h3>
              <p className="text-gray-700">{result.pdfDescription}</p>
            </div>
          </div>
        </div>

        {/* Email Capture */}
        {!submitted ? (
          <div className="bg-gray-800 text-white p-8 rounded">
            <h2 className="text-2xl font-light mb-4">
              Enter your email to get your personalized action plan + free chapter
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-gray-800 font-medium hover:bg-gray-100 transition-colors"
              >
                Send Me My Action Plan
              </button>
            </form>
            <p className="text-sm text-gray-300 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        ) : (
          <div className="bg-gray-50 p-8 rounded text-center">
            <h2 className="text-2xl font-light text-gray-800 mb-4">
              Check Your Email! 📬
            </h2>
            <p className="text-gray-700">
              Your personalized action plan and free resources are on their way to{" "}
              <strong>{email}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
