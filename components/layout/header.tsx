import Link from "next/link";
import { ShoppingCart, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "./nav";

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        <Link href="/" className="text-xl font-bold">
          HeinzenBooks
        </Link>

        <div className="justify-self-center">
            <Nav />
        </div>


        <div className="flex items-center gap-2">

          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <Heart className="w-5 h-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
