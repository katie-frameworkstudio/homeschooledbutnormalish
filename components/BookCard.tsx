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
    <div className="flex flex-col bg-white p-6 h-full">
      {/* Book Image */}
      <div className="relative w-full aspect-[2/3] flex-shrink-0 overflow-hidden mb-4 bg-white">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Book Content */}
      <div className="flex flex-col flex-1">
        <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-1">{description}</p>
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 w-full"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}

