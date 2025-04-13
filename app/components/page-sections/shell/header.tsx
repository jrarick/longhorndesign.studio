import Link from "next/link";
import Menu from "./menu";
import Image from "next/image";

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
          <Image
            alt="Longhorn Design Studio Logo"
            src="/lds-logo.png"
            className="h-14 w-auto"
            width={154}
            height={56}
            priority
          />
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
          <Menu navigation={navigation} />
        </div>
      </nav>
    </header>
  );
}
