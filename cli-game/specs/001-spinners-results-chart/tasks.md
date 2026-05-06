# Tasks: Spinners and Results Chart

**Input**: Design documents from `specs/001-spinners-results-chart/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project readiness for UI enhancements

- [X] T001 Verify existing project structure and dependency on `@clack/prompts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core UI utility for chart generation

- [X] T002 [P] Create ASCII chart utility in `src/cli/chart.ts` with support for horizontal bars
- [X] T003 [P] Write unit tests for ASCII chart generator in `tests/unit/chart.test.ts`

**Checkpoint**: Foundation ready - UI components can now be integrated

---

## Phase 4: User Story 1 - Processing Feedback (Priority: P1) 🎯 MVP

**Goal**: Display a terminal spinner after each answer selection

**Independent Test**: Run a quiz and verify a spinner appears for ~800ms after selecting an answer.

### Implementation for User Story 1

- [X] T004 Integrate `@clack/prompts` spinner into `src/cli/prompts.ts` within the answer loop
- [X] T005 Implement a 800ms artificial delay using `setTimeout` (promisified) in `src/cli/prompts.ts` to simulate processing

**Checkpoint**: User Story 1 complete - interactive feedback is enhanced

---

## Phase 5: User Story 2 - Visual Results Summary (Priority: P2)

**Goal**: Render an ASCII chart in the final results summary

**Independent Test**: Complete a quiz and verify the ASCII chart is rendered in the final summary.

### Implementation for User Story 2

- [X] T006 [P] Update `src/cli/formatter.ts` to import and use the chart utility
- [X] T007 Integrate the generated ASCII chart into the summary string returned by `src/cli/formatter.ts`
- [X] T008 [P] Adjust result layout in `src/index.ts` to ensure chart visibility

**Checkpoint**: User Story 2 complete - visual results are functional

---

## Phase 6: Polish & Cross-Cutting Concerns

- [X] T009 Refine ASCII chart characters (e.g., using `█` or `░`) for better terminal compatibility
- [X] T010 Final end-to-end verification of the quiz flow with new UI elements

---

## Dependencies & Execution Order

### Phase Dependencies
- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup.
- **User Story 1 (US1)**: Depends on Foundational.
- **User Story 2 (US2)**: Depends on Foundational.
- **Polish (Final Phase)**: Depends on all stories.

### Parallel Opportunities
- T002 (Chart Utility) and T003 (Chart Tests) can run in parallel.
- T004 (Spinner) and T006 (Formatter update) can run in parallel as they touch different files.

---

## Implementation Strategy

### MVP First (User Story 1)
1. Complete Foundation (Chart Utility - though US1 doesn't strictly need it, it's good to have it ready).
2. Implement US1 (Spinners) to improve immediate interaction.
3. **VALIDATE**: Verify spinner behavior in terminal.

### Incremental Delivery
1. Foundation -> Chart generator logic ready.
2. US1 -> Spinners added to the loop.
3. US2 -> Results summary enhanced with visual chart.
