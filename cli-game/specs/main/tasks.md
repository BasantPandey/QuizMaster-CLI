# Tasks: QuizMaster CLI

**Input**: Design documents from `specs/main/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create project structure: `src/core`, `src/cli`, `src/data`, `tests/unit`, `tests/integration`
- [X] T002 Initialize `package.json` with ESM support (`"type": "module"`)
- [X] T003 Install dependencies: `typescript`, `@clack/prompts`, `vitest`, `zod`
- [X] T004 Configure `tsconfig.json` for Strict TypeScript and ESM
- [X] T005 [P] Configure `vitest` in `vitest.config.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core data structures and validation schemas

- [X] T006 [P] Define `Question` schema using Zod in `src/core/schema.ts`
- [X] T007 [P] Define `QuizSession` and `UserAnswer` interfaces in `src/core/types.ts`
- [X] T008 Implement `QuizSession` initial state in `src/core/session.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Load Sample Questions (Priority: P1) 🎯 MVP

**Goal**: Load questions from a JSON file into memory

**Independent Test**: Verify `loadQuestions` returns expected data from a test JSON file.

### Tests for User Story 1 (TDD)
- [X] T009 [P] [US1] Write unit test for question loader in `tests/unit/loader.test.ts`

### Implementation for User Story 1
- [X] T010 [P] [US1] Create sample questions in `src/data/questions.json`
- [X] T011 [US1] Implement `loadQuestions` service in `src/core/loader.ts` using `fs/promises` and Zod validation

**Checkpoint**: User Story 1 complete - questions can be loaded reliably

---

## Phase 4: User Story 2 - Interactive Quiz (Priority: P1) 🎯 MVP

**Goal**: Prompt user with questions interactively via CLI

**Independent Test**: Run CLI entry point and verify it prompts for the first question in the sample file.

### Tests for User Story 2 (TDD)
- [X] T012 [P] [US2] Write unit test for quiz engine state transitions in `tests/unit/engine.test.ts`
- [ ] T013 [P] [US2] Write integration test for CLI prompt flow (mocked) in `tests/integration/cli.test.ts`

### Implementation for User Story 2
- [X] T014 [US2] Implement `processAnswer` logic in `src/core/engine.ts` (updates session state)
- [X] T015 [US2] Implement interactive prompt loop in `src/cli/prompts.ts` using `@clack/prompts`
- [X] T016 [US2] Create main entry point in `src/index.ts` to orchestrate loading and the quiz loop

**Checkpoint**: User Story 2 complete - interactive quiz is functional

---

## Phase 5: User Story 3 - Show Results (Priority: P2)

**Goal**: Display final score and summary

**Independent Test**: Complete a quiz and verify the summary table appears with correct score.

### Tests for User Story 3 (TDD)
- [X] T017 [P] [US3] Write unit test for score calculation in `tests/unit/scoring.test.ts`

### Implementation for User Story 3
- [X] T018 [US3] Implement `calculateScore` utility in `src/core/scoring.ts`
- [X] T019 [US3] Implement result summary formatter in `src/cli/formatter.ts`
- [X] T020 [US3] Integrate results display into the main loop in `src/index.ts`

**Checkpoint**: All user stories complete - end-to-end quiz flow functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final cleanup and documentation

- [X] T021 [P] Add final polish to CLI styles (colors, symbols) in `src/cli/prompts.ts`
- [X] T022 [P] Update `README.md` with usage instructions from `quickstart.md`
- [X] T023 Run full test suite: `npm test`

---

## Dependencies & Execution Order

### Phase Dependencies
1. **Setup (Phase 1)**: No dependencies.
2. **Foundational (Phase 2)**: Depends on Setup.
3. **User Story 1 (P1)**: Depends on Foundational.
4. **User Story 2 (P1)**: Depends on US1 (needs loaded questions).
5. **User Story 3 (P2)**: Depends on US2 (needs completed session).
6. **Polish (Phase 6)**: Depends on all stories.

### Parallel Opportunities
- All Setup tasks (T001-T005) can largely run in parallel if initialized correctly.
- Foundational schemas (T006, T007) can run in parallel.
- Tests (T009, T012, T013, T017) can be written in parallel.
- CLI formatting (T019) can be developed in parallel with core logic if interfaces are defined.

---

## Implementation Strategy

### MVP First (User Story 1 & 2)
1. Complete Setup and Foundation.
2. Implement US1 (Load) and US2 (Interactive Quiz) with basic scoring.
3. **VALIDATE**: Run a simple quiz to ensure questions load and prompts work.

### Incremental Delivery
1. Foundation -> Core data types ready.
2. US1 -> Data loading verified.
3. US2 -> Interactive terminal UI functional (MVP).
4. US3 -> Full scoring and summary reports.
