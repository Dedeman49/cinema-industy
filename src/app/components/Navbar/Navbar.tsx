import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between border-b-[0.5px] border-white">
        <Image src="/logo1.png" alt="logo" width={300} height={50} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <MenuIcon className="text-white mr-5 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72 mr-2">
            <DropdownMenuLabel className="uppercase font-black tracking-widest">
              Pagini
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/about/evolution">
                  Evoluția tehnologiei filmului
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about/impact">
                  Impactul serviciilor de streaming
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about/representation">
                  Reprezentarea în cinema
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about/fetivals">Festivaluri de film</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about/genres">
                  Genurile și Tendințele Cinematografice
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about/behind">În Culisele Producției de Film</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about/cinema">Cinematografia și Societatea</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about/perservation">
                  Preservarea și Restaurarea Filmelor
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about/international">
                  Cinematografia Internațională
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about/business">Afacerile în Cinematografie</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
