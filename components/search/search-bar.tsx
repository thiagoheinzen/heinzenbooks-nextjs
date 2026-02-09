"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/books/book-card";
import { getCoverUrl } from "@/lib/utils"

type Book = {
  key: string;
  title: string;
  author?: string;
  coverId?: number;
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <Input
            placeholder="Digite o nome do livro ou autor"
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
            onKeyDown={handleKeyDown}
          />
          <Button type="submit" disabled={loading}>
            {loading ? 'Buscando...' : 'Buscar'}
          </Button>
        </div>
      </form>

      {loading && <p>Buscando livros...</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard
            key={book.key}
            title={book.title}
            author={book.author}
            coverSrc={getCoverUrl(book.coverId)}
          />
        ))}
      </div>
    </div>
  );
}
