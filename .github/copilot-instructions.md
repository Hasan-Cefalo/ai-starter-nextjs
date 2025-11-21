# GitHub Copilot Instructions

## Project Context

**ai-starter-nextjs** - Next.js 14+ starter template with TypeScript, App Router, Redux Toolkit, Material UI, and comprehensive AI-assisted development standards.

**Main Goals**: Type-safety, test coverage, performance, accessibility, and security.

---

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript 5+ (strict mode enabled)
- **Package Manager**: pnpm (preferred)
- **UI**: Material UI + TailwindCSS
- **State**: Redux Toolkit (global), React Hooks (local)
- **Forms**: React Hook Form + Zod validation
- **Testing**: Vitest + React Testing Library
- **Security**: DOMPurify for XSS prevention

---

## File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | kebab-case.tsx | `user-profile.tsx` |
| Hooks | camelCase with use* | `useAuth.ts` |
| Utils | kebab-case.ts | `format-date.ts` |
| Directories | kebab-case | `auth-wizard/` |
| Types/Interfaces | PascalCase | `UserProfile` |
| Constants | UPPER_CASE | `API_BASE_URL` |

**Exports**: PascalCase for components, camelCase for functions.

---

## Code Style Essentials

### TypeScript
- **Always** use strict mode (`"strict": true`)
- Prefer `interface` over `type` for objects
- Use type guards for null/undefined checks
- Define clear interfaces for all props and state
- Use generics and utility types (`Partial`, `Pick`, `Omit`)

### React/Next.js
- **Default to Server Components** (Next.js App Router)
- Use `'use client'` only when needed:
  - Event handlers
  - Browser APIs (localStorage, window, etc.)
  - State hooks (useState, useContext)
  - Client-side libraries
- Functional components with the `function` keyword
- Extract reusable logic into custom hooks (prefix with `use`)

### Naming Patterns
```typescript
// Event handlers: prefix with 'handle'
const handleClick = () => { /* ... */ }
const handleSubmit = async (e: FormEvent) => { /* ... */ }

// Booleans: verb prefix
const isLoading = true
const hasError = false
const canSubmit = form.isValid

// Custom hooks: prefix with 'use'
function useAuth() { /* ... */ }
function useLocalStorage(key: string) { /* ... */ }
```

### Formatting
- **2 spaces** for indentation
- **Single quotes** for strings
- **Semicolons** at line ends for JS/TS files
- **80 character** line limit
- **Trailing commas** in multiline literals
- **Strict equality** (`===` not `==`)

---

## Performance Best Practices

```typescript
// Use React.memo() for expensive components
export const ExpensiveList = memo(function ExpensiveList({ items }: Props) {
  // ...
})

// useCallback for event handlers
const handleClick = useCallback((id: string) => {
  // ...
}, [dependency])

// useMemo for expensive computations
const sortedItems = useMemo(
  () => items.sort((a, b) => a.value - b.value),
  [items],
)

// Avoid inline functions in JSX
// ❌ Bad: <button onClick={() => handleClick(id)}>
// ✅ Good: <button onClick={handleClick}>
```

---

## State Management

### Local State
- Use `useState` for simple component state
- Use `useReducer` for complex state logic
- Use `useContext` for shared component state

### Global State (Redux Toolkit)
```typescript
// Always use createSlice (not createReducer/createAction)
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
  },
})

// Normalize state (avoid deep nesting)
// ✅ Good: { byId: {}, allIds: [] }
// ❌ Bad: { users: { [id]: { posts: { [postId]: {} } } } }
```

---

## Form Validation

**Always use Zod + React Hook Form**:

```typescript
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Min 8 characters'),
})

type FormData = z.infer<typeof schema>

const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
  resolver: zodResolver(schema),
})
```

---

## Testing Requirements

### Test Files
- Place tests alongside source: `*.test.ts` or `*.spec.ts`
- Use Vitest + React Testing Library
- Follow Arrange-Act-Assert pattern

