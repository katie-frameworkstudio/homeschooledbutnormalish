"use client";

import { useState } from "react";
import Link from "next/link";
import { SHOW_DIRECT_DOWNLOADS, getDownloadUrls } from "@/lib/download-config";

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
    bookTitle: "Homeschooled and Socialized",
    bookDescription:
      "Social Skills: Myths and Realities from someone who actually lived it",
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
    bookTitle: "Homeschooling on a Budget",
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
      <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 md:py-20 bg-warm-50">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-light text-sage-900 mb-4">
            Invalid Result
          </h1>
          <Link href="/quiz" className="text-sm sm:text-base text-sage-700 hover:text-sage-900">
            ← Take the quiz again
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get email directly from form
    const formData = new FormData(e.currentTarget);
    const emailValue = formData.get('email') as string;
    
    console.log('Form submitted with email:', emailValue, 'and type:', type);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailValue,
          type, // newbie, social, or budget
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Subscription failed');
        // Still show success message for better UX
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success message for better UX
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen px-4 py-12 sm:py-16 md:py-20 bg-warm-50">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="text-sm sm:text-base text-sage-700 hover:text-sage-900 mb-6 sm:mb-8 inline-block"
        >
          ← Back to Home
        </Link>

        {/* Result Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-sage-900 mb-3 sm:mb-4">
            {result.title}
          </h1>
          <p className="text-xl sm:text-2xl text-sage-700 italic">{result.subtitle}</p>
        </div>

        {/* Result Body */}
        <div className="space-y-3 sm:space-y-4 text-sage-800 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 md:mb-12">
          {result.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* What You Need */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl font-light text-sage-900 mb-4 sm:mb-6">
            What you need right now:
          </h2>
          <ul className="space-y-2 sm:space-y-3">
            {result.needs.map((need, index) => (
              <li key={index} className="flex items-start text-sage-800 text-sm sm:text-base">
                <span className="mr-2 sm:mr-3 text-sage-900 flex-shrink-0">•</span>
                <span>{need}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Plan */}
        <div className="bg-sage-100 p-6 sm:p-8 mb-8 sm:mb-10 md:mb-12 rounded border border-sage-200">
          <h2 className="text-xl sm:text-2xl font-light text-sage-900 mb-4 sm:mb-6">
            Your Personalized Action Plan:
          </h2>
          <ul className="space-y-3 sm:space-y-4">
            {result.actionPlan.map((step, index) => (
              <li key={index} className="flex items-start text-sage-800 text-sm sm:text-base">
                <span className="mr-2 sm:mr-3 text-sage-900 flex-shrink-0">✓</span>
                <span className="font-medium">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Free Resources */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl font-light text-sage-900 mb-4 sm:mb-6">
            Free Resources You&apos;re Getting:
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-medium text-sage-900 mb-2">
                📖 First Chapter of &ldquo;{result.bookTitle}&rdquo;
              </h3>
              <p className="text-sage-800 text-sm sm:text-base">{result.bookDescription}</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-medium text-sage-900 mb-2">
                📄 PDF: &ldquo;{result.pdfTitle}&rdquo;
              </h3>
              <p className="text-sage-800 text-sm sm:text-base">{result.pdfDescription}</p>
            </div>
          </div>
        </div>

        {/* Email Capture */}
        {!submitted ? (
          <div className="bg-sage-700 text-warm-50 p-6 sm:p-8 rounded">
            <h2 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">
              Enter your email to get your personalized action plan + free chapter
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-500 rounded text-sm sm:text-base"
              />
              <button
                type="submit"
                className="px-6 sm:px-8 py-3 bg-accent-yellow text-sage-900 font-medium hover:bg-accent-gold transition-colors rounded text-sm sm:text-base whitespace-nowrap"
              >
                Send Me My Action Plan
              </button>
            </form>
            <p className="text-xs sm:text-sm text-warm-200 mt-3 sm:mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        ) : (
          <div className="bg-sage-100 p-6 sm:p-8 rounded text-center border border-sage-200">
            <h2 className="text-xl sm:text-2xl font-light text-sage-900 mb-3 sm:mb-4">
              Check Your Email! 📬
            </h2>
            <p className="text-sage-800 text-sm sm:text-base break-words">
              Your personalized action plan and free resources are on their way to{" "}
              <strong>{email}</strong>
            </p>

            {/* Optional direct download buttons */}
            {SHOW_DIRECT_DOWNLOADS && (
              <div className="mt-6 pt-6 border-t border-sage-200">
                <p className="text-sm text-sage-700 mb-4">
                  Or download them directly:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={getDownloadUrls(type as keyof typeof resultContent).plan}
                    className="px-4 py-2 bg-sage-700 text-white rounded hover:bg-sage-800 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📥 Download Action Plan
                  </a>
                  <a
                    href={getDownloadUrls(type as keyof typeof resultContent).chapter}
                    className="px-4 py-2 bg-sage-700 text-white rounded hover:bg-sage-800 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📖 Download First Chapter
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
