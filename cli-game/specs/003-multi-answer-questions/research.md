# Research: Multi-Answer Questions

## Decision: CLI Interaction Library
- **Decision**: Use `@clack/prompts` multiselect component.
- **Rationale**: The project already uses `@clack/prompts`. It provides a `multiselect` helper that is ideal for checkbox-style multiple choice questions.
- **Alternatives Considered**: `inquirer` (rejected due to dependency bloat).

## Decision: Scoring Algorithms
- **Decision**: Implement three distinct strategies in the scoring library.
  1. **All-or-Nothing**: Score is 1 if selected indices perfectly match correct indices, 0 otherwise.
  2. **Proportional**: Score = (Count of Correct Selections) / (Count of Total Correct Options).
  3. **Strict**: Score = max(0, (Correct Selections - Incorrect Selections) / Total Correct Options).
- **Rationale**: Provides maximum flexibility as requested in the specification.
- **Alternatives Considered**: Simple binary scoring only (rejected as per spec requirement).

## Decision: Data Schema Updates
- **Decision**: Update `Question` schema to include optional `correctIndices` (array) and `scoringMode` (string enum).
- **Rationale**: Maintaining backward compatibility with `answerIndex` (single value) for existing single-choice questions.
