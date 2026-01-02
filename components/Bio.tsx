import { siteContent } from "@/content/siteContent";

export default function Bio() {
  return (
    <section id="bio" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Normal<span className="italic">...ish</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600">
            {siteContent.bio.subtitle}
          </p>
        </div>

        {/* Mobile: Stacked layout, Desktop: Side-by-side */}
        <div className="space-y-8 md:space-y-0">
          {/* Desktop two-column layout - photo takes ~40%, text takes ~60% */}
          <div className="md:grid md:grid-cols-5 md:gap-12 md:items-start">
            {/* Bio Image with Decorative Border - takes 2 of 5 columns */}
            <div className="relative w-full max-w-sm mx-auto md:mx-0 mb-8 md:mb-0 md:col-span-2">
              <div className="relative">
                {/* Decorative glow accents */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-yellow/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-sage-500/15 rounded-full blur-2xl"></div>

                {/* Image container with border */}
                <div className="relative bg-gradient-to-br from-sage-600 to-sage-800 p-1.5 rounded-2xl shadow-xl">
                  <div className="bg-white p-2 rounded-2xl">
                    <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl">
                      <img
                        src={siteContent.bio.image}
                        alt={siteContent.bio.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Decorative accent corner */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-4 border-accent-yellow rounded-full"></div>
              </div>
            </div>

            {/* Text content - desktop shows first few paragraphs to fill space next to photo */}
            <div className="hidden md:block md:col-span-3 space-y-4 text-base text-gray-700 leading-relaxed">
              <p>{siteContent.bio.content[0]}</p>
              <p>{siteContent.bio.content[1]}</p>

              {/* Pull Quote - integrated into right column on desktop */}
              <div className="my-6 py-6 px-6 bg-gradient-to-br from-sage-50 to-warm-50 border-l-4 border-accent-yellow rounded-r-xl shadow-sm">
                <p className="font-display text-2xl sm:text-3xl text-sage-900 italic leading-tight">
                  &ldquo;Normal but far from average&rdquo;
                </p>
                <p className="text-sm text-sage-600 mt-2">
                  — thanks to the freedom homeschooling gave me
                </p>
              </div>

              <p>{siteContent.bio.content[2]}</p>
            </div>
          </div>

          {/* Pull Quote - appears after photo on mobile only */}
          <div className="md:hidden max-w-2xl mx-auto">
            <div className="py-6 px-6 bg-gradient-to-br from-sage-50 to-warm-50 border-l-4 border-accent-yellow rounded-r-xl shadow-sm">
              <p className="font-display text-2xl sm:text-3xl text-sage-900 italic leading-tight">
                &ldquo;Normal but far from average&rdquo;
              </p>
              <p className="text-sm text-sage-600 mt-2">
                — thanks to the freedom homeschooling gave me
              </p>
            </div>
          </div>

          {/* Remaining content */}
          <div className="max-w-4xl mx-auto space-y-4 text-base text-gray-700 leading-relaxed">
            {/* First 3 paragraphs - mobile only */}
            <p className="md:hidden">{siteContent.bio.content[0]}</p>
            <p className="md:hidden">{siteContent.bio.content[1]}</p>
            <p className="md:hidden">{siteContent.bio.content[2]}</p>

            {/* Remaining paragraphs for all screens */}
            {siteContent.bio.content.slice(3).map((paragraph, index) => (
              <p key={index + 3}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

