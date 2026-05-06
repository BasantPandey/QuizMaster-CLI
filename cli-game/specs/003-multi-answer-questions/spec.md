# Feature Specification: Multi-Answer Questions

**Feature Branch**: `003-multi-answer-questions`  
**Created**: 2026-05-06  
**Status**: Draft  
**Input**: User description: "create a multi answer qustions user able to give multiple anssers to one qustions."

## User Scenarios & Testing

### User Story 1 - Answering Multi-Select Questions (Priority: P1)

As a quiz taker, I want to be able to select multiple options for a single question when there is more than one correct answer, so that I can accurately demonstrate my knowledge.

**Why this priority**: Core functional requirement that enables a new type of question interaction.

**Independent Test**: Start a quiz with a multi-answer question, select two correct options, and verify the system accepts both selections.

**Acceptance Scenarios**:

1. **Given** a question configured for multiple answers, **When** I view the question, **Then** I should be prompted to select one or more options.
2. **Given** I have selected multiple options, **When** I submit my answer, **Then** the system should compare my selections against all correct answers.

---

### User Story 2 - Scoring Multi-Answer Questions (Priority: P2)

As a quiz taker, I want to receive a score that fairly reflects my performance on multi-answer questions, even if I only get some of the correct options.

**Why this priority**: Essential for accurate assessment and user motivation.

**Independent Test**: Complete a multi-answer question with partial correctness and verify the score matches the defined scoring logic.

**Acceptance Scenarios**:

1. **Given** a question with 3 correct answers, **When** I select 2 correct answers and 0 incorrect ones, **Then** I should receive a score based on the question's configured scoring mode (0 for All-or-Nothing, 0.66 for Proportional, etc.).

---

### User Story 3 - Configurable Scoring Modes (Priority: P3)

As a quiz creator, I want to choose between different scoring algorithms (All-or-Nothing, Proportional, or Strict) for multi-answer questions so that I can tailor the difficulty to the content.

**Why this priority**: Adds flexibility for different types of assessments.

**Independent Test**: Configure three different questions with the three scoring modes and verify the results match the expected logic for each.

**Acceptance Scenarios**:

1. **Given** a question set to "Strict" scoring, **When** I select one correct and one incorrect option, **Then** the incorrect selection should penalize the score.

---

### Edge Cases

- **No Options Selected**: What happens when the user tries to submit without selecting any options? (System should prevent submission or treat as 0).
- **All Options Selected**: How does the system handle a user selecting every possible option? (Handled correctly by "Strict" scoring mode).

## Requirements

### Functional Requirements

- **FR-001**: System MUST support questions with more than one correct option.
- **FR-002**: Users MUST be able to select multiple options before submitting their answer.
- **FR-003**: System MUST clearly indicate to the user when a question allows multiple selections.
- **FR-004**: System MUST store and validate all selected options against the defined correct answer set.
- **FR-005**: System MUST support at least three scoring modes:
    - **All-or-Nothing**: Full points only for perfect matches.
    - **Proportional**: Points awarded as a percentage of correct selections.
    - **Strict**: Points for correct selections minus penalties for incorrect ones.
- **FR-006**: Question definitions MUST allow specifying the scoring mode (defaulting to All-or-Nothing).

### Key Entities

- **MultiAnswerQuestion**: An extension of the Question entity that allows multiple values in its `correctIndices` field and a `scoringMode` attribute.
- **MultiAnswerResponse**: An extension of the Answer entity that stores an array of selected indices.

## Success Criteria

### Measurable Outcomes

- **SC-001**: Users can select and submit 2+ options for a single question without system errors.
- **SC-002**: Result summary correctly lists all selected options for multi-answer questions.
- **SC-003**: 100% of test cases for multi-answer scoring (full, partial, incorrect) pass.

## Assumptions

- We will reuse the existing question loading mechanism with schema updates.
- The CLI library supports multi-select (checkbox) style interaction.
- If not explicitly configured, questions default to single-answer behavior.
