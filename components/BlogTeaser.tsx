import { siteContent } from "@/content/siteContent";

export default function BlogTeaser() {
  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-light text-gray-800 mb-12">
          {siteContent.blog.title}
        </h2>

        {siteContent.blog.comingSoon && (
          <div className="bg-white p-8 md:p-12">
            <div className="inline-block bg-gray-800 text-white px-6 py-2 mb-10 text-sm font-medium uppercase tracking-wide">
              Coming Soon
            </div>

            <ul className="space-y-4 text-left max-w-2xl mx-auto">
              {siteContent.blog.teaserItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700 text-base"
                >
                  <span className="mr-3 mt-1 flex-shrink-0">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

