# Technical Plan: Initial Next.js Project Creation

## Overview

Initialize a Next.js starter template from scratch using AI-assisted development workflows. The project will follow modern React and Next.js best practices with strict TypeScript, comprehensive testing setup, and production-ready tooling. This is a foundational setup that creates the project scaffolding and configuration; features will be added in subsequent phases.

## Files to Create

### Root Configuration Files

**package.json**
- Define project metadata and scripts
- Include all required dependencies:
  - Next.js (latest stable)
  - React 18+
  - TypeScript
  - TailwindCSS (tailwindcss, postcss, autoprefixer)
  - Redux Toolkit (@reduxjs/toolkit, react-redux)
  - Form libraries (react-hook-form, zod)
  - Testing (jest, @testing-library/react, @testing-library/jest-dom)
  - DOMPurify (isomorphic-dompurify)
  - Development tools (@types/* packages, eslint, prettier)
- Define scripts: dev, build, start, test, lint, format

**tsconfig.json**
- Enable strict mode
- Configure path aliases (@/ for src/)
- Set target to ES2020+
- Enable App Router support
- Configure module resolution for Node.js

**next.config.js**
- Configure Next.js settings
- Enable strict mode
- Configure image domains if needed
- Set up proper build optimization

**tailwind.config.js**
- Configure Tailwind with Next.js
- Define custom theme extending default
- Set up content paths for purging
- Configure dark mode (class-based strategy)
- Define CSS variables for theming

**postcss.config.js**
- Configure PostCSS with Tailwind and autoprefixer

**.eslintrc.json**
- Extend Next.js ESLint config
- Add TypeScript ESLint rules
- Configure strict linting rules
- Set up import ordering rules

**.prettierrc**
- Set indentation to 2 spaces
- Enable single quotes
- Require semicolons
- Set line length to 80 characters
- Enable trailing commas

**jest.config.js**
- Configure Jest for Next.js
- Set up React Testing Library
- Configure module name mapping for path aliases
- Set up test environment (jsdom)
- Configure coverage thresholds

**.env.local.example**
- Template for environment variables
- Document all required environment variables
- Include comments explaining each variable

**.gitignore**
- Extend existing with Next.js specifics
- Ignore .env.local
- Ignore build outputs (.next/, out/)
- Ignore coverage reports

### Source Directory Structure

**src/app/layout.tsx**
- Root layout component (Server Component)
- Configure metadata
- Set up HTML structure
- Integrate providers (Redux, Theme)
- Import global styles

**src/app/page.tsx**
- Home page component (Server Component)
- Initial welcome/landing content
- Demonstrate proper Next.js App Router structure

**src/app/globals.css**
- Import Tailwind directives (@tailwind base/components/utilities)
- Define CSS variables for light/dark themes
- Set up base styles
- Configure custom Tailwind components

**src/app/providers.tsx**
- Client Component for client-side providers
- Wrap Redux Provider
- Configure theme mode (light/dark) management with context

**src/store/index.ts**
- Configure Redux store using configureStore
- Set up root reducer
- Configure middleware
- Export store, RootState, and AppDispatch types

**src/store/slices/.gitkeep**
- Placeholder for future Redux slices
- Ensures directory is tracked in git

**src/components/theme-toggle.tsx**
- Client Component for theme switching
- Toggle between light and dark modes
- Integrate with theme context/state
- Accessible button with proper ARIA labels

**src/components/.gitkeep**
- Placeholder for future components

**src/hooks/use-theme.ts**
- Custom hook for theme management
- Handle theme state and persistence
- Provide theme toggle functionality
- Type-safe return values

**src/hooks/.gitkeep**
- Placeholder for future custom hooks

**src/lib/theme.ts**
- Theme configuration constants
- Define light and dark theme color values
- Export theme-related utility functions
- Define color palette for consistency
- Ensure WCAG contrast ratios

**src/lib/utils.ts**
- Common utility functions
- String manipulation helpers
- Type guards
- Export commonly used functions

**src/lib/.gitkeep**
- Placeholder for future utilities

**src/types/index.ts**
- Common TypeScript interfaces and types
- Shared type definitions
- Export all types from single entry point

**src/types/.gitkeep**
- Placeholder for future type definitions

### Test Directory Structure

**tests/setup.ts**
- Configure Jest environment
- Import @testing-library/jest-dom matchers
- Set up global test utilities
- Mock Next.js router if needed

**tests/components/.gitkeep**
- Placeholder for component tests

**tests/integration/.gitkeep**
- Placeholder for integration tests

**tests/utils/.gitkeep**
- Placeholder for utility function tests

### Public Directory

**public/.gitkeep**
- Placeholder for static assets
- Images, fonts, icons will be added here

## Setup Algorithm

### Phase 1: Project Initialization

1. Initialize package.json with npm/yarn
2. Install all core dependencies in a single command
3. Install all dev dependencies in a single command

### Phase 2: Configuration Setup

1. Create TypeScript configuration (tsconfig.json) with strict mode
2. Set up Next.js configuration (next.config.js)
3. Configure Tailwind CSS (tailwind.config.js, postcss.config.js)
4. Set up ESLint and Prettier configurations
5. Configure Jest for testing

### Phase 3: Directory Structure Creation

1. Create src/ directory with all subdirectories:
   - app/
   - components/
   - hooks/
   - lib/
   - store/slices/
   - types/
2. Create tests/ directory with subdirectories:
   - components/
   - integration/
   - utils/
3. Create public/ directory

### Phase 4: Core Application Files

1. Create root layout (src/app/layout.tsx) with:
   - Metadata configuration
   - HTML structure
   - Provider integration
2. Create home page (src/app/page.tsx)
3. Create global styles (src/app/globals.css)
4. Create client-side providers (src/app/providers.tsx)

### Phase 5: State Management Setup

1. Configure Redux store (src/store/index.ts)
2. Create placeholder for slices directory
3. Set up proper TypeScript types for store

### Phase 6: Theme Implementation

1. Create theme configuration constants (src/lib/theme.ts)
2. Implement theme toggle component (src/components/theme-toggle.tsx)
3. Create custom hook for theme management (src/hooks/use-theme.ts)
4. Integrate theme context with providers

### Phase 7: Utility and Type Setup

1. Create utility functions file (src/lib/utils.ts)
2. Create types file (src/types/index.ts)
3. Add placeholder .gitkeep files where needed

### Phase 8: Testing Infrastructure

1. Create Jest setup file (tests/setup.ts)
2. Add placeholder directories for tests
3. Verify Jest can run successfully

### Phase 9: Environment Configuration

1. Create .env.local.example template
2. Document required environment variables
3. Update .gitignore if needed

## Key Implementation Details

### TypeScript Configuration
- Enable `strict: true`
- Set `noUncheckedIndexedAccess: true`
- Configure path aliases for cleaner imports
- Use `moduleResolution: "bundler"` for Next.js App Router

### Tailwind CSS Configuration
- Configure custom color palette in tailwind.config.js
- Set up dark mode with class strategy
- Define custom components and utilities
- Use CSS variables for dynamic theming
- Extend default theme with project-specific values

### Redux Toolkit Setup
- Use `configureStore` from @reduxjs/toolkit
- Export typed hooks (useAppDispatch, useAppSelector)
- Structure for feature-based slices
- Enable Redux DevTools in development

### Theme Management
- CSS variables for theme colors in globals.css
- Use Tailwind's dark mode with class strategy
- Theme toggle component in header/navbar
- Persist theme preference in localStorage
- Server-side theme detection prevention (avoid hydration mismatch)
- Apply 'dark' class to html/body element for theme switching

### Testing Setup
- Jest with React Testing Library
- Support for TypeScript
- Module name mapping for path aliases
- Custom matchers from @testing-library/jest-dom
- Coverage reporting configuration

### Code Quality Tools
- ESLint with Next.js and TypeScript rules
- Prettier for consistent formatting
- Enforce 2-space indentation
- 80-character line length
- Trailing commas in multiline objects/arrays

## Verification Steps

After implementation, verify:
1. `npm run dev` starts development server without errors
2. `npm run build` produces optimized production build
3. `npm run test` executes Jest successfully (even with no tests)
4. `npm run lint` passes without errors
5. TypeScript compilation succeeds with no errors
6. Theme toggle works correctly
7. All directories and placeholder files exist
8. Project structure matches CLAUDE.md specifications

## Dependencies Summary

### Production Dependencies
- next (latest stable)
- react, react-dom (^18.0.0)
- @reduxjs/toolkit
- react-redux
- tailwindcss
- react-hook-form
- zod
- isomorphic-dompurify
- clsx (for conditional class names)

### Development Dependencies
- typescript
- @types/react, @types/react-dom, @types/node
- eslint, eslint-config-next
- prettier
- jest, @testing-library/react, @testing-library/jest-dom
- @testing-library/user-event
- jest-environment-jsdom
- postcss, autoprefixer

## Post-Setup Notes

- All components default to Server Components (no 'use client' unless needed)
- Theme toggle will be Client Component (requires useState)
- Providers file will be Client Component (wraps Redux/Theme providers)
- Initial page and layout demonstrate proper App Router patterns
- Project is ready for feature development following CLAUDE.md guidelines
- Git history should show clean initialization commit