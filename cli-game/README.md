# QuizMaster CLI

A modern, interactive CLI quiz tool built with TypeScript and Node.js.

## Features
- **Interactive Prompts**: Clean terminal UI powered by `@clack/prompts`.
- **Data-Driven**: Questions are loaded from a customizable JSON file.
- **Real-time Feedback**: Get immediate feedback on your answers.
- **Detailed Summary**: See your final score and a breakdown of correct/incorrect answers.

## Prerequisites
- Node.js (LTS recommended)
- npm

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the quiz**:
   ```bash
   npm start
   ```

3. **Run tests**:
   ```bash
   npm test
   ```

## Customizing Questions
You can add or modify questions in `src/data/questions.json`.
The format is:
```json
{
  "id": "unique-id",
  "text": "The question text",
  "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
  "answerIndex": 1
}
```

## Tech Stack
- **Language**: TypeScript (Strict Mode)
- **Runtime**: Node.js (ESM)
- **CLI Framework**: `@clack/prompts`
- **Validation**: `zod`
- **Testing**: `vitest`
