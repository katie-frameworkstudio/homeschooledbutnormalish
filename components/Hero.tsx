import { siteContent } from "@/content/siteContent";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteContent.hero.image}
          alt={siteContent.hero.imageAlt}
          className="w-full h-full object-cover"
        />
        {/* Enhanced gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-black/45"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto w-full py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

          {/* Text Content with Creative Container */}
          <div className="flex-1 text-center lg:text-left">
            <div className="relative">
              {/* Decorative accent - hunter green highlight */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-hunter-500/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-hunter-500/20 rounded-full blur-2xl"></div>

              {/* Main content card */}
              <div className="relative bg-gradient-to-br from-black/50 to-black/40 backdrop-blur-md rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-white/20 shadow-2xl">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-6 leading-[1.1]">
                  Homeschooled but Normal<span className="italic text-hunter-300">...ish</span>
                </h1>

                {/* Decorative divider */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-16 bg-gradient-to-r from-hunter-400 to-transparent rounded-full"></div>
                  <div className="h-1 w-8 bg-hunter-400/50 rounded-full"></div>
                </div>

                <p className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-4 font-light">
                  {siteContent.hero.subtitle}
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-white/85 italic border-l-4 border-hunter-400/50 pl-4">
                  {siteContent.hero.supportingText}
                </p>
              </div>
            </div>
          </div>

          {/* Headshot - Polaroid Style */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-hunter-500 via-hunter-400 to-hunter-600 rounded-2xl blur-xl opacity-40"></div>

              {/* Polaroid frame */}
              <div className="relative bg-white rounded-2xl p-3 sm:p-4 shadow-[0_25px_70px_rgba(0,0,0,0.5)]">
                <div className="bg-gradient-to-br from-gray-100 to-white p-1 rounded-lg">
                  <img
                    src={siteContent.hero.headshot}
                    alt={siteContent.hero.headshotAlt}
                    className="w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 rounded-lg object-cover"
                  />
                </div>
                {/* Handwritten-style name */}
                <p className="font-display text-xl sm:text-2xl text-sage-900 text-center mt-4 mb-2">
                  {siteContent.hero.authorName}
                </p>
                {/* Fun accent line */}
                <div className="h-0.5 w-20 bg-hunter-600 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

