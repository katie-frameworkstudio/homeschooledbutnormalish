interface BookCardProps {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function BookCard({
  title,
  image,
  imageAlt,
  description,
  buttonText,
  buttonLink,
}: BookCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8">
      {/* Book Image */}
      <div className="relative w-full md:w-56 h-80 flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Book Content */}
      <div className="flex flex-col justify-center flex-1">
        <div>
          <p className="text-base text-gray-700 leading-relaxed mb-6">{description}</p>
        </div>
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 self-start"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}

