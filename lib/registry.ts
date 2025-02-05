import { Index } from "@/blocks";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const memoizedIndex: typeof Index = Object.fromEntries(
  Object.entries(Index).map(([style, items]) => [style, { ...items }])
);

export type Block = {
  // categories: string[];
  section: string;
  name: string;
  file: {
    path: string;
    type: string;
    target: string;
  };
};

export const getAllFiles = (dirPath: string, arrayOfFiles: string[] = []) => {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
};

export const getBlockList = async () => {
  const root_path = "blocks";

  const files = getAllFiles(root_path);
  const blocks: { [key: string]: Block } = {};

  for (const file of files) {
    if (file.endsWith(".config.tsx")) {
      const section = path.basename(path.dirname(file));
      const name = path.basename(file, ".config.tsx");
      const codeFilePath = file.replace(".config.tsx", ".code.tsx");

      // const config = await import(pathToFileURL(path.resolve(file)).href);
      // const code = fs.readFileSync(codeFilePath, "utf8");

      blocks[name] = {
        // categories: config.default.categories || undefined,
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
};

export const getBlockComponent = async (name: string) => {
  return memoizedIndex[name]?.component;
};

export const getBlockItem = async (name: string) => {
  const item = memoizedIndex[name];

  return item;
};
