import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <div className="grid grid-cols-12 items-center gap-6">

        <div className="col-span-12 md:col-span-5">
          <h1 className="text-4xl font-semibold leading-tight">
            Encontre seu próximo livro
          </h1>

          <p className="mt-4 text-muted-foreground max-w-md">
            Explore títulos, salve favoritos e simule sua compra.
          </p>

          <Button asChild className="mt-6">
            <Link href="/search">Começar</Link>
          </Button>
        </div>

        <div className="col-span-12 md:col-span-7 flex justify-center">
          <div className="relative w-full max-w-lg h-[380px] md:h-[440px]">
            <Image
              src="/illustrations/reading-hero.svg"
              alt="Pessoa lendo um livro"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

