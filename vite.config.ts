/// <reference types="@slidev/types" />

import { defineConfig } from "vite";
import IconsResolver from "unplugin-icons/resolver";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";

export default defineConfig({
  optimizeDeps: {
    // This is needed otherwise design tokens are not available
    include: ["primevue/config"],
  },
  slidev: {
    components: {
      resolvers: [
        /*
         * !!! IMPORTANT !!!

         * IconsResolver is required for Slidev to load icons. However, this
         * config here is unaware of icon sets customized with icon option, and
         * disables that option as a result.
         * 
         * Read more in the following resources:
         * 
         * - https://sli.dev/features/icons
         * - https://github.com/unplugin/unplugin-icons
         * - https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/vite/components.ts
         * - https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/vite/index.ts
         */
        IconsResolver({
          prefix: "",
          customCollections: [],
        }),
        PrimeVueResolver(),
      ],
    },
  },
});
