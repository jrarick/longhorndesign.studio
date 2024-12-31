import Link from "next/link";
import ldsLogo from "app/assets/lds-logo.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { Button, buttonVariants } from "@/app/components/ui/button";
import { MenuIcon } from "lucide-react";
import { cn } from "@/app/lib/utils";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="relative z-10">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Longhorn Design Studio</span>
          <img alt="" src={ldsLogo.src} className="h-14 w-auto" />
        </Link>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium leading-6 text-marzipan-200 hover:text-marzipan-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="[&_svg]:size-6 [&_svg]:shrink"
                aria-label="main menu"
              >
                <MenuIcon className="text-marzipan-200" />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-stone-800">
              <SheetHeader>
                <SheetTitle className="sr-only">Main Navigation</SheetTitle>
                <SheetDescription className="sr-only">
                  View navigation options
                </SheetDescription>
              </SheetHeader>
              <div className="gap-5 flex flex-col mt-16">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "text-marzipan-200"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
