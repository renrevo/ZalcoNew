---
trigger: always_on
---

# UI/UX & Code Standards

## Visual Identity & Aesthetics (Positive Prompts)
- **Vibe:** Bold, innovative, modern, premium, and strictly minimalistic. 
- **Typography-Driven:** Rely on scale, weight, and high-contrast typography (e.g., Inter, Space Grotesk, or system sans-serif) to establish hierarchy rather than relying on boxes or borders.
- **Layout:** Use brutalist-leaning minimal layouts, asymmetrical grids where appropriate, and expansive whitespace.
- **Color:** Default to stark high-contrast monochrome (deep blacks, crisp whites) with highly intentional, singular vibrant accent colors.

## The "Anti-AI Slop" List (Negative Prompts)
- **NEVER use:** Generic Bootstrap-style layouts, standard primary blue (`#007BFF`), default soft drop-shadows, or excessive glassmorphism.
- **NEVER use:** Overly rounded corners (stick to sharp 0px or subtle 2px-4px radius unless specified).
- **NEVER generate:** Cliché placeholder copy (e.g., "Revolutionize your workflow", "Lorem Ipsum"). Write contextual, conversion-focused microcopy appropriate for a modern tech startup.
- **NEVER over-engineer:** Avoid unnecessary wrapper `div`s or deeply nested DOM trees.

## Component Architecture
- Default to modern functional components.
- Separate business logic from UI components completely.
- Ensure strict WCAG AA accessibility out of the box (ARIA labels, keyboard navigation, contrast ratios).