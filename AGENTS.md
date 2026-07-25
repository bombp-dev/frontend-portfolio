<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file
structure may all differ from your training data. Read the relevant
guide in `node_modules/next/dist/docs/` before writing any code.
Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Portfolio Project Rules

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

## Code Style

- Use functional components only.
- Prefer reusable components.
- Keep components small and focused.
- Avoid unnecessary complexity.
- Use TypeScript strictly.

## UI Principles

- Minimal Japanese × Corporate design.
- Mobile-first responsive design.
- Consistent spacing and typography.
- Accessibility first (semantic HTML and keyboard support).

## Styling

- Never hardcode colors.
- Use design tokens from globals.css.
- Reuse UI components whenever possible.

## Folder Structure

- Reusable UI goes in `components/ui`
- Layout components go in `components/layout`
- Page sections go in `sections`
- Static data goes in `data`
- Constants go in `constants`

## Performance

- Prefer Server Components unless interactivity is required.
- Optimize images using `next/image`.
- Keep bundle size small.

## AI Instructions

Before creating a new component:

1. Check if a reusable component already exists.
2. Follow the existing folder structure.
3. Follow the design system.
4. Do not introduce unnecessary dependencies.
