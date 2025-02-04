/*
 * Slidev uses presetUno by default, see:
 *
 * - slidev/packages/client/uno.config.ts
 * - https://sli.dev/custom/config-unocss
 *
 * However, the "important" option is only available in presetWind
 *
 */

import { defineConfig, presetWind } from "unocss";

export default defineConfig({
  presets: [
    presetWind({
      important: ":root", // makes UnoCSS override PrimeVue styles
    }),
  ],
});
