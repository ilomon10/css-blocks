import { getBlockItem } from "@/lib/registry";
import { BlockViewer } from "./block-viewer";
import React from "react";

export async function BlockDisplay({ name }: { name: string }) {
  const item = await getCachedRegistryItem(name);

  if (!item.file) {
    return null;
  }

  // return null;
  return <BlockViewer item={item} />;
}

const getCachedRegistryItem = React.cache(async (name: string) => {
  return await getBlockItem(name);
});
