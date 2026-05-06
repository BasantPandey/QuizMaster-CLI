# Quickstart: Multi-Answer Questions

## Setup
Ensure `src/data/questions.json` contains a question with `"type": "multiple"`.

## Test Scenarios

### Scenario 1: All-or-Nothing (Perfect)
- **Question**: "Select prime numbers: [2, 3, 4, 5]" (Mode: all-or-nothing)
- **Action**: Select [0, 1, 3]
- **Expected**: Score 1, "Correct!" feedback.

### Scenario 2: Proportional (Partial)
- **Question**: "Select colors: [Red, Blue, Cat]" (Mode: proportional)
- **Action**: Select [0] (Red)
- **Expected**: Score 0.5, "Partial Correct" feedback.

### Scenario 3: Strict (Guessing Penalty)
- **Question**: "Select even: [2, 4, 5]" (Mode: strict)
- **Action**: Select [0, 2] (Correct + Incorrect)
- **Expected**: Score 0 (1 correct - 1 incorrect), "Incorrect" feedback.
