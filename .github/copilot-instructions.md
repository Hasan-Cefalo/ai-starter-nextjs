# GitHub Copilot Instructions

Purpose

- Give concise, actionable guidance for suggestions and edits in this repository.

Project context

- Main goals: maintain readability, test coverage, and type-safety.

What to prioritize

- Match existing project patterns and folder structure.
- Favor small, well-tested changes and clear commit messages.
- Prioritize type-safe solutions (TypeScript if present).
- Prefer plain, idiomatic code over clever or obscure solutions.
- Add unit tests for new logic; update tests for changed behavior.

Languages / tools (common)

- JavaScript / TypeScript, Node.js toolchain (npm/yarn/pnpm).
- Run tests with the repository's test script (e.g., `npm test`).
- Follow existing linters/formatters (ESLint / Prettier) and respect config files.

Formatting & style

- Follow existing code style and naming conventions.
- Keep functions short and single-responsibility.
- Add JSDoc / TypeDoc comments for public APIs when appropriate.

Security & secrets

- Never add secrets, tokens, or private keys to code/commits.
- Do not suggest or hard-code credentials, API keys, or private URLs.

What to avoid

- Large refactors without accompanying tests and a clear rationale.
- Changing unrelated files (e.g., global configs, CI) unless necessary.
- Removing or ignoring existing tests without replacement.

Commit / PR guidance

- Use clear, concise commit messages; follow the project's convention (e.g., conventional commits).
- Include a brief summary in PR descriptions and link related issues.
- Keep PRs focused and small when possible.

If unsure

- Prefer minimal, safe changes that preserve behavior.
- Do not guess runtime or environment specifics — keep suggestions generic and explain assumptions.

End of instructions.
