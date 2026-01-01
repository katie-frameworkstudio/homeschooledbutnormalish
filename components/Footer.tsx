import { siteContent } from "@/content/siteContent";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-light mb-4">{siteContent.footer.name}</h3>
        <a
          href={`mailto:${siteContent.footer.email}`}
          className="text-gray-300 hover:text-white transition-colors text-base mb-6 inline-block focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2 py-1"
        >
          {siteContent.footer.email}
        </a>
        <p className="text-gray-400 text-sm mt-6">
          {siteContent.footer.copyright}
        </p>
      </div>
    </footer>
  );
}

