/// <reference types="@slidev/types" />
import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    // This is needed otherwise design tokens are not available
    include: ["primevue/config"],
  },
});
