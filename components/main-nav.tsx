"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Si1and1 } from "@icons-pack/react-simple-icons";
import { blocksConfig } from "@/config/blocks";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Si1and1 className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">Design Blocks</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        {blocksConfig.mainNav?.map(({ id, title, href }) => (
          <Link
            key={id}
            href={href?.toString() as string}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === href ? "text-foreground" : "text-foreground/80"
            )}
          >
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
