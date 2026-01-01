import { siteContent } from "@/content/siteContent";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Image */}
        <div className="mb-12 relative w-full max-w-2xl mx-auto aspect-[16/9] rounded overflow-hidden">
          <img
            src={siteContent.hero.image}
            alt={siteContent.hero.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-800 mb-6 text-balance">
          {siteContent.hero.title}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-3 text-balance">
          {siteContent.hero.subtitle}
        </p>
        <p className="text-lg sm:text-xl text-gray-600 mb-16 text-balance max-w-2xl mx-auto">
          {siteContent.hero.supportingText}
        </p>

        {/* Headshot */}
        <div className="flex flex-col items-center mt-12">
          <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
            <img
              src={siteContent.hero.headshot}
              alt={siteContent.hero.headshotAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xl text-gray-800">
            {siteContent.hero.authorName}
          </p>
        </div>
      </div>
    </section>
  );
}

