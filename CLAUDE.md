# ai-starter-nextjs - Project Guide for Claude

## Project Overview

This is a Next.js starter template designed to be built using AI-assisted development workflows. The project follows modern React and Next.js best practices with a strong emphasis on type safety, testing, and code quality.

## Tech Stack

### Core Technologies
- **Framework**: Next.js (App Router)
- **Language**: TypeScript (strict mode)
- **UI Library**: React (functional components)
- **Styling**: Material UI, TailwindCSS
- **State Management**: Redux Toolkit (global), React Hooks (local)
- **Form Validation**: Zod + React Hook Form
- **Testing**: Jest + React Testing Library
- **Security**: DOMPurify for XSS prevention

## Project Structure

```
ai-starter-nextjs/
├── .aiassistant/         # AI configuration for JetBrains IDEs
├── .cursor/              # Cursor IDE configuration
├── .junie/               # Junie AI configuration
├── src/                  # Source code (to be created)
│   ├── app/             # Next.js App Router pages
│   ├── components/      # Reusable React components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── store/           # Redux store configuration
│   └── types/           # TypeScript type definitions
└── tests/               # Test files
```

## Code Style Guidelines

### File Naming Conventions
- **Components**: `kebab-case.tsx` (e.g., `user-profile.tsx`)
- **Directories**: `kebab-case` (e.g., `auth-wizard/`)
- **Exports**: PascalCase for components, camelCase for functions

### Code Formatting
- Use 2 spaces for indentation
- Single quotes for strings
- Semicolons at line ends for JS/TS files
- Strict equality (`===`) always
- Line length limit: 80 characters
- Trailing commas in multiline literals

### Naming Patterns
- **Components/Interfaces**: PascalCase (`UserProfile`, `AuthState`)
- **Functions/Variables**: camelCase (`handleClick`, `userData`)
- **Constants/Env**: UPPERCASE (`API_URL`, `MAX_RETRIES`)
- **Event Handlers**: prefix with `handle` (`handleSubmit`)
- **Boolean Variables**: prefix with verbs (`isLoading`, `hasError`)
- **Custom Hooks**: prefix with `use` (`useAuth`, `useForm`)

## React/Next.js Best Practices

### Components
- Default to **Server Components**
- Use `'use client'` directive only when needed:
  - Event listeners
  - Browser APIs
  - State management (useState, useContext)
  - Client-side-only libraries

### Performance
- Use `React.memo()` strategically
- Implement `useCallback` for memoized callbacks
- Use `useMemo` for expensive computations
- Avoid inline functions in JSX
- Proper key props in lists (never use index)
- Code splitting with dynamic imports

### Next.js Features
- Use built-in components:
  - `Image` for optimized images
  - `Link` for client-side navigation
  - `Script` for external scripts
- Implement proper metadata management
- Use URL query parameters for server state
- Implement error boundaries
- Proper loading states

## TypeScript Guidelines

- Enable strict mode
- Define clear interfaces for props and state
- Use type guards for null/undefined checks
- Apply generics for type flexibility
- Utilize utility types: `Partial`, `Pick`, `Omit`
- Prefer `interface` over `type` for objects
- Use mapped types for type variations

## State Management

### Local State
- `useState` for component-level state
- `useReducer` for complex state logic
- `useContext` for shared component state

### Global State (Redux Toolkit)
- Use `createSlice` for state/reducers/actions
- Normalize state structure (avoid deep nesting)
- Use selectors for state access
- Separate concerns by feature (no large slices)

## Styling

- **Mobile-first** responsive design
- Implement light/dark mode using CSS variables
- Provider theme switcher toggle in header
- Ensure WCAG color contrast ratios
- Consistent spacing values
- Define CSS variables for theming

## Testing Strategy

### Unit Tests
- Test individual functions and components
- Use Jest + React Testing Library
- Follow Arrange-Act-Assert pattern
- Mock external dependencies and API calls

### Integration Tests
- Focus on user workflows
- Proper setup/teardown for test independence
- Use snapshot testing selectively
- Leverage RTL utilities (e.g., `screen`)

## Security Considerations

- Input sanitization to prevent XSS
- Use DOMPurify for HTML content sanitization
- Implement proper authentication methods
- Validate all user inputs with Zod schemas
- Never trust client-side data

## Documentation Standards

- Use **TSDoc** for code documentation
- Document all public functions, classes, methods, interfaces
- Include examples when appropriate
- Use complete sentences with proper punctuation
- Clear, concise descriptions
- Proper markdown formatting

## Error Handling

### Form Validation
- Zod schemas for all forms
- Clear, actionable error messages
- React Hook Form for form management

### Error Boundaries
- Catch errors in component trees
- Log to external service (e.g., Sentry)
- User-friendly fallback UIs

## Development Workflow

1. **Planning**: Break down features into small tasks
2. **Implementation**: Follow coding standards strictly
3. **Testing**: Write tests alongside implementation
4. **Review**: Ensure code meets all guidelines
5. **Documentation**: Update docs and comments

## AI Assistant Notes

When working on this project:
- Always check existing rules in `.aiassistant/rules/`
- Follow the established patterns and conventions
- Prioritize type safety and error handling
- Write tests for new functionality
- Consider accessibility in UI implementation
- Use Server Components by default in Next.js
- Implement proper loading and error states

## Getting Started

This is a starter template. When initializing:
1. Set up Next.js project structure
2. Configure TypeScript with strict mode
3. Install required dependencies
4. Set up testing framework
5. Configure Redux Toolkit
6. Set up Material UI theming
7. Implement authentication (if needed)
8. Create initial component library

## Environment Variables

Store all environment variables in `.env.local` (never commit):
- API endpoints
- API keys
- Feature flags
- Configuration values

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Material UI](https://mui.com)
- [React Testing Library](https://testing-library.com/react)