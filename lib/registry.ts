import { Index } from "@/blocks";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import _get from "lodash/get";
import _omit from "lodash/omit";

const memoizedIndex: typeof Index = Object.fromEntries(
  Object.entries(Index).map(([style, items]) => [style, { ...items }])
);

export type Block = {
  categories: string[];
  section: string;
  name: string;
  title: string;
  description?: string;
  file: {
    path: string;
    type: string;
    target: string;
  };
  meta: Record<string, string | number>;
};

export type BlockCompiled = Block & {
  component: React.ComponentType;
};

export async function getAllFiles(
  dirPath: string,
  arrayOfFiles: string[] = []
) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = await getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  }

  return arrayOfFiles;
}

export async function getBlockList() {
  const root_path = "blocks";

  const files = await getAllFiles(root_path);
  const blocks: { [key: string]: Block } = {};

  for (const file of files) {
    if (file.endsWith(".config.tsx")) {
      const section = path.basename(path.dirname(file));
      const name = path.basename(file, ".config.tsx");
      const codeFilePath = file.replace(".config.tsx", ".code.tsx");

      // const code = fs.readFileSync(codeFilePath, "utf8");
      const { default: config } = await import(
        pathToFileURL(path.resolve(file)).href
      );

      blocks[name] = {
        ...config,
        title: _get(config, "name") || name,
        section,
        name,
        file: {
          path: path.posix.join(...codeFilePath.split(path.sep)),
          type: "registry:block",
          target: "",
        },
      };
    }
  }

  return blocks;
}

export async function getBlockComponent(name: string) {
  return memoizedIndex[name]?.component;
}

export async function getBlockItem(name: string) {
  const item = (memoizedIndex[name] as BlockCompiled) || undefined;
  return {
    ..._omit(item, ["component"]),
  };
}
