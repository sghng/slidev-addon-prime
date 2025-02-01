---
addons:
  - prime
---

# Preview

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

<Card style="width: 50rem; overflow: hidden">
    <template #header>
        <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
    </template>
    <template #title>Advanced Card</template>
    <template #subtitle>Card subtitle</template>
    <template #content>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
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
