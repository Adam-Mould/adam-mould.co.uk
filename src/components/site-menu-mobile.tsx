import {
  Book,
  Home,
  Menu,
  PackageOpen,
  Palette,
  Phone,
  Puzzle,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export function SiteMenuMobile({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 px-2"
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
          <span className="hidden sm:block">Menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuItem asChild>
          <Link href="/">
            <Home size={18} className="mr-2" />
            Home
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/about">
            <User size={18} className="mr-2" />
            About
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/services">
            <PackageOpen size={18} className="mr-2" />
            Services
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/solutions">
            <Puzzle size={18} className="mr-2" />
            Solutions
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/work">
            <Palette size={18} className="mr-2" />
            Work
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/blog">
            <Book size={18} className="mr-2" />
            Blog
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/contact">
            <Phone size={18} className="mr-2" />
            Contact
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
