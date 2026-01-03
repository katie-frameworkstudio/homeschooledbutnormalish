import { siteContent } from "@/content/siteContent";
import BookCard from "./BookCard";

export default function Books() {
  return (
    <section id="books" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800">
            Books
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {siteContent.books.items.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              image={book.image}
              imageAlt={book.imageAlt}
              description={book.description}
              buttonText={book.buttonText}
              buttonLink={book.buttonLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

