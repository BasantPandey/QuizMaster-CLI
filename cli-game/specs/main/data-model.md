# Data Model: QuizMaster CLI

## Entities

### Question
Represents a single quiz question with options and a correct answer.

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier for the question. |
| text | string | The question text displayed to the user. |
| options | string[] | A list of possible answers. |
| answerIndex | number | The 0-based index of the correct answer in the options array. |

### QuizSession
Manages the lifecycle and state of a single quiz attempt.

| Field | Type | Description |
|-------|------|-------------|
| questions | Question[] | The list of questions for this session. |
| currentIdx | number | Index of the current question being asked. |
| score | number | Total number of correct answers. |
| answers | UserAnswer[] | History of user responses. |

### UserAnswer
| Field | Type | Description |
|-------|------|-------------|
| questionId | string | Reference to the Question. |
| givenIndex | number | The index selected by the user. |
| isCorrect | boolean | Whether the answer was correct. |

## Relationships
- A `QuizSession` contains many `Question`s.
- A `QuizSession` tracks many `UserAnswer`s (one per question).

## State Transitions
1. **Ready**: Questions loaded, `currentIdx` at 0.
2. **InProgress**: User is answering questions. `currentIdx` increments after each answer.
3. **Completed**: All questions answered. Final score calculated.
