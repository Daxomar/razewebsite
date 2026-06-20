# Raze Website - Design System

## Overview
The Raze Website uses a carefully crafted design system built on Tailwind CSS with custom design tokens. This document outlines the color palette, typography, spacing, and component patterns used throughout the project.

---

## Color Palette

The project uses a minimal 3-color system for a clean, professional aesthetic:

| Token | CSS Variable | Hex Value | Usage |
|-------|--------------|-----------|-------|
| **RPrimary** | `--RPrimary` | `#101010` | Dark backgrounds, text on light backgrounds |
| **RonPrimary** | `--RonPrimary` | `#ffffff` | Light backgrounds, text on dark backgrounds |
| **RSecondary** | `--RSecondary` | `#c1272c` | Accent color for CTAs and highlights |

### Dark Mode
The same color variables are preserved in dark mode with adjusted opacity/tone as needed.

---

## Typography

All typography uses the **Montserrat** font family with responsive sizing powered by CSS `clamp()` for fluid scaling across breakpoints.

### Type Scale

| Token | Mobile | Desktop | Weight | Usage |
|-------|--------|---------|--------|-------|
| **RHeader1** | 40px | 170px | 600 | Page titles, hero sections |
| **RHeader2** | 36px | 120px | 600 | Section headers |
| **RHeader3** | 28px | 70px | 600 | Subsection headers |
| **RHeader4** | 24px | 80px | 600 | Card titles, emphasis |
| **RTitle** | 18px | 30px | 600 | Section labels, accent headers |
| **RParagraph1** | 14px | 16px | 600 | Body text (semibold) |
| **RParagraph2** | 14px | 16px | 500 | Body text (regular) |
| **RButtonText** | 14px | 18px | 600 | Button labels |

### Line Height & Spacing
- Body text line height: `1.4-1.6` (clamp-based for responsiveness)
- Letter spacing: Carefully tuned per style for optimal readability
- All typography scales responsively using CSS `clamp()` functions

---

## Spacing & Layout

### Responsive Padding

| Token | Mobile | Desktop | Purpose |
|-------|--------|---------|---------|
| **RMobilePadding** | 4px | - | Mobile-only spacing |
| **RTabletPadding** | 8px | - | Tablet-only spacing |
| **RLaptopPadding** | - | 30px | Desktop spacing |
| **RContainerPadding** | 16px | 120px | Main container padding |

### Button Spacing

| Variant | Mobile PX | Desktop PX | Mobile PY | Desktop PY |
|---------|-----------|-----------|-----------|-----------|
| **Mobile** | 16px | 32px | 8px | 16px |
| **Tablet** | 24px | 48px | 12px | 24px |
| **Laptop** | 32px | 64px | 16px | 32px |

### Border Radius
- **RButton**: 20px - Used for buttons and interactive elements
- **RSkill**: 35px - Used for skill/feature cards

---

## Border & Stroke

| Token | Color | Width | Style | Usage |
|-------|-------|-------|-------|-------|
| **RBorderDark** | #101010 | 1px | solid | Outlines on light backgrounds |
| **RBorderLight** | #ffffff | 1px | solid | Outlines on dark backgrounds |

---

## Opacity

| Token | Value | Usage |
|-------|-------|-------|
| **ROpacity1** | 0.6 | Secondary elements, disabled states |

---

## Layout Patterns

### Primary Layout Method
The project uses **Flexbox** as the primary layout method:
- `flex items-center justify-between` - Common horizontal layouts
- `flex flex-col` - Vertical stacking
- `flex-1` - Flexible growth within containers
- `gap` classes - Consistent spacing between elements

### Responsive Breakpoints
- Mobile: Default (`0px`)
- Tablet: `md:` prefix (`768px`)
- Laptop: `lg:` prefix (`1024px`)
- 2XL: `2xl:` prefix (`1536px`)

---

## Component Guidelines

### Buttons
- Use `RButtonText` for button labels
- Apply `RButton` border-radius (20px)
- Use padding variants based on size requirement
- Always use `RSecondary` accent color for primary CTAs

### Cards & Containers
- Use `flex flex-col` for vertical card layouts
- Apply `RSkill` border-radius (35px) for feature/skill cards
- Use `RBorderDark` or `RBorderLight` for outlines
- Maintain consistent gap spacing with `gap-4` or similar

### Typography Hierarchy
1. Use `RHeader1` for main page titles
2. Use `RHeader2` for major section dividers
3. Use `RHeader3` for subsections
4. Use `RParagraph1/2` for body content
5. Use `RTitle` for accent labels or highlights

---

## CSS Variables Reference

All tokens are stored in `/token.json` and available as CSS custom properties:

```css
:root {
  --RPrimary: #101010;
  --RonPrimary: #ffffff;
  --RSecondary: #c1272c;
}
```

These variables are integrated into Tailwind config for seamless utility class generation.

---

## Accessibility Considerations

- All typography maintains minimum line-height of 1.4 for readability
- Color contrast meets WCAG AA standards
- Border outlines provide visual feedback for interactive elements
- Responsive sizing ensures readability across all devices

---

## Best Practices

1. **Always use design tokens** - Never hardcode colors, spacing, or sizes
2. **Maintain type hierarchy** - Use the correct typography level for content
3. **Consistent spacing** - Use predefined gap and padding values
4. **Responsive design** - Leverage clamp() functions and Tailwind breakpoints
5. **Accessibility first** - Ensure sufficient contrast and readable type sizes
6. **Component reusability** - Build components that follow these guidelines
