"use client";

import { createContext, useContext, useState } from "react";
import { type Block } from "@/lib/registry";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { MonitorIcon, SmartphoneIcon, TabletIcon } from "lucide-react";

type BlockViewerProviderProps = {
  item: Block;
};
type BlockViewerContextValue = {
  item: Block;
  view: "code" | "preview";
  setView: (view: "code" | "preview") => void;
};

const BlockViewerContext = createContext<BlockViewerContextValue | null>(null);

function useBlockViewer() {
  const context = useContext(BlockViewerContext);
  if (!context) {
    throw new Error(
      "useBlockViewer must be used within a BlockViewerProvider."
    );
  }
  return context;
}

function BlockViewerProvider({
  item,
  children,
}: React.PropsWithChildren<BlockViewerProviderProps>) {
  const [view, setView] = useState<BlockViewerContextValue["view"]>("preview");
  return (
    <BlockViewerContext.Provider
      value={{
        item,
        view,
        setView,
      }}
    >
      <div
        id={item.name}
        data-view={view}
        className="group/block-view-wrapper flex flex-col min-w-0 items-stretch gap-4"
        style={
          {
            "--height": item.meta?.iframeHeight ?? "930px",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </BlockViewerContext.Provider>
  );
}

function BlockViewerToolbar() {
  const { item, setView } = useBlockViewer();
  return (
    <div className="flex items-center">
      <Tabs
        defaultValue="preview"
        onValueChange={(v) => setView(v as BlockViewerContextValue["view"])}
      >
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
      </Tabs>
      <Separator orientation="vertical" className="mx-4 h-4" />
      <a
        href={`#${item.name}`}
        className="grow text-sm font-medium underline-offset-2 hover:underline"
      >
        {item.description}
      </a>
      <div>
        <ToggleGroup type="single" defaultValue="100">
          <ToggleGroupItem value="100" title="Desktop">
            <MonitorIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="60" title="Tablet">
            <TabletIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="30" title="Smartphone">
            <SmartphoneIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}

function BlockViewerCode() {
  const { item } = useBlockViewer();
  return (
    <div className="group-data-[view=preview]/block-view-wrapper:hidden">
      Code {item.title}
    </div>
  );
}

function BlockViewerPreview() {
  const { item } = useBlockViewer();
  return (
    <div className="group-data-[view=code]/block-view-wrapper:hidden md:h-[--height]">
      <div className="relative aspect-auto rounded-xl border bg-background overflow-hidden">
        <iframe
          src={`/view/blocks/${item.name}`}
          height={item.meta?.iframeHeight ?? "930"}
          className="relative z-20 hidden w-full bg-background md:block"
        />
      </div>
    </div>
  );
}

function BlockViewer({ item }: { item: Block }) {
  return (
    <BlockViewerProvider item={item}>
      <BlockViewerToolbar />
      <BlockViewerCode />
      <BlockViewerPreview />
    </BlockViewerProvider>
  );
}

export { BlockViewer };
