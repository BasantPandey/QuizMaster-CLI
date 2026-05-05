# Research: QuizMaster CLI

## Decision: Technical Stack

### Primary Framework: `@clack/prompts`
- **Rationale**: Clack provides a modern, aesthetically pleasing CLI experience with minimal overhead. It is ESM-native and has excellent TypeScript support, which aligns with our core principles of being "CLI-First & Interactive".
- **Alternatives Considered**: 
  - `@inquirer/prompts`: More feature-rich but looks "classic".
  - `enquirer`: Lacks recent maintenance.

### Runtime & Language: Node.js (LTS) & TypeScript
- **Rationale**: Mandated by the project constitution. TypeScript ensures type safety for our domain models (Questions, Sessions).
- **Module System**: ESM (ECMAScript Modules) to leverage modern Node.js features and better compatibility with Clack.

### Testing Framework: `vitest`
- **Rationale**: Extremely fast, compatible with ESM, and provides a great developer experience for unit testing our core libraries in a TDD fashion.
- **Alternatives Considered**: `Jest` (complex ESM setup), `Node:test` (still maturing).

### Data Storage: Local JSON (`questions.json`)
- **Rationale**: Simple, human-readable, and follows the "Data-Driven Q&A Content" principle. Can be easily extended or replaced by a database if needed.

## Decision: Project Structure
We will follow the "Single Project" structure to keep things simple for this MVP.

```text
src/
├── core/         # Decoupled logic (Quiz engine, scoring)
├── cli/          # CLI-specific code (Prompts, formatting)
├── data/         # Sample questions and loaders
└── index.ts      # Main entry point
tests/
├── unit/         # Core logic tests (TDD)
└── integration/  # CLI flow tests
```

## Decision: Domain Model
- **Question**: `{ id: string, text: string, options: string[], answerIndex: number }`
- **QuizSession**: `{ questions: Question[], currentIdx: number, score: number, results: { questionId: string, answer: number, correct: boolean }[] }`
