"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { getCoverUrl } from "@/lib/utils";
import { Button } from "../ui/button";


type BookCardProps = {
  title: string;
  author?: string;
  coverId?: number | null;
  coverSrc?: string | null;
};

export default function BookCard({
  title,
  author,
  coverId,
  coverSrc,
}: BookCardProps) {

  const [liked, setLiked] = useState(false);

  const initialSrc =
  coverSrc ?? getCoverUrl(coverId ?? 0, "M");

const [imgSrc, setImgSrc] = useState(initialSrc);

 return (
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="p-0 flex flex-col items-center w-full">
        
        <div className="relative w-full aspect-[2/3] max-w-[160px] overflow-hidden rounded-xs group">
          
          <Image
            src={imgSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 160px"
            onError={() => {
              setImgSrc("/covers/placeholder.webp");
            }}
          />

          <button
            onClick={() => setLiked((prev) => !prev)}
            className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm transition hover:scale-110 active:scale-95"
            aria-label={liked ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          >
            <Heart
              className={`w-4 h-4 transition-all duration-200 ${
                liked
                  ? "fill-red-500 text-red-500"
                  : "text-gray-600"
              }`}
            />
          </button>
        </div>

        <div className="mt-3 w-full max-w-[160px]">
          <h3 className="text-sm font-medium leading-snug line-clamp-2">
            {title}
          </h3>

          {author && (
            <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
              {author}
            </p>
          )}

          <Button className="mt-2">Comprar</Button>
        </div>

      </CardContent>
    </Card>
  );
}