# Implementation Plan: QuizMaster CLI

**Branch**: `main` | **Date**: 2026-05-05 | **Spec**: [specs/main/spec.md](specs/main/spec.md)
**Input**: Feature specification from `specs/main/spec.md`

## Summary
Build a TypeScript-based interactive CLI tool that loads quiz questions from a JSON file, prompts the user via a modern terminal interface (using `@clack/prompts`), and calculates/displays results. The project follows a modular architecture where core quiz logic is decoupled from CLI-specific interactions.

## Technical Context

**Language/Version**: TypeScript (Node.js LTS)
**Primary Dependencies**: `@clack/prompts`, `zod`, `vitest`
**Storage**: Local JSON files (`src/data/questions.json`)
**Testing**: `vitest` (Unit and Integration)
**Target Platform**: Node.js
**Project Type**: CLI Tool
**Performance Goals**: Sub-second response for interactive prompts.
**Constraints**: MUST use ESM, MUST use TypeScript strict mode.
**Scale/Scope**: MVP for single-user interactive quiz.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Single-Responsibility Libraries**: PASSED. Core quiz engine in `src/core`, CLI formatting in `src/cli`.
- **II. CLI-First & Interactive**: PASSED. Using `@clack/prompts` for high-quality terminal UX.
- **III. Test-Driven Development (TDD)**: PASSED. Logic in `src/core` will be developed with `vitest`.
- **IV. Immutable State Management**: PASSED. `QuizSession` state transitions follow immutable patterns.
- **V. Data-Driven Q&A Content**: PASSED. Schema defined in `contracts/`, content in `questions.json`.
- **VI. UNIX Philosophy**: PASSED. Focused tool for interactive quizzes.
- **VII. Interactive Feedback & Scoring**: PASSED. Core feature of the session logic.

## Project Structure

### Documentation (this feature)

```text
specs/main/
├── plan.md              # This file
├── research.md          # Technology decisions and findings
├── data-model.md        # Entity definitions and state transitions
├── quickstart.md        # Local setup instructions
├── contracts/           # JSON Schema for question data
└── tasks.md             # Implementation tasks (generated separately)
```

### Source Code (repository root)

```text
src/
├── core/         # Decoupled quiz logic (engine, scoring)
├── cli/          # CLI prompts and interactive flow
├── data/         # Question data and loaders
└── index.ts      # Entry point

tests/
├── unit/         # Logic tests
└── integration/  # CLI flow tests
```

**Structure Decision**: Single project structure as the tool is self-contained.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | | |
