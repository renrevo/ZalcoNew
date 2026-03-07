---
description: An incremental prompt sequence for developing complex UI features (like dashboards, checkout flows, or landing page sections) without confusing the LLM context window
---

Trigger: /build-feature

# Milestone Feature Builder

## Workflow Execution Rules:
- The AI MUST pause execution after completing each milestone and explicitly wait for the user to type "Approve" or provide adjustments before moving to the next step.

## Milestones:

**Milestone 1: Structural Wireframe**
- Define the semantic HTML/JSX structure and CSS Grid/Flexbox skeleton only. 
- Exclude all typography, colors, and interactive logic.
- **Pause for user approval.**

**Milestone 2: The "Anti-Slop" Styling**
- Apply the bold, minimalistic styling defined in `ui-standards.md`.
- Implement responsive breakpoints.
- **Negative Prompt:** Strip out any default browser styling, generic shadows, or cliché borders.
- **Pause for user approval.**

**Milestone 3: State & Logic Integration**
- Wire up hover, focus, active, and disabled states.
- Connect mock data or state management hooks.
- **Pause for user approval.**

**Milestone 4: Polish & Edge Cases**
- Add micro-interactions or subtle transitions (max 200ms ease-in-out).
- Implement empty states, loading skeletons, and error handling.
- Output the final, production-ready code block.