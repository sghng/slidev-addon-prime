import { execSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { definePreparserSetup } from "@slidev/types";

import prime from "primevue";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const extractor = join(
  __dirname,
  `../src/extractor.${process.platform === "win32" ? "ps1" : "sh"}`,
);

export const extractComponents = (filepath: string): string[] => {
  const components = execSync(`"${extractor}" "${filepath}"`, {
    encoding: "utf-8",
  })
    .trim()
    .split("\n");
  console.debug("[Prime] Components used:", JSON.stringify(components));
  return components;
};

// see https://sli.dev/custom/config-parser
export default definePreparserSetup(({ filepath }) => {
  try {
    process.env.PRIME_COMPONENTS = extractComponents(filepath)
      .filter((component) => component in prime)
      .toString();
  } catch (error) {
    console.error(
      "  [Prime] Failed to extract PrimeVue components, tree-shaking disabled:",
      error,
    );
  }
  return []; // do nothing
});
