import { NextResponse } from "next/server";

type OpenLibraryDoc = {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");

  if (!q) {
    return NextResponse.json({ books: [] });
  }

  try {
    const res = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(q)}&limit=20`
    );

    if (!res.ok) {
      return NextResponse.json({ books: [] }, { status: 500 });
    }

    const data: { docs: OpenLibraryDoc[] } = await res.json();

    const books = data.docs.map((book) => ({
      key: book.key,
      title: book.title,
      author: book.author_name?.[0],
      year: book.first_publish_year,
      coverId: book.cover_i,
    }));

    return NextResponse.json({ books });
  } catch {
    return NextResponse.json({ books: [] }, { status: 500 });
  }
}
