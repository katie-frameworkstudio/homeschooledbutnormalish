import { siteContent } from "@/content/siteContent";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-white to-warm-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t-2 border-sage-100"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="font-display text-2xl sm:text-3xl font-normal text-sage-900 mb-6 tracking-tight">
          Homeschooled But Normal<span className="italic text-sage-600">...ish</span>
        </h3>
        <p className="text-base sm:text-lg text-sage-700 mb-8 font-light">
          by {siteContent.footer.name}
        </p>

        <p className="text-xs sm:text-sm text-sage-600">
          © {currentYear} Homeschooled But Normalish
        </p>
      </div>
    </footer>
  );
}

