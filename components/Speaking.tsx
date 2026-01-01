import { siteContent } from "@/content/siteContent";

export default function Speaking() {
  return (
    <section id="speaking" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-800 mb-6">
            {siteContent.speaking.title}
          </h2>
          <h3 className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {siteContent.speaking.headline}
          </h3>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {siteContent.speaking.images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden"
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

