import Link from "next/link";

interface ResultLayoutProps {
  title: string;
  subtitle: string;
  body: string[];
  keyPoints: string[];
}

export default function ResultLayout({
  title,
  subtitle,
  body,
  keyPoints,
}: ResultLayoutProps) {
  return (
    <div className="min-h-screen px-4 py-12 sm:py-16 md:py-24 bg-gradient-to-br from-warm-50 via-warm-100 to-sage-50">
      <div className="max-w-4xl mx-auto">
        {/* Result Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-sage-900 mb-4 sm:mb-6 tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl text-sage-700 font-light italic leading-relaxed">{subtitle}</p>
        </div>

        {/* Result Body */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 mb-8 sm:mb-10 md:mb-12 border border-sage-100">
          <div className="space-y-5 sm:space-y-6 text-sage-800 text-lg sm:text-xl leading-relaxed">
            {body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Key Points */}
        {keyPoints.length > 0 && (
          <div className="bg-gradient-to-br from-sage-50 to-sage-100 p-8 sm:p-10 md:p-12 mb-10 sm:mb-12 md:mb-16 rounded-2xl border-2 border-sage-200 shadow-md">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-sage-900 mb-6 sm:mb-8 tracking-tight">
              Key Takeaways:
            </h2>
            <ul className="space-y-4 sm:space-y-5">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start text-sage-800 text-base sm:text-lg leading-relaxed">
                  <span className="mr-3 sm:mr-4 text-sage-700 flex-shrink-0 text-xl sm:text-2xl font-bold">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* TODO: Add email capture section here */}
        {/* This is where ConvertKit form embed will go */}
        {/* Include: 
            - Heading: "Get Your Free Resources"
            - ConvertKit form with result-specific form UID
            - Promise: PDF guide + free book chapter
            - Privacy note: "We respect your privacy. Unsubscribe anytime."
        */}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
          <Link
            href="/quiz/v2"
            className="px-8 py-4 bg-sage-700 text-warm-50 text-lg font-medium hover:bg-sage-800 transition-all duration-200 rounded-xl text-center shadow-lg hover:shadow-xl hover:scale-105"
          >
            Retake Quiz
          </Link>
          <Link
            href="/"
            className="px-8 py-4 bg-white text-sage-900 text-lg font-medium hover:bg-sage-50 transition-all duration-200 rounded-xl text-center border-2 border-sage-300 hover:border-sage-400 shadow-md hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
