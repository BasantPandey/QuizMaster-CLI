# Implementation Plan: Result Animations

**Branch**: `002-add-result-animations` | **Date**: 2026-05-06 | **Spec**: [specs/002-add-result-animations/spec.md](spec.md)

## Summary
Integrate terminal-based animations at the end of the quiz. A "Party Popper" effect for perfect scores and a "Try Again" effect for others. We will use a dedicated utility for these animations to keep the core logic clean.

## Technical Context
**Language/Version**: TypeScript (Node.js LTS)
**Primary Dependencies**: `@clack/prompts` (for consistency), potentially `cli-frames` or a custom frame-based loop.
**Testing**: `vitest`
**Target Platform**: Node.js CLI

## Constitution Check
- **I. Single-Responsibility Libraries**: PASSED. Animation logic will be in `src/cli/animations.ts`.
- **VIII. Visual Polish & Aesthetics**: PASSED. Directly implements the new principle.

## Project Structure

### Documentation
```text
specs/002-add-result-animations/
├── plan.md
├── spec.md
└── tasks.md
```

### Source Code Changes
```text
src/
├── cli/
│   ├── animations.ts  # NEW: Animation frames and player
│   └── prompts.ts     # MODIFIED: Trigger animation before/after summary
```
