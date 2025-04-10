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

## Installation

First, install the addon.

```bash
npm install slidev-addon-prime
```

Then, add the following frontmatter to your `slides.md`.  

<pre><code>---
addons:
  - <b>slidev-addon-prime</b>
---</code></pre>

[More Information](https://sli.dev/addons/use.html)

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
