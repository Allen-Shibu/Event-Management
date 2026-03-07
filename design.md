# CampusEvents Design System

Canonical reference for consistent design patterns across all pages and components.

---

## Colors

| Token              | Value       | Usage                              |
| ------------------ | ----------- | ---------------------------------- |
| `primary`          | `#2B8CEE`   | CTA buttons, links, active states  |
| `primary-dark`     | `#1a6bc4`   | Hover state for primary            |
| `primary-light`    | `#e8f4fd`   | Tinted backgrounds                 |
| `purple`           | `#7848F4`   | Accent, branding, dashboard theme  |
| `purple-light`     | `#f3effe`   | Accent hover backgrounds           |
| `dark-blue`        | `#10107B`   | Footer background, register CTA    |
| `dark`             | `#131315`   | Primary text                       |
| `gray-text`        | `#7E7E7E`   | Secondary/muted body text          |
| `light-bg`         | `#F8F8FA`   | Page backgrounds, input fill       |
| `card-shadow`      | `rgba(0,0,0,0.08)` | Subtle card elevation      |

---

## Typography

| Role               | Font Family   | Size Class     | Weight     |
| ------------------ | ------------- | -------------- | ---------- |
| Hero heading       | Lexend        | `text-5xl/6xl` | `font-extrabold` |
| Page title         | Lexend        | `text-3xl/4xl` | `font-bold`      |
| Section heading    | Lexend        | `text-2xl`     | `font-bold`      |
| Card title         | DM Sans       | `text-lg`      | `font-bold`      |
| Body               | DM Sans       | `text-base`    | `font-normal`    |
| Caption/label      | DM Sans       | `text-sm`      | `font-semibold`  |
| Small text         | DM Sans       | `text-xs`      | `font-medium`    |

---

## Spacing Scale

Use consistent spacing across the app. When in doubt, use **more space, not less**.

| Context                  | Token          | Value   |
| ------------------------ | -------------- | ------- |
| Page section vertical    | `py-16`        | 64px    |
| Content area horizontal  | `px-8 lg:px-12`| 32–48px |
| Between sections         | `gap-12`       | 48px    |
| Card internal padding    | `p-6`          | 24px    |
| Form field gap           | `gap-5`        | 20px    |
| Card grid gap            | `gap-6`        | 24px    |
| Section heading → content| `mb-6`         | 24px    |
| Button internal padding  | `px-8 py-3.5`  | 32×14px |
| Input internal padding   | `py-3.5 px-5`  | 14×20px |

---

## Border Radius

| Element            | Token           |
| ------------------ | --------------- |
| Cards              | `rounded-2xl`   |
| Inputs & textareas | `rounded-xl`    |
| Primary buttons    | `rounded-full`  |
| Secondary buttons  | `rounded-xl`    |
| Tags / pills       | `rounded-full`  |
| Avatars            | `rounded-full`  |
| Images             | `rounded-2xl`   |

---

## Shadows

| Level      | Class                                       | Usage            |
| ---------- | ------------------------------------------- | ---------------- |
| Subtle     | `shadow-sm`                                 | Cards at rest    |
| Hover      | `hover:shadow-lg`                           | Card hover state |
| Elevated   | `shadow-xl`                                 | Modals, popups   |
| CTA glow   | `shadow-lg shadow-primary/25`               | Primary buttons  |

---

## Button Patterns

### Primary Button
```
bg-primary text-white font-bold rounded-full px-8 py-3.5
shadow-lg shadow-primary/25 hover:bg-primary-dark transition-colors
```

### Secondary Button
```
bg-white text-slate-700 font-semibold border border-slate-200
rounded-xl px-6 py-3 hover:bg-slate-50 transition-colors
```

### Ghost Button
```
bg-transparent text-primary font-semibold border-none
hover:underline transition-colors
```

### Accent Button (purple theme)
```
bg-purple text-white font-semibold rounded-full px-8 py-3.5
hover:opacity-90 transition-opacity
```

---

## Input Patterns

### Standard Input
```
w-full bg-slate-50 border border-slate-200 rounded-xl
py-3.5 px-5 text-base text-slate-900 placeholder-slate-400
focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition
```

### Input with Icon
Same as above, add `pl-12` and an absolutely-positioned icon at `left-4 top-1/2 -translate-y-1/2`.

---

## Card Patterns

### Standard Card
```
bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow
```

### Bordered Card
```
bg-white rounded-2xl p-6 border border-slate-200 shadow-sm
```

---

## Layout Patterns

### Full-width page with centered content
```
<div className="min-h-screen bg-light-bg flex flex-col">
  <Header />
  <main className="max-w-[1280px] mx-auto w-full px-8 lg:px-12 py-16">
    {/* sections with gap-12 between them */}
  </main>
  <Footer />
</div>
```

### Sidebar layout (dashboard)
```
<div className="min-h-screen bg-light-bg flex">
  <Sidebar />
  <main className="flex-1 px-12 py-10">
    {/* content with max-w constraint */}
  </main>
</div>
```

---

## Key Principles

1. **Ample spacing** — always prefer more whitespace; cramped layouts feel cheap
2. **Consistent radius** — cards are `2xl`, inputs `xl`, primary buttons `full`
3. **Uniform shadows** — `shadow-sm` at rest, `shadow-lg` on hover
4. **Typography hierarchy** — clear size & weight differentiation between levels
5. **Smooth transitions** — every interactive element has `transition-*`
