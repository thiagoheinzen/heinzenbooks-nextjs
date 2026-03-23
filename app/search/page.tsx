"use client";

import { useEffect, useState } from "react";
import PopularBooks from "@/components/books/popular-books";
import { useSearchParams } from "next/navigation";
import BookCard from "@/components/books/book-card";


type Book = {
  key: string;
  title: string;
  author?: string;
  year?: number;
  coverId?: number;
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  const hasResults = books.length > 0;

  useEffect(() => {
    async function fetchBooks() {
      if (!query.trim()) return;

      setLoading(true);

      try {
        const res = await fetch(`/api/search?q=${query}`);
        const data = await res.json();
        setBooks(data.books);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, [query]);
  
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 mt-24">
      {loading && (
        <>
          <p className="text-center text-muted-foreground mb-6">
            Buscando livros...
          </p>
          {query && (
            <h2 className="text-xl font-semibold mb-6">
              Resultados para &quot;{query}&quot;
            </h2>
          )}
        </>
      )}

      {!loading && hasResults && (
        <>
          <h2 className="text-xl font-semibold mb-6">
            Resultados para &quot;{query}&quot;
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {books.map((book) => (
              <BookCard
                key={book.key}
                title={book.title}
                author={book.author}
                coverId={book.coverId}
              />
            ))}
          </div>
        </>
      )}

      {!loading && !hasResults && query && (
        <p className="text-center text-muted-foreground">
          Nenhum resultado encontrado para &quot;{query}&quot;
        </p>
      )}

      {!query && <PopularBooks />}
    </section>
  );
}
