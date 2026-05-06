# Data Model: Spinners and Results Chart

## Entities

### ResultsChartData
Simple data structure used to generate the visual chart.

| Field | Type | Description |
|-------|------|-------------|
| correct | number | Count of correct answers. |
| incorrect | number | Count of incorrect answers. |
| total | number | Total number of questions. |

## UI States
- **Processing**: Active after answer selection, displays spinner.
- **Summary**: Final state, displays the Results Chart.
