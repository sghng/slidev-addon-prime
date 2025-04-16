import { type UserConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

export default {
  base: "/slidev-addon-prime/",
  plugins: [
    process.env.NODE_ENV !== "production" &&
      visualizer({
        open: true,
        gzipSize: true,
      }),
  ],
} as UserConfig;
