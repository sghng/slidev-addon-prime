# slidev-addon-prime

An addon that brings [PrimeVue](https://primevue.org) components to
[Slidev](https://sli.dev).

<div align="center">
  <a href="https://npmjs.com/package/slidev-addon-prime">
    <img
      src="https://img.shields.io/npm/v/slidev-addon-prime?color=2B90B6"
      alt="NPM version"
    >
  </a>
</div>

## Usage

Install the package, with your package manager of choice:

```sh
npm install --save slidev-addon-prime
pnpm add slidev-addon-prime
yarn add slidev-addon-prime
bun add slidev-addon-prime
```

### As a Slidev Addon

Then, enable this addon for your slides using front matter:

<!-- prettier-ignore -->
```markdown
<!-- slides.md -->
---
addons:
  - prime
---
# A Slide Show
...
```

Alternatively, you can enable the addon by adding the following property into
`package.json`:

```json
{
  "slidev": {
    "addons": ["prime"]
  }
}
```

### As a Vue Plugin

> [!WARNING]
>
> This mode is only recommended for advanced users who specifically require it.
> Certain features, such as tree-shaking, are exclusively available in Slidev
> addon mode.

```ts
// main/setup.ts
import prime from "slidev-addon-prime";

export default defineAppSetup(({ app }) => {
  app.use(prime);
});
```

## Known Issues

- The `uno.config.ts` file in your project will be **overridden** by this addon.
  If your slides rely on the configurations in that file, consider using this
  addon in a **"headless" mode** by copying the necessary code directly into
  your project instead.
- Additional icon configs specified in `slidev.icons` (e.g. custom icon
  collections) cannot be resolved.

## Latest Changes

- **`v0.3.1`:** Fixed resolution of Slidev builtin icons. Custom icon
  collections are still unavailable.
- **`v0.3.0`:** Added full support for UnoCSS utility classes. No more `!`
  prefixes needed for styling!
- **`v0.2.2`:** Fixed missing PrimeVue design tokens, which caused incorrect
  styling.
- **`v0.2.1`:** Fixed a type reference issue that potentially breaks the app.
- **`v0.2.0`:** Added support for dynamic dark mode.
- **`v0.1.0`:** First working version.
