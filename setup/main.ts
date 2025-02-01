import PrimeVue from "primevue/config";
import { defineAppSetup } from "@slidev/types";
import Button from "primevue/button";
import Aura from "@primevue/themes/aura";

export default defineAppSetup(({ app }) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  });
  app.component("Button", Button);
});
