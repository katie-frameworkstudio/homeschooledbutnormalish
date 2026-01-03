import { siteContent } from "@/content/siteContent";

export default function BlogTeaser() {
  return (
    <section id="blog" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-8 sm:mb-12">
          My Normal<span className="italic">...ish</span> Blog
        </h2>

        {siteContent.blog.comingSoon && (
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-gray-700 mb-6">
              Coming Soon
            </h3>

            <ul className="space-y-3 text-left">
              {siteContent.blog.teaserItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700 text-base"
                >
                  <span className="mr-3 text-gray-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

