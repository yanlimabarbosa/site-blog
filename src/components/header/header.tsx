import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ui/theme-toggle";
import { ActiveLink } from "../active-link";
import { geistMono, geistSans } from "../layout";
import { Logo } from "../logo";

export function Header() {
  return (
    <header className={`${geistSans.className} ${geistMono.className} fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg: px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
    
          <nav className="flex items-center gap-6">
            <ThemeToggle />
            <ActiveLink href="/">Início </ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant="secondary">
              <Link href="/comecar">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
