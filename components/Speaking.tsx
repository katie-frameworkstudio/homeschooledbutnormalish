import { siteContent } from "@/content/siteContent";

export default function Speaking() {
  return (
    <section id="speaking" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-4">
            {siteContent.speaking.title}
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            {siteContent.speaking.headline}
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 sm:mb-12 max-w-3xl mx-auto">
          {siteContent.speaking.images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Statement */}
        <div className="max-w-3xl mx-auto space-y-4 text-gray-700 leading-relaxed text-center">
          {siteContent.speaking.statement.map((paragraph, index) => (
            <p key={index} className="text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

