# Project Guidelines

**Project**: ai-starter-nextjs
**Type**: Next.js 14+ starter template with AI-assisted development workflow
**Last Updated**: 2025-11-21
**Status**: Minimal scaffold - full app initialization pending

> This is an AI-assisted Next.js starter project. The repository is currently minimal and will be scaffolded following these guidelines. All rules reference existing standards in `.aiassistant/rules/`.

---

## Quick Reference

```bash
# Setup (when scaffolding)
pnpm dlx create-next-app@latest .

# Development
pnpm install          # Install dependencies
pnpm dev             # Start dev server
pnpm typecheck       # Type checking
pnpm lint            # Lint code
pnpm test            # Run tests
pnpm test:watch      # Test watch mode
pnpm build           # Production build
pnpm start           # Start production server
```

---

## 1. Technology Stack

### Core
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript 5+ (strict mode)
- **Runtime**: Node.js 18.20.x or 20.x LTS
- **Package Manager**: pnpm (preferred) or npm

### UI & Styling
- **Component Library**: Material UI
- **CSS Framework**: TailwindCSS
- **Styling Approach**: CSS-in-JS, CSS Variables for theming
- **Design System**: Mobile-first, responsive, light/dark mode

### State Management
- **Global State**: Redux Toolkit with `createSlice`
- **Local State**: React Hooks (`useState`, `useReducer`, `useContext`)
- **Server State**: React Query (optional, for data fetching)

### Forms & Validation
- **Form Management**: React Hook Form
- **Schema Validation**: Zod
- **Sanitization**: DOMPurify (XSS prevention)

### Testing
- **Test Runner**: Vitest
- **Component Testing**: React Testing Library + @testing-library/jest-dom
- **Coverage**: c8 (Vitest integration)
- **E2E** (optional): Playwright

---

## 2. Project Structure

```
ai-starter-nextjs/
├── .aiassistant/          # JetBrains AI rules
│   └── rules/            # Detailed coding standards
├── .cursor/              # Cursor IDE config
├── .junie/               # Junie AI guidelines (this file)
├── app/                  # Next.js App Router
│   ├── (marketing)/     # Route groups
│   ├── (dashboard)/
│   ├── api/             # API routes
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── error.tsx        # Error boundary
│   └── not-found.tsx    # 404 page
├── components/           # Reusable UI components
│   ├── ui/              # Base UI primitives
│   └── shared/          # Shared components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── store/                # Redux store
│   ├── slices/          # Redux slices
│   └── index.ts         # Store configuration
├── types/                # TypeScript definitions
├── public/               # Static assets
├── tests/                # Global test utilities
│   └── setup.ts         # Test setup
├── .env.local           # Local environment (not committed)
└── vitest.config.ts     # Vitest configuration
```

---

## 3. File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | kebab-case.tsx | `user-profile.tsx` |
| Pages | kebab-case.tsx | `dashboard.tsx` |
| Directories | kebab-case | `auth-wizard/` |
| Hooks | camelCase (use*) | `useAuth.ts` |
| Utils | kebab-case.ts | `format-date.ts` |
| Types | PascalCase | `UserProfile` |
| Constants | UPPER_CASE | `API_BASE_URL` |

**Exports**: Components in PascalCase, functions in camelCase

```typescript
// user-profile.tsx
export function UserProfile() { /* ... */ }

// format-date.ts
export function formatDate(date: Date) { /* ... */ }
```

---

## 4. Code Style Standards

### TypeScript

**Always use strict mode**:
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
```

**Interfaces over types for objects**:
```typescript
// ✅ Good
interface UserProps {
  name: string
  age: number
}

// ❌ Avoid for objects
type UserProps = {
  name: string
  age: number
}
```

**Use type guards for safety**:
```typescript
function processUser(user: User | null) {
  if (!user) return null
  return user.name
}
```

### React Components

**Server Components by default** (Next.js App Router):
```typescript
// ✅ Good - Server Component (default)
export function ProductList({ products }: Props) {
  return <div>{/* ... */}</div>
}

// ✅ Use 'use client' only when needed
'use client'
import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

**Naming patterns**:
```typescript
// Event handlers: prefix with 'handle'
const handleClick = () => { /* ... */ }
const handleSubmit = async (e: FormEvent) => { /* ... */ }

// Booleans: verb prefix
const isLoading = false
const hasError = true
const canSubmit = form.isValid

// Custom hooks: prefix with 'use'
function useAuth() { /* ... */ }
function useLocalStorage(key: string) { /* ... */ }
```

**Performance optimization**:
```typescript
import { memo, useCallback, useMemo } from 'react'

// Memoize expensive components
export const ExpensiveList = memo(function ExpensiveList({ items }: Props) {
  const sortedItems = useMemo(
    () => items.sort((a, b) => a.value - b.value),
    [items],
  )

  const handleItemClick = useCallback((id: string) => {
    console.log('Clicked:', id)
  }, [])

  return <>{/* ... */}</>
})
```

### Formatting

```typescript
// 2 spaces, single quotes, trailing commas
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
}

// 80 character line limit
const longString =
  'This is a very long string that exceeds 80 characters ' +
  'so we break it into multiple lines'

// Strict equality
if (value === 'active') { /* ✅ */ }
if (value == 'active') { /* ❌ */ }
```

