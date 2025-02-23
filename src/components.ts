import type { App, DefineComponent } from "vue";

import * as prime from "virtual:prime";

const components = (app: App) => {
  if (prime.default) return; // truthy default export => no components
  Object.entries(prime).forEach(([name, component]) => {
    app.component(name, component as DefineComponent);
  });
};

export default components;
