import Hero from "@/components/home/hero";
import PopularBooks from "@/components/books/popular-books";


export default function Home() {
  return (
    <div className="pt-24">
      <Hero />
      <section id="explore" className="max-w-7xl mx-auto px-4 py-20">
        <PopularBooks />
      </section>
    </div>
  );
}
