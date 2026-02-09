import BookCard from "@/components/books/book-card";

type Book = {
  key: string;
  title: string;
  author?: string;
  year?: number;
  coverId?: number;
};

type Props = {
  books: Book[];
  loading: boolean;
};

export default function SearchResults({ books, loading }: Props) {
  if (loading) {
    return <p className="text-center">Buscando livros...</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => {
        const coverSrc = book.coverId
          ? `https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`
          : undefined;

        return (
          <BookCard
            key={book.key}
            title={book.title}
            author={book.author}
            coverSrc={coverSrc}
          />
        );
      })}
    </div>
  );
}
