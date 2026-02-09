import BookCard from "@/components/books/book-card";

const popularBooks = [
  {
    key: "1984",
    title: "1984",
    author: "George Orwell",
    coverSrc: "/covers/1984.webp",
  },
  {
    key: "orgulho-preconceito",
    title: "Orgulho e Preconceito",
    author: "Jane Austen",
    coverSrc: "/covers/orgulho-e-preconceito.webp",
  },
  {
    key: "a-guerra-dos-tronos",
    title: "A Guerra dos Tronos",
    author: "George R. R. Martin",
    coverSrc: "/covers/a-guerra-dos-tronos.webp",
  },
  {
    key: "a-revolucao-dos-bichos",
    title: "A Revolução dos Bichos",
    author: "George Orwell",
    coverSrc: "/covers/a-revolucao-dos-bichos.webp",
  },
  {
    key: "grande-sertao-veredas",
    title: "Grande Sertão: Veredas",
    author: "Guimarães Rosa",
    coverSrc: "/covers/grande-sertao-veredas.jpg",
  },
  {
    key: "harry-potter-pedra-filosofal",
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    coverSrc: "/covers/harry-potter-pedra-filosofal.webp",
  },
  {
    key: "o-instituto",
    title: "O Instituto",
    author: "Stephen King",
    coverSrc: "/covers/o-instituto.jpg",
  },
  {
    key: "sapiens",
    title: "Sapiens - Uma Breve História da Humanidade",
    author: "Yuval Noah Harari",
    coverSrc: "/covers/sapiens.webp",
  },
];

export default function PopularBooks() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Livros populares
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {popularBooks.map((book) => (
          <BookCard
            key={book.key}
            title={book.title}
            author={book.author}
            coverSrc={book.coverSrc}
          />
        ))}
      </div>
    </section>
  );
}
