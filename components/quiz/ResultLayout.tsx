"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { SHOW_DIRECT_DOWNLOADS, getDownloadUrlsV2, QuizV2Type } from "@/lib/download-config";

interface ResultLayoutProps {
  title: string;
  subtitle: string;
  body: string[];
  keyPoints: string[];
  resultType: QuizV2Type;
  kitFormUid: string;
  resourceTitle1: string;
  resourceDesc1: string;
  resourceTitle2: string;
  resourceDesc2: string;
}

function KitFormEmbed({ uid, onSuccess }: { uid: string; onSuccess?: () => void }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Prevent duplicate embeds
    container.innerHTML = "";

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", uid);
    script.src = `https://homeschooled-but-normalish.kit.com/${uid}/index.js`;

    container.appendChild(script);

    // Fire callback when Kit shows success state
    const maybeFireSuccess = () => {
      if (!onSuccess) return;
      const successEl = container.querySelector<HTMLElement>(
        ".formkit-alert-success, [data-element='success']"
      );
      if (!successEl) return;
      const isVisible =
        !!(successEl.offsetWidth || successEl.offsetHeight || successEl.getClientRects().length);
      if (isVisible) onSuccess();
    };

    const observer = new MutationObserver(() => maybeFireSuccess());
    observer.observe(container, { childList: true, subtree: true, attributes: true });
    const t = window.setTimeout(() => maybeFireSuccess(), 0);

    return () => {
      window.clearTimeout(t);
      observer.disconnect();
      container.innerHTML = "";
    };
  }, [uid, onSuccess]);

  return <div ref={containerRef} />;
}

export default function ResultLayout({
  title,
  subtitle,
  body,
  keyPoints,
  resultType,
  kitFormUid,
  resourceTitle1,
  resourceDesc1,
  resourceTitle2,
  resourceDesc2,
}: ResultLayoutProps) {
  const leadTrackedRef = useRef(false);

  const trackMetaLead = () => {
    if (typeof window === "undefined") return;
    if (leadTrackedRef.current) return;
    const fbq = (window as any).fbq;
    if (typeof fbq === "function") {
      fbq("track", "Lead");
      leadTrackedRef.current = true;
    }
  };

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

        {/* Free Resources */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-sage-900 mb-6 sm:mb-8 tracking-tight">
            Free Resources You&apos;re Getting:
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-medium text-sage-900 mb-2">
                📖 {resourceTitle1}
              </h3>
              <p className="text-sage-800 text-sm sm:text-base">{resourceDesc1}</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-medium text-sage-900 mb-2">
                📄 {resourceTitle2}
              </h3>
              <p className="text-sage-800 text-sm sm:text-base">{resourceDesc2}</p>
            </div>
          </div>
        </div>

        {/* Email Capture */}
        <div className="bg-sage-700 text-warm-50 p-6 sm:p-8 md:p-10 rounded-2xl mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-3 sm:mb-4">
            Enter your email to get your free resources
          </h2>

          <KitFormEmbed uid={kitFormUid} onSuccess={trackMetaLead} />

          <p className="text-xs sm:text-sm text-warm-200 mt-3 sm:mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>

        {/* Optional direct download buttons */}
        {SHOW_DIRECT_DOWNLOADS && (
          <div className="bg-sage-50 p-6 sm:p-8 rounded-2xl text-center border-2 border-sage-200 mb-10 sm:mb-12 md:mb-16">
            <p className="text-sm text-sage-700 mb-4">
              Or download them directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={getDownloadUrlsV2(resultType).plan}
                className="px-6 py-3 bg-sage-700 text-white rounded-lg hover:bg-sage-800 transition-colors text-sm font-medium shadow-md hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                📥 Download PDF Guide
              </a>
              <a
                href={getDownloadUrlsV2(resultType).chapter}
                className="px-6 py-3 bg-sage-700 text-white rounded-lg hover:bg-sage-800 transition-colors text-sm font-medium shadow-md hover:shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                📖 Download Book Chapter
              </a>
            </div>
          </div>
        )}

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
