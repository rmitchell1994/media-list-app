# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
yarn

# Start the app (webpack watch + Firebase emulators)
yarn start

# Build for production
yarn build

# Run unit tests
yarn test

# Run unit tests in watch mode
yarn test:watch

# Run a single test file
yarn test src/path/to/file.test.tsx

# Lint
yarn lint

# Run Cypress integration tests (requires app running)
yarn test:integration

# Open Cypress interactively
yarn cypress:start
```

**Prerequisites:** `firebase-tools` must be installed globally (`npm install -g firebase-tools`) to use the local emulators.

**Local access:** App at http://localhost:5000, Firebase emulator UI at http://localhost:4000.

## Architecture

### Tech Stack
React 17 + TypeScript, styled-components for styling, React Query for server state, React Hook Form for forms, Firebase (Auth) as the backend, React Router v5 for routing, Jest + React Testing Library for unit tests, Cypress + cucumber for integration tests.

### Configuration Injection (`CONFIG` global)
Firebase config is injected at build time via a `CONFIG` global (declared in `@types/globals.d.ts`). `jest.setup.js` loads `config/development.json` as the test config. `webpack.config.js` uses `scripts/make-index.js` to inject the config into the HTML. Never import config files directly in application code — use `CONFIG`.

### Auth Flow
`SignedInProvider` (`src/context/signed-in-provider.tsx`) wraps the entire app and exposes a `SignedInContext` containing the Firebase `UserInfo | null`. Components gate on this context to decide whether to render authenticated or unauthenticated views. Firebase Auth uses the local emulator when running on localhost (`CONFIG.authEmulator`).

### Module Structure
Pages live under `src/modules/<page-name>/`. Complex pages get their own context + reducer:
- `account-page` has `AccountPageProvider` + `accountPageReducer` managing async operation state (`isLoading`, `success`, `error`, `isAccountDeleted`). The provider wraps the page in `src/modules/account-page/index.tsx`.
- All routes use `React.lazy` for code splitting (see `src/modules/routes/index.tsx`).

### Contracts
Shared TypeScript types live in `contracts/` (e.g. `contracts/data/authentication.ts`). These are the canonical types shared between services and components.

### Styling
Components use `styled-components`. Theme values come from `config/theme.json` typed via `@types/styled.d.ts`. Style files follow the naming convention `<component>.styles.ts(x)`.

### Testing Conventions
- Import `render` and other utilities from `test/test-utils.tsx` (not directly from `@testing-library/react`). The custom render wraps components in `Router`, `QueryClientProvider`, and `ThemeProvider`.
- Snapshot tests exist for most components — run `yarn test -u` to update snapshots.
- Integration tests use Cypress with cucumber feature files in `cypress/integration/`.

### Pre-commit Hook
Husky runs `lint-staged` on commit: ESLint runs on staged `.ts/.tsx/.js/.jsx` files, and Jest runs on staged test files.
