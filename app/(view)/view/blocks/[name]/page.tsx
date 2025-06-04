import { Index } from "@/blocks";
import { getBlockComponent, getBlockItem } from "@/lib/registry";
import { notFound } from "next/navigation";
import React from "react";

import "@/styles/mdx.css";

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getBlockItem(name);
});

export const dynamicParams = false;

export async function generateStaticParams() {
  const blockIds = Index;

  return Object.values(blockIds).map((block) => ({
    params: {
      name: block.name,
    },
  }));
}

export default async function BlockPage({
  params,
}: {
  params: {
    name: string;
  };
}) {
  const { name } = params;
  const item = await getCachedRegistryItem(name);
  const Component = await getBlockComponent(name);

  if (!item || !Component) {
    return notFound();
  }

  return (
    <>
      <Component />
    </>
  );
}
