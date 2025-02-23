import { defineAppSetup } from "@slidev/types";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import components from "../src/components";

export default defineAppSetup(({ app }) => {
  app.use(components);
  // TODO: support specifying themes in head matter
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        // PrimeVue uses system dark mode selector by default, which conflicts
        // with the toggle in Slidev
        darkModeSelector: ".dark",
      },
    },
  });
});
