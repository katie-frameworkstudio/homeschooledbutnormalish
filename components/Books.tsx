import { siteContent } from "@/content/siteContent";
import BookCard from "./BookCard";

export default function Books() {
  return (
    <section id="books" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-light text-center text-gray-800 mb-16">
          Books
        </h2>

        <div className="space-y-16">
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

