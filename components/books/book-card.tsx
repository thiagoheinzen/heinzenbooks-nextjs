"use client";


import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

type BookCardProps = {
  title: string;
  author?: string;
  coverSrc?: string;
};

export default function BookCard({
  title,
  author,
  coverSrc,
}: BookCardProps) {
   const [imgSrc, setImgSrc] = useState(
    coverSrc ?? "/covers/placeholder.webp"
  );

  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardContent className="p-0 flex flex-col items-center text-center">
        
        <div className="relative w-full aspect-[2/3] overflow-hidden rounded-md">
          <Image
            src={imgSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            onError={() => {
              setImgSrc("/covers/placeholder.webp");
            }}
          />
        </div>

        <div className="mt-3">
          <h3 className="text-sm font-medium leading-tight line-clamp-2">
            {title}
          </h3>

          {author && (
            <p className="mt-1 text-xs text-muted-foreground">
              {author}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
