"use client";

import Link from "next/link";
import { Nav } from "./nav";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b"
          : "bg-transparent border-transparent"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300",
          scrolled ? "h-20" : "h-24"
        )}
      >
        <Link href="/" className="text-xl font-bold">
          HeinzenBooks
        </Link>

        <Nav />
      </div>
    </header>
  );
}