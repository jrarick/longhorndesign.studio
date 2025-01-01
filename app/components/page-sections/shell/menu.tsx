"use client";

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
import Link from "next/link";
import { useState } from "react";

export default function Menu({
  navigation,
}: {
  navigation: { name: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={() => setOpen(!open)}>
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
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
