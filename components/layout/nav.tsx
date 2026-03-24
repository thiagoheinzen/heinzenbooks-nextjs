import { Heart, ShoppingBag} from "lucide-react";
import { Button } from "../ui/button";
import HeaderSearch from "../search/header-search";

export function Nav() {
    return (
        <nav aria-label="Navegação principal">
          <div className="flex items-center gap-6">

            <HeaderSearch />

          
            <a href="/login" className="text-lg font-bold">
              Entre ou cadastre-se
            </a>

          <Button variant="ghost" size="icon">
            <ShoppingBag className="w-5 h-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <Heart className="w-5 h-5" />
          </Button>

        </div>
        </nav>
    )
}