# Data Model: Multi-Answer Questions

## Entities

### Question (Updated)
Extends existing question entity to support multiple correct answers.

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier. |
| text | string | The question text. |
| options | string[] | Array of possible answers. |
| type | 'single' \| 'multiple' | Defaults to 'single' if omitted. |
| answerIndex | number | Index of correct answer (for type: 'single'). |
| correctIndices | number[] | Indices of correct answers (for type: 'multiple'). |
| scoringMode | 'all-or-nothing' \| 'proportional' \| 'strict' | Defaults to 'all-or-nothing'. |

### Answer (Updated)
Extends existing answer entity to support multiple selections.

| Field | Type | Description |
|-------|------|-------------|
| questionId | string | Reference to the question. |
| givenIndex | number | Single selection (legacy support). |
| givenIndices | number[] | Multiple selections (for multi-answer). |
| isCorrect | boolean | Whether the answer meets the scoring criteria. |
| score | number | Numerical score awarded based on scoring mode. |
