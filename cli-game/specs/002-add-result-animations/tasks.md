# Tasks: Result Animations

**Input**: Design documents from `specs/002-add-result-animations/`
**Prerequisites**: plan.md, spec.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project readiness for animations

- [X] T001 Verify dependencies and ensure project structure is ready for new CLI utilities

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core animation utility

- [X] T002 Create animation player utility in `src/cli/animations.ts` capable of playing frame-based ASCII animations
- [X] T003 Define animation frames for "Party Popper" and "Encouragement" in `src/cli/animations.ts`
- [X] T004 Write unit tests for the animation player in `tests/unit/animations.test.ts`

**Checkpoint**: Foundation ready - Animations can now be integrated into the flow

---

## Phase 3: User Story 1 - Victory Celebration (Priority: P1) 🎯 MVP

**Goal**: Play party popper for 100% score

**Independent Test**: Complete a quiz with 100% and verify the celebration plays.

### Implementation for User Story 1

- [X] T005 Update `src/cli/prompts.ts` to check for 100% score in the final session state
- [X] T006 Integrate `playVictoryAnimation` from `src/cli/animations.ts` into the final result flow in `src/cli/prompts.ts`

**Checkpoint**: User Story 1 complete - perfect scores now have a visual reward

---

## Phase 4: User Story 2 - Encouraging Failure Animation (Priority: P2)

**Goal**: Play encouraging animation for < 100% score

**Independent Test**: Complete a quiz with at least one error and verify the encouragement plays.

### Implementation for User Story 2

- [X] T007 Update `src/cli/prompts.ts` to handle the non-100% case
- [X] T008 Integrate `playEncouragementAnimation` from `src/cli/animations.ts` into the final result flow in `src/cli/prompts.ts`

**Checkpoint**: User Story 2 complete - all outcomes now have visual feedback

---

## Phase 5: Polish & Cross-Cutting Concerns

- [X] T009 Refine animation timing and frame characters for better visual impact
- [X] T010 Perform end-to-end verification of the full quiz experience

---

## Dependencies & Execution Order

### Phase Dependencies
- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup.
- **User Story 1 (US1)**: Depends on Foundational.
- **User Story 2 (US2)**: Depends on Foundational.
- **Polish (Final Phase)**: Depends on all stories.

### Parallel Opportunities
- T002, T003, and T004 can partially run in parallel if split.
- US1 and US2 implementation tasks can run in parallel as they touch different logic branches in `prompts.ts`.

---

## Implementation Strategy

### MVP First (User Story 1)
1. Complete Foundation -> Animation engine ready.
2. Implement US1 -> Victory animation integrated.
3. **VALIDATE**: Verify 100% score triggers animation.

### Incremental Delivery
1. Foundation -> Frames and player logic.
2. US1 -> Victory celebration.
3. US2 -> Encouragement feedback.
