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
          ? process.env.PRIME_COMPONENTS.split(",")
              .map((name) => {
                return (
                  `export { default as ${name} } ` +
                  `from "primevue/${name.toLowerCase()}";`
                );
              })
              .join("\n")
          : "export default true;"; // truthy default export => no components
      }
    },
  };
};

export default defineConfig({ plugins: [primePlugin()] });
