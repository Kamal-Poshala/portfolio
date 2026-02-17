# Portfolio Improvement Plan

## Goal
Transform the current basic portfolio into a premium, high-impact developer portfolio that attracts recruiters.

## Analysis
- **Current State**: Minimalist Next.js 16 app with Tailwind CSS 4.
- **Content**: 
  - Projects are structured in `src/data/projects.ts` (Good starting point).
  - Resume is embedded as PDF (Hard to parse for SEO/ATS, better to have HTML content too).
  - Missing dedicated "Skills" and "Experience" sections on the homepage.
- **Design**: Currently uses default black/white. Needs rich aesthetics, gradients, and animations.

## Proposed Strategy

### 1. Design Overhaul (Aesthetics)
- **Theme**: Switch to a deep, rich dark mode by default (`#0a0a0a` background) with vibrant accent colors (Blue/Purple gradients).
- **Typography**: Use `Geist Sans` (already installed) effectively with larger, bolder headings.
- **Interactivity**: Add hover effects to cards and buttons.

### 2. Structure Improvements
- **Hero Section**: Create a compelling introduction with a "Call to Action" (e.g., "View My Work", "Contact Me").
- **Skills Section**: distinct section showcasing technical strengths (Languages, Frameworks, Tools).
- **Experience Section**: A timeline view of professional experience (Need content from Resume).
- **Projects Section**: Enhanced grid layout with "glassmorphism" cards.

### 3. Implementation Steps
1.  **Setup Styling**: Update `globals.css` with new variables and gradients.
2.  **Components**:
    - Build `Hero` component.
    - Build `Section` container (for consistent spacing).
    - Build `ProjectCard` component.
    - Build `SkillBadge` or `TechStack` component.
    - Build `Timeline` component for Experience.
3.  **Pages**:
    - Update `page.tsx` (Home) to include all sections.
    - Update `projects/page.tsx` for detailed view.
4.  **Content Integration**:
    - Populate Skills from `projects.ts` analysis.
    - *Wait for User Input*: Experience details from Resume.

## User Action Required
- **Resume Content**: Please paste the text from your preferred resume (Resume1 or Resume2) so I can populate the "Experience" and "Education" sections accurately.
