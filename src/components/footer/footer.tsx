import Image from "next/image";
import Link from "next/link";
import { Logo } from "../logo";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2 py-2 md:py-">
          <div className="py-4 mx-auto">
            <Logo />
          </div>

          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <Link href="/termos-de-uso" className="hover:text-primary">
              Termos de uso
            </Link>
            <Link
              href="/politica-de-privacidade"
              className="hover:text-primary"
            >
              Política de privacidade
            </Link>
            <Link href="/feedback" className="hover:text-primary">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