### Component Tests
```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

it('increments count when button clicked', async () => {
  // Arrange
  const user = userEvent.setup()
  render(<Counter />)

  // Act
  await user.click(screen.getByRole('button', { name: /increment/i }))

  // Assert
  expect(screen.getByText('Count: 1')).toBeInTheDocument()
})
```

**Always**:
- Write tests for new functionality
- Update tests for changed behavior
- Mock external dependencies and API calls
- Use proper `data-testid` or semantic queries (prefer role/label)

---

## Security Guidelines

### Input Sanitization
```typescript
import DOMPurify from 'dompurify'

// Always sanitize HTML from user input
const clean = DOMPurify.sanitize(userInput)
```

### Environment Variables
```typescript
// Server-only (no prefix)
const dbUrl = process.env.DATABASE_URL

// Client-accessible (NEXT_PUBLIC_ prefix)
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

**Never**:
- Commit secrets, tokens, or API keys
- Hard-code credentials or private URLs
- Trust client-side data without validation
- Use `dangerouslySetInnerHTML` without sanitization

---

## Documentation Standards

**Use TSDoc for all public APIs**:

```typescript
/**
 * Formats a date into a human-readable string.
 *
 * @param date - The date to format
 * @param locale - Locale for formatting (default: 'en-US')
 * @returns Formatted date string
 *
 * @example
 * ```typescript
 * formatDate(new Date()) // => "January 1, 2025"
 * ```
 */
export function formatDate(date: Date, locale = 'en-US'): string {
  // ...
}
```

---

## Error Handling

### Error Boundaries
- Use Next.js `error.tsx` for error boundaries
- Use `not-found.tsx` for 404 pages
- Always provide user-friendly error messages

### Form Errors
- Display validation errors inline
- Use Zod for schema validation
- Handle async errors with try-catch

---

## Next.js Best Practices

### Components
```typescript
// ✅ Server Component (default)
export function ProductList({ products }: Props) {
  return <div>{/* ... */}</div>
}

// ✅ Client Component (when needed)
'use client'
export function InteractiveButton() {
  const [clicked, setClicked] = useState(false)
  return <button onClick={() => setClicked(true)} />
}
```

### Built-in Components
- Use `next/image` for images (not `<img>`)
- Use `next/link` for navigation (not `<a>`)
- Use `next/script` for external scripts

### Data Fetching
- Use URL query params for server state
- Implement proper loading states
- Use React Query for client-side data fetching (optional)

---

## What to Avoid

- ❌ Inline functions in JSX props
- ❌ Using `index` as React key in lists
- ❌ Deep nesting in Redux state
- ❌ `any` type in TypeScript
- ❌ `==` instead of `===`
- ❌ Committing `.env.local` or secrets
- ❌ Large refactors without tests
- ❌ Removing tests without replacement
- ❌ `'use client'` without justification

---

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev             # Start dev server
pnpm typecheck       # Type check (tsc --noEmit)
pnpm lint            # Lint with ESLint
pnpm test            # Run tests (Vitest)
pnpm test:watch      # Test watch mode
pnpm test:coverage   # Coverage report
pnpm build           # Production build
pnpm start           # Start prod server
```

---

## Commit Guidelines

- Use clear, concise commit messages
- Follow conventional commits format when possible
- Keep commits focused and atomic
- Reference issue numbers when applicable

Example:
```
feat: add user authentication with NextAuth
fix: resolve hydration error in dashboard
test: add unit tests for date formatter
docs: update API documentation
```

---

## Additional Resources

- Detailed standards in `.aiassistant/rules/` directory
- Full guidelines in `.junie/guidelines.md`
- Project overview in `CLAUDE.md`

---

## If Unsure

- Prefer **Server Components** over Client Components
- Prefer **minimal, safe changes** that preserve behavior
- Prefer **explicit types** over implicit ones
- Prefer **interfaces** over types for objects
- Default to **strict mode** and type safety
- Always **add tests** for new functionality
- Consult `.aiassistant/rules/` for detailed guidance

---

**End of instructions.**
