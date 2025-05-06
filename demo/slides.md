---
addons:
  - prime
transition: fade
fonts:
  sans: JetBrains Mono
  mono: JetBrains Mono
---

# `slidev-addon-prime`

<div>
  A <Button label="Slidev" severity="info"/> addon that brings <Button label="PrimeVue"/>
  components to your slide show.
</div>

- Author: [Samuel Huang](https://sghuang.com)
- NPM:
  [npmjs.com/package/slidev-addon-prime](https://npmjs.com/package/slidev-addon-prime)
- Repository:
  [github.com/sghng/slidev-addon-prime](https://github.com/sghng/slidev-addon-prime)
- Preview: [prime.sghuang.com](https://prime.sghuang.com)

<div flex justify-center items-center>
  <p shrink class="-translate-y-8">
    This slideshow demonstrates a few components from Naive UI. For a full demo
    of all supported components, please visit <a
    href="https://primevue.org">primevue.org</a>.
  </p>

  <div flex justify-center gap-8 shrink-0>
    <Image width="250" src="https://sli.dev/logo-title.png" />
    <Image
      class="pt-8" width="175"
      src="https://i2.wp.com/primefaces.org/wp-content/uploads/2019/12/primevue-logo.png"
    />
  </div>
</div>

---

## Button

<div class="card flex justify-center flex-wrap gap-4">
  <Button label="Primary" />
  <Button label="Secondary" severity="secondary" />
  <Button label="Success" severity="success" />
  <Button label="Info" severity="info" />
  <Button label="Warn" severity="warn" />
  <Button label="Help" severity="help" />
  <Button label="Danger" severity="danger" />
  <Button label="Contrast" severity="contrast" />
</div>

---

## Card

<Card class="mt-1rem w-4/5 mx-auto">
    <template #header>
        <img class="w-1/2" alt="user header"
        src="https://primefaces.org/cdn/primevue/images/usercard.png" />
    </template>
    <template #title>Advanced Card</template>
    <template #subtitle>Card subtitle</template>
    <template #content>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
        </p>
    </template>
    <template #footer>
        <div class="flex gap-4 mt-1">
            <Button label="Cancel" severity="secondary" outlined class="w-full" />
            <Button label="Save" class="w-full" />
        </div>
    </template>
</Card>

---

## ColorPicker

<div class="card flex justify-center">
    <ColorPicker v-model="color" inline />
</div>
