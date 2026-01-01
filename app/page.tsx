import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Books from "@/components/Books";
import Bio from "@/components/Bio";
import BlogTeaser from "@/components/BlogTeaser";
import Speaking from "@/components/Speaking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Books />
        <Bio />
        <BlogTeaser />
        <Speaking />
      </main>
      <Footer />
    </>
  );
}

