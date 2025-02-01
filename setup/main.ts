import PrimeVue from "primevue/config";
import { defineAppSetup } from "@slidev/types";
import Aura from "@primevue/themes/aura";

export default defineAppSetup(({ app }) => {
  // TODO: support specifying themes in head matter
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  });
});
