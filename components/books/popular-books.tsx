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
  {
    key: "biblioteca-meia-noite",
    title: "A Biblioteca da Meia-Noite",
    author: "Matt Haig",
    coverSrc: "/covers/biblioteca-meia-noite.webp",
  },
  {
    key: "habitos-atomicos",
    title: "Hábitos Atômicos",
    author: "James Clear",
    coverSrc: "/covers/habitos-atomicos.webp",
  },
  {
    key: "assassinato-expresso-oriente",
    title: "O Assassinato no Expresso do Oriente",
    author: "Agatha Christie",
    coverSrc: "/covers/assassinato-expresso-oriente.webp",
  },
  {
    key: "mentirosos",
    title: "Mentirosos",
    author: "E. Lockhart",
    coverSrc: "/covers/mentirosos.webp",
  },
];

export default function PopularBooks() {
  return (
    <>
      <h2 className="text-xl font-semibold mt-12 mb-6">Livros populares</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {popularBooks.map((book) => (
          <BookCard
            key={book.key}
            title={book.title}
            author={book.author}
            coverSrc={book.coverSrc}
          />
        ))}
      </div>
    </>
  );
}
