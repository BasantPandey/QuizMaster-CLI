# Research: Spinners and Results Chart

## Decision: UI Components

### Spinner Implementation
- **Choice**: Use the built-in `@clack/prompts` spinner.
- **Rationale**: We already have `@clack/prompts` as a dependency. It provides a clean, consistent spinner that fits the existing UI style.
- **Implementation Detail**: Wrap the `processAnswer` logic (or a simulated delay) in a `p.spinner()` block in the CLI loop.

### Results Chart Implementation
- **Choice**: Custom ASCII Horizontal Bar Chart.
- **Rationale**: Avoids adding new dependencies (consistent with Technical Constraints). A simple horizontal bar using Unicode characters like `█` is sufficient for visualizing the Correct vs Incorrect ratio.
- **Alternatives Considered**: `chartscii` (rejected for adding dependency bloat).

## Decision: Technical Architecture
- **Location**:
  - The spinner logic will reside in `src/cli/prompts.ts`.
  - The chart rendering logic will reside in a new utility `src/cli/chart.ts`.
- **Logic**:
  - The chart will take the `score` and `total` from the `QuizSession` and return a formatted string.

## Decision: Performance & UX
- **Spinner Duration**: Fixed at 800ms.
- **Rationale**: Provides enough "weight" to the processing step without feeling sluggish.
