---
description: How to ensure design consistency when adding or modifying components
---

# Design Consistency Workflow

Follow these steps when creating or modifying any UI component or page.

## 1. Reference the Design System

Before writing any component, read `design.md` at the project root. It contains the canonical tokens for:
- Colors, typography, spacing
- Border radius, shadows
- Button, input, and card patterns
- Layout patterns

## 2. Spacing Guidelines

- **Between page sections**: Use `gap-12` or `py-16`
- **Content area padding**: `px-8 lg:px-12`
- **Card interiors**: `p-6` minimum, `p-8` for form cards
- **Form field gaps**: `gap-5`
- **Card grid gaps**: `gap-6` or `gap-7`
- **Section heading to content**: `mb-6`
- Always prefer **more spacing** over less. Cramped layouts feel low-quality.

## 3. Component Patterns

### Buttons
- **Primary CTA**: `bg-primary text-white font-bold rounded-full px-8 py-3.5 shadow-lg shadow-primary/25`
- **Secondary**: `bg-white border border-slate-200 rounded-xl px-6 py-3`
- **Accent (purple)**: `bg-purple text-white rounded-full px-8 py-3.5 shadow-lg shadow-purple/25`

### Inputs
- Always use: `bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-5`
- Focus state: `focus:ring-2 focus:ring-primary/30 focus:border-primary`
- With icon: add `pl-12` and position icon absolutely

### Cards
- Use `rounded-2xl` with `shadow-sm hover:shadow-lg transition-all`
- Use `hover:-translate-y-1` for interactive cards

### Headers
- Always include `backdrop-blur-md bg-white/80`
- Use `max-w-[1280px]` for content container

## 4. Verification Checklist

// turbo
1. Run `npm run build` to verify no errors
2. Open each modified page in the browser
3. Verify:
   - Ample whitespace between sections
   - Consistent button styles (rounded-full for primary)
   - Consistent input styles (rounded-xl)
   - Consistent card styles (rounded-2xl)
   - Smooth hover transitions
   - No cramped or overflowing layouts
