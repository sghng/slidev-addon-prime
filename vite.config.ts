import { type Plugin, defineConfig } from "vite";

const primePlugin = (): Plugin => {
  const virtualModuleId = "virtual:prime";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "prime",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return process.env.PRIME_COMPONENTS
          ? `export { ${process.env.PRIME_COMPONENTS} } from "primevue";`
          : "export default true;"; // truthy default export => no components
      }
    },
  };
};

export default defineConfig({ plugins: [primePlugin()] });
