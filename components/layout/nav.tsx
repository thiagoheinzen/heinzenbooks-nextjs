import Link from "next/link";

export function Nav() {
    return (
        <nav aria-label="Navegação principal">
            <ul className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
                <li>
                    <Link href="/sobre" className="hover:text-foreground transition-colors">
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link href="/categorias" className="hover:text-foreground transition-colors">
                        Categorias
                    </Link>
                </li>
                <li>
                    <Link href="/contato" className="hover:text-foreground transition-colors">
                        Contato
                    </Link>
                </li>
                </ul>
        </nav>
    )
}