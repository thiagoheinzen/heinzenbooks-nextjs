"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeaderSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();

      const trimmed = query.trim();
      if (!trimmed) return;

      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  }

  return (
    <div className="relative w-80">
      <Input
        placeholder="Digite o nome do livro ou autor"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="pr-10"
      />

      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
    </div>
  );
}