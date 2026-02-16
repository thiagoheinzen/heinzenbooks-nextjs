import Image from "next/image";

type PageProps = {
  params: {
    id: string;
  };
};

type WorkDetails = {
  title: string;
  description?: string | { value: string };
  covers?: number[];
};

export default async function BookPage({ params }: PageProps) {
  try {
    const res = await fetch(
      `https://openlibrary.org/works/${params.id}.json`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return <div className="p-10">Livro não encontrado.</div>;
    }

    const rawData = await res.json();
    
    const data: WorkDetails = {
      title: rawData.title || 'Título não disponível',
      description: rawData.description,
      covers: Array.isArray(rawData.covers) ? rawData.covers : undefined
    };

    const description =
      typeof data.description === "string"
        ? data.description
        : typeof data.description === "object" && data.description?.value
        ? data.description.value
        : '';

    const coverUrl = data.covers?.[0]
      ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
    : "/covers/placeholder.webp";

    return (
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative h-[420px]">
          <Image
            src={coverUrl}
            alt={data.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg"
          />
        </div>

        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

          {description && (
            <p className="text-slate-700 leading-relaxed mb-6">
              {description}
            </p>
          )}

          <div className="flex gap-3">
            <button className="px-4 py-2 border rounded">
              ❤️ Favoritar
            </button>

            <button className="px-4 py-2 bg-slate-900 text-white rounded">
              🛒 Adicionar ao carrinho
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error fetching book details:', error);
    return <div className="p-10">Erro ao carregar informações do livro. Tente novamente mais tarde.</div>;
  }
}
