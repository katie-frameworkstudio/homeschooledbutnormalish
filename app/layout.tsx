import type { Metadata } from "next";
import "./globals.css";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.meta.url),
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    url: siteContent.meta.url,
    siteName: siteContent.meta.title,
    images: [
      {
        url: siteContent.meta.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [siteContent.meta.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>
        <a href="#hero" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

