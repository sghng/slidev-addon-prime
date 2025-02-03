/// <reference types="@slidev/types" />

import { defineConfig } from "vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";

export default defineConfig({
  optimizeDeps: {
    // This is needed otherwise design tokens are not available
    include: ["primevue/config"],
  },
  slidev: {
    components: {
      resolvers: [PrimeVueResolver()],
    },
  },
});
