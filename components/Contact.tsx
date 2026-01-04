import { siteContent } from "@/content/siteContent";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-6">
          {siteContent.contact.title}
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
          {siteContent.contact.text}
        </p>
        <a
          href={`mailto:${siteContent.contact.email}`}
          className="inline-flex items-center justify-center px-8 py-4 bg-hunter-600 text-white text-lg font-medium hover:bg-hunter-700 transition-colors focus:outline-none focus:ring-2 focus:ring-hunter-700 focus:ring-offset-2 rounded-lg shadow-md hover:shadow-lg"
        >
          {siteContent.contact.email}
        </a>
      </div>
    </section>
  );
}
