<!--
SYNC IMPACT REPORT
- Version change: 1.1.0 -> 1.2.0 (Minor: Tailored for Q&A/Quiz domain)
- Modified principles:
  - Project Renamed: cli-game -> QuizMaster CLI
  - V. Extensibility & Modding -> V. Data-Driven Q&A Content
- Added sections:
  - VII. Interactive Feedback & Scoring (New principle)
- Removed sections: N/A
- Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ (Verified)
  - .specify/templates/spec-template.md: ✅ (Verified)
  - .specify/templates/tasks-template.md: ✅ (Verified)
- Follow-up TODOs: None
-->

# QuizMaster CLI Constitution

## Core Principles

### I. Single-Responsibility Libraries
Every core system (e.g., question engine, scoring logic, result formatting) MUST be developed as a standalone, decoupled library. These libraries must have clear interfaces and zero knowledge of the high-level CLI loop. Rationale: Ensures modularity and makes it easier to test or replace individual components.

### II. CLI-First & Interactive
The application MUST provide a fluid, interactive terminal experience. While supporting standard streams, the primary interface should be optimized for human interaction (e.g., using prompts for questions). Rationale: Focuses on the core user experience of a quiz tool.

### III. Test-Driven Development (TDD)
All core logic (scoring, question filtering, result calculation) MUST be verified by tests written before implementation. Every library MUST have a unit test suite that covers edge cases and core behavior. Rationale: Guarantees reliability and provides immediate feedback on breaking changes.

### IV. Immutable State Management
The quiz session state (current question index, score, answers) should be treated as immutable. Transitions MUST be handled by functions that take the current state and an action, returning a new state. Rationale: Simplifies debugging and state management.

### V. Data-Driven Q&A Content
Questions and answers MUST be externalized in structured formats (JSON/YAML). The logic should be agnostic of the actual content, allowing for easy updates or "question packs" without code changes. Rationale: Enables scalability and non-developer content management.

### VI. UNIX Philosophy
Build small, focused tools. If the project grows to include question management or analytics, these should be separate, composable components that communicate via standard formats. Rationale: Maintains maintainability and composability.

### VII. Interactive Feedback & Scoring
The system MUST provide immediate, clear feedback after each answer and a comprehensive summary of results at the end. Scoring logic must be deterministic and transparent. Rationale: Essential for the core "Quiz" value proposition.

## Technical Constraints

- **Language**: TypeScript MUST be used with `strict` mode enabled.
- **Environment**: Node.js (LTS) is the target runtime.
- **Module System**: ECMAScript Modules (ESM) MUST be used for all new code.
- **Dependencies**: Minimal external dependencies; prefer standard libraries or well-established interactive CLI libraries (e.g., `inquirer`, `enquirer`, or `clack`).
- **Formatting**: Strict adherence to linting and formatting rules (Prettier/ESLint) is mandatory.

## Development Workflow

1. **Branching**: Use sequential feature branches (e.g., `001-quiz-engine`) to maintain a clean history.
2. **Review**: All code must pass automated tests and a constitution compliance check before merging.
3. **Commit Style**: Use Conventional Commits to generate clear, automated changelogs.

## Governance

- The constitution is the ultimate source of truth for architectural decisions.
- Amendments require documentation, approval from the lead developer, and a version bump.
- Every new feature MUST include a constitution check in its implementation plan.

**Version**: 1.2.0 | **Ratified**: 2026-05-05 | **Last Amended**: 2026-05-05
