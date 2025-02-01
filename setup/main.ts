import PrimeVue from "primevue/config";
import { defineAppSetup } from "@slidev/types";
import Button from "primevue/button";
import Aura from "@primevue/themes/aura";

export default defineAppSetup(({ app }) => {
  // TODO: support specifying themes in head matter
  // FIXME: adding a theme makes headings invisible
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  });
  app.component("PButton", Button);
});
