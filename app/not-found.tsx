import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-light text-gray-800 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Looks like this page doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block bg-gray-800 text-white px-8 py-3 font-medium hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}







