import { siteContent } from "@/content/siteContent";

export default function Bio() {
  return (
    <section id="bio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-800 mb-3">
            {siteContent.bio.title}
          </h2>
          <p className="text-2xl text-gray-600 italic">
            {siteContent.bio.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Image */}
          <div className="relative w-full aspect-[3/4] overflow-hidden">
            <img
              src={siteContent.bio.image}
              alt={siteContent.bio.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bio Content */}
          <div className="space-y-4 text-base text-gray-700 leading-relaxed">
            {siteContent.bio.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

