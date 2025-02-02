/// <reference types="@slidev/types" />

import { defineConfig } from "vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";

export default defineConfig({
  slidev: {
    components: {
      resolvers: [PrimeVueResolver()],
    },
  },
});