---

## 5. State Management

### Local State (Hooks)

```typescript
// Simple state
const [isOpen, setIsOpen] = useState(false)

// Complex state with useReducer
type State = { count: number; step: number }
type Action = { type: 'increment' } | { type: 'decrement' }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step }
    case 'decrement':
      return { ...state, count: state.count - state.step }
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 })
```

### Global State (Redux Toolkit)

```typescript
// store/slices/auth-slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
  },
})

export const { setUser, logout } = authSlice.actions
export default authSlice.reducer
```

**State normalization**:
```typescript
// ✅ Normalized state
interface State {
  users: {
    byId: Record<string, User>
    allIds: string[]
  }
}

// ❌ Avoid deeply nested state
interface State {
  users: {
    [id: string]: {
      posts: {
        [postId: string]: Post
      }
    }
  }
}
```

---

## 6. Testing Guidelines

### Setup

**vitest.config.ts**:
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
    },
  },
})
```

**tests/setup.ts**:
```typescript
import '@testing-library/jest-dom'
```

### Component Tests

```typescript
// components/counter.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Counter } from './counter'

describe('Counter', () => {
  it('increments count when button clicked', async () => {
    // Arrange
    const user = userEvent.setup()
    render(<Counter />)

    // Act
    const button = screen.getByRole('button', { name: /increment/i })
    await user.click(button)

    // Assert
    expect(screen.getByText('Count: 1')).toBeInTheDocument()
  })
})
```

### Test Naming

```typescript
// *.test.ts or *.spec.ts alongside source files
src/
  components/
    button.tsx
    button.test.tsx  // ✅
  lib/
    format-date.ts
    format-date.spec.ts  // ✅
```

---

## 7. Security Best Practices

### Input Sanitization

```typescript
import DOMPurify from 'dompurify'

function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty)
}

// Usage
<div dangerouslySetInnerHTML={{ __html: sanitizeHtml(userInput) }} />
```

### Environment Variables

```bash
# .env.local (never commit!)
DATABASE_URL="postgresql://..."
API_SECRET="secret123"

# Public vars (exposed to browser)
NEXT_PUBLIC_API_URL="https://api.example.com"
```

```typescript
// Server-only
const dbUrl = process.env.DATABASE_URL

// Client-accessible
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

### Authentication

```typescript
// middleware.ts - Route protection
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('session-token')

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}
```

---

## 8. Error Handling

### Error Boundaries

```typescript
// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

### Form Validation

```typescript
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be 8+ characters'),
})

type FormData = z.infer<typeof schema>

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      {/* ... */}
    </form>
  )
}
```

---

## 9. Documentation

**Use TSDoc for all public APIs**:

```typescript
/**
 * Formats a date into a human-readable string.
 *
 * @param date - The date to format
 * @param locale - The locale for formatting (default: 'en-US')
 * @returns A formatted date string
 *
 * @example
 * ```typescript
 * formatDate(new Date(), 'en-US')
 * // => "January 1, 2025"
 * ```
 */
export function formatDate(date: Date, locale = 'en-US'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
```

---

## 10. CI/CD Pipeline

**GitHub Actions workflow** (`.github/workflows/ci.yml`):

```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - run: pnpm install
      - run: pnpm typecheck
      - run: pnpm lint
      - run: pnpm test:coverage
      - run: pnpm build
```

---

## 11. Initialization Checklist

When scaffolding the full application:

- [ ] Run `pnpm dlx create-next-app@latest .`
  - Select: TypeScript, App Router, ESLint, Tailwind CSS
- [ ] Enable TypeScript strict mode in `tsconfig.json`
- [ ] Install dependencies:
  ```bash
  pnpm add @reduxjs/toolkit react-redux zod react-hook-form @hookform/resolvers/zod dompurify
  pnpm add -D @types/dompurify vitest @testing-library/react @testing-library/jest-dom jsdom c8
  ```
- [ ] Configure Vitest (`vitest.config.ts`)
- [ ] Set up Redux store (`store/index.ts`)
- [ ] Create folder structure (see section 2)
- [ ] Configure ESLint and Prettier
- [ ] Set up pre-commit hooks (lint-staged + husky)
- [ ] Create `.env.local` (add to `.gitignore`)
- [ ] Implement theme provider (light/dark mode)
- [ ] Set up error boundaries
- [ ] Configure path aliases in `tsconfig.json`

---

## 12. Additional Resources

- **Detailed Standards**: See `.aiassistant/rules/` for comprehensive guidelines:
  - `code-style.md` - Complete coding standards
  - `testing.md` - Testing practices
  - `security.md` - Security requirements
  - `documentation.md` - Documentation standards
  - `inclusive-design.md` - Accessibility guidelines

- **Official Docs**:
  - [Next.js Documentation](https://nextjs.org/docs)
  - [React Documentation](https://react.dev)
  - [Redux Toolkit](https://redux-toolkit.js.org)
  - [Vitest](https://vitest.dev)

- **Junie Guidelines**: [github.com/JetBrains/junie-guidelines](https://github.com/JetBrains/junie-guidelines)

---

**Last verified**: 2025-11-21
**Verification**: Minimal environment test passed using Node.js built-in assert module

_When deviating from these standards (e.g., switching to npm, adding Playwright), update this document accordingly._
