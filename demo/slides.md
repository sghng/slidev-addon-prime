---
addons:
  - prime
transition: fade
fonts:
  sans: ml, Robot
  mono: ml, Fira Code
---

# `slidev-addon-naive`

<div>
  A <NButton strong type="info"> Slidev </NButton> addon that brings <NButton
  strong type="primary" > Naive UI </NButton> components to your slide show.
</div>

- Author: [Samuel Huang](https://sghuang.com)
- NPM:
  [npmjs.com/package/slidev-addon-naive](https://npmjs.com/package/slidev-addon-naive)
- Repository:
  [github.com/sghuang19/slidev-addon-naive](https://github.com/sghuang19/slidev-addon-naive)
- Preview: [naive.sghuang.com](https://naive.sghuang.com)

<div flex justify-center items-center>
  <p shrink class="-translate-y-8">
    This slideshow demonstrates a few components from Naive UI. For a full demo
    of all supported components, please visit <a
    href="https://naiveui.com">naiveui.com</a>.
  </p>

  <div flex justify-center gap-8 shrink-0>
    <NImage class=""
      width="250" src="https://sli.dev/logo-title.png"
    />
    <NImage class="pb-15"
      width="125" src="https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg"
    />
  </div>
</div>

---

## `NButton`

```markdown
<NButton strong secondary type="primary"> A Button </NButton>
```

Basic

<NSpace>
  <NButton>Default</NButton>
  <NButton type="tertiary">
    Tertiary
  </NButton>
  <NButton type="primary">
    Primary
  </NButton>
  <NButton type="info">
    Info
  </NButton>
  <NButton type="success">
    Success
  </NButton>
  <NButton type="warning">
    Warning
  </NButton>
  <NButton type="error">
    Error
  </NButton>
</NSpace>

Secondary button

<NSpace>
  <NButton strong secondary>
    Default
  </NButton>
  <NButton strong secondary type="tertiary">
    Tertiary
  </NButton>
  <NButton strong secondary type="primary">
    Primary
  </NButton>
  <NButton strong secondary type="info">
    Info
  </NButton>
  <NButton strong secondary type="success">
    Success
  </NButton>
  <NButton strong secondary type="warning">
    Warning
  </NButton>
  <NButton strong secondary type="error">
    Error
  </NButton>
  <NButton strong secondary round>
    Default
  </NButton>
  <NButton strong secondary round type="primary">
    Primary
  </NButton>
  <NButton strong secondary round type="info">
    Info
  </NButton>
  <NButton strong secondary round type="success">
    Success
  </NButton>
  <NButton strong secondary round type="warning">
    Warning
  </NButton>
  <NButton strong secondary round type="error">
    Error
  </NButton>
</NSpace>

Tertiary button

<NSpace>
  <NButton tertiary>
    Default
  </NButton>
  <NButton tertiary type="primary">
    Primary
  </NButton>
  <NButton tertiary type="info">
    Info
  </NButton>
  <NButton tertiary type="success">
    Success
  </NButton>
  <NButton tertiary type="warning">
    Warning
  </NButton>
  <NButton tertiary type="error">
    Error
  </NButton>
  <NButton tertiary round>
    Default
  </NButton>
  <NButton tertiary round type="primary">
    Primary
  </NButton>
  <NButton tertiary round type="info">
    Info
  </NButton>
  <NButton tertiary round type="success">
    Success
  </NButton>
  <NButton tertiary round type="warning">
    Warning
  </NButton>
  <NButton tertiary round type="error">
    Error
  </NButton>
</NSpace>

---

## `NAlert`

```markdown
<NAlert title="Alert Title" type="info">
  Alert Content
</NAlert>
```

<NAlert title="Alert Title" type="info" mt-10>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco.
</NAlert>

---

## `NProgress`

```markdown
<NProgress type="circle" status="info" :percentage="49" />
<NProgress
  type="line" status="success" :percentage="30"
  indicator-placement="inside"
/>
```

<NSpace flex justify-center mt-4>
  <NProgress type="circle" :percentage="19" />
  <NProgress type="circle" status="info" :percentage="49" />
  <NProgress type="circle" status="success" :percentage="10" />
  <NProgress type="circle" status="warning" :percentage="74" />
  <NProgress type="circle" status="error" :percentage="95" />
</NSpace>

<NSpace vertical mt-8 gap-8>
  <NProgress type="line" :percentage="95" :show-indicator="false" />
  <NProgress type="line" status="error" :percentage="65" />
  <NProgress
    type="line" status="success" :percentage="30" indicator-placement="inside"
  />
</NSpace>

---

## `NCard`

<div flex gap-10>
  <NCard title="Card with Cover">
    <template #cover>
      <img src="https://picsum.photos/400/200" alt="cover">
    </template>
    Lorem ipsum dolor sit amet veniam nostrud magna dolore veniam pariatur. Dolor
    incididunt duis ipsum sit cupidatat.
  </NCard>
  <NCard title="Card Slots Demo">
    <template #header-extra>
      #header-extra
    </template>
    Card Content
    <template #footer>
      #footer
    </template>
    <template #action>
      #action
    </template>
  </NCard>
</div>

---

## `NList`

<NList hoverable clickable mt-5>
  <NListItem>
    <NThing title="Better Late Than Never" content-style="margin-top: 10px;">
      <template #description>
        <NSpace size="small" style="margin-top: 4px">
          <NTag :bordered="false" type="info" size="small">
            Tag A
          </NTag>
          <NTag :bordered="false" type="info" size="small">
            Tag B
          </NTag>
        </NSpace>
      </template>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </NThing>
  </NListItem>
  <NListItem>
    <NThing title="Lorem Ipsum" content-style="margin-top: 10px;">
      <template #description>
        <NSpace size="small" style="margin-top: 4px">
          <NTag :bordered="false" type="info" size="small">
            Tag C
          </NTag>
          <NTag :bordered="false" type="info" size="small">
            Tag D
          </NTag>
        </NSpace>
      </template>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco.
    </NThing>
  </NListItem>
</NList>

---

## `NMarquee`

```markdown
<NMarquee auto-fill>
  <NImage width="200" src="https://sli.dev/logo-title.png" />
</NMarquee>
```

<NMarquee auto-fill>
  <NImage width="200" src="https://sli.dev/logo-title.png" />
</NMarquee>

---

## `NPopover`

```markdown
<NPopover trigger="hover" :delay="500" :duration="500">
  <template #trigger>
    <NButton> Hover With Delay </NButton>
  </template>
  Lorem ipsum odor amet, consectetuer adipiscing elit.
</NPopover>
```

<div flex justify-center gap-5 mt-5>

  <NPopover trigger="hover">
    <template #trigger>
      <NButton> Hover </NButton>
    </template>
    Lorem ipsum odor amet, consectetuer adipiscing elit.
  </NPopover>

  <NPopover trigger="click">
    <template #trigger>
      <NButton> Click With Sections </NButton>
    </template>
    <template #header>
      <NText strong depth="1">
        Header
      </NText>
    </template>
    Lorem ipsum odor amet, consectetuer adipiscing elit.
    <template #footer>
      Footer
    </template>
  </NPopover>

  <NPopover trigger="hover" :delay="500" :duration="500">
    <template #trigger>
      <NButton> Hover With Delay </NButton>
    </template>
    Lorem ipsum odor amet, consectetuer adipiscing elit.
  </NPopover>

</div>
