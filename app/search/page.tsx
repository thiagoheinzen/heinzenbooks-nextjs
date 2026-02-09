"use client";

import { useState } from "react";
import SearchInput from "@/components/search/search-input";
import PopularBooks from "@/components/books/popular-books";
import SearchResults from "@/components/search/search-results";


type Book = {
  key: string;
  title: string;
  author?: string;
  year?: number;
  coverId?: number;
};

export default function SearchPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  const hasSearchResults = books.length > 0;
  
  async function handleSearch(query: string) {
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

  return (
    <section className="max-w-7x1 mx-auto px-4 py-10">
      <SearchInput onSearch={handleSearch} loading={loading} />

      {!hasSearchResults && <PopularBooks />}

      {hasSearchResults && (
        <SearchResults books={books} loading={loading} />
      )}
    </section>
  );
}
