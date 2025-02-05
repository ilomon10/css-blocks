import { MainNavItem, SidebarNavItem } from "@/types/nav";
import { nanoid } from "nanoid";

export interface BlocksConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  chartsNav: SidebarNavItem[];
}

export const blocksConfig: BlocksConfig = {
  mainNav: [
    {
      id: nanoid(),
      title: "Home",
      href: "/",
    },
    {
      id: nanoid(),
      title: "Documentation",
      href: "/docs",
    },
    {
      id: nanoid(),
      title: "Components",
      href: "/docs/components/accordion",
    },
    {
      id: nanoid(),
      title: "Blocks",
      href: "/blocks",
    },
    {
      id: nanoid(),
      title: "Charts",
      href: "/charts",
    },
    {
      id: nanoid(),
      title: "Themes",
      href: "/themes",
    },
    {
      id: nanoid(),
      title: "Colors",
      href: "/colors",
    },
  ],
  sidebarNav: [
    {
      id: nanoid(),
      title: "Getting Started",
      items: [
        {
          id: nanoid(),
          title: "Introduction",
          href: "/docs",
          items: [],
        },
      ],
    },
  ],
  chartsNav: [
    {
      id: nanoid(),
      title: "Getting Started",
      items: [
        {
          id: nanoid(),
          title: "Introduction",
          href: "/docs/charts",
          items: [],
        },
      ],
    },
    {
      id: nanoid(),
      title: "Charts",
      items: [
        {
          id: nanoid(),
          title: "Area Chart",
          href: "/docs/charts/area",
          items: [],
        },
      ],
    },
    {
      id: nanoid(),
      title: "Components",
      items: [
        {
          id: nanoid(),
          title: "Legend",
          href: "/docs/charts/legend",
          items: [],
        },
      ],
    },
  ],
};
