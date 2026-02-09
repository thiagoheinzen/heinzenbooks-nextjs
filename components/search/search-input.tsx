"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
    onSearch: (query: string) => void;
    loading: boolean;
};

export default function SearchInput({ onSearch, loading }: Props) {
    const [query, setQuery] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onSearch(query);
    }

    return (
        <form onSubmit={handleSubmit} className="mb-12">
            <div className="flex gap-2 max-w-xl mx-auto">
                <Input 
                 placeholder="Digite o nome do livro ou autor" 
                 value={query} 
                 onChange={(e) => setQuery(e.target.value)}
                 />
                 <Button type="submit" disabled={loading}>
                    {loading ? "Buscando..." : "Buscar"}
                 </Button>
            </div>
        </form>
    )
}
