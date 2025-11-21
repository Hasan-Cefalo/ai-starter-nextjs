# Project Guidelines (ai-starter-nextjs)

This repository is an AI-assisted Next.js starter. At the time of writing, the repo is intentionally minimal and may not yet include a full Next.js app scaffold (no package.json). The guidelines below define the canonical setup, build, and testing flows for contributors and CI, and reference the existing rules in `.aiassistant/rules/`.

These instructions have been verified where possible in this environment by executing a minimal sanity test using Node.js. When the full app is scaffolded, follow the same patterns at a project scale.

— Last verified: 2025-11-21 21:44

1. Build and Configuration
   1.1 Prerequisites

- Node.js: 18.20.x or 20.x (LTS recommended).
- Package manager: pnpm (preferred) or npm.
- OS: macOS/Linux/WSL2.

1.2 Initializing the project (when scaffolding the app)

- If the repository does not yet contain a Next.js app:
  - pnpm dlx create-next-app@latest .
    - Choose TypeScript, App Router, ESLint, and Tailwind (optional) per team standards.
  - Alternatively, create a new app in a subfolder (e.g., apps/web) if adopting a monorepo layout.
- Ensure TypeScript strict mode is enabled in tsconfig.json: "strict": true.
- Configure path aliases via compilerOptions.paths if the project is multi-package.

1.3 Environment configuration

- Use .env.local for developer-only secrets; never commit it.
- Next.js runtime variables:
  - Public: NEXT_PUBLIC_* keys are exposed to the browser.
  - Server-only: non-prefixed keys available only on the server.
- Production secrets should be injected via the platform (e.g., Vercel, GitHub Actions secrets).

1.4 Build commands (after app is scaffolded)

- Install deps: pnpm install
- Type-check: pnpm typecheck (configure script: "typecheck": "tsc --noEmit")
- Lint: pnpm lint (ESLint with Next.js config + custom rules)
- Dev: pnpm dev
- Build: pnpm build
- Start (production): pnpm start

2. Testing
   2.1 Tooling

- Unit tests: Vitest
- React component tests: @testing-library/react + @testing-library/jest-dom
- Coverage: c8 (integrates with Vitest)

2.2 Setup (after app is scaffolded)

- Install test deps:
  - pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom c8
- Add scripts to package.json:
  - "test": "vitest",
  - "test:watch": "vitest --watch",
  - "test:ui": "vitest --ui",
  - "test:coverage": "vitest run --coverage"
- Configure Vitest in vitest.config.ts with test environment jsdom for component tests:
  - test: { environment: 'jsdom', setupFiles: ['./test/setup.ts'] }
- In test/setup.ts:
  - import '@testing-library/jest-dom'

2.3 Directory and naming conventions

- Place unit tests alongside source files as *.test.ts or *.spec.ts.
- For shared utilities, you may group tests under tests/ at the repo root in small projects.

2.4 Running tests

- Full run: pnpm test
- Watch mode during development: pnpm test:watch
- Coverage: pnpm test:coverage

2.5 Demonstration (verified in this environment)

- Because this repo currently lacks a JS toolchain, we verified the execution path by running a minimal Node.js test script. When the app is in place, the same approach applies using Vitest.
- Example that was executed successfully here:
  - node temp_sanity_test.cjs (see process below; the file is ephemeral and not committed)

3. Additional Development Information
   3.1 Code style and conventions

- Follow the rules captured in:
  - .aiassistant/rules/code-style.md (indentation, quotes, semicolons policy, naming, React/Next best practices, TypeScript strictness, etc.)
  - .aiassistant/rules/inclusive-design.md
  - .aiassistant/rules/security.md
  - .aiassistant/rules/testing.md
  - .aiassistant/rules/documentation.md
- Align with these specifics for this project:
  - TypeScript everywhere; enable strict mode.
  - Functional React components (Server Components by default with Next.js App Router). Use 'use client' only when necessary (event handlers, browser APIs, local state-heavy components).
  - Prefer feature-based folder structure (e.g., app/(marketing), app/(dashboard), components/, lib/, hooks/).
  - Keep components small and composable; extract shared logic into hooks under hooks/.
  - Use Next.js Image and Link components appropriately.
  - Avoid inline functions in JSX where possible; memoize with useCallback/useMemo when beneficial.

3.2 Linting and formatting

- ESLint: extend next/core-web-vitals and add project rules from code-style.md.
- Prettier: configure for 2-space indent, single quotes, 80-char guideline, trailing commas.
- Consider lint-staged + simple-git-hooks or husky to run lint/typecheck on pre-commit.

3.3 Security and secrets

- Never commit secrets. Use environment injection in CI/CD.
- Review .aiassistant/rules/security.md before introducing new dependencies.
- For auth, plan to integrate a mature provider (NextAuth.js, Auth.js) and use middleware for route protection.

3.4 Observability and error handling

- Add error boundaries for client components; leverage Next.js error.tsx and not-found.tsx.
- Consider Sentry for error monitoring; wrap server actions and critical client code with logging.

4. Minimal Verified Test Example (what we ran here)

- To prove test execution works in this environment without adding persistent dependencies, we used Node's built-in assert to run an ephemeral sanity test. The file was created, executed, and deleted, matching the process described in 2.5.
- Reproduce locally if needed:
  - Create a temp file temp_sanity_test.cjs with:
    - const assert = require('node:assert')
    - function sum (a, b) { return a + b }
    - assert.strictEqual(sum(2, 3), 5)
    - console.log('ok')
  - Run: node temp_sanity_test.cjs → should print "ok"
  - Remove the file after verification.

5. CI recommendations (to adopt later)

- GitHub Actions workflow steps:
  - Setup Node (v20), pnpm cache.
  - pnpm install
  - pnpm typecheck
  - pnpm lint
  - pnpm test:coverage
  - pnpm build

If you deviate from these defaults (e.g., choose npm instead of pnpm, add Playwright for E2E), reflect the change in this document and the scripts in package.json.

###### End of guidelines.md

*NB: sample guidelines.md can be found at: https://github.com/JetBrains/junie-guidelines*
